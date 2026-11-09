import { products } from '../products.js';

/* ==================== HERO SLIDER ==================== */
const slides = document.querySelectorAll('.hero-slider .slide');
const dotsContainer = document.getElementById('heroDots');
const prevBtn = document.getElementById('prevHero');
const nextBtn = document.getElementById('nextHero');
let currentIndex = 0;

if (slides.length > 0) {
  dotsContainer.innerHTML = Array.from(slides).map((_, i) =>
    `<span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`
  ).join('');

  const dots = dotsContainer.querySelectorAll('.dot');

  function changeSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slides.forEach((slide, i) => slide.classList.toggle('active', i === currentIndex));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
  }

  nextBtn?.addEventListener('click', () => changeSlide(currentIndex + 1));
  prevBtn?.addEventListener('click', () => changeSlide(currentIndex - 1));

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => changeSlide(Number(e.target.dataset.index)));
  });

  setInterval(() => changeSlide(currentIndex + 1), 4000);
}

/* ==================== RENDER BEST SELLERS ==================== */
const bestSellerGrid = document.getElementById('bestSellerGrid');

if (bestSellerGrid) {
  const bestSellers = products.filter(item => item.isBestSeller);

  bestSellerGrid.innerHTML = bestSellers.map(item => `
    <div class="product-card">
      <div class="product-thumb">
        ${item.discount ? `<span class="product-badge">-${item.discount}%</span>` : ''}
        <a href="#">
          <img src="${item.image}" alt="${item.name}">
        </a>
      </div>
      <div class="product-info">
        <h3 class="product-title">
          <a href="#">${item.name}</a>
        </h3>
        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="product-price">
          <span class="price-old">${item.originalPrice.toLocaleString('vi-VN')}₫</span>
          <span class="price-current">${item.salePrice.toLocaleString('vi-VN')}₫</span>
        </div>
        <div class="product-saving">
          Tiết kiệm: <strong>${(item.originalPrice - item.salePrice).toLocaleString('vi-VN')}₫</strong>
        </div>
      </div>
    </div>
  `).join('');
}
