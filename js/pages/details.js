/* ==================== IMPORTS ==================== */
import '../layout/header.js';
import '../layout/footer.js';
import { products } from '../products.js';

/* ==================== GET PRODUCT DATA ==================== */
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id')) || 1;
const product = products.find(p => p.id === productId) || products[0];

/* ==================== RENDER DETAILS ==================== */
const container = document.getElementById('productDetails');

if (container && product) {
  const stars = Array(Math.round(product.rating || 5))
    .fill('<i class="fa-solid fa-star"></i>')
    .join('');

  container.innerHTML = `
    <!-- Breadcrumb -->
    <div class="breadcrumb-section">
      <div class="container">
        <a href="./index.html">Trang chủ</a>
        <span>/</span>
        <a href="#">Nệm</a>
        <span>/</span>
        <span>${product.category || 'Nệm cao su thiên nhiên'}</span>
      </div>
    </div>

    <!-- Product Details Section -->
    <section class="details-section">
      <div class="container">
        <div class="details-wrapper">
          <!-- Gallery (Left) -->
          <div class="details-gallery">
            <div class="details-main-img">
              <span class="details-badge">-${product.discount}%</span>
              <img id="mainProductImg" src="${product.image}" alt="${product.name}">
            </div>
            <div class="details-thumbs">
              ${(product.thumbnails || [product.image]).map((thumb, idx) => `
                <div class="details-thumb-item ${idx === 0 ? 'active' : ''}" data-src="${thumb}">
                  <img src="${thumb}" alt="Thumbnail ${idx + 1}">
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Summary & Options (Right) -->
          <div class="details-info">
            <h1 class="details-title">${product.name}</h1>

            <div class="details-rating-row">
              <span class="details-stars">${stars}</span>
              <span><strong>${product.rating}.0</strong></span>
              <span>|</span>
              <span>(${product.reviews || 32} đánh giá)</span>
              <span>|</span>
              <span>Đã bán ${product.sold || 2}</span>
            </div>

            <div class="details-price-range">
              ${product.salePrice.toLocaleString('vi-VN')}₫ – ${(product.salePrice * 1.8).toLocaleString('vi-VN')}₫
            </div>

            <p class="details-desc">${product.description}</p>

            <!-- Kích thước -->
            <div class="option-group">
              <div class="option-label">Kích Thước: <span id="selectedSize">${product.sizes?.[0] || '160x200'}</span></div>
              <div class="option-list" id="sizeOptions">
                ${(product.sizes || ['160x200', '180x200', '200x200']).map((size, idx) => `
                  <button class="option-btn ${idx === 0 ? 'active' : ''}" data-val="${size}">${size}</button>
                `).join('')}
              </div>
            </div>

            <!-- Độ dày -->
            <div class="option-group">
              <div class="option-label">Độ Dày: <span id="selectedThickness">${product.thickness?.[0] || '10cm'}</span></div>
              <div class="option-list" id="thicknessOptions">
                ${(product.thickness || ['10cm', '15cm']).map((thick, idx) => `
                  <button class="option-btn ${idx === 0 ? 'active' : ''}" data-val="${thick}">${thick}</button>
                `).join('')}
              </div>
            </div>

            <!-- Giá của phân loại -->
            <div class="details-selected-price">
              <span class="details-old-price">${product.originalPrice.toLocaleString('vi-VN')}₫</span>
              <span class="details-current-price">${product.salePrice.toLocaleString('vi-VN')}₫</span>
            </div>

            <!-- Quantity & Add to Cart -->
            <div class="details-actions-row">
              <div class="quantity-control">
                <button class="qty-btn" id="qtyMinus">-</button>
                <input type="text" class="qty-input" id="qtyInput" value="1" readonly>
                <button class="qty-btn" id="qtyPlus">+</button>
              </div>
              <button class="btn-add-cart">Thêm Vào Giỏ Hàng</button>
            </div>

            <!-- Mua ngay -->
            <button class="btn-buy-now">
              ĐẶT HÀNG NHANH
              <span>Gọi điện xác nhận và giao hàng tận nơi</span>
            </button>

            <!-- Hotline -->
            <div class="hotline-box">
              Gọi tư vấn ngay <strong>1800.646.809</strong>
            </div>

            <!-- Khuyến mãi & Timer -->
            <div class="details-promo-row">
              <div class="gift-text">
                <strong>${product.gift || 'Bộ quà tặng hấp dẫn'}</strong>
              </div>
              <div class="countdown-box">
                <div class="countdown-item">00</div>
                <span>:</span>
                <div class="countdown-item">18</div>
                <span>:</span>
                <div class="countdown-item">29</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  /* ==================== INTERACTION LOGIC ==================== */
  // 1. Chuyển ảnh thumbnail
  const mainImg = document.getElementById('mainProductImg');
  const thumbItems = container.querySelectorAll('.details-thumb-item');

  thumbItems.forEach(item => {
    item.addEventListener('click', () => {
      thumbItems.forEach(t => t.classList.remove('active'));
      item.classList.add('active');
      if (mainImg) mainImg.src = item.dataset.src;
    });
  });

  // 2. Chọn kích thước & độ dày
  const bindOptionGroup = (containerId, displayId) => {
    const parent = document.getElementById(containerId);
    const display = document.getElementById(displayId);
    parent?.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        parent.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (display) display.textContent = btn.dataset.val;
      });
    });
  };

  bindOptionGroup('sizeOptions', 'selectedSize');
  bindOptionGroup('thicknessOptions', 'selectedThickness');

  // 3. Số lượng
  const qtyInput = document.getElementById('qtyInput');
  document.getElementById('qtyMinus')?.addEventListener('click', () => {
    let val = parseInt(qtyInput.value) || 1;
    if (val > 1) qtyInput.value = val - 1;
  });
  document.getElementById('qtyPlus')?.addEventListener('click', () => {
    let val = parseInt(qtyInput.value) || 1;
    qtyInput.value = val + 1;
  });
}

