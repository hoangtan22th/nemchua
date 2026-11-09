/* ==================== IMPORTS ==================== */
import '../layout/header.js';
import '../components/hero.js';
import '../components/videoReviews.js';
import '../components/pressAndStore.js';
import '../layout/footer.js';
import { products } from '../products.js';

/* ==================== RENDER BEST SELLERS ==================== */
const bestSellerGrid = document.getElementById('bestSellerGrid');

if (bestSellerGrid) {
  const bestSellers = products.filter(item => item.isBestSeller);

  bestSellerGrid.innerHTML = bestSellers.map(item => `
    <div class="product-card">
      <div class="product-thumb">
        ${item.discount ? `<span class="product-badge">-${item.discount}%</span>` : ''}
        <a href="./details.html?id=${item.id}">
          <img src="${item.image}" alt="${item.name}">
        </a>
      </div>
      <div class="product-info">
        <h3 class="product-title">
          <a href="./details.html?id=${item.id}">${item.name}</a>
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

/* ==================== RENDER ALL PRODUCTS ==================== */
const allProductsGrid = document.getElementById('allProductsGrid');

if (allProductsGrid) {
  const first8Products = products.slice(0, 8);

  allProductsGrid.innerHTML = first8Products.map(item => `
    <div class="product-card">
      <div class="product-thumb">
        ${item.discount ? `<span class="product-badge">-${item.discount}%</span>` : ''}
        <a href="./details.html?id=${item.id}">
          <img src="${item.image}" alt="${item.name}">
        </a>
      </div>
      <div class="product-info">
        <h3 class="product-title">
          <a href="./details.html?id=${item.id}">${item.name}</a>
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
