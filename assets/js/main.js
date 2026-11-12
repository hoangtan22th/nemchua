/* ==================== 1. DATA PRODUCTS & CATEGORIES ==================== */
const categories = [
  { id: "nem-cao-su-thien-nhien", name: "Nệm cao su thiên nhiên" },
  { id: "nem-foam", name: "Nệm Foam" },
  { id: "nem-lo-xo", name: "Nệm lò xo" },
  { id: "nem-lam-mat", name: "Nệm làm mát" }
];

const accessoryCategories = [
  { id: "chan-ga", name: "Chăn ga" },
  { id: "goi-cao-su", name: "Gối cao su" },
  { id: "long-vu", name: "Lông vũ" },
  { id: "goi-gon", name: "Gối gòn" }
];

const products = [
  {
    id: 1,
    name: "Nệm cao su Thuần Việt Titan Grey – Sạch êm, kháng khuẩn, nâng đỡ vượt trội",
    category: "Nệm cao su thiên nhiên",
    categoryId: "nem-cao-su-thien-nhien",
    image: "./assets/images/product-3.jpg",
    thumbnails: [
      "./assets/images/product-3.jpg",
      "./assets/images/product-1.jpg",
      "./assets/images/product-2.jpg",
      "./assets/images/product-4.jpg"
    ],
    originalPrice: 23000000,
    salePrice: 18070000,
    discount: 21,
    rating: 5.0,
    reviews: 32,
    sold: 2,
    description: "Nệm cao su thiên nhiên Thuần Việt Titan Grey kết hợp than hoạt tính giúp kháng khuẩn, khử mùi và nâng đỡ trọn vẹn giấc ngủ.",
    sizes: ["140x200", "160x200", "180x200", "200x200", "220x200"],
    thickness: ["10cm", "15cm"],
    gift: "Bộ quà tặng trị giá 1.864.000₫",
    isBestSeller: true
  },
  {
    id: 2,
    name: "Nệm cao su thiên nhiên Thuần Việt Latex Premium – Siêu đàn hồi, êm ái từng đường cong",
    category: "Nệm cao su thiên nhiên",
    categoryId: "nem-cao-su-thien-nhien",
    image: "./assets/images/product-1.jpg",
    thumbnails: ["./assets/images/product-1.jpg"],
    originalPrice: 11990000,
    salePrice: 9490000,
    discount: 21,
    rating: 5.0,
    reviews: 48,
    sold: 15,
    description: "Nệm cao su thiên nhiên Thuần Việt Latex Premium từ 100% mủ cao su tự nhiên, độ đàn hồi hoàn hảo bảo vệ hệ xương khớp.",
    sizes: ["140x200", "160x200", "180x200", "200x200"],
    thickness: ["10cm", "15cm", "20cm"],
    gift: "Bộ quà tặng trị giá 1.500.000₫",
    isBestSeller: true
  },
  {
    id: 3,
    name: "Nệm Foam Latex Thuần Việt Hybrid – Công nghệ đa tầng, nâng niu giấc ngủ",
    category: "Nệm Foam",
    categoryId: "nem-foam",
    image: "./assets/images/product-2.jpg",
    thumbnails: ["./assets/images/product-2.jpg"],
    originalPrice: 15840000,
    salePrice: 11870000,
    discount: 25,
    rating: 5.0,
    reviews: 28,
    sold: 9,
    description: "Nệm Foam Latex Hybrid kết hợp lõi Foam chịu lực cao cấp cùng bề mặt cao su thiên nhiên êm ái.",
    sizes: ["140x200", "160x200", "180x200", "200x200"],
    thickness: ["12cm", "15cm", "20cm"],
    gift: "Bộ quà tặng trị giá 1.200.000₫",
    isBestSeller: true
  },
  {
    id: 4,
    name: "Nệm cao su thiên nhiên Thuần Việt Legend – Chuyên gia nâng đỡ vùng lưng",
    category: "Nệm cao su thiên nhiên",
    categoryId: "nem-cao-su-thien-nhien",
    image: "./assets/images/product-4.jpg",
    thumbnails: ["./assets/images/product-4.jpg"],
    originalPrice: 10300000,
    salePrice: 7720000,
    discount: 25,
    rating: 5.0,
    reviews: 19,
    sold: 8,
    description: "Cấu trúc bọt hở thoáng khí tối đa, tối ưu trọng lực cơ thể giúp ngủ sâu không đau nhức mỏi lưng.",
    sizes: ["140x200", "160x200", "180x200", "200x200"],
    thickness: ["10cm", "15cm"],
    gift: "Bộ quà tặng trị giá 1.000.000₫",
    isBestSeller: false
  },
  {
    id: 5,
    name: "Nệm Foam Thuần Việt Original – Êm ái, đàn hồi chuẩn chỉnh",
    category: "Nệm Foam",
    categoryId: "nem-foam",
    image: "./assets/images/product-1.jpg",
    thumbnails: ["./assets/images/product-1.jpg"],
    originalPrice: 8500000,
    salePrice: 6375000,
    discount: 25,
    rating: 5.0,
    reviews: 14,
    sold: 11,
    description: "Chất liệu Foam cao cấp tỷ trọng cao chống xẹp lún hiệu quả, nâng niu trọn vẹn từng giấc ngủ êm ái.",
    sizes: ["140x200", "160x200", "180x200"],
    thickness: ["10cm", "15cm"],
    gift: "Bộ quà tặng trị giá 800.000₫",
    isBestSeller: false
  },
  {
    id: 6,
    name: "Nệm lò xo túi độc lập Thuần Việt Ruby – Đẳng cấp khách sạn 5 sao",
    category: "Nệm lò xo",
    categoryId: "nem-lo-xo",
    image: "./assets/images/product-3.jpg",
    thumbnails: ["./assets/images/product-3.jpg"],
    originalPrice: 14500000,
    salePrice: 10875000,
    discount: 25,
    rating: 5.0,
    reviews: 22,
    sold: 6,
    description: "Hệ thống lò xo túi độc lập không gây rung lắc cho người nằm cạnh, vải gấm cao cấp nhập khẩu sang trọng.",
    sizes: ["160x200", "180x200", "200x200"],
    thickness: ["25cm", "30cm"],
    gift: "Bộ quà tặng trị giá 2.000.000₫",
    isBestSeller: false
  },
  {
    id: 101,
    name: "Bộ Ga Giường Mền Thuần Việt ECTC 01 – Lụa Thoáng Mát, Thấm Hút Mồ Hôi Tốt",
    categoryType: "accessory",
    category: "Chăn ga",
    categoryId: "chan-ga",
    image: "./assets/images/acc-ectc-01.jpg",
    thumbnails: [
      "./assets/images/acc-ectc-01.jpg",
      "./assets/images/acc-ectc-02.jpg"
    ],
    originalPrice: 1230000,
    salePrice: 680000,
    priceRange: "680.000₫ – 1.420.000₫",
    discount: 45,
    rating: 5.0,
    reviews: 12,
    sold: 35,
    description: "Bộ sản phẩm Chăn ga gối Thuần Việt được kết hợp từ vải Cotton và vải lụa mang đến cảm giác êm ái và mát mẻ trong suốt quá trình sử dụng. Công nghệ may thêu hiện đại cho ra những sản phẩm có họa tiết vô cùng sống động.",
    models: [
      { name: "Bộ ga - 1m6 x 2m (Gồm 2 vỏ gối nằm + 1 vỏ gối ôm + 1 ga)", price: 680000, oldPrice: 1230000 },
      { name: "Bộ ga - 1m8 x 2m (Gồm 2 vỏ gối nằm + 1 vỏ gối ôm + 1 ga)", price: 730000, oldPrice: 1300000 },
      { name: "Mền Lẻ - 2m2 x 2m", price: 890000, oldPrice: 1400000 },
      { name: "Trọn bộ - 1m6 x 2m (Gồm 2 vỏ gối nằm + 1 vỏ gối ôm + 1 ga + 1 mền)", price: 1350000, oldPrice: 2100000 },
      { name: "Trọn bộ - 1m8 x 2m (Gồm 2 vỏ gối nằm + 1 vỏ gối ôm + 1 ga + 1 mền)", price: 1420000, oldPrice: 2200000 }
    ],
    isBestSeller: true
  },
  {
    id: 102,
    name: "Bộ Ga Giường Mền Thuần Việt ECTC 02 – Lụa Thoáng Mát, Thấm Hút Mồ Hôi Tốt",
    categoryType: "accessory",
    category: "Chăn ga",
    categoryId: "chan-ga",
    image: "./assets/images/acc-ectc-02.jpg",
    thumbnails: [
      "./assets/images/acc-ectc-02.jpg",
      "./assets/images/acc-ectc-01.jpg"
    ],
    originalPrice: 1230000,
    salePrice: 680000,
    priceRange: "680.000₫ – 1.420.000₫",
    discount: 45,
    rating: 5.0,
    reviews: 18,
    sold: 42,
    description: "Họa tiết hoa văn dịu nhẹ mang đến không gian phòng ngủ lãng mạn, ngọt ngào và thư giãn tuyệt đối cho giấc ngủ ngon.",
    models: [
      { name: "Bộ ga - 1m6 x 2m (Gồm 2 vỏ gối nằm + 1 vỏ gối ôm + 1 ga)", price: 680000, oldPrice: 1230000 },
      { name: "Bộ ga - 1m8 x 2m (Gồm 2 vỏ gối nằm + 1 vỏ gối ôm + 1 ga)", price: 730000, oldPrice: 1300000 },
      { name: "Mền Lẻ - 2m2 x 2m", price: 890000, oldPrice: 1400000 },
      { name: "Trọn bộ - 1m6 x 2m (Gồm 2 vỏ gối nằm + 1 vỏ gối ôm + 1 ga + 1 mền)", price: 1350000, oldPrice: 2100000 },
      { name: "Trọn bộ - 1m8 x 2m (Gồm 2 vỏ gối nằm + 1 vỏ gối ôm + 1 ga + 1 mền)", price: 1420000, oldPrice: 2200000 }
    ],
    isBestSeller: true
  },
  {
    id: 107,
    name: "Gối cao su thiên nhiên Thuần Việt Oval – Nâng đỡ đốt sống cổ hoàn hảo",
    categoryType: "accessory",
    category: "Gối cao su",
    categoryId: "goi-cao-su",
    image: "./assets/images/product-1.jpg",
    thumbnails: ["./assets/images/product-1.jpg"],
    originalPrice: 650000,
    salePrice: 450000,
    priceRange: "450.000₫ – 520.000₫",
    discount: 30,
    rating: 5.0,
    reviews: 38,
    sold: 120,
    description: "100% cao su tự nhiên với thiết kế hình oval truyền thống, hàng ngàn lỗ thông khí giúp chống đau mỏi vai gáy.",
    models: [
      { name: "Kích thước tiêu chuẩn 40 x 60cm", price: 450000, oldPrice: 650000 },
      { name: "Kích thước lớn 45 x 65cm", price: 520000, oldPrice: 720000 }
    ],
    isBestSeller: false
  },
  {
    id: 108,
    name: "Gối cao su lượn sóng Thuần Việt Contour – Chống ngáy, trị mỏi vai gáy",
    categoryType: "accessory",
    category: "Gối cao su",
    categoryId: "goi-cao-su",
    image: "./assets/images/product-3.jpg",
    thumbnails: ["./assets/images/product-3.jpg"],
    originalPrice: 750000,
    salePrice: 550000,
    priceRange: "550.000₫ – 620.000₫",
    discount: 26,
    rating: 5.0,
    reviews: 52,
    sold: 145,
    description: "Thiết kế gợn sóng định hình ôm sát đường cong đốt sống cổ, giúp đường thở thông thoáng và giảm chứng ngủ ngáy.",
    models: [
      { name: "Kích thước tiêu chuẩn 38 x 58cm", price: 550000, oldPrice: 750000 },
      { name: "Kích thước lớn 42 x 62cm", price: 620000, oldPrice: 850000 }
    ],
    isBestSeller: false
  },
  {
    id: 109,
    name: "Gối lông vũ cao cấp Thuần Việt Luxury – Siêu êm ái, bồng bềnh tựa mây",
    categoryType: "accessory",
    category: "Lông vũ",
    categoryId: "long-vu",
    image: "./assets/images/product-2.jpg",
    thumbnails: ["./assets/images/product-2.jpg"],
    originalPrice: 900000,
    salePrice: 690000,
    priceRange: "690.000₫ – 890.000₫",
    discount: 23,
    rating: 5.0,
    reviews: 19,
    sold: 64,
    description: "Lông vũ nhân tạo Microfiber tinh khiết siêu mềm mại, độ bồng bềnh hoàn hảo như khách sạn 5 sao cao cấp.",
    models: [
      { name: "Gối đơn 50 x 70cm (1 cái)", price: 690000, oldPrice: 900000 },
      { name: "Cặp gối 50 x 70cm (2 cái)", price: 1250000, oldPrice: 1700000 }
    ],
    isBestSeller: false
  },
  {
    id: 110,
    name: "Gối gòn Microfiber Thuần Việt Soft Touch – Êm mềm kháng khuẩn, chống xẹp lún",
    categoryType: "accessory",
    category: "Gối gòn",
    categoryId: "goi-gon",
    image: "./assets/images/product-4.jpg",
    thumbnails: ["./assets/images/product-4.jpg"],
    originalPrice: 350000,
    salePrice: 220000,
    priceRange: "220.000₫ – 390.000₫",
    discount: 37,
    rating: 5.0,
    reviews: 45,
    sold: 210,
    description: "Sợi gòn bông Microfiber siêu mịn màng, chống bụi bẩn và nấm mốc, giặt máy thoải mái không lo vón cục.",
    models: [
      { name: "Gối nằm 45 x 65cm", price: 220000, oldPrice: 350000 },
      { name: "Gối ôm 35 x 100cm", price: 280000, oldPrice: 420000 },
      { name: "Combo 2 gối nằm + 1 gối ôm", price: 650000, oldPrice: 1050000 }
    ],
    isBestSeller: false
  }
];

/* ==================== 2. CHỨC NĂNG CHUNG KHI TRANG TẢI XONG ==================== */
document.addEventListener('DOMContentLoaded', () => {
  /* --- A. HERO SLIDER (Trang chủ) --- */
  const heroSlider = document.querySelector('.hero-slider');
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll('.slide');
    const dots = heroSlider.querySelectorAll('.dot');
    const prevBtn = heroSlider.querySelector('#prevHero');
    const nextBtn = heroSlider.querySelector('#nextHero');
    let currentIndex = 0;

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

  /* --- B. VIDEO MODAL (Trang chủ) --- */
  const videoModal = document.getElementById('videoModal');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');
  const videoClose = document.getElementById('videoClose');
  const videoBackdrop = document.getElementById('videoBackdrop');
  const reviewCards = document.querySelectorAll('.review-card');

  function openVideo(url) {
    if (!videoModal || !modalVideoPlayer) return;
    modalVideoPlayer.src = url;
    videoModal.classList.add('is-open');
    modalVideoPlayer.play();
  }

  function closeVideo() {
    if (!videoModal || !modalVideoPlayer) return;
    modalVideoPlayer.pause();
    modalVideoPlayer.src = '';
    videoModal.classList.remove('is-open');
  }

  reviewCards.forEach(card => {
    const playBtn = card.querySelector('.review-play-btn');
    const videoUrl = card.dataset.video;

    playBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (videoUrl) openVideo(videoUrl);
    });

    card.addEventListener('click', (e) => {
      if (e.target.closest('.review-product-box')) return;
      if (videoUrl) openVideo(videoUrl);
    });
  });

  videoClose?.addEventListener('click', closeVideo);
  videoBackdrop?.addEventListener('click', closeVideo);

  /* --- C. BỘ LỌC DROPDOWN (Trang sản phẩm & Trang phụ kiện) --- */
  const dropdowns = document.querySelectorAll('.filter-dropdown');
  dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.filter-dropdown-btn');
    btn?.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('is-open');
      dropdowns.forEach(d => d.classList.remove('is-open'));
      if (!isOpen) dropdown.classList.add('is-open');
    });
  });

  document.addEventListener('click', () => {
    dropdowns.forEach(d => d.classList.remove('is-open'));
  });

  document.querySelectorAll('.filter-dropdown-panel').forEach(panel => {
    panel.addEventListener('click', (e) => e.stopPropagation());
  });

  /* --- D. TƯƠNG TÁC CHI TIẾT SẢN PHẨM (Trang chi tiết) --- */
  // 1. Chuyển ảnh Thumbnail
  const mainImg = document.getElementById('mainProductImg');
  const thumbItems = document.querySelectorAll('.details-thumb-item');

  thumbItems.forEach(item => {
    item.addEventListener('click', () => {
      thumbItems.forEach(t => t.classList.remove('active'));
      item.classList.add('active');
      const newSrc = item.dataset.src || item.querySelector('img')?.src;
      if (mainImg && newSrc) mainImg.src = newSrc;
    });
  });

  // 2. Chọn Mẫu (Phụ kiện)
  const modelBtns = document.querySelectorAll('.option-chip-btn');
  const selectedLabel = document.getElementById('selectedModelLabel');
  const activePrice = document.getElementById('modelActivePrice');
  const oldPrice = document.getElementById('modelOldPrice');
  const clearBtn = document.getElementById('clearModelBtn');

  modelBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modelBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      if (selectedLabel) selectedLabel.textContent = btn.dataset.name || btn.textContent.trim();
      const price = parseInt(btn.dataset.price);
      const old = parseInt(btn.dataset.oldprice);
      if (activePrice && price) activePrice.textContent = `${price.toLocaleString('vi-VN')}₫`;
      if (oldPrice) {
        if (old && old > price) {
          oldPrice.style.display = 'inline';
          oldPrice.textContent = `${old.toLocaleString('vi-VN')}₫`;
        } else {
          oldPrice.style.display = 'none';
        }
      }
    });
  });

  clearBtn?.addEventListener('click', () => {
    if (modelBtns[0]) modelBtns[0].click();
  });

  // 3. Chọn Kích thước & Độ dày (Nệm)
  const bindOptionGroup = (containerId, displayId) => {
    const parent = document.getElementById(containerId);
    const display = document.getElementById(displayId);
    parent?.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        parent.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (display) display.textContent = btn.dataset.val || btn.textContent.trim();
      });
    });
  };

  bindOptionGroup('sizeOptions', 'selectedSize');
  bindOptionGroup('thicknessOptions', 'selectedThickness');

  // 4. Tăng / Giảm số lượng
  const qtyInput = document.getElementById('qtyInput');
  document.getElementById('qtyMinus')?.addEventListener('click', () => {
    let val = parseInt(qtyInput.value) || 1;
    if (val > 1) qtyInput.value = val - 1;
  });
  document.getElementById('qtyPlus')?.addEventListener('click', () => {
    let val = parseInt(qtyInput.value) || 1;
    qtyInput.value = val + 1;
  });

  // 5. Cập nhật chi tiết theo param ?id= nếu có
  const urlParams = new URLSearchParams(window.location.search);
  const paramId = parseInt(urlParams.get('id'));
  if (paramId && document.getElementById('productDetailsWrapper')) {
    const p = products.find(item => item.id === paramId);
    if (p) {
      const isPagesDir = window.location.pathname.includes('/pages/');
      const prefix = isPagesDir ? '../' : './';
      const resolveSrc = (s) => (s && s.startsWith('./') ? prefix + s.slice(2) : s);

      // Cập nhật tiêu đề
      const titleEl = document.querySelector('.details-title');
      if (titleEl) titleEl.textContent = p.name;

      // Cập nhật ảnh chính
      if (mainImg) mainImg.src = resolveSrc(p.image);

      // Cập nhật mô tả
      const descEl = document.querySelector('.details-desc');
      if (descEl) descEl.textContent = p.description;

      // Cập nhật giá
      if (activePrice) activePrice.textContent = `${p.salePrice.toLocaleString('vi-VN')}₫`;
      if (oldPrice && p.originalPrice > p.salePrice) {
        oldPrice.style.display = 'inline';
        oldPrice.textContent = `${p.originalPrice.toLocaleString('vi-VN')}₫`;
      }
    }
  }
});

