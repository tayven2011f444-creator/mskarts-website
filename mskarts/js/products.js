const PRODUCTS = [
  {
    id: 1,
    name: "Lattice pendant lamp",
    tag: "lighting",
    price: 64,
    badge: "new",
    stars: 5,
    reviews: 12,
    squareLink: "", // paste your Square payment link here when ready
    icon: "lamp"
  },
  {
    id: 2,
    name: "Hex wall panel set",
    tag: "wall",
    price: 48,
    badge: "",
    stars: 4,
    reviews: 8,
    squareLink: "",
    icon: "hex"
  },
  {
    id: 3,
    name: "Industrial bud vase",
    tag: "vase",
    price: 28,
    badge: "sale",
    stars: 5,
    reviews: 23,
    squareLink: "",
    icon: "vase"
  },
  {
    id: 4,
    name: "Gear sculpture",
    tag: "shelf",
    price: 39,
    badge: "",
    stars: 4,
    reviews: 6,
    squareLink: "",
    icon: "gear"
  },
  {
    id: 5,
    name: "Pipe-form candle holder",
    tag: "shelf",
    price: 22,
    badge: "low",
    stars: 3,
    reviews: 4,
    squareLink: "",
    icon: "pipe"
  },
  {
    id: 6,
    name: "Brutalist wall clock",
    tag: "wall",
    price: 85,
    badge: "new",
    stars: 5,
    reviews: 18,
    squareLink: "",
    icon: "clock"
  },
  {
    id: 7,
    name: "Ribbed cylinder vase",
    tag: "vase",
    price: 34,
    badge: "",
    stars: 4,
    reviews: 9,
    squareLink: "",
    icon: "vase2"
  },
  {
    id: 8,
    name: "Grid shelf bracket",
    tag: "shelf",
    price: 18,
    badge: "",
    stars: 4,
    reviews: 14,
    squareLink: "",
    icon: "bracket"
  },
  {
    id: 9,
    name: "Angular pendant",
    tag: "lighting",
    price: 72,
    badge: "",
    stars: 5,
    reviews: 7,
    squareLink: "",
    icon: "lamp2"
  },
  {
    id: 10,
    name: "Concrete-look planter",
    tag: "vase",
    price: 42,
    badge: "new",
    stars: 4,
    reviews: 11,
    squareLink: "",
    icon: "planter"
  },
  {
    id: 11,
    name: "Shard wall tile set",
    tag: "wall",
    price: 55,
    badge: "sale",
    stars: 5,
    reviews: 20,
    squareLink: "",
    icon: "shard"
  },
  {
    id: 12,
    name: "Modular shelf object",
    tag: "shelf",
    price: 31,
    badge: "",
    stars: 3,
    reviews: 5,
    squareLink: "",
    icon: "mod"
  }
];

// SVG icons for each product (inline, no image files needed)
const PRODUCT_ICONS = {
  lamp: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><polygon points="40,10 62,62 18,62" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.07"/><rect x="37" y="62" width="6" height="12" fill="currentColor" fill-opacity="0.25"/><circle cx="40" cy="10" r="3" fill="currentColor" fill-opacity="0.4"/><line x1="40" y1="4" x2="40" y2="10" stroke="currentColor" stroke-width="1.5"/></svg>`,
  hex: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><polygon points="40,10 60,22 60,46 40,58 20,46 20,22" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.07"/><polygon points="40,20 52,27 52,41 40,48 28,41 28,27" stroke="currentColor" stroke-width="1" fill="currentColor" fill-opacity="0.12"/></svg>`,
  vase: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><path d="M33 18 L27 66 L53 66 L47 18 Z" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.08"/><line x1="33" y1="18" x2="47" y2="18" stroke="currentColor" stroke-width="1.5"/></svg>`,
  gear: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="15" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="40" cy="40" r="5" fill="currentColor" fill-opacity="0.4"/><rect x="37" y="18" width="6" height="9" rx="1.5" fill="currentColor" fill-opacity="0.45"/><rect x="37" y="53" width="6" height="9" rx="1.5" fill="currentColor" fill-opacity="0.45"/><rect x="18" y="37" width="9" height="6" rx="1.5" fill="currentColor" fill-opacity="0.45"/><rect x="53" y="37" width="9" height="6" rx="1.5" fill="currentColor" fill-opacity="0.45"/></svg>`,
  pipe: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="26" y="16" width="11" height="48" rx="2" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.08"/><rect x="43" y="28" width="11" height="36" rx="2" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.08"/><path d="M37 28 Q40 22 43 28" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>`,
  clock: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="16" y="16" width="48" height="48" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.06"/><line x1="40" y1="40" x2="40" y2="25" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="40" x2="54" y2="40" stroke="currentColor" stroke-width="1.5"/><circle cx="40" cy="40" r="2.5" fill="currentColor" fill-opacity="0.6"/></svg>`,
  vase2: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><path d="M34 13 C28 30 22 46 24 66 L56 66 C58 46 52 30 46 13 Z" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.07"/><line x1="34" y1="13" x2="46" y2="13" stroke="currentColor" stroke-width="2"/></svg>`,
  bracket: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><polyline points="20,64 20,18 62,18" stroke="currentColor" stroke-width="1.5" fill="none"/><line x1="20" y1="18" x2="50" y2="64" stroke="currentColor" stroke-width="1" opacity="0.4"/><circle cx="20" cy="18" r="3" fill="currentColor" fill-opacity="0.5"/><circle cx="62" cy="18" r="3" fill="currentColor" fill-opacity="0.5"/><circle cx="20" cy="64" r="3" fill="currentColor" fill-opacity="0.5"/></svg>`,
  lamp2: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><polygon points="40,14 60,58 20,58" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.08"/><polygon points="40,28 54,58 26,58" fill="currentColor" fill-opacity="0.1"/><line x1="40" y1="6" x2="40" y2="14" stroke="currentColor" stroke-width="1.5"/></svg>`,
  planter: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><path d="M23 34 L27 66 L53 66 L57 34 Z" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.08"/><line x1="21" y1="34" x2="59" y2="34" stroke="currentColor" stroke-width="1.5"/><path d="M40 34 C40 20 52 14 52 14" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.5"/><path d="M40 34 C40 23 29 17 26 13" stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.5"/></svg>`,
  shard: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><polygon points="18,14 45,20 37,44 12,38" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.09"/><polygon points="45,20 68,16 62,42 37,44" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.06"/><polygon points="18,48 50,46 42,68 12,66" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.11"/></svg>`,
  mod: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none"><rect x="16" y="16" width="22" height="22" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.08"/><rect x="42" y="16" width="22" height="22" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.13"/><rect x="16" y="42" width="48" height="22" stroke="currentColor" stroke-width="1.5" fill="currentColor" fill-opacity="0.06"/></svg>`
};
