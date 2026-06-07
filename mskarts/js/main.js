// ===== STATE =====
let currentFilter = 'all';
let currentSort = 'featured';
let wishlist = JSON.parse(localStorage.getItem('mskarts-wishlist') || '[]');
let searchQuery = '';

// ===== RENDER STARS =====
function renderStars(count) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="${i <= count ? 'star' : 'star-empty'}">&#9733;</span>`;
  }
  return html;
}

// ===== BADGE =====
const BADGE_CLASS = { new: 'badge-new', sale: 'badge-sale', low: 'badge-low' };
const BADGE_TEXT = { new: 'New', sale: 'Sale', low: 'Only 3 left' };

// ===== RENDER PRODUCTS =====
function renderProducts() {
  let data = PRODUCTS.filter(p => {
    const matchFilter = currentFilter === 'all' || p.tag === currentFilter;
    const matchSearch = !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });

  if (currentSort === 'price-asc') data.sort((a, b) => a.price - b.price);
  else if (currentSort === 'price-desc') data.sort((a, b) => b.price - a.price);
  else if (currentSort === 'newest') data.sort((a, b) => b.id - a.id);

  const countEl = document.getElementById('results-count');
  if (countEl) countEl.textContent = data.length + ' product' + (data.length !== 1 ? 's' : '');

  const grid = document.getElementById('product-grid');
  if (!grid) return;

  if (data.length === 0) {
    grid.innerHTML = '<p style="color:#aaa;font-size:14px;padding:40px 0">No products found.</p>';
    return;
  }

  grid.innerHTML = data.map(p => {
    const inWishlist = wishlist.includes(p.id);
    return `
      <div class="product-card" data-id="${p.id}">
        <div class="card-img">
          ${PRODUCT_ICONS[p.icon] || ''}
          <div class="card-overlay">
            <button class="overlay-btn primary" onclick="addToCart(${p.id})">Add to cart</button>
            ${p.squareLink ? `<button class="overlay-btn" onclick="window.open('${p.squareLink}','_blank')">Buy now</button>` : ''}
          </div>
        </div>
        <button class="wish-btn${inWishlist ? ' on' : ''}" onclick="toggleWishlist(${p.id}, this)" aria-label="Wishlist">
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
    `;
  }).join('');
}

// ===== WISHLIST =====
function toggleWishlist(id, btn) {
  const idx = wishlist.indexOf(id);
  if (idx === -1) {
    wishlist.push(id);
    btn.classList.add('on');
  } else {
    wishlist.splice(idx, 1);
    btn.classList.remove('on');
  }
  localStorage.setItem('mskarts-wishlist', JSON.stringify(wishlist));
  const countEl = document.getElementById('wishlist-count');
  if (countEl) {
    countEl.textContent = wishlist.length;
    countEl.style.display = wishlist.length > 0 ? 'flex' : 'none';
  }
}

// ===== FILTERS =====
function initFilters() {
  document.querySelectorAll('.cat-card').forEach(btn => {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.cat-card').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentFilter = this.dataset.filter;
      renderProducts();
    });
  });

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', function () {
      currentSort = this.value;
      renderProducts();
    });
  }
}

// ===== SEARCH =====
function initSearch() {
  const toggleBtn = document.getElementById('search-toggle');
  const closeBtn = document.getElementById('search-close');
  const bar = document.getElementById('search-bar');
  const input = document.getElementById('search-input');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      if (bar) {
        bar.style.display = bar.style.display === 'none' ? 'block' : 'none';
        if (bar.style.display === 'block' && input) input.focus();
      }
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      if (bar) bar.style.display = 'none';
      searchQuery = '';
      if (input) input.value = '';
      renderProducts();
    });
  }
  if (input) {
    input.addEventListener('input', function () {
      searchQuery = this.value.trim();
      renderProducts();
    });
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function () {
  renderProducts();
  initFilters();
  initSearch();

  // restore wishlist badge
  const countEl = document.getElementById('wishlist-count');
  if (countEl && wishlist.length > 0) {
    countEl.textContent = wishlist.length;
    countEl.style.display = 'flex';
  }
});
