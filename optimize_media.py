#!/usr/bin/env python3
from __future__ import annotations

import os
import shutil
import subprocess
import sys
from pathlib import Path


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png"}
MAX_EDGE = 2000
JPEG_QUALITY = "82"


def find_convert() -> str:
    for candidate in ("magick", "convert", "/opt/ImageMagick/bin/convert"):
        path = shutil.which(candidate) if "/" not in candidate else candidate
        if path and Path(path).exists():
            return path
    raise SystemExit("ImageMagick non trovato: impossibile ottimizzare le immagini.")


def public_root() -> Path:
    root = Path(__file__).resolve().parent
    if root.name == "deploy-public":
        return root
    return root / "deploy-public"


def optimize_file(convert: str, path: Path) -> tuple[bool, int, int]:
    before = path.stat().st_size
    tmp = path.with_name(f".{path.name}.optimizing{path.suffix.lower()}")
    if tmp.exists():
        tmp.unlink()

    command = [
        convert,
        str(path),
        "-auto-orient",
        "-strip",
        "-resize",
        f"{MAX_EDGE}x{MAX_EDGE}>",
    ]

    if path.suffix.lower() in {".jpg", ".jpeg"}:
        command.extend(
            [
                "-sampling-factor",
                "4:2:0",
                "-interlace",
                "Plane",
                "-quality",
                JPEG_QUALITY,
            ]
        )

    command.append(str(tmp))

    try:
        subprocess.run(command, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)
    except subprocess.CalledProcessError as exc:
        if tmp.exists():
            tmp.unlink()
        message = exc.stderr.decode("utf-8", errors="ignore").strip()
        print(f"SKIP {path}: {message}", flush=True)
        return False, before, before

    after = tmp.stat().st_size
    if after <= 0 or after >= before:
        tmp.unlink()
        return False, before, before

    os.replace(tmp, path)
    return True, before, after


def main() -> None:
    root = public_root()
    images_dir = root / "assets" / "images"
    if not images_dir.exists():
        raise SystemExit(f"Cartella non trovata: {images_dir}")

    convert = find_convert()
    files = sorted(
        path
        for path in images_dir.rglob("*")
        if path.is_file() and path.suffix.lower() in IMAGE_EXTENSIONS
    )

    changed = 0
    before_total = 0
    after_total = 0

    for index, path in enumerate(files, start=1):
        optimized, before, after = optimize_file(convert, path)
        before_total += before
        after_total += after
        if optimized:
            changed += 1
            saved = (before - after) / 1024 / 1024
            print(f"[{index}/{len(files)}] OK {path.relative_to(root)} -{saved:.1f} MB", flush=True)
        else:
            print(f"[{index}/{len(files)}] OK {path.relative_to(root)} gia leggera", flush=True)

    saved_total = (before_total - after_total) / 1024 / 1024
    print(f"\nOttimizzate {changed} immagini. Risparmio totale: {saved_total:.1f} MB.", flush=True)


if __name__ == "__main__":
    main()
