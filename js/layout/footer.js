/* ==================== FOOTER COMPONENT ==================== */
const footerContainer = document.getElementById('footer');

if (footerContainer) {
  footerContainer.innerHTML = `
    <div class="footer-main">
      <div class="container">
        <div class="footer-grid">
          <!-- Cột 1: Thông tin công ty -->
          <div class="footer-col">
            <div class="footer-brand">
              <img src="./assets/images/logo.jpg" alt="Logo" class="footer-logo">
              <span class="footer-brand-name">NỆM THUẦN VIỆT</span>
            </div>
            <div class="footer-company-name">CÔNG TY CP THUẦN VIỆT GLOBAL</div>
            <p class="footer-text">Địa chỉ: H76-H77, Đường Thị Giang, P. Đông Hưng Thuận, TP.HCM.</p>
            <p class="footer-text">Giấy CNĐKDN: <strong>0318692955</strong></p>
            <p class="footer-text">Ngày cấp: 2024-10-01 – Sở KH&ĐT TP.HCM</p>

            <div class="footer-badges">
              <img src="./assets/images/bocongthuong.png" alt="Đã thông báo Bộ Công Thương" class="bct-badge">
            </div>
            <div class="footer-payment">
              <div class="payment-title">Phương thức thanh toán</div>
              <img src="./assets/images/payments.png" alt="Phương thức thanh toán" class="payment-img">
              <span class="payment-note">(*) Bao gồm một số ngân hàng khác</span>
            </div>
          </div>

          <!-- Cột 2: Chính sách -->
          <div class="footer-col">
            <h3 class="footer-heading">CHÍNH SÁCH</h3>
            <ul class="footer-links">
              <li><a href="#">Điều Khoản & Điều Kiện</a></li>
              <li><a href="#">Chính sách bảo hành</a></li>
              <li><a href="#">Chính sách giao hàng</a></li>
              <li><a href="#">Chính sách đổi trả</a></li>
              <li><a href="#">Chính sách về quy trình xử lý khiếu nại</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
            </ul>
          </div>

          <!-- Cột 3: Thông tin -->
          <div class="footer-col">
            <h3 class="footer-heading">THÔNG TIN NỆM THUẦN VIỆT</h3>
            <ul class="footer-links">
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Sức khỏe & Giấc ngủ</a></li>
              <li><a href="#">Tư Vấn – Kinh Nghiệm Mua Hàng</a></li>
              <li><a href="#">Tin trong ngành</a></li>
              <li><a href="#">Hệ thống cửa hàng & đại lý</a></li>
              <li><a href="#">TEST Nệm Phù Hợp</a></li>
            </ul>
          </div>

          <!-- Cột 4: Kết nối -->
          <div class="footer-col">
            <h3 class="footer-heading">KẾT NỐI VỚI CHÚNG TÔI</h3>
            <p class="footer-contact-item">
              <i class="fa-solid fa-phone"></i>
              Hotline: <strong>1800.646.809</strong> (miễn phí cước gọi)
            </p>
            <p class="footer-contact-item">
              <i class="fa-solid fa-envelope"></i>
              Email: <strong>nemthuanviet@gmail.com</strong>
            </p>

            <div class="footer-socials">
              <a href="#" class="social-icon facebook"><i class="fa-brands fa-facebook-f"></i></a>
              <a href="#" class="social-icon youtube"><i class="fa-brands fa-youtube"></i></a>
              <a href="#" class="social-icon shopee"><i class="fa-solid fa-bag-shopping"></i></a>
              <a href="#" class="social-icon tiktok"><i class="fa-brands fa-tiktok"></i></a>
            </div>

            <div class="footer-zalo">
              <span>Liên hệ qua Zalo OA</span>
              <a href="#" class="btn-zalo">
                <i class="fa-solid fa-comment"></i> Zalo <strong>QUAN TÂM</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <div class="container">
        <p>Copyright 2026 © Nệm Thuần Việt</p>
      </div>
    </div>
  `;
}

