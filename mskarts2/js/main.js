let currentFilter = 'all';
let currentSort = 'featured';
let wishlist = JSON.parse(localStorage.getItem('mskarts-wishlist') || '[]');
let searchQuery = '';

const BADGE_CLASS = { new: 'badge-new', sale: 'badge-sale', low: 'badge-low' };
const BADGE_TEXT  = { new: 'New', sale: 'Sale', low: 'Only 3 left' };

function renderStars(n) {
  let s = '';
  for (let i = 1; i <= 5; i++) s += `<span class="${i <= n ? 'star' : 'star-empty'}">&#9733;</span>`;
  return s;
}

function renderProducts() {
  let data = PRODUCTS.filter(p => {
    const mf = currentFilter === 'all' || p.tag === currentFilter;
    const ms = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return mf && ms;
  });
  if (currentSort === 'price-asc')  data.sort((a, b) => a.price - b.price);
  if (currentSort === 'price-desc') data.sort((a, b) => b.price - a.price);
  if (currentSort === 'newest')     data.sort((a, b) => b.id - a.id);

  const el = document.getElementById('results-count');
  if (el) el.textContent = data.length + ' piece' + (data.length !== 1 ? 's' : '');

  const grid = document.getElementById('product-grid');
  if (!grid) return;

  if (data.length === 0) {
    grid.innerHTML = '<p style="color:#444;font-size:13px;padding:40px 0;letter-spacing:2px;text-transform:uppercase">No pieces found.</p>';
    return;
  }

  grid.innerHTML = data.map(p => `
    <div class="product-card" data-id="${p.id}">
      <div class="card-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="card-overlay">
          <button class="ov-btn primary" onclick="addToCart(${p.id})">Add to cart</button>
          ${p.squareLink ? `<button class="ov-btn secondary" onclick="window.open('${p.squareLink}','_blank')">Buy now</button>` : ''}
        </div>
      </div>
      <button class="wish-btn${wishlist.includes(p.id) ? ' on' : ''}" onclick="toggleWishlist(${p.id}, this)" aria-label="Wishlist">
        <i class="ti ti-heart"></i>
      </button>
      <div class="card-body">
        <div class="card-tag">${p.tag}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-stars">${renderStars(p.stars)}<span class="review-count">(${p.reviews})</span></div>
        <div class="card-footer">
          <span class="card-price">$${p.price}</span>
          ${p.badge ? `<span class="product-badge ${BADGE_CLASS[p.badge]}">${BADGE_TEXT[p.badge]}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function toggleWishlist(id, btn) {
  const i = wishlist.indexOf(id);
  if (i === -1) { wishlist.push(id); btn.classList.add('on'); }
  else { wishlist.splice(i, 1); btn.classList.remove('on'); }
  localStorage.setItem('mskarts-wishlist', JSON.stringify(wishlist));
  const c = document.getElementById('wishlist-count');
  if (c) { c.textContent = wishlist.length; c.style.display = wishlist.length > 0 ? 'flex' : 'none'; }
}

function initFilters() {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentFilter = this.dataset.filter;
      renderProducts();
    });
  });
  document.getElementById('sort-select')?.addEventListener('change', function () {
    currentSort = this.value; renderProducts();
  });
}

function initSearch() {
  const toggle = document.getElementById('search-toggle');
  const close  = document.getElementById('search-close');
  const bar    = document.getElementById('search-bar');
  const input  = document.getElementById('search-input');
  toggle?.addEventListener('click', () => {
    if (!bar) return;
    bar.style.display = bar.style.display === 'none' ? 'block' : 'none';
    if (bar.style.display === 'block') input?.focus();
  });
  close?.addEventListener('click', () => {
    if (bar) bar.style.display = 'none';
    searchQuery = ''; if (input) input.value = '';
    renderProducts();
  });
  input?.addEventListener('input', function () { searchQuery = this.value.trim(); renderProducts(); });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(); initFilters(); initSearch();
  const c = document.getElementById('wishlist-count');
  if (c && wishlist.length > 0) { c.textContent = wishlist.length; c.style.display = 'flex'; }
});
