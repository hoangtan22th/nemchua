/**
 * ==========================================================================
 * Layout: Header & Navigation Logic
 * File: js/layout/header.js
 * ==========================================================================
 */

/**
 * Template Header mặc định (Dùng khi nhúng trực tiếp hoặc fallback khi fetch không khả dụng do CORS trên file://)
 */
export const headerTemplate = `
<header class="site-header" id="siteHeader">
  <div class="header-topbar">
    <div class="container d-flex justify-between align-center">
      <div class="topbar-left">
        <span>✨ Miễn phí vận chuyển toàn quốc cho đơn từ 2.000.000đ</span>
      </div>
      <div class="topbar-right d-flex align-center gap-3">
        <a href="tel:18006868" class="topbar-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Hotline: <strong>1800 6868</strong> (Miễn phí)
        </a>
        <span class="topbar-divider">|</span>
        <a href="#he-thong-cua-hang" class="topbar-link">Hệ thống showroom</a>
      </div>
    </div>
  </div>

  <div class="header-main">
    <div class="container d-flex justify-between align-center">
      <!-- Logo -->
      <a href="./index.html" class="header-logo">
        <div class="logo-icon">👑</div>
        <div class="logo-text">
          <span class="brand-name">NỆM CHÚA</span>
          <span class="brand-slogan">Giấc Ngủ Hoàng Gia</span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="header-nav" id="headerNav" aria-label="Main Navigation">
        <ul class="nav-list d-flex align-center gap-4">
          <li class="nav-item">
            <a href="./index.html" class="nav-link active">Trang chủ</a>
          </li>
          <li class="nav-item has-dropdown">
            <a href="#san-pham" class="nav-link">
              Sản phẩm
              <svg class="dropdown-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
            <ul class="nav-dropdown">
              <li><a href="#nem-cao-su">Nệm Cao Su Thiên Nhiên</a></li>
              <li><a href="#nem-lo-xo">Nệm Lò Xo Túi Độc Lập</a></li>
              <li><a href="#nem-foam">Nệm Foam Cao Cấp</a></li>
              <li><a href="#nem-bong-ep">Nệm Bông Ép Kháng Khuẩn</a></li>
              <li><a href="#phu-kien">Gối & Chăn Ga Phụ Kiện</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#ve-chung-toi" class="nav-link">Về chúng tôi</a>
          </li>
          <li class="nav-item">
            <a href="#khuyen-mai" class="nav-link highlight">
              Khuyến mãi
              <span class="badge-hot">HOT</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#kinh-nghiem-ngu" class="nav-link">Góc sức khỏe</a>
          </li>
          <li class="nav-item">
            <a href="#lien-he" class="nav-link">Liên hệ</a>
          </li>
        </ul>
      </nav>

      <!-- Header Actions -->
      <div class="header-actions d-flex align-center gap-3">
        <!-- Search Button -->
        <button type="button" class="action-btn" id="searchBtn" title="Tìm kiếm">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>

        <!-- Cart Button -->
        <a href="#gio-hang" class="action-btn cart-btn" title="Giỏ hàng">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span class="cart-badge" id="cartBadgeCount">0</span>
        </a>

        <!-- Mobile Menu Toggle Button -->
        <button type="button" class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Mở menu điều hướng" aria-expanded="false">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Drawer Menu -->
  <div class="mobile-nav-drawer" id="mobileNavDrawer">
    <div class="mobile-nav-backdrop" id="mobileNavBackdrop"></div>
    <div class="mobile-nav-content">
      <div class="mobile-nav-header d-flex justify-between align-center">
        <span class="mobile-nav-title">Danh mục</span>
        <button type="button" class="mobile-nav-close" id="mobileNavClose" aria-label="Đóng menu">✕</button>
      </div>
      <ul class="mobile-nav-list">
        <li><a href="./index.html" class="active">Trang chủ</a></li>
        <li><a href="#nem-cao-su">Nệm Cao Su</a></li>
        <li><a href="#nem-lo-xo">Nệm Lò Xo</a></li>
        <li><a href="#nem-foam">Nệm Foam</a></li>
        <li><a href="#nem-bong-ep">Nệm Bông Ép</a></li>
        <li><a href="#khuyen-mai">Khuyến mãi HOT 🔥</a></li>
        <li><a href="#ve-chung-toi">Về chúng tôi</a></li>
        <li><a href="#lien-he">Liên hệ</a></li>
      </ul>
      <div class="mobile-nav-footer">
        <a href="tel:18006868" class="mobile-hotline-btn">
          📞 Gọi tư vấn: 1800 6868
        </a>
      </div>
    </div>
  </div>
</header>
`;

/**
 * Nạp Header vào DOM
 * @param {string|HTMLElement} target - Selector hoặc HTMLElement container (mặc định '#header')
 * @param {Object} options - Tùy chọn nạp: { fetchUrl: './components/header.html' }
 */
export async function renderHeader(target = '#header', options = { fetchUrl: './components/header.html' }) {
  const container = typeof target === 'string' ? document.querySelector(target) : target;
  if (!container) {
    console.error(`[Header] Không tìm thấy phần tử mục tiêu: ${target}`);
    return;
  }

  let htmlContent = '';

  // Nếu có truyền fetchUrl (chạy qua web server như Live Server)
  if (options && options.fetchUrl) {
    try {
      const response = await fetch(options.fetchUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      htmlContent = await response.text();
    } catch (err) {
      console.info('[Header] Sử dụng template fallback nội bộ do fetch không khả dụng:', err.message);
      htmlContent = headerTemplate;
    }
  } else {
    htmlContent = headerTemplate;
  }

  // Gán nội dung vào container
  container.innerHTML = htmlContent;

  // Khởi tạo các sự kiện tương tác của Header
  initHeader();
}

/**
 * Khởi tạo toàn bộ sự kiện cho Header (Menu Mobile, Scroll Sticky, Active Link...)
 */
export function initHeader() {
  const siteHeader = document.getElementById('siteHeader');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');

  // 1. Hiệu ứng đổ bóng khi cuộn trang (Sticky shadow)
  if (siteHeader) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add('is-scrolled');
      } else {
        siteHeader.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Mở / Đóng Menu Mobile
  const openMobileMenu = () => {
    if (mobileNavDrawer) {
      mobileNavDrawer.classList.add('is-active');
      document.body.style.overflow = 'hidden'; // Khóa cuộn trang khi mở menu
      mobileMenuBtn?.setAttribute('aria-expanded', 'true');
    }
  };

  const closeMobileMenu = () => {
    if (mobileNavDrawer) {
      mobileNavDrawer.classList.remove('is-active');
      document.body.style.overflow = '';
      mobileMenuBtn?.setAttribute('aria-expanded', 'false');
    }
  };

  mobileMenuBtn?.addEventListener('click', openMobileMenu);
  mobileNavClose?.addEventListener('click', closeMobileMenu);
  mobileNavBackdrop?.addEventListener('click', closeMobileMenu);

  // Nhấn phím Escape để đóng menu mobile
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNavDrawer?.classList.contains('is-active')) {
      closeMobileMenu();
    }
  });

  // Đóng menu khi click vào bất kỳ link nào trong mobile drawer
  const mobileLinks = mobileNavDrawer?.querySelectorAll('a');
  mobileLinks?.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
}
