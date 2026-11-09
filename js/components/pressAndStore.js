/* ==================== PRESS SECTION ==================== */
const pressSection = document.getElementById('pressSection');

if (pressSection) {
  pressSection.innerHTML = `
    <div class="container">
      <h2 class="press-title">Báo chí nói gì về Nệm Thuần Việt?</h2>
      <div class="press-logos">
        <div class="press-logo-item">
          <img src="./assets/images/press-vnexpress.png" alt="VnExpress">
        </div>
        <div class="press-logo-item">
          <img src="./assets/images/press-vtv.png" alt="VTV">
        </div>
        <div class="press-logo-item">
          <img src="./assets/images/press-dantri.png" alt="Dân Trí">
        </div>
        <div class="press-logo-item">
          <img src="./assets/images/press-tienphong.png" alt="Tiền Phong">
        </div>
      </div>
    </div>
  `;
}

/* ==================== STORE SYSTEM BANNER ==================== */
const storeSystem = document.getElementById('storeSystem');

if (storeSystem) {
  storeSystem.innerHTML = `
    <div class="container">
      <div class="store-box">
        <div class="store-info">
          <h2 class="store-title">Hệ Thống Cửa Hàng Nệm Thuần Việt</h2>
          <p class="store-subtitle">Trải nghiệm không gian mua sắm hiện đại để tìm kiếm giấc ngủ trọn vẹn</p>
        </div>
        <a href="#he-thong-cua-hang" class="store-btn">
          CLICK XEM CỬA HÀNG GẦN NHẤT <i class="fa-solid fa-location-dot"></i>
        </a>
      </div>
    </div>
  `;
}

