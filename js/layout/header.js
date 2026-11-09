/* ==================== RENDER HEADER ==================== */
const headerContainer = document.getElementById('header');

if (headerContainer) {
  headerContainer.innerHTML = `
    <div class="header-advertisement">
      <div class="container">
        <ul>
          <li>Giảm đến 25%</li>
          <li>101 đêm ngủ thử</li>
          <li>Freeship mọi đơn hàng</li>
        </ul>
      </div>
    </div>

    <div class="container">
      <div class="wrapper">
        <div class="header-logo">
          <img src="./assets/images/logo.jpg" alt="logo-img">
          <span>Nệm Chúa</span>
        </div>
        <div class="header-nav">
          <ul>
            <li><a href="#">Nệm</a></li>
            <li><a href="#">Phụ kiện</a></li>
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">101 Đêm Ngủ Thử</a></li>
          </ul>
        </div>
        <div class="header-actions">
          <div class="btn-search">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div class="btn-cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
    </div>
  `;
}
