/* ==========================================================================
   MAIN JAVASCRIPT LOGIC
   Dữ liệu sản phẩm & danh mục được quản lý độc lập tại assets/js/products.js
   ========================================================================== */

const getProductList = () => (typeof products !== 'undefined' ? products : (window.products || []));
const getCategories = () => (typeof categories !== 'undefined' ? categories : (window.categories || []));

/* ==================== 2. CHỨC NĂNG CHUNG KHI TRANG TẢI XONG ==================== */
document.addEventListener('DOMContentLoaded', () => {
  const allProducts = getProductList();

  /* --- A. HERO SLIDER (Trang chủ) --- */
  const heroSlider = document.querySelector('.hero__slider, .hero-slider');
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll('.hero__slide, .slide');
    const dots = heroSlider.querySelectorAll('.hero__dot, .dot');
    const prevBtn = heroSlider.querySelector('#prevHero, .hero__btn--prev, .prev-btn');
    const nextBtn = heroSlider.querySelector('#nextHero, .hero__btn--next, .next-btn');
    let currentIndex = 0;

    function changeSlide(index) {
      if (index >= slides.length) currentIndex = 0;
      else if (index < 0) currentIndex = slides.length - 1;
      else currentIndex = index;

      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
        slide.classList.toggle('hero__slide--active', i === currentIndex);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
        dot.classList.toggle('hero__dot--active', i === currentIndex);
      });
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
    const playBtn = card.querySelector('.review-card__play-btn, .review-play-btn');
    const videoUrl = card.dataset.video;

    playBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (videoUrl) openVideo(videoUrl);
    });

    card.addEventListener('click', (e) => {
      if (e.target.closest('.review-card__product, .review-product-box')) return;
      if (videoUrl) openVideo(videoUrl);
    });
  });

  videoClose?.addEventListener('click', closeVideo);
  videoBackdrop?.addEventListener('click', closeVideo);

  /* --- B2. REVIEW CAROUSEL ARROWS --- */
  const reviewsTrack = document.getElementById('reviewsTrack');
  const prevReview = document.getElementById('prevReview');
  const nextReview = document.getElementById('nextReview');

  if (reviewsTrack) {
    const scrollCard = (direction) => {
      const card = reviewsTrack.querySelector('.review-card');
      const step = card ? card.offsetWidth + 16 : 300;
      reviewsTrack.scrollBy({ left: direction * step, behavior: 'smooth' });
    };

    prevReview?.addEventListener('click', () => scrollCard(-1));
    nextReview?.addEventListener('click', () => scrollCard(1));
  }

  /* --- C. BỘ LỌC DROPDOWN (Trang sản phẩm & Trang phụ kiện) --- */
  const dropdowns = document.querySelectorAll('.filter-dropdown');
  dropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.filter-dropdown__btn, .filter-dropdown-btn');
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

  document.querySelectorAll('.filter-dropdown__panel, .filter-dropdown-panel').forEach(panel => {
    panel.addEventListener('click', (e) => e.stopPropagation());
  });

  /* --- D. TƯƠNG TÁC CHI TIẾT SẢN PHẨM (Trang chi tiết) --- */
  // 1. Chuyển ảnh Thumbnail
  const mainImg = document.getElementById('mainProductImg');
  const thumbItems = document.querySelectorAll('.details__thumb-item, .details-thumb-item');

  thumbItems.forEach(item => {
    item.addEventListener('click', () => {
      thumbItems.forEach(t => t.classList.remove('active'));
      item.classList.add('active');
      const newSrc = item.dataset.src || item.querySelector('img')?.src;
      if (mainImg && newSrc) mainImg.src = newSrc;
    });
  });

  // 2. Chọn Mẫu (Phụ kiện)
  const modelBtns = document.querySelectorAll('.details__option-chip-btn, .option-chip-btn');
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
    parent?.querySelectorAll('.details__option-btn, .option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        parent.querySelectorAll('.details__option-btn, .option-btn').forEach(b => b.classList.remove('active'));
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

  if (document.getElementById('productDetailsWrapper')) {
    // Mặc định lấy theo param ?id=, nếu không có lấy ID 3 (Hybrid Plus) hoặc sản phẩm đầu tiên
    const targetId = paramId || 3;
    const p = allProducts.find(item => item.id === targetId) || allProducts[0];

    if (p) {
      // A. Cập nhật Gallery, Tiêu đề, Mô tả và Giá
      const titleEl = document.querySelector('.details__title, .details-title');
      if (titleEl) titleEl.textContent = p.name;

      if (mainImg) mainImg.src = p.image;

      const descEl = document.querySelector('.details__desc, .details-desc');
      if (descEl) descEl.textContent = p.description;

      const priceRangeEl = document.querySelector('.details__price-range');
      if (priceRangeEl && p.priceRange) {
        priceRangeEl.textContent = p.priceRange;
      }

      if (activePrice) activePrice.textContent = `${p.salePrice.toLocaleString('vi-VN')}₫`;
      if (oldPrice) {
        if (p.originalPrice > p.salePrice) {
          oldPrice.style.display = 'inline';
          oldPrice.textContent = `${p.originalPrice.toLocaleString('vi-VN')}₫`;
        } else {
          oldPrice.style.display = 'none';
        }
      }

      // Thumbnails
      const thumbsContainer = document.querySelector('.details__thumbs');
      if (thumbsContainer && p.thumbnails && p.thumbnails.length > 0) {
        thumbsContainer.innerHTML = p.thumbnails.map((t, idx) => `
          <div class="details__thumb-item details-thumb-item ${idx === 0 ? 'active' : ''}" data-src="${t}">
            <img src="${t}" alt="${p.name} - Thumbnail ${idx + 1}">
          </div>
        `).join('');

        thumbsContainer.querySelectorAll('.details__thumb-item').forEach(item => {
          item.addEventListener('click', () => {
            thumbsContainer.querySelectorAll('.details__thumb-item').forEach(t => t.classList.remove('active'));
            item.classList.add('active');
            if (mainImg) mainImg.src = item.dataset.src;
          });
        });
      }

      // Render Kích thước & Độ dày nếu là Nệm có sizes
      const optionContainer = document.querySelector('.details__option-group');
      if (optionContainer && p.sizes && p.sizes.length > 0) {
        let optHtml = `<div class="details__option-group-inner">`;
        optHtml += `
          <div class="details__option-subgroup" style="margin-bottom: 14px;">
            <div class="details__option-label-row">
              <span>Kích thước: <strong id="selectedSize">${p.sizes[0]}</strong></span>
            </div>
            <div class="details__option-list" id="sizeOptions">
              ${p.sizes.map((s, idx) => `
                <button type="button" class="details__option-btn ${idx === 0 ? 'active' : ''}" data-val="${s}">${s}</button>
              `).join('')}
            </div>
          </div>
        `;
        if (p.thickness && p.thickness.length > 0) {
          optHtml += `
            <div class="details__option-subgroup" style="margin-bottom: 14px;">
              <div class="details__option-label-row">
                <span>Độ dày: <strong id="selectedThickness">${p.thickness[0]}</strong></span>
              </div>
              <div class="details__option-list" id="thicknessOptions">
                ${p.thickness.map((th, idx) => `
                  <button type="button" class="details__option-btn ${idx === 0 ? 'active' : ''}" data-val="${th}">${th}</button>
                `).join('')}
              </div>
            </div>
          `;
        }
        if (p.gift) {
          optHtml += `
            <div class="details__option-subgroup" style="margin-bottom: 14px;">
              <div class="details__option-label-row">
                <span>Quà tặng: <strong>LỰA CHỌN 1</strong></span>
              </div>
              <div class="details__option-list" id="giftOptions">
                <button type="button" class="details__option-btn active" data-val="LỰA CHỌN 1">LỰA CHỌN 1 (${p.gift})</button>
              </div>
            </div>
          `;
        }
        optHtml += `</div>`;
        optionContainer.innerHTML = optHtml;

        bindOptionGroup('sizeOptions', 'selectedSize');
        bindOptionGroup('thicknessOptions', 'selectedThickness');
      }

      // B. Cập nhật phần Thông Tin Chi Tiết bên dưới (Details Body)
      if (p.details) {
        const d = p.details;
        const mainTitleEl = document.getElementById('contentMainTitle');
        if (mainTitleEl && d.targetAudience?.title) mainTitleEl.textContent = d.targetAudience.title;

        const audienceDescEl = document.getElementById('contentAudienceDesc');
        if (audienceDescEl && d.targetAudience?.description) audienceDescEl.textContent = d.targetAudience.description;

        const audienceImgEl = document.getElementById('contentAudienceImg');
        if (audienceImgEl && d.targetAudience?.image) audienceImgEl.src = d.targetAudience.image;

        const warrantyDescEl = document.getElementById('contentWarrantyDesc');
        if (warrantyDescEl && d.warranty?.description) warrantyDescEl.textContent = d.warranty.description;

        const warrantyImgEl = document.getElementById('contentWarrantyImg');
        if (warrantyImgEl && d.warranty?.image) warrantyImgEl.src = d.warranty.image;

        const featuresSubEl = document.getElementById('contentFeaturesSub');
        if (featuresSubEl && d.features?.subtitle) featuresSubEl.textContent = d.features.subtitle;

        const featuresDescEl = document.getElementById('contentFeaturesDesc');
        if (featuresDescEl && d.features?.description) featuresDescEl.textContent = d.features.description;

        const certImgEl = document.getElementById('contentCertImg');
        if (certImgEl && d.certifications?.certImage) certImgEl.src = d.certifications.certImage;

        const reasonImgEl = document.getElementById('contentReasonImg');
        if (reasonImgEl && d.certifications?.reasonImage) reasonImgEl.src = d.certifications.reasonImage;
      }

      // C. Render Sản phẩm tương tự / liên quan
      const relatedGrid = document.getElementById('detailsRelatedGrid');
      if (relatedGrid) {
        let relatedList = [];
        if (p.relatedIds && p.relatedIds.length > 0) {
          relatedList = p.relatedIds.map(rid => allProducts.find(item => item.id === rid)).filter(Boolean);
        }
        if (relatedList.length === 0) {
          relatedList = allProducts.filter(item => item.id !== p.id).slice(0, 4);
        }

        relatedGrid.innerHTML = relatedList.slice(0, 4).map(r => `
          <div class="details__related-card">
            <div class="details__related-thumb">
              ${r.discount ? `<span class="details__related-badge">-${r.discount}%</span>` : ''}
              <a href="./details.html?id=${r.id}">
                <img src="${r.image}" alt="${r.name}">
              </a>
              ${r.hasFlashSale ? `
                <div class="details__flash-sale-badge">
                  <span class="badge-tag">11.11</span> FLASH SALE
                </div>` : ''}
            </div>
            <div class="details__related-info">
              <h3 class="details__related-name">
                <a href="./details.html?id=${r.id}">${r.name}</a>
              </h3>
              <div class="details__related-stars">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
              <div class="details__related-price">
                ${r.priceRange || (r.salePrice ? `${r.salePrice.toLocaleString('vi-VN')}₫` : '')}
              </div>
            </div>
          </div>
        `).join('');
      }
    }
  }

  /* --- E. TÌM KIẾM SẢN PHẨM --- */
  const searchBoxes = document.querySelectorAll('.header__search, .header-search-box');
  searchBoxes.forEach(box => {
    const input = box.querySelector('.header__search-input, .header-search-input');
    const btn = box.querySelector('.header__search-btn, .header-search-btn');

    const handleSearch = () => {
      const query = input?.value.trim().toLowerCase();
      if (!query) return;

      const productCards = document.querySelectorAll('.shop-product-card, .product-card');
      const isShopPage = document.getElementById('shopProductGrid') !== null;
      if (isShopPage) {
        let matchCount = 0;
        productCards.forEach(card => {
          const title = card.querySelector('.shop__product-name, .shop-product-name, .product-card__title, .product-title')?.textContent.toLowerCase() || '';
          if (title.includes(query)) {
            card.style.display = '';
            matchCount++;
          } else {
            card.style.display = 'none';
          }
        });
        const countEl = document.getElementById('shopResultCount');
        if (countEl) countEl.textContent = `Tìm thấy ${matchCount} kết quả cho "${query}"`;
      } else {
        window.location.href = `./products.html?search=${encodeURIComponent(query)}`;
      }
    };

    btn?.addEventListener('click', handleSearch);
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSearch();
    });
  });

  const searchQuery = urlParams.get('search');
  if (searchQuery) {
    const searchInput = document.querySelector('.header__search-input, .header-search-input');
    if (searchInput) searchInput.value = searchQuery;
    const cards = document.querySelectorAll('.shop-product-card, .product-card');
    if (cards.length > 0) {
      let count = 0;
      cards.forEach(card => {
        const title = card.querySelector('.shop__product-name, .shop-product-name, .product-card__title, .product-title')?.textContent.toLowerCase() || '';
        if (title.includes(searchQuery.toLowerCase())) {
          card.style.display = '';
          count++;
        } else {
          card.style.display = 'none';
        }
      });
      const countEl = document.getElementById('shopResultCount');
      if (countEl) countEl.textContent = `Tìm thấy ${count} kết quả cho "${searchQuery}"`;
    }
  }
});
