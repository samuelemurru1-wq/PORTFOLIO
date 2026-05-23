#!/usr/bin/env python3
import json
import re
from pathlib import Path


IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif", ".svg"}


def natural_key(value):
    return [int(part) if part.isdigit() else part.lower() for part in re.split(r"(\d+)", value)]


def extract_json_array(js_text):
    marker = "window.PORTFOLIO_IMAGES ="
    start = js_text.find(marker)
    if start == -1:
        return []
    start = js_text.find("[", start)
    end = js_text.rfind("];")
    if start == -1 or end == -1:
        return []
    return json.loads(js_text[start : end + 1])


def read_existing_items(project_data_path):
    if not project_data_path.exists():
        return [], {}, {}

    items = extract_json_array(project_data_path.read_text(encoding="utf-8"))
    by_src = {item.get("src"): item for item in items if item.get("src")}
    text_by_project = {}

    for item in items:
        project = item.get("project")
        text = item.get("projectText")
        if project and text and project not in text_by_project:
            text_by_project[project] = text

    return items, by_src, text_by_project


def get_project_name(relative_path):
    parts = relative_path.parts
    if len(parts) >= 3 and parts[0] == "assets" and parts[1] == "images":
        return parts[2]
    return relative_path.parent.name or "Projects"


def get_photo_number(path):
    match = re.search(r"(\d+)(?=\.[^.]+$)", path.name)
    return str(int(match.group(1))) if match else ""


def make_title(project, path, number):
    stem = path.stem.replace("-", " ").replace("_", " ")
    if number:
        return f"{project} / project {number.zfill(3)}"
    return f"{project} / {stem}"


def make_item(image_path, public_root, existing_by_src, text_by_project):
    relative = image_path.relative_to(public_root)
    src = relative.as_posix()
    existing = existing_by_src.get(src)
    if existing:
        return existing

    project = get_project_name(relative)
    number = get_photo_number(image_path)

    return {
        "src": src,
        "project": project,
        "photoNumber": number,
        "title": make_title(project, image_path, number),
        "description": f"{project} / {number}" if number else project,
        "projectText": text_by_project.get(project, ""),
        "dominantColor": "#ffffff",
        "colorCategory": "white",
        "colorScores": {"white": 1},
    }


def write_project_data(path, items):
    content = (
        "// Generated from assets/images. Run `python3 update_project_data.py` after adding or removing project images.\n"
        "window.PORTFOLIO_IMAGES = "
        + json.dumps(items, indent=2, ensure_ascii=False)
        + ";\n"
    )
    path.write_text(content, encoding="utf-8")


def main():
    root = Path(__file__).resolve().parent
    public_root = root if root.name == "deploy-public" else root / "deploy-public"
    images_root = public_root / "assets" / "images"
    project_data_path = public_root / "project-data.js"

    if not images_root.exists():
        raise SystemExit(f"Missing image folder: {images_root}")

    _, existing_by_src, text_by_project = read_existing_items(project_data_path)
    image_paths = sorted(
        [path for path in images_root.rglob("*") if path.suffix.lower() in IMAGE_EXTENSIONS],
        key=lambda path: natural_key(path.relative_to(images_root).as_posix()),
    )

    items = [make_item(path, public_root, existing_by_src, text_by_project) for path in image_paths]
    write_project_data(project_data_path, items)

    root_project_data = root / "project-data.js"
    if root_project_data.exists():
        write_project_data(root_project_data, items)

    print(f"Updated {project_data_path.relative_to(root)}")
    print(f"Images found: {len(items)}")


if __name__ == "__main__":
    main()
