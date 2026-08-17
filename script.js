// ─── HELPERS ───
const img = p => 'assets/' + p;

// ─── PROJECTS ───
const PROJECTS = [
  {
    id: '01',
    client: 'Visione Telaio',
    name: '"OUR ATTITUDE" x Uniqlo',
    area: 'Creative Direction & Graphic Design',
    year: '2024',
    mapX: 38, mapY: 18, mapZ: 22,
    description: 'UNIQLO and Visione Telaio tell the story of LifeWear product innovation: simple garments designed to improve everyday life. Visione Telaio celebrates Blocktech during the collective\'s first community ride, highlighting its functionality and style. During the Social Ride, Uniqlo presents its innovative Blocktech and the Airism cotton shirt, customized with Visione Telaio\'s design. The event concludes with a DJ set and a curated wine selection by Fischio in Piazzale degli Eroi. The location was brought to life with posters, flags, and graphics by Visione Telaio, creating a vibrant and engaging environment to celebrate style and innovation.',
    videos: [img('VISIONE TELAIO UNIQLO/Definitivo.mp4')],
    cover: img('VISIONE TELAIO UNIQLO/project-01.jpg'),
    images: [
      img('VISIONE TELAIO UNIQLO/project-01.jpg'),
      img('VISIONE TELAIO UNIQLO/project-02.jpg'),
      img('VISIONE TELAIO UNIQLO/project-03.jpg'),
      img('VISIONE TELAIO UNIQLO/project-04.jpg'),
      img('VISIONE TELAIO UNIQLO/project-05.jpg'),
      img('VISIONE TELAIO UNIQLO/project-06.jpg'),
      img('VISIONE TELAIO UNIQLO/project-07.jpg'),
      img('VISIONE TELAIO UNIQLO/project-08.jpg'),
      img('VISIONE TELAIO UNIQLO/project-09.jpg'),
      img('VISIONE TELAIO UNIQLO/project-010.jpg'),
      img('VISIONE TELAIO UNIQLO/project-021.JPG'),
      img('VISIONE TELAIO UNIQLO/project-023.JPG'),
      img('VISIONE TELAIO UNIQLO/project-035.jpeg'),
      img('VISIONE TELAIO UNIQLO/project-052.jpg'),
      img('VISIONE TELAIO UNIQLO/project-053.jpeg'),
      img('VISIONE TELAIO UNIQLO/project-055.jpg'),
      img('VISIONE TELAIO UNIQLO/project-068.jpeg'),
      img('VISIONE TELAIO UNIQLO/project-070.JPG'),
      img('VISIONE TELAIO UNIQLO/project-071.JPG'),
      img('VISIONE TELAIO UNIQLO/project-087.jpg'),
      img('VISIONE TELAIO UNIQLO/project-0101.jpg'),
      img('VISIONE TELAIO UNIQLO/project-0115.jpg'),
      img('VISIONE TELAIO UNIQLO/project-0116.jpg'),
      img('VISIONE TELAIO UNIQLO/project-0117.jpg'),
      img('VISIONE TELAIO UNIQLO/project-0118.jpg'),
      img('VISIONE TELAIO UNIQLO/project-0119.jpg'),
      img('VISIONE TELAIO UNIQLO/project-0120.jpg'),
      img('VISIONE TELAIO UNIQLO/project-0121.jpg'),
      img('VISIONE TELAIO UNIQLO/project-0122.jpg'),
      img('VISIONE TELAIO UNIQLO/project-0123.jpg'),
      img('VISIONE TELAIO UNIQLO/project-0124.jpg'),
    ]
  },
  {
    id: '02',
    client: 'Visione Telaio',
    name: 'CONTRO VENTO',
    area: 'Creative Direction & Graphic Design',
    year: '2025',
    mapX: 62, mapY: 18, mapZ: 58,
    description: 'In collaboration with Visione Telaio, Orchestra Marchetti, and C.P. Company, we produced a limited-edition jersey by reinterpreting a design originally created by Massimo Osti in the 1970s. The launch took place at Orchestra Marchetti\'s store in Bologna, where visitors received free posters and exclusive access to the new piece. The event then continued with a social ride through the hills of Bologna, culminating in a series of live concerts at Covo Club, one of the city\'s most iconic music venues.',
    cover: img('VISIONE TELAIO CP COMPANY/project-061.jpeg'),
    images: [
      img('VISIONE TELAIO CP COMPANY/project-061.jpeg'),
      img('VISIONE TELAIO CP COMPANY/project-057.jpeg'),
      img('VISIONE TELAIO CP COMPANY/project-062.jpeg'),
      img('VISIONE TELAIO CP COMPANY/project-059.jpeg'),
      img('VISIONE TELAIO CP COMPANY/project-060.jpeg'),
      img('VISIONE TELAIO CP COMPANY/project-063.jpeg'),
      img('VISIONE TELAIO CP COMPANY/project-064.jpeg'),
      img('VISIONE TELAIO CP COMPANY/project-065.webp'),
    ]
  },
  {
    id: '03',
    client: 'Visione Telaio',
    name: 'Archive Exposition',
    area: 'Applied Graphics',
    year: '2024',
    mapX: 30, mapY: 28, mapZ: 38,
    description: '',
    cover: img('VISIONE TELAIO SOTA/project-015.JPG'),
    images: [
      img('VISIONE TELAIO SOTA/project-015.JPG'),
      img('VISIONE TELAIO SOTA/project-016.JPG'),
      img('VISIONE TELAIO SOTA/project-017.JPG'),
      img('VISIONE TELAIO SOTA/project-018.JPG'),
      img('VISIONE TELAIO SOTA/project-020.JPG'),
      img('VISIONE TELAIO SOTA/project-025.JPG'),
      img('VISIONE TELAIO SOTA/project-034.JPG'),
      img('VISIONE TELAIO SOTA/project-042.JPG'),
      img('VISIONE TELAIO SOTA/project-043.JPG'),
      img('VISIONE TELAIO SOTA/project-044.JPG'),
      img('VISIONE TELAIO SOTA/project-047.JPG'),
      img('VISIONE TELAIO SOTA/project-050.JPG'),
      img('VISIONE TELAIO SOTA/project-069.jpg'),
      img('VISIONE TELAIO SOTA/project-072.JPG'),
    ]
  },
  {
    id: '04',
    client: 'Visione Telaio',
    name: 'Photoshoot',
    area: 'Creative Direction',
    year: '2024',
    mapX: 70, mapY: 82, mapZ: 30,
    description: '',
    cover: img('VISIONE TELAIO EDITORIALE/project-014.JPG'),
    images: [
      img('VISIONE TELAIO EDITORIALE/project-014.JPG'),
      img('VISIONE TELAIO EDITORIALE/project-019.JPG'),
      img('VISIONE TELAIO EDITORIALE/project-022.JPG'),
      img('VISIONE TELAIO EDITORIALE/project-024.JPG'),
      img('VISIONE TELAIO EDITORIALE/project-037.JPG'),
      img('VISIONE TELAIO EDITORIALE/project-046.jpeg'),
      img('VISIONE TELAIO EDITORIALE/project-048.JPG'),
      img('VISIONE TELAIO EDITORIALE/project-049.JPG'),
      img('VISIONE TELAIO EDITORIALE/project-088.jpg'),
    ]
  },
  {
    id: '05',
    client: 'Visione Telaio',
    name: 'Logo & Icon',
    area: 'Logo Design',
    year: '2023',
    mapX: 85, mapY: 46, mapZ: 15,
    description: 'Visione Telaio was born as a shared idea between Francesco and me, with the goal of creating a digital archive of his bicycle collection. In this initial phase, I focused on creative direction, developing a coherent and innovative visual identity for the project. Over time, our team expanded and, following the first exhibition at Sota, we felt the need to evolve Visione Telaio beyond a simple archive. It gradually transformed into a true cycling club, dedicated to building a strong and engaged community.',
    cover: img('VISIONE TELAIO/project-090.jpg'),
    images: [
      img('VISIONE TELAIO/project-090.jpg'),
      img('VISIONE TELAIO/project-091.jpg'),
      img('VISIONE TELAIO/project-092.jpg'),
      img('VISIONE TELAIO/project-093.jpg'),
      img('VISIONE TELAIO/project-094.jpg'),
    ]
  },
  {
    id: '06',
    client: 'RF_LL',
    name: 'LookBook',
    area: 'Editorial Design',
    year: '2025',
    mapX: 14, mapY: 78, mapZ: 48,
    description: 'The lookbook developed for the second chapter of SOTA, a Rome-based store, presents a collection designed by RF_LL Studio. The editorial project highlights the brand\'s workwear roots, emphasizing the intersection between utilitarian functionality and contemporary aesthetics. Particular attention was given to the object\'s materiality: the cover, printed on silver paper, conveys a refined yet industrial sensibility, while the elastic binding evokes the idea of a work in progress. Together, these choices reinforce the raw, process-oriented character at the core of the collection.',
    cover: img('LOOKBOOK RF_LL/project-026.jpeg'),
    images: [
      img('LOOKBOOK RF_LL/project-026.jpeg'),
      img('LOOKBOOK RF_LL/project-027.JPG'),
      img('LOOKBOOK RF_LL/project-028.JPG'),
      img('LOOKBOOK RF_LL/project-029.JPG'),
      img('LOOKBOOK RF_LL/project-030.JPG'),
      img('LOOKBOOK RF_LL/project-031.JPG'),
      img('LOOKBOOK RF_LL/project-032.JPG'),
      img('LOOKBOOK RF_LL/project-033.JPG'),
      img('LOOKBOOK RF_LL/project-056.jpeg'),
      img('LOOKBOOK RF_LL/project-058.jpeg'),
    ]
  },
  {
    id: '07',
    client: 'RF_LL',
    name: 'Chapter 2',
    area: 'Logo Design',
    year: '2024',
    mapX: 88, mapY: 22, mapZ: 34,
    description: 'When Renato asked me to design the logo for the second chapter of Refill Studio in collaboration with Sota, I drew inspiration from Japanese culture and the cotton flower, a key element of the collection made with denim, canvas, and French workwear cotton. The design blends rural Japanese aesthetics with influences from iconic denim brands. I also developed the visual assets, experimenting with different types of paper and transparency effects.',
    cover: img('LOGO DESIGN RF_LL CH2/project-0102.png'),
    videos: [img('LOGO DESIGN RF_LL CH2/rfll-logo-anim.mp4')],
    images: [
      img('LOGO DESIGN RF_LL CH2/project-0102.png'),
      img('LOGO DESIGN RF_LL CH2/project-095.jpg'),
      img('LOGO DESIGN RF_LL CH2/project-096.jpg'),
      img('LOGO DESIGN RF_LL CH2/project-097.jpg'),
      img('LOGO DESIGN RF_LL CH2/project-098.jpg'),
      img('LOGO DESIGN RF_LL CH2/project-099.jpg'),
      img('LOGO DESIGN RF_LL CH2/project-0112.jpg'),
      img('LOGO DESIGN RF_LL CH2/project-0113.jpeg'),
      img('LOGO DESIGN RF_LL CH2/project-066.webp'),
    ]
  },
  {
    id: '08',
    client: 'Luc Lequel',
    name: 'Visual Manual',
    area: 'Visual Identity',
    year: '2025',
    mapX: 80, mapY: 62, mapZ: 78,
    description: 'Luc Lequel entrusted me with the development of the brand\'s visual identity, while keeping the existing logo unchanged. The chosen approach is clean, minimal, and brutalist, with strong visual impact built through a carefully crafted design system. The aesthetic is defined by the exclusive use of black-and-white photography, reinforcing a sense of timeless elegance. Social media layouts are clear, structured, and direct, ensuring a solid visual presence. Additionally, the use of transparencies, grain, and visual distortions in the imagery adds depth and texture, creating a raw yet refined visual language aligned with the brand\'s identity.',
    cover: img('LUC LEQUEL/project-074.jpg'),
    videos: [img('LUC LEQUEL/luc-lequel.mp4')],
    images: [
      img('LUC LEQUEL/project-074.jpg'),
      img('LUC LEQUEL/project-075.jpg'),
      img('LUC LEQUEL/project-076.jpg'),
      img('LUC LEQUEL/project-077.jpg'),
      img('LUC LEQUEL/project-078.jpg'),
      img('LUC LEQUEL/project-079.jpg'),
      img('LUC LEQUEL/project-080.jpg'),
      img('LUC LEQUEL/project-081.jpg'),
      img('LUC LEQUEL/project-082.jpg'),
      img('LUC LEQUEL/project-083.jpg'),
      img('LUC LEQUEL/project-084.jpg'),
      img('LUC LEQUEL/project-085.jpg'),
      img('LUC LEQUEL/project-086.jpg'),
    ]
  },
  {
    id: '09',
    client: 'TATO',
    name: 'Debut Collection',
    area: 'Web Design & Logo Design',
    year: '2026',
    mapX: 88, mapY: 54, mapZ: 85,
    description: 'TATO is an independent fashion label based in Rome, founded with the intention of building a strong visual language around a minimal and precise aesthetic. The brand operates through seasonal drops, combining garment design with a coherent communication system across digital and print. The work on TATO focused on developing the brand\'s digital presence from the overall identity system to the website design and art direction of the collection imagery. The site was conceived as an extension of the garments themselves: a clean, editorial environment that lets the clothes speak without distraction.',
    link: { text: '↳ View site', url: 'https://tatorm.com/' },
    videos: [img('TATO/tato-video.mp4')],
    cover: img('TATO/POST 1.JPG'),
    images: [
      img('TATO/POST 1.JPG'),
      img('TATO/POST 2.JPG'),
      img('TATO/POST 3.JPG'),
      img('TATO/POST 4.JPG'),
      img('TATO/POST 5.JPG'),
      img('TATO/POST 6.JPG'),
      img('TATO/POST 7.JPG'),
      img('TATO/POST 9.JPG'),
      img('TATO/logo tato.svg'),
      img('TATO/LOGO TYPO TATO.svg'),
    ]
  },
  {
    id: '14',
    client: 'Personal Project',
    name: 'ARCHIVIO ROMANESE',
    area: 'Web Design & Photography',
    year: '2026',
    mapX: 48, mapY: 60, mapZ: 35,
    description: 'Archivio Romanese is a project cataloguing the photographic memory of Romana, a municipality in the province of Sassari with fewer than five hundred inhabitants. Each photograph enters the archive with a record: subject, inscriptions, conservation status, provenance where known. Village football team, family photographs, celebrations, countryside, shops that no longer exist. Material that no institution records, but that continues to circulate in the drawers and albums of those who preserve it. The archive grows through donation. Anyone who holds polaroids, prints or negatives connected to Romana can reach the archive directly for a cataloguing record.',
    link: { text: '↳ View site', url: 'https://archivioromanese.com/' },
    mapVideo: img('ARCHIVIO ROMANESE/archivio-screen.mp4'),
    videos: [
      img('ARCHIVIO ROMANESE/archivio-video.mp4'),
      img('ARCHIVIO ROMANESE/archivio-screen.mp4'),
    ],
    cover: img('ARCHIVIO ROMANESE/POSTER ROMAENESE.jpg'),
    images: [
      img('ARCHIVIO ROMANESE/POSTER ROMAENESE.jpg'),
      img('ARCHIVIO ROMANESE/IMG_8585.PNG'),
      img('ARCHIVIO ROMANESE/IMG_8587.PNG'),
      img('ARCHIVIO ROMANESE/Screenshot 2026-07-31 alle 14.46.24.png'),
      img('ARCHIVIO ROMANESE/Screenshot 2026-07-31 alle 14.46.38.png'),
      img('ARCHIVIO ROMANESE/Screenshot 2026-07-31 alle 14.47.38.png'),
    ]
  },
  {
    id: '10',
    client: 'Carboni',
    name: 'Logo',
    area: 'Logo Design',
    year: '2025',
    mapX: 22, mapY: 80, mapZ: 56,
    description: 'Carboni is an Italian high-end jewelry brand founded by goldsmith and gemologist Carlotta Carboni, with the aim of combining traditional craftsmanship with modern design and natural materials. Each piece is handmade in Italy and made to order, embracing a sustainable and exclusive approach. The visual identity draws inspiration from the technical and material language of high jewelry — from the precision of laboratory sketches and metallurgical studies to the microscopic observation of gemstones and alloys. At the core of the concept lies the geometry that naturally forms within precious stones: crystalline structures, faceting patterns, and internal symmetries become a visual metaphor for craftsmanship, control, and complexity.',
    cover: img('CARBONI/project-038.jpg'),
    videos: [img('CARBONI/carboni-logo-anim.mp4')],
    images: [
      img('CARBONI/project-038.jpg'),
      img('CARBONI/project-045.jpeg'),
      img('CARBONI/project-054.jpg'),
      img('CARBONI/PORTFOLIO NUOVO copia.jpg'),
      img('CARBONI/2013-01-22-sugar-3.jpg'),
      img('CARBONI/Screenshot 2026-05-23 alle 18.56.36.png'),
    ]
  },
  {
    id: '11',
    client: 'Atelier Corsa',
    name: 'Logo',
    area: 'Logo Design',
    year: '2026',
    mapX: 65, mapY: 70, mapZ: 82,
    description: '',
    cover: img('ATELIER CORSA/project-012.jpg'),
    images: [
      img('ATELIER CORSA/project-073.jpg'),
      img('ATELIER CORSA/project-0104.jpg'),
      img('ATELIER CORSA/project-012.jpg'),
      img('ATELIER CORSA/project-013.jpg'),
      img('ATELIER CORSA/project-0114.jpg'),
    ]
  },
  {
    id: '12',
    client: 'Stupido Studio',
    name: 'HOLY CITY',
    area: 'Editorial Design',
    year: '2026',
    mapX: 22, mapY: 50, mapZ: 88,
    description: '',
    cover: img('HOLY CITY/Foto scan holy city/Foto scan holy city.jpg'),
    images: [
      img('HOLY CITY/Foto scan holy city/Foto scan holy city.jpg'),
      img('HOLY CITY/Foto scan holy city/Foto scan holy city_5.jpg'),
      img('HOLY CITY/Foto scan holy city/Foto scan holy city_6.jpg'),
      img('HOLY CITY/Foto scan holy city/Foto scan holy city_7.jpg'),
      img('HOLY CITY/Foto scan holy city/Foto scan holy city_8.jpg'),
      img('HOLY CITY/Foto scan holy city/Foto scan holy city_11.jpg'),
      img('HOLY CITY/Foto scan holy city/Foto scan holy city_12.jpg'),
      img('HOLY CITY/Foto scan holy city/Foto scan holy city_13.jpg'),
      img('HOLY CITY/Foto scan holy city/Foto scan holy city_14.jpg'),
    ]
  },
  {
    id: '13',
    client: 'Adidas & One Block Down',
    name: 'SONO PAZZO DI TE',
    area: 'Applied Graphics',
    year: '2024',
    mapX: 68, mapY: 32, mapZ: 46,
    description: '',
    cover: img('ADIDAS OBD SCIARPE/project-0106.jpg'),
    images: [
      img('ADIDAS OBD SCIARPE/project-0106.jpg'),
      img('ADIDAS OBD SCIARPE/project-0107.jpg'),
      img('ADIDAS OBD SCIARPE/project-0108.jpg'),
      img('ADIDAS OBD SCIARPE/project-0109.jpg'),
      img('ADIDAS OBD SCIARPE/project-0110.jpg'),
      img('ADIDAS OBD SCIARPE/project-0111.jpg'),
    ]
  },
];

// ─── INDEX IMAGES (flat list — 2-3 per project) ───
const INDEX_IMAGES = [];
const indexPicks = {
  '01': ['project-01.jpg', 'project-04.jpg', 'project-07.jpg'],
  '02': ['project-061.jpeg', 'project-057.jpeg', 'project-062.jpeg'],
  '03': ['project-015.JPG', 'project-025.JPG', 'project-042.JPG'],
  '04': ['project-014.JPG', 'project-022.JPG', 'project-046.jpeg'],
  '05': ['project-090.jpg', 'project-092.jpg', 'project-094.jpg'],
  '06': ['project-026.jpeg', 'project-030.JPG', 'project-032.JPG'],
  '07': ['project-0102.png', 'project-095.jpg', 'project-098.jpg'],
  '08': ['project-074.jpg', 'project-077.jpg', 'project-082.jpg'],
  '09': ['POST 1.JPG', 'POST 4.JPG'],
  '10': ['project-038.jpg', 'project-045.jpeg'],
  '11': ['project-012.jpg', 'project-073.jpg', 'project-0104.jpg'],
  '12': ['Foto scan holy city/Foto scan holy city.jpg', 'Foto scan holy city/Foto scan holy city_5.jpg', 'Foto scan holy city/Foto scan holy city_11.jpg'],
  '13': ['project-0106.jpg', 'project-0109.jpg'],
  '14': ['POSTER ROMAENESE.jpg', 'Screenshot 2026-07-31 alle 14.46.38.png', 'IMG_8585.PNG'],
};

const folderMap = {
  '01': 'VISIONE TELAIO UNIQLO',
  '02': 'VISIONE TELAIO CP COMPANY',
  '03': 'VISIONE TELAIO SOTA',
  '04': 'VISIONE TELAIO EDITORIALE',
  '05': 'VISIONE TELAIO',
  '06': 'LOOKBOOK RF_LL',
  '07': 'LOGO DESIGN RF_LL CH2',
  '08': 'LUC LEQUEL',
  '09': 'TATO',
  '10': 'CARBONI',
  '11': 'ATELIER CORSA',
  '12': 'HOLY CITY',
  '13': 'ADIDAS OBD SCIARPE',
  '14': 'ARCHIVIO ROMANESE',
};

let globalNum = 1;
PROJECTS.forEach(p => {
  const files = indexPicks[p.id] || [];
  files.forEach(file => {
    INDEX_IMAGES.push({
      num: globalNum++,
      ref: p.id,
      label: p.client + (p.name !== '—' ? ' ' + p.name : ''),
      area: p.area.split(' & ')[0],
      year: p.year,
      src: 'assets/' + folderMap[p.id] + '/' + file,
    });
  });
});
const TOTAL = INDEX_IMAGES.length;
INDEX_IMAGES.forEach(e => { e.total = TOTAL; });

// ─── STATE ───
let currentView = 'index';
let infoOpen = false;
let darkMode = false;
let lastMouse = { clientX: 0, clientY: 0 };
let activeFilter = null;

// ─── DOM ───
const siteHeader   = document.getElementById('site-header');
const siteMain     = document.getElementById('site-main');
const moreBtn      = document.getElementById('more-btn');
const infoPanel    = document.getElementById('info-panel');
const metaDisplay  = document.getElementById('meta-display');
const footerClock  = document.getElementById('footer-clock');
const indexStrip   = document.getElementById('index-strip');
const indexStage   = document.querySelector('.index-stage');
const mapDots      = document.getElementById('map-dots');
const listBody     = document.getElementById('list-body');
const navItems     = document.querySelectorAll('.view-nav__item');
const lightbox     = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightbox-img');

// ─── INIT ───
function init() {
  buildList();
  buildMap();
  buildIndex();
  startClock();
  triggerLoadAnimation();

  initFilterPanel();
  moreBtn.addEventListener('click', toggleInfo);
  navItems.forEach(btn => btn.addEventListener('click', () => switchView(btn.dataset.view)));
  document.addEventListener('keydown', onKey);
  document.addEventListener('mousemove', onMouseMove);
  document.getElementById('lightbox-close').addEventListener('click', e => { e.stopPropagation(); closeLightbox(); });
  lightbox.addEventListener('click', e => {
    if (lightboxImages.length <= 1) { closeLightbox(); return; }
    e.clientX < window.innerWidth / 2 ? lightboxNav(-1) : lightboxNav(1);
  });
  initWorksLinks();
  syncListColumns();
  window.addEventListener('resize', () => { updateMeta(); syncListColumns(); });
  indexStage.addEventListener('wheel', e => {
    e.preventDefault();
    indexStage.scrollLeft += (e.deltaY + e.deltaX) * 0.5;
  }, { passive: false });

  // Mobile: sia swipe orizzontale che verticale scorrono l'archive
  let _atX = 0, _atY = 0;
  indexStage.addEventListener('touchstart', e => {
    _atX = e.touches[0].clientX;
    _atY = e.touches[0].clientY;
  }, { passive: true });
  indexStage.addEventListener('touchmove', e => {
    const dx = _atX - e.touches[0].clientX;
    const dy = _atY - e.touches[0].clientY;
    _atX = e.touches[0].clientX;
    _atY = e.touches[0].clientY;
    e.preventDefault();
    indexStage.scrollLeft += (dx + dy) * 2.8;
  }, { passive: false });

  updateMeta();
}

// ─── SYNC LIST COL1 WITH "INDEX" NAV BUTTON ───
function syncListColumns() {
  const indexBtn = document.querySelector('.view-nav__item[data-view="list"]');
  const table = document.querySelector('.list-table');
  if (!indexBtn || !table) return;
  const w = indexBtn.getBoundingClientRect().left - table.getBoundingClientRect().left;
  if (w > 0) document.documentElement.style.setProperty('--list-col1-w', w + 'px');
}

// ─── LOAD ANIMATION ───
function triggerLoadAnimation() {
  document.querySelectorAll('[data-anim]').forEach(el => {
    requestAnimationFrame(() => el.classList.add('loaded'));
  });
}


// ─── SELECTED WORKS LINKS ───
function initWorksLinks() {
  document.querySelectorAll('.works-item').forEach(btn => {
    btn.addEventListener('click', () => {
      if (infoOpen) toggleInfo();
      switchView('list');
      setTimeout(() => highlightListRow(btn.dataset.id), 120);
    });
  });
}

// ─── MORE PANEL ───
function toggleInfo() {
  infoOpen = !infoOpen;
  infoPanel.classList.toggle('open', infoOpen);
  moreBtn.textContent = infoOpen ? 'Less' : 'More';
}

// ─── VIEW SWITCHING ───
function switchView(name) {
  if (name === currentView) return;

  const outEl = document.getElementById('view-' + currentView);
  const inEl  = document.getElementById('view-' + name);

  if (currentView === 'map') { _hideMapPreview(); _hideDotPopup(); }
  navItems.forEach(btn => btn.classList.toggle('active', btn.dataset.view === name));
  currentView = name;

  // Switch view content instantly
  outEl.classList.remove('view--active');
  inEl.classList.add('view--active');
  if (name === 'map') animateMapDots();

  // Reset HUD bars to hidden (instant — no transition on base state)
  document.querySelectorAll('[data-anim]').forEach(el => el.classList.remove('loaded'));

  // Re-animate bars in like initial load
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.querySelectorAll('[data-anim]').forEach(el => el.classList.add('loaded'));
    });
  });
}

// ─── MOUSE META ───
function onMouseMove(e) {
  lastMouse = e;
  updateMeta();
}
function updateMeta() {
  const isMobile = window.innerWidth <= 640;
  if (isMobile) {
    metaDisplay.textContent = `${window.innerWidth}×${window.innerHeight}`;
  } else {
    const x = Math.round(lastMouse.clientX || 0);
    const y = Math.round(lastMouse.clientY || 0);
    metaDisplay.textContent = `${window.innerWidth}×${window.innerHeight} , X: ${x}px, Y: ${y}px`;
  }
}

// ─── CLOCK ───
function startClock() {
  function tick() {
    const now  = new Date();
    const time = now.toLocaleTimeString('it-IT', {
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      timeZone: 'Europe/Rome'
    });
    footerClock.textContent = time + ' UTC+2 Rome';
  }
  tick();
  setInterval(tick, 1000);
}

// ─── INDEX: STRIP ───
function buildIndex() {
  let num = 1;

  const _maxYr = y => parseInt(y.toString().split(/[–\-]/).pop());
  const _sorted = [...PROJECTS].sort((a, b) => _maxYr(b.year) - _maxYr(a.year));
  const _idToNum = {};
  _sorted.forEach((p, i) => { _idToNum[p.id] = String(i + 1).padStart(2, '0'); });

  PROJECTS.forEach(p => {
    const area = p.area.split(' & ')[0];
    const videos = p.videos || [];
    let isFirst = true;

    function addCaption(item) {
      if (!isFirst) return;
      const cap = document.createElement('div');
      cap.className = 'index-caption';
      cap.innerHTML =
        `<div>[${_idToNum[p.id]}]</div>` +
        `<div>${p.client}</div>` +
        `<div>${area}</div>` +
        `<div>${p.year}</div>`;
      item.appendChild(cap);
      isFirst = false;
    }

    videos.forEach(src => {
      const item = document.createElement('div');
      item.className = 'index-item';
      item.dataset.projectId = p.id;
      const vid = document.createElement('video');
      vid.src = src;
      vid.preload = 'metadata';
      vid.loop = true;
      vid.muted = true;
      vid.setAttribute('playsinline', '');
      vid.className = 'index-video';
      addCaption(item);
      item.appendChild(vid);
      indexStrip.appendChild(item);
    });

    const gifs = p.images.filter(src => src.toLowerCase().endsWith('.gif'));
    const pickedImgs = (indexPicks[p.id] || [])
      .map(f => 'assets/' + folderMap[p.id] + '/' + f)
      .filter(src => !src.toLowerCase().endsWith('.gif'));
    const picks = [...gifs, ...pickedImgs];
    picks.forEach((src, idx) => {
      const item = document.createElement('div');
      item.className = 'index-item';
      item.dataset.projectId = p.id;
      const el = document.createElement('img');
      el.src = src;
      el.alt = '';
      el.loading = num <= 5 ? 'eager' : 'lazy';
      el.style.cursor = 'zoom-in';
      el.addEventListener('click', () => openLightbox(src, picks, idx));
      addCaption(item);
      item.appendChild(el);
      indexStrip.appendChild(item);
      num++;
    });
  });

  const vidObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const v = entry.target;
      if (entry.isIntersecting) {
        if (v.readyState === 0) v.load();
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, { root: indexStage, rootMargin: '800px' });

  indexStrip.querySelectorAll('.index-video').forEach(v => vidObserver.observe(v));
}

// ─── LIGHTBOX ───
let lightboxImages = [];
let lightboxIndex  = 0;

function openLightbox(src, images, index) {
  lightboxImages = images || [src];
  lightboxIndex  = index !== undefined ? index : 0;
  lightboxImg.src = lightboxImages[lightboxIndex];
  lightbox.classList.add('open');
}
function closeLightbox() { lightbox.classList.remove('open'); }
function lightboxNav(dir) {
  if (lightboxImages.length <= 1) return;
  lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
  lightboxImg.src = lightboxImages[lightboxIndex];
}

// ─── KEYBOARD ───
function onKey(e) {
  if (e.key === 'Escape') { closeLightbox(); return; }
  if (lightbox.classList.contains('open')) {
    if (e.key === 'ArrowRight') { lightboxNav(1);  return; }
    if (e.key === 'ArrowLeft')  { lightboxNav(-1); return; }
    return;
  }
  if (currentView !== 'index') return;
  const step = indexStage.clientWidth * 0.6;
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   indexStage.scrollBy({ left: -step, behavior: 'smooth' });
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown')  indexStage.scrollBy({ left:  step, behavior: 'smooth' });
}

// ─── MAP 3D ───
let _mapPreviewEl = null;

let _mapDotPopup = null;
function _getDotPopup() {
  if (!_mapDotPopup) {
    _mapDotPopup = document.createElement('div');
    _mapDotPopup.className = 'map-dot-popup';
    document.body.appendChild(_mapDotPopup);
  }
  return _mapDotPopup;
}
function _showDotPopup(label, e) {
  const el = _getDotPopup();
  el.textContent = label;
  el.style.left = (e.clientX + 14) + 'px';
  el.style.top  = (e.clientY - 32) + 'px';
  el.classList.add('visible');
}
function _hideDotPopup() {
  _getDotPopup().classList.remove('visible');
}

function _getPreviewEl() {
  if (!_mapPreviewEl) {
    _mapPreviewEl = document.createElement('div');
    _mapPreviewEl.className = 'map-3d-preview';
    const img = document.createElement('img');
    img.alt = '';
    _mapPreviewEl.appendChild(img);
    document.body.appendChild(_mapPreviewEl);
  }
  return _mapPreviewEl;
}

function _showMapPreview(p, e) {
  const prev = _getPreviewEl();
  const imgs = p.images.filter(s => !/\.svg$/i.test(s));
  if (!imgs.length) return;
  prev.querySelector('img').src = imgs[Math.floor(Math.random() * imgs.length)];
  prev.style.display = 'block';
  _moveMapPreview(e);
}

function _hideMapPreview() {
  _getPreviewEl().style.display = 'none';
}

function _moveMapPreview(e) {
  const prev = _getPreviewEl();
  if (prev.style.display === 'none') return;
  const x = e.clientX + 20;
  const y = Math.max(10, e.clientY - 90);
  prev.style.left = x + 'px';
  prev.style.top  = y + 'px';
}

function buildMap() {
  const stage = document.querySelector('.map-stage');
  stage.innerHTML = '';

  // Asymmetric axes: wide viewport → X larger, height constrained → Y smaller
  const Lx = stage.clientWidth  * 0.42;
  const Ly = stage.clientHeight * 0.34;
  const Lz = Math.max(Lx, Ly);

  const scene = document.createElement('div');
  scene.className = 'map-3d-scene';
  stage.appendChild(scene);

  const mk = cls => {
    const d = document.createElement('div');
    if (cls) d.className = cls;
    d.style.position = 'absolute';
    d.style.left = '0';
    d.style.top = '0';
    return d;
  };

  // Billboard registries — transforms recalculated on every rotation
  const xyBB = []; // directly in scene: undo rotateX(rx)·rotateY(ry)
  const zBB  = []; // inside zWrap: also undo zWrap's rotateX(90)

  // ── X axis ──
  const axX = mk('map-axis-line');
  axX.style.width = Lx * 2 + 'px'; axX.style.height = '1px';
  axX.style.transform = `translate3d(${-Lx}px, 0, 0)`;
  scene.appendChild(axX);

  // ── Y axis ──
  const axY = mk('map-axis-line');
  axY.style.width = '1px'; axY.style.height = Ly * 2 + 'px';
  axY.style.transform = `translate3d(0, ${-Ly}px, 0)`;
  scene.appendChild(axY);

  // ── Z axis (zWrap: local Y → world Z via rotateX(90deg)) ──
  const zWrap = document.createElement('div');
  zWrap.style.cssText = 'position:absolute;left:0;top:0;width:0;height:0;transform-style:preserve-3d;transform:rotateX(90deg)';
  scene.appendChild(zWrap);

  const axZ = mk('map-axis-line');
  axZ.style.width = '1px'; axZ.style.height = Lz * 2 + 'px';
  axZ.style.transform = `translate3d(0, ${-Lz}px, 0)`;
  zWrap.appendChild(axZ);

  // ── XY axis labels ──
  [
    ['Visual Research', -Lx, 0, 0, '-50%', '-50%'],
    ['Brand Identity',   Lx, 0, 0, '-50%', '-50%'],
    ['Art Direction',    0, -Ly, 0, '-50%', '-50%'],
    ['Editorial',        0,  Ly, 0, '-50%', '-50%'],
  ].forEach(([text, x, y, z, tx, ty]) => {
    const lbl = mk('map-axis-label');
    lbl.textContent = text;
    scene.appendChild(lbl);
    xyBB.push({el: lbl, x, y, z, tx, ty});
  });

  // ── Z axis labels (inside zWrap: local Y+ → world Z+ = toward viewer = 2026) ──
  [
    ['2026',  0,  Lz, 0, '-50%', '0%'],
    ['2023',  0, -Lz, 0, '-50%', '-100%'],
  ].forEach(([text, x, y, z, tx, ty]) => {
    const lbl = mk('map-axis-label');
    lbl.textContent = text;
    zWrap.appendChild(lbl);
    zBB.push({el: lbl, x, y, z, tx, ty});
  });

  // ── Project dots + 3D pinned photos ──
  const _maxYr = y => parseInt(y.toString().split(/[–\-]/).pop());
  const _sortedP = [...PROJECTS].sort((a, b) => _maxYr(b.year) - _maxYr(a.year));
  _sortedP.forEach((p, i) => {
    const num = String(i + 1).padStart(2, '0');
    const x = (p.mapX / 100 * 2 - 1) * Lx * 0.84;
    const y = (p.mapY / 100 * 2 - 1) * Ly * 0.84;
    const z = ((p.mapZ ?? 50) / 100 * 2 - 1) * Lz * 0.84;

    let photo3d = null;

    const animated = [
      ...(p.videos || []),
      ...p.images.filter(s => /\.gif$/i.test(s)),
    ];
    const allMedia = animated.length
      ? animated
      : p.images.filter(s => !/\.svg$/i.test(s));

    const dot = document.createElement('button');
    dot.className = 'map-dot-3d';
    dot.textContent = num;
    dot.title = p.client + (p.name !== '—' ? ' – ' + p.name : '');
    dot.dataset.dotIndex = i;
    dot.dataset.projectId = p.id;

    dot.addEventListener('mouseenter', e => {
      hovering = true;
      const label = p.client + (p.name !== '—' ? ' – ' + p.name : '');
      _showDotPopup(label, e);
    });
    dot.addEventListener('mouseleave', () => {
      hovering = false;
      _hideDotPopup();
    });

    const closeDotPhoto = () => {
      if (!photo3d) return;
      const idx = xyBB.findIndex(b => b.el === photo3d);
      if (idx !== -1) xyBB.splice(idx, 1);
      photo3d.remove(); photo3d = null;
      dot.style.opacity = '';
      dot.style.pointerEvents = '';
    };

    dot.addEventListener('click', e => {
      e.stopPropagation();
      if (photo3d) {
        closeDotPhoto();
      } else {
        if (!allMedia.length) return;
        const src = p.mapVideo || allMedia[Math.floor(Math.random() * allMedia.length)];
        const isVideo = /\.(mp4|mov|webm)$/i.test(src);
        const mediaEl = isVideo ? document.createElement('video') : document.createElement('img');
        mediaEl.className = 'map-photo-3d';
        if (isVideo) {
          mediaEl.autoplay = true; mediaEl.loop = true;
          mediaEl.muted = true;   mediaEl.playsInline = true;
        }
        mediaEl.src = src;
        mediaEl.addEventListener('click', e => { e.stopPropagation(); closeDotPhoto(); });
        scene.appendChild(mediaEl);
        xyBB.push({el: mediaEl, x, y, z, tx: '-50%', ty: '-100%'});
        applyRot();
        photo3d = mediaEl;
        dot.style.opacity = '0';
        dot.style.pointerEvents = 'none';
      }
    });
    scene.appendChild(dot);
    xyBB.push({el: dot, x, y, z, tx: '-50%', ty: '-50%'});
  });

  // ── Rotation state ──
  let dragging = false, hovering = false, lx = 0, ly = 0;
  let rotX = 0, rotY = 0;

  const applyRot = () => {
    scene.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;

    // XY billboards: inverse of rotateX(rx)·rotateY(ry) = rotateY(-ry)·rotateX(-rx)
    xyBB.forEach(({el, x, y, z, tx, ty}) => {
      el.style.transform = `translate3d(${x}px,${y}px,${z}px) rotateY(${-rotY}deg) rotateX(${-rotX}deg) translateX(${tx}) translateY(${ty})`;
    });

    // Z billboards: also undo zWrap's rotateX(90)
    // inverse of rotateX(rx)·rotateY(ry)·rotateX(90) = rotateX(-90)·rotateY(-ry)·rotateX(-rx)
    zBB.forEach(({el, x, y, z, tx, ty}) => {
      el.style.transform = `translate3d(${x}px,${y}px,${z}px) rotateX(-90deg) rotateY(${-rotY}deg) rotateX(${-rotX}deg) translateX(${tx}) translateY(${ty})`;
    });
  };
  applyRot();

  // ── Drag ──
  stage.addEventListener('mousedown', e => {
    dragging = true; lx = e.clientX; ly = e.clientY;
    stage.classList.add('dragging');
    e.preventDefault();
  });
  stage.addEventListener('touchstart', e => {
    dragging = true; lx = e.touches[0].clientX; ly = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('mousemove', e => {
    if (!dragging) { _moveMapPreview(e); return; }
    rotY += (e.clientX - lx) * 0.38;
    rotX -= (e.clientY - ly) * 0.38;
    rotX = Math.max(-85, Math.min(85, rotX));
    lx = e.clientX; ly = e.clientY;
    applyRot();
  });
  window.addEventListener('touchmove', e => {
    if (!dragging) return;
    rotY += (e.touches[0].clientX - lx) * 0.38;
    rotX -= (e.touches[0].clientY - ly) * 0.38;
    rotX = Math.max(-85, Math.min(85, rotX));
    lx = e.touches[0].clientX; ly = e.touches[0].clientY;
    applyRot();
  }, { passive: true });

  window.addEventListener('mouseup', () => { dragging = false; stage.classList.remove('dragging'); });
  window.addEventListener('touchend', () => { dragging = false; });

  // ── Auto-rotation ──
  const tick = () => {
    if (!dragging && !hovering) {
      rotY += 0.02;
      applyRot();
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function animateMapDots() {
  document.querySelectorAll('.map-dot-3d').forEach(dot => {
    const i = parseInt(dot.dataset.dotIndex) || 0;
    dot.style.animation = 'none';
    dot.offsetHeight; // force reflow to restart animation
    dot.style.animationName = 'map-dot-in';
    dot.style.animationDuration = '0.4s';
    dot.style.animationDelay = `${i * 0.08}s`;
    dot.style.animationTimingFunction = 'ease-out';
    dot.style.animationFillMode = 'backwards';
  });
}

// ─── LIST VIEW ───
function buildList() {
  const maxYear = y => parseInt(y.toString().split(/[–\-]/).pop());
  const sorted = [...PROJECTS].sort((a, b) => maxYear(b.year) - maxYear(a.year));
  sorted.forEach((p, i) => {
    const num = String(i + 1).padStart(2, '0');
    const item = document.createElement('div');
    item.className = 'project-item';
    item.dataset.id = p.id;

    const header = document.createElement('div');
    header.className = 'project-header';
    header.innerHTML =
      `<span>[${num}]</span><span>${p.name}</span>` +
      `<span>${p.client}</span><span>${p.area}</span><span>${p.year}</span>`;

    const thumbsOuter = document.createElement('div');
    thumbsOuter.className = 'project-thumbs';
    const thumbsInner = document.createElement('div');
    thumbsInner.className = 'project-thumbs-inner';

    // Testo come primo elemento del flex row — scorre insieme alle foto
    const textWrap = document.createElement('div');
    textWrap.className = 'project-text-wrap';

    if (p.description) {
      const descEl = document.createElement('div');
      descEl.className = 'project-text';
      descEl.textContent = p.description;
      textWrap.appendChild(descEl);
    }

    const metaFields = [];
    if (p.role) metaFields.push(['Role', p.role]);
    metaFields.push(['Categories', p.area]);
    metaFields.push(['Client', p.client]);
    metaFields.push(['Year', p.year]);

    metaFields.forEach(([label, value]) => {
      const sec = document.createElement('div');
      sec.className = 'project-meta-section';
      sec.innerHTML = `<div class="project-meta-label">${label}</div><div class="project-meta-value">${value}</div>`;
      textWrap.appendChild(sec);
    });

    if (p.link) {
      const linkEl = document.createElement('a');
      linkEl.className = 'project-link';
      linkEl.href = p.link.url;
      linkEl.textContent = p.link.text;
      linkEl.target = '_blank';
      linkEl.rel = 'noopener';
      textWrap.appendChild(linkEl);
    }
    thumbsInner.appendChild(textWrap);

    // Media in separate row — on mobile this becomes a horizontal strip below the text
    const thumbsRow = document.createElement('div');
    thumbsRow.className = 'project-thumb-row';

    (p.videos || []).forEach(src => {
      const vid = document.createElement('video');
      vid.src = src; vid.autoplay = true; vid.loop = true;
      vid.muted = true; vid.setAttribute('playsinline', '');
      vid.className = 'project-thumb';
      thumbsRow.appendChild(vid);
    });

    const gifs = p.images.filter(s => s.toLowerCase().endsWith('.gif'));
    const imgs = p.images.filter(s => !s.toLowerCase().endsWith('.gif'));
    const allImgSrcs = [...gifs, ...imgs];
    allImgSrcs.forEach((src, idx) => {
      const el = document.createElement('img');
      el.src = src; el.alt = ''; el.loading = 'lazy';
      el.className = 'project-thumb';
      el.addEventListener('click', e => {
        if (item.classList.contains('active')) { e.stopPropagation(); openLightbox(src, allImgSrcs, idx); }
      });
      thumbsRow.appendChild(el);
    });

    thumbsInner.appendChild(thumbsRow);
    thumbsOuter.appendChild(thumbsInner);

    // Wheel: redirect vertical → horizontal only when hovering the photo strip
    thumbsRow.addEventListener('wheel', e => {
      if (!item.classList.contains('active')) return;
      if (Math.abs(e.deltaX) >= Math.abs(e.deltaY)) return;
      const atEnd   = e.deltaY > 0 && thumbsOuter.scrollLeft >= thumbsOuter.scrollWidth - thumbsOuter.clientWidth - 1;
      const atStart = e.deltaY < 0 && thumbsOuter.scrollLeft <= 0;
      if (atEnd || atStart) return;
      e.preventDefault();
      thumbsOuter.scrollLeft += e.deltaY;
    }, { passive: false });

    item.appendChild(header);
    item.appendChild(thumbsOuter);

    item.addEventListener('click', () => {
      const opening = !item.classList.contains('active');
      item.classList.toggle('active');
      if (opening) thumbsOuter.scrollLeft = 0;
    });
    listBody.appendChild(item);
  });
}

function highlightListRow(id) {
  const item = listBody.querySelector(`.project-item[data-id="${id}"]`);
  if (item && !item.classList.contains('active')) {
    item.classList.add('active');
    item.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }
}

// ─── FILTER PANEL ───
function initFilterPanel() {
  const btn   = document.getElementById('filter-btn');
  const panel = document.getElementById('filter-panel');

  const areas = [...new Set(PROJECTS.map(p => p.area.split(' & ')[0]))];
  const activeAreas = new Set();

  const allChip = document.createElement('button');
  allChip.className = 'filter-chip active';
  allChip.textContent = 'All';
  allChip.addEventListener('click', e => {
    e.stopPropagation();
    activeAreas.clear();
    applyFilter();
  });
  panel.appendChild(allChip);

  areas.forEach(area => {
    const chip = document.createElement('button');
    chip.className = 'filter-chip';
    chip.textContent = area;
    chip.addEventListener('click', e => {
      e.stopPropagation();
      if (activeAreas.has(area)) activeAreas.delete(area);
      else activeAreas.add(area);
      applyFilter();
    });
    panel.appendChild(chip);
  });

  btn.addEventListener('click', e => {
    e.stopPropagation();
    panel.classList.toggle('open');
  });

  document.addEventListener('click', e => {
    if (!panel.contains(e.target) && e.target !== btn) {
      panel.classList.remove('open');
    }
  });

  function applyFilter() {
    const none = activeAreas.size === 0;

    // Aggiorna chip
    panel.querySelectorAll('.filter-chip').forEach(c => {
      if (c.textContent === 'All') c.classList.toggle('active', none);
      else c.classList.toggle('active', activeAreas.has(c.textContent));
    });

    const matches = p => none || activeAreas.has(p.area.split(' & ')[0]);

    // List view
    document.querySelectorAll('.project-item').forEach(item => {
      const p = PROJECTS.find(p => p.id === item.dataset.id);
      if (!p) return;
      item.style.display = matches(p) ? '' : 'none';
    });

    // Archive view
    document.querySelectorAll('.index-item').forEach(item => {
      const p = PROJECTS.find(p => p.id === item.dataset.projectId);
      if (!p) return;
      item.style.display = matches(p) ? '' : 'none';
    });

    // Map view
    document.querySelectorAll('.map-dot-3d').forEach(dot => {
      const p = PROJECTS.find(p => p.id === dot.dataset.projectId);
      if (!p) return;
      const match = matches(p);
      dot.style.opacity = match ? '' : '0.12';
      dot.style.pointerEvents = match ? '' : 'none';
    });

    // Bottone label
    if (none) {
      btn.textContent = 'Filter';
      btn.classList.remove('filtered');
    } else if (activeAreas.size === 1) {
      btn.textContent = [...activeAreas][0];
      btn.classList.add('filtered');
    } else {
      btn.textContent = `${activeAreas.size} filters`;
      btn.classList.add('filtered');
    }

    activeFilter = none ? null : [...activeAreas][0];
  }
}

// ─── START ───
init();
