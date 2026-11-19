/* ==========================================================================
   MAIN JAVASCRIPT LOGIC
   Dữ liệu sản phẩm & danh mục được quản lý độc lập tại assets/js/products.js
   ========================================================================== */

const getProductList = () => (typeof products !== 'undefined' ? products : (window.products || []));
const getCategories = () => (typeof categories !== 'undefined' ? categories : (window.categories || []));

/* ==================== 2. CHỨC NĂNG CHUNG KHI TRANG TẢI XONG ==================== */
document.addEventListener('DOMContentLoaded', () => {
  const allProducts = getProductList();

  /* --- A. HERO SLIDER (GSAP CINEMATIC MOTION & TIẾN TRÌNH THỜI GIAN) --- */
  const heroSlider = document.querySelector('.hero__slider, .hero-slider');
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll('.hero__slide, .slide');
    const dots = heroSlider.querySelectorAll('.hero__dot, .dot');
    const prevBtn = heroSlider.querySelector('#prevHero, .hero__btn--prev, .prev-btn');
    const nextBtn = heroSlider.querySelector('#nextHero, .hero__btn--next, .next-btn');
    const progressBar = heroSlider.querySelector('#heroProgressBar, .hero__progress-bar');
    let currentIndex = 0;
    let isAnimating = false;
    let progressTween = null;

    if (typeof gsap !== 'undefined') {
      // 1. Khởi tạo trạng thái ban đầu của slide
      slides.forEach((slide, i) => {
        if (i === 0) {
          gsap.set(slide, { opacity: 1, visibility: 'visible', zIndex: 2 });
          const img = slide.querySelector('.hero__img');
          if (img) gsap.fromTo(img, { scale: 1.06 }, { scale: 1, duration: 4.5, ease: 'sine.out' });
        } else {
          gsap.set(slide, { opacity: 0, visibility: 'hidden', zIndex: 1 });
        }
      });

      // 2. Hiệu ứng lơ lửng cho huy hiệu (Floating Luxury Badge)
      const badge = heroSlider.querySelector('.hero__badge');
      if (badge) {
        gsap.to(badge, { y: -5, duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      }

      // 3. Hiệu ứng tương tác nảy nhẹ cho nút điều hướng (Micro-interactions)
      [prevBtn, nextBtn].forEach(btn => {
        if (!btn) return;
        btn.addEventListener('mouseenter', () => gsap.to(btn, { scale: 1.15, duration: 0.2, ease: 'back.out(2)' }));
        btn.addEventListener('mouseleave', () => gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power1.out' }));
        btn.addEventListener('mousedown', () => gsap.to(btn, { scale: 0.92, duration: 0.1 }));
        btn.addEventListener('mouseup', () => gsap.to(btn, { scale: 1.15, duration: 0.15 }));
      });

      // 4. Hàm chuyển slide cao cấp với Parallax hướng trượt & Ken Burns Zoom
      function goToSlideGSAP(nextIndex, direction = 1) {
        if (isAnimating || nextIndex === currentIndex) return;
        isAnimating = true;

        const currentSlide = slides[currentIndex];
        const nextSlide = slides[nextIndex];
        const currentImg = currentSlide ? currentSlide.querySelector('.hero__img') : null;
        const nextImg = nextSlide ? nextSlide.querySelector('.hero__img') : null;

        // Chuẩn bị vị trí cho slide mới
        gsap.set(nextSlide, {
          visibility: 'visible',
          opacity: 0,
          xPercent: direction * 6,
          zIndex: 3
        });
        if (nextImg) gsap.set(nextImg, { scale: 1.07 });

        // Slide hiện tại mờ dần và trượt nhẹ ra ngoài
        if (currentSlide) {
          gsap.to(currentSlide, {
            opacity: 0,
            xPercent: -direction * 6,
            duration: 0.85,
            ease: 'power2.inOut',
            onComplete: () => {
              currentSlide.classList.remove('active');
              gsap.set(currentSlide, { visibility: 'hidden', zIndex: 1, xPercent: 0 });
            }
          });
        }

        // Slide mới hiện rõ và trượt vào tâm
        gsap.to(nextSlide, {
          opacity: 1,
          xPercent: 0,
          duration: 0.85,
          ease: 'power2.inOut',
          onComplete: () => {
            nextSlide.classList.add('active');
            isAnimating = false;
          }
        });

        // Hiệu ứng Ken Burns thu phóng mượt mà
        if (nextImg) {
          gsap.to(nextImg, {
            scale: 1,
            duration: 5,
            ease: 'sine.out'
          });
        }

        // Cập nhật dots
        dots.forEach((dot, i) => dot.classList.toggle('active', i === nextIndex));
        currentIndex = nextIndex;

        // Reset thanh tiến trình
        startProgress();
      }

      // 5. Thanh tiến trình tự động chạy (Progress Bar)
      function startProgress() {
        if (!progressBar) return;
        if (progressTween) progressTween.kill();
        gsap.set(progressBar, { scaleX: 0 });
        progressTween = gsap.to(progressBar, {
          scaleX: 1,
          duration: 4.8,
          ease: 'none',
          onComplete: () => {
            goToSlideGSAP((currentIndex + 1) % slides.length, 1);
          }
        });
      }

      // Tạm dừng khi rê chuột và tiếp tục khi rê ra
      heroSlider.addEventListener('mouseenter', () => progressTween?.pause());
      heroSlider.addEventListener('mouseleave', () => progressTween?.resume());

      // Bắt sự kiện Click nút Next/Prev
      nextBtn?.addEventListener('click', () => {
        goToSlideGSAP((currentIndex + 1) % slides.length, 1);
      });
      prevBtn?.addEventListener('click', () => {
        goToSlideGSAP((currentIndex - 1 + slides.length) % slides.length, -1);
      });

      // Bắt sự kiện Click Dots
      dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
          const targetIndex = Number(e.currentTarget.dataset.index);
          if (targetIndex !== currentIndex) {
            goToSlideGSAP(targetIndex, targetIndex > currentIndex ? 1 : -1);
          }
        });
      });

      // Bắt đầu chạy tiến trình
      startProgress();
    } else {
      // Fallback chuẩn nếu không có GSAP
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
  }

  /* --- A2. TSPARTICLES: HIỆU ỨNG HẠT PHÁT SÁNG NGHỆ THUẬT (TRANG CHỦ) --- */
  const particlesContainer = document.getElementById('heroParticles');
  if (particlesContainer && typeof tsParticles !== 'undefined') {
    tsParticles.load('heroParticles', {
      fpsLimit: 60,
      particles: {
        number: {
          value: 22,
          density: { enable: true, value_area: 800 }
        },
        color: {
          value: ["#ffffff", "#fbcfe8", "#EB2365", "#fbbf24"]
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 0.6,
          random: true,
          animation: {
            enable: true,
            speed: 0.8,
            minimumValue: 0.2,
            sync: false
          }
        },
        size: {
          value: 3.5,
          random: { enable: true, minimumValue: 1.2 },
          animation: {
            enable: true,
            speed: 1.5,
            minimumValue: 1,
            sync: false
          }
        },
        move: {
          enable: true,
          speed: 0.9,
          direction: "top-right",
          random: true,
          straight: false,
          outModes: { default: "out" }
        }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "bubble" },
          resize: true
        },
        modes: {
          bubble: { distance: 130, size: 5, duration: 2, opacity: 0.85 }
        }
      },
      detectRetina: true
    }).catch(err => console.log('tsParticles info:', err));
  }

  /* --- A3. WOW.JS: CUỘN TRANG KÍCH HOẠT HIỆU ỨNG (TRANG CHỦ) --- */
  if (typeof WOW !== 'undefined') {
    new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 60,
      mobile: true,
      live: true
    }).init();
  }

  /* --- A4. GSAP: SỐ ĐẾM SHOWROOM (SHOWROOM COUNTER ANIMATION) --- */
  const showroomCounterEl = document.getElementById('showroomCounter');
  if (showroomCounterEl && typeof gsap !== 'undefined') {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counterObj = { val: 0 };
          gsap.to(counterObj, {
            val: 21,
            duration: 1.8,
            ease: "power2.out",
            onUpdate: () => {
              showroomCounterEl.textContent = Math.floor(counterObj.val);
            }
          });
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(showroomCounterEl);
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

      const activePrice = document.getElementById('modelActivePrice');
      const oldPrice = document.getElementById('modelOldPrice');
      const qtyInput = document.getElementById('qtyInput');
      const totalEl = document.getElementById('detailsTotalPrice');
      const totalQtyEl = document.getElementById('detailsTotalQty');

      // Hàm tính toán giá theo biến thể đang được chọn
      const calculateVariantUnitPrices = () => {
        // 1. Nếu là Nệm (có kích thước và/hoặc độ dày)
        if (p.sizes && p.sizes.length > 0) {
          const activeSizeBtn = document.querySelector('#sizeOptions .details__option-btn.active');
          const sizeIdx = activeSizeBtn ? parseInt(activeSizeBtn.dataset.idx || 0) : 0;

          const activeThickBtn = document.querySelector('#thicknessOptions .details__option-btn.active');
          const thickIdx = activeThickBtn ? parseInt(activeThickBtn.dataset.idx || 0) : 0;

          let minPrice = p.salePrice || 0;
          let maxPrice = p.originalPrice || p.salePrice || 0;
          if (p.priceRange) {
            const nums = p.priceRange.match(/[\d\.]+/g);
            if (nums && nums.length >= 2) {
              const p1 = parseInt(nums[0].replace(/\./g, ''));
              const p2 = parseInt(nums[1].replace(/\./g, ''));
              if (p1 && p2) {
                minPrice = Math.min(p1, p2);
                maxPrice = Math.max(p1, p2);
              }
            }
          }
          if (maxPrice <= minPrice) {
            maxPrice = Math.round((minPrice * 1.3) / 10000) * 10000;
          }

          const diff = maxPrice - minPrice;
          const sLen = Math.max((p.sizes.length - 1), 1);
          const tLen = p.thickness && p.thickness.length > 1 ? p.thickness.length - 1 : 1;

          let unitSale = minPrice;
          if (p.thickness && p.thickness.length > 1) {
            const sizePart = (sizeIdx / sLen) * (diff * 0.55);
            const thickPart = (thickIdx / tLen) * (diff * 0.45);
            unitSale = minPrice + sizePart + thickPart;
          } else if (p.sizes.length > 1) {
            unitSale = minPrice + (sizeIdx / sLen) * diff;
          }
          unitSale = Math.round(unitSale / 10000) * 10000;

          const discountRatio = (p.originalPrice && p.salePrice && p.originalPrice > p.salePrice)
            ? (p.originalPrice / p.salePrice)
            : (1 / (1 - (p.discount || 20) / 100));
          let unitOld = Math.round((unitSale * discountRatio) / 10000) * 10000;

          return { salePrice: unitSale, oldPrice: unitOld };
        }

        // 2. Nếu là Phụ kiện (có models)
        if (p.models && p.models.length > 0) {
          const activeModelBtn = document.querySelector('#modelOptions .details__option-chip-btn.active');
          const modelIdx = activeModelBtn ? parseInt(activeModelBtn.dataset.idx || 0) : 0;
          const m = p.models[modelIdx] || p.models[0];
          return {
            salePrice: m.price,
            oldPrice: m.oldPrice || Math.round((m.price * 1.3) / 10000) * 10000
          };
        }

        // 3. Sản phẩm đơn lẻ không có biến thể
        return {
          salePrice: p.salePrice || 0,
          oldPrice: p.originalPrice || 0
        };
      };

      // Hàm cập nhật hiển thị Đơn giá và Giá tổng
      const refreshPriceAndTotal = () => {
        const { salePrice, oldPrice: vOldPrice } = calculateVariantUnitPrices();

        // Cập nhật đơn giá biến thể
        if (activePrice && salePrice) {
          activePrice.textContent = `${salePrice.toLocaleString('vi-VN')}₫`;
        }

        if (oldPrice) {
          if (vOldPrice && vOldPrice > salePrice) {
            oldPrice.style.display = 'inline';
            oldPrice.textContent = `${vOldPrice.toLocaleString('vi-VN')}₫`;
          } else {
            oldPrice.style.display = 'none';
          }
        }

        // Cập nhật giá tổng
        const qty = Math.max(1, parseInt(qtyInput?.value) || 1);
        if (qtyInput) qtyInput.value = qty;
        if (totalQtyEl) totalQtyEl.textContent = qty;

        const subtotal = salePrice * qty;
        if (totalEl) {
          totalEl.textContent = `${subtotal.toLocaleString('vi-VN')}₫`;
        }
      };

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

      // Render Nhóm biến thể (Sizes & Thickness cho Nệm, Models cho Phụ kiện)
      const optionContainer = document.querySelector('.details__option-group');
      if (optionContainer) {
        // TH 1: Nệm có kích thước & độ dày
        if (p.sizes && p.sizes.length > 0) {
          let optHtml = `<div class="details__option-group-inner">`;
          optHtml += `
            <div class="details__option-subgroup" style="margin-bottom: 14px;">
              <div class="details__option-label-row">
                <span>Kích thước: <strong id="selectedSize">${p.sizes[0]}</strong></span>
              </div>
              <div class="details__option-list" id="sizeOptions">
                ${p.sizes.map((s, idx) => `
                  <button type="button" class="details__option-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}" data-val="${s}">${s}</button>
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
                    <button type="button" class="details__option-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}" data-val="${th}">${th}</button>
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

          // Sự kiện click Kích thước
          const sizeList = document.getElementById('sizeOptions');
          const sizeDisplay = document.getElementById('selectedSize');
          sizeList?.querySelectorAll('.details__option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              sizeList.querySelectorAll('.details__option-btn').forEach(b => b.classList.remove('active'));
              btn.classList.add('active');
              if (sizeDisplay) sizeDisplay.textContent = btn.dataset.val || btn.textContent.trim();
              refreshPriceAndTotal();
            });
          });

          // Sự kiện click Độ dày
          const thickList = document.getElementById('thicknessOptions');
          const thickDisplay = document.getElementById('selectedThickness');
          thickList?.querySelectorAll('.details__option-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              thickList.querySelectorAll('.details__option-btn').forEach(b => b.classList.remove('active'));
              btn.classList.add('active');
              if (thickDisplay) thickDisplay.textContent = btn.dataset.val || btn.textContent.trim();
              refreshPriceAndTotal();
            });
          });
        }
        // TH 2: Phụ kiện có danh sách models
        else if (p.models && p.models.length > 0) {
          let optHtml = `
            <div class="details__option-group-inner">
              <div class="details__option-label-row option-label-row">
                <span>Chọn mẫu: <strong id="selectedModelLabel">${p.models[0].name}</strong></span>
                <a href="javascript:void(0)" class="details__btn-clear-model btn-clear-model" id="clearModelBtn">XÓA</a>
              </div>
              <div class="details__option-model-chips option-model-chips" id="modelOptions">
                ${p.models.map((m, idx) => `
                  <button type="button" class="details__option-chip-btn option-chip-btn ${idx === 0 ? 'active' : ''}" 
                    data-idx="${idx}" 
                    data-price="${m.price}" 
                    data-oldprice="${m.oldPrice || ''}" 
                    data-name="${m.name}">
                    ${m.name}
                  </button>
                `).join('')}
              </div>
            </div>
          `;
          optionContainer.innerHTML = optHtml;

          const modelChips = optionContainer.querySelectorAll('.details__option-chip-btn');
          const modelDisplay = document.getElementById('selectedModelLabel');
          modelChips.forEach(btn => {
            btn.addEventListener('click', () => {
              modelChips.forEach(b => b.classList.remove('active'));
              btn.classList.add('active');
              if (modelDisplay) modelDisplay.textContent = btn.dataset.name || btn.textContent.trim();
              refreshPriceAndTotal();
            });
          });

          document.getElementById('clearModelBtn')?.addEventListener('click', () => {
            if (modelChips[0]) modelChips[0].click();
          });
        }
        // TH 3: Không có biến thể
        else {
          optionContainer.innerHTML = '';
        }
      }

      // Tăng / Giảm số lượng & Cập nhật giá tổng
      document.getElementById('qtyMinus')?.addEventListener('click', () => {
        let val = parseInt(qtyInput?.value) || 1;
        if (val > 1) {
          if (qtyInput) qtyInput.value = val - 1;
          refreshPriceAndTotal();
        }
      });

      document.getElementById('qtyPlus')?.addEventListener('click', () => {
        let val = parseInt(qtyInput?.value) || 1;
        if (qtyInput) qtyInput.value = val + 1;
        refreshPriceAndTotal();
      });

      qtyInput?.addEventListener('input', () => {
        let val = parseInt(qtyInput.value);
        if (isNaN(val) || val < 1) val = 1;
        qtyInput.value = val;
        refreshPriceAndTotal();
      });

      // Khởi tạo tính giá ban đầu khi vào trang
      refreshPriceAndTotal();

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

      // D. Cập nhật Breadcrumb trang Chi Tiết
      const detailBreadcrumb = document.querySelector('.details__breadcrumb, .breadcrumb-section');
      if (detailBreadcrumb) {
        const isAcc = p.categoryType === 'accessory' || p.id >= 100;
        const parentLink = isAcc ? './accessories.html' : './products.html';
        const parentText = isAcc ? 'Phụ kiện' : 'Nệm';
        detailBreadcrumb.innerHTML = `
          <div class="container">
            <a href="./index.html">Trang chủ</a>
            <span>/</span>
            <a href="${parentLink}">${parentText}</a>
            <span>/</span>
            <span>${p.category || parentText}</span>
            <span>/</span>
            <span style="color: #1e293b; font-weight: 500;">${p.name}</span>
          </div>
        `;
      }
    }
  }

  /* --- E. QUẢN LÝ CỬA HÀNG (BỘ LỌC, TÌM KIẾM, ĐẾM SỐ LƯỢNG & PHÂN TRANG) --- */
  const shopGrid = document.getElementById('shopProductGrid');
  if (shopGrid) {
    const isAccessoryPage = window.location.pathname.includes('accessories.html') || document.querySelector('.shop__breadcrumb a[href*="accessories"]') !== null;
    const baseCategoryTitle = isAccessoryPage ? 'Tất cả phụ kiện' : 'Tất cả sản phẩm';
    const baseScopeList = allProducts.filter(p => isAccessoryPage ? (p.categoryType === 'accessory' || p.id >= 100) : (!p.categoryType && p.id < 100));

    let currentFilterCat = urlParams.get('cat') || 'all';
    let currentFilterPrice = 'all';
    let currentSort = 'default';
    let currentSearch = urlParams.get('search') ? urlParams.get('search').trim().toLowerCase() : '';
    let currentPage = parseInt(urlParams.get('page')) || 1;
    const ITEMS_PER_PAGE = 8;

    const breadcrumbCatEl = document.getElementById('breadcrumbCategory');
    const resultCountEl = document.getElementById('shopResultCount');
    const paginationContainer = document.querySelector('.shop__pagination, .shop-pagination');
    const sortSelect = document.getElementById('shopSortSelect');
    const labelCategory = document.getElementById('labelCategory');
    const labelPrice = document.getElementById('labelPrice');
    const resetFilterBtn = document.getElementById('btnResetFilter');

    // 1. Hàm tính toán danh sách sản phẩm sau lọc, tìm kiếm và sắp xếp
    function getFilteredProducts() {
      let list = [...baseScopeList];

      // Lọc theo danh mục
      if (currentFilterCat && currentFilterCat !== 'all') {
        list = list.filter(p => p.categoryId === currentFilterCat);
      }

      // Lọc theo mức giá
      if (currentFilterPrice === 'under-5m') {
        list = list.filter(p => p.salePrice < 5000000);
      } else if (currentFilterPrice === '5m-10m') {
        list = list.filter(p => p.salePrice >= 5000000 && p.salePrice <= 10000000);
      } else if (currentFilterPrice === '10m-20m') {
        list = list.filter(p => p.salePrice > 10000000 && p.salePrice <= 20000000);
      } else if (currentFilterPrice === 'over-20m') {
        list = list.filter(p => p.salePrice > 20000000);
      }

      // Lọc theo từ khóa tìm kiếm
      if (currentSearch) {
        list = list.filter(p => {
          const name = (p.name || '').toLowerCase();
          const desc = (p.description || '').toLowerCase();
          const cat = (p.category || '').toLowerCase();
          return name.includes(currentSearch) || desc.includes(currentSearch) || cat.includes(currentSearch);
        });
      }

      // Sắp xếp
      if (currentSort === 'price-asc') {
        list.sort((a, b) => a.salePrice - b.salePrice);
      } else if (currentSort === 'price-desc') {
        list.sort((a, b) => b.salePrice - a.salePrice);
      } else if (currentSort === 'rating') {
        list.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
      }

      return list;
    }

    // 2. Render sản phẩm và phân trang
    function renderShop() {
      const filtered = getFilteredProducts();
      const totalItems = filtered.length;
      const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 1;

      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;

      // A. Cập nhật Breadcrumb chuẩn xác
      if (breadcrumbCatEl) {
        if (currentSearch) {
          breadcrumbCatEl.textContent = `Tìm kiếm: "${currentSearch}"`;
        } else if (currentFilterCat && currentFilterCat !== 'all') {
          const catList = isAccessoryPage ? getCategories() : getCategories();
          const allCats = [...categories, ...(typeof accessoryCategories !== 'undefined' ? accessoryCategories : [])];
          const found = allCats.find(c => c.id === currentFilterCat);
          breadcrumbCatEl.textContent = found ? found.name : currentFilterCat;
        } else {
          breadcrumbCatEl.textContent = baseCategoryTitle;
        }
      }

      // B. Cập nhật số lượng tìm kiếm / kết quả
      if (resultCountEl) {
        if (currentSearch) {
          if (totalItems > 0) {
            resultCountEl.textContent = `Tìm thấy ${totalItems} sản phẩm cho từ khóa "${currentSearch}"`;
          } else {
            resultCountEl.textContent = `Không tìm thấy sản phẩm nào phù hợp với từ khóa "${currentSearch}"`;
          }
        } else {
          if (totalItems === 0) {
            resultCountEl.textContent = `Không có sản phẩm nào phù hợp`;
          } else if (totalItems <= ITEMS_PER_PAGE) {
            resultCountEl.textContent = `Hiển thị tất cả ${totalItems} kết quả`;
          } else {
            const start = (currentPage - 1) * ITEMS_PER_PAGE + 1;
            const end = Math.min(currentPage * ITEMS_PER_PAGE, totalItems);
            resultCountEl.textContent = `Hiển thị ${start}–${end} của ${totalItems} kết quả`;
          }
        }
      }

      // C. Cắt trang hiện tại
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const pageItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

      if (pageItems.length === 0) {
        shopGrid.innerHTML = `
          <div class="shop__empty" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #64748b;">
            <p style="font-size: 16px; margin-bottom: 14px;">Không tìm thấy sản phẩm nào phù hợp yêu cầu.</p>
            <button type="button" id="btnShopResetAll" style="padding: 10px 20px; background: var(--color-primary); color: #fff; border: none; border-radius: 4px; font-weight: 600; cursor: pointer;">
              Xem tất cả sản phẩm
            </button>
          </div>
        `;
        document.getElementById('btnShopResetAll')?.addEventListener('click', () => {
          currentFilterCat = 'all';
          currentFilterPrice = 'all';
          currentSearch = '';
          currentSort = 'default';
          currentPage = 1;
          const searchInput = document.querySelector('.header__search-input');
          if (searchInput) searchInput.value = '';
          renderShop();
        });
      } else {
        shopGrid.innerHTML = pageItems.map(p => {
          const hoverImg = p.hoverImage || (p.thumbnails && p.thumbnails.length > 1 ? p.thumbnails[1] : p.image);
          return `
          <div class="shop__product-card shop-product-card" data-id="${p.id}">
            <div class="shop__product-thumb shop-product-thumb">
              ${p.discount ? `<span class="shop__badge-discount shop-badge-discount">-${p.discount}%</span>` : ''}
              <a href="./details.html?id=${p.id}" class="shop__img-link">
                <img src="${p.image}" alt="${p.name}" class="shop__img shop__img--primary">
                <img src="${hoverImg}" alt="${p.name}" class="shop__img shop__img--secondary" loading="lazy">
              </a>
              <!-- Nút giỏ hàng dẫn tới details -->
              <a href="./details.html?id=${p.id}" class="shop__cart-btn" title="Xem chi tiết & Mua hàng" aria-label="Xem chi tiết">
                <i class="fa-solid fa-bag-shopping"></i>
              </a>
              <!-- Thanh QUICK VIEW dẫn tới details -->
              <a href="./details.html?id=${p.id}" class="shop__quickview-btn">
                QUICK VIEW
              </a>
              ${p.hasFlashSale ? `
                <div class="shop__flash-sale-badge" style="position: absolute; top: 10px; right: 10px; background: #e11d48; color: #fff; font-size: 11px; font-weight: 700; padding: 2px 7px; border-radius: 3px; z-index: 3;">
                  FLASH SALE
                </div>` : ''}
            </div>
            <div class="shop__product-info shop-product-info">
              <h3 class="shop__product-name shop-product-name">
                <a href="./details.html?id=${p.id}">${p.name}</a>
              </h3>
              <div class="shop__product-stars shop-product-stars">
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
              </div>
              <div class="shop__product-price shop-product-price">
                ${p.originalPrice > p.salePrice ? `<span class="shop__old-price shop-old-price">${p.originalPrice.toLocaleString('vi-VN')}₫</span>` : ''}
                <span class="shop__sale-price shop-sale-price">${p.salePrice.toLocaleString('vi-VN')}₫</span>
              </div>
              ${p.originalPrice > p.salePrice ? `
                <div class="shop__saving-text shop-saving-text">
                  Tiết kiệm: <strong>${(p.originalPrice - p.salePrice).toLocaleString('vi-VN')}₫</strong>
                </div>` : ''}
            </div>
          </div>
        `;
        }).join('');
      }

      // D. Render và xử lý Phân Trang Hoạt Động (Pagination)
      if (paginationContainer) {
        if (totalPages <= 1) {
          paginationContainer.innerHTML = '';
          paginationContainer.style.display = 'none';
        } else {
          paginationContainer.style.display = 'flex';
          let pagHtml = '';

          // Nút Previous
          if (currentPage > 1) {
            pagHtml += `<button type="button" class="shop-pag-btn" data-page="${currentPage - 1}" title="Trang trước"><i class="fa-solid fa-chevron-left"></i></button>`;
          }

          // Các nút trang 1, 2, 3...
          for (let i = 1; i <= totalPages; i++) {
            pagHtml += `<button type="button" class="shop-pag-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
          }

          // Nút Next
          if (currentPage < totalPages) {
            pagHtml += `<button type="button" class="shop-pag-btn" data-page="${currentPage + 1}" title="Trang kế tiếp"><i class="fa-solid fa-chevron-right"></i></button>`;
          }

          paginationContainer.innerHTML = pagHtml;

          // Gắn sự kiện click chuyển trang
          paginationContainer.querySelectorAll('.shop-pag-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              const targetPage = parseInt(btn.dataset.page);
              if (targetPage && targetPage !== currentPage) {
                currentPage = targetPage;
                renderShop();
                shopGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            });
          });
        }
      }
    }

    // Gắn sự kiện Radio Loại sản phẩm
    document.querySelectorAll('input[name="filter-cat"]').forEach(radio => {
      if (radio.value === currentFilterCat) radio.checked = true;
      radio.addEventListener('change', (e) => {
        currentFilterCat = e.target.value;
        currentSearch = ''; // Xóa search khi chọn lọc danh mục
        currentPage = 1;
        if (labelCategory) {
          labelCategory.textContent = e.target.value === 'all' ? (isAccessoryPage ? 'Loại phụ kiện' : 'Loại nệm') : e.target.parentElement.textContent.trim();
        }
        document.querySelectorAll('.filter-dropdown').forEach(d => d.classList.remove('is-open'));
        renderShop();
      });
    });

    // Gắn sự kiện Radio Khoảng giá
    document.querySelectorAll('input[name="filter-price"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        currentFilterPrice = e.target.value;
        currentPage = 1;
        if (labelPrice) {
          labelPrice.textContent = e.target.value === 'all' ? 'Khoảng giá' : e.target.parentElement.textContent.trim();
        }
        document.querySelectorAll('.filter-dropdown').forEach(d => d.classList.remove('is-open'));
        renderShop();
      });
    });

    // Nút Xóa bộ lọc
    resetFilterBtn?.addEventListener('click', () => {
      currentFilterCat = 'all';
      currentFilterPrice = 'all';
      currentSearch = '';
      currentSort = 'default';
      currentPage = 1;
      document.querySelectorAll('input[name="filter-cat"]').forEach(r => r.checked = (r.value === 'all'));
      document.querySelectorAll('input[name="filter-price"]').forEach(r => r.checked = (r.value === 'all'));
      if (labelCategory) labelCategory.textContent = isAccessoryPage ? 'Loại phụ kiện' : 'Loại nệm';
      if (labelPrice) labelPrice.textContent = 'Khoảng giá';
      if (sortSelect) sortSelect.value = 'default';
      const searchInput = document.querySelector('.header__search-input');
      if (searchInput) searchInput.value = '';
      renderShop();
    });

    // Select sắp xếp
    sortSelect?.addEventListener('change', (e) => {
      currentSort = e.target.value;
      currentPage = 1;
      renderShop();
    });

    // Xuất hàm tìm kiếm cho shop
    window._triggerShopSearch = (q) => {
      currentSearch = q.trim().toLowerCase();
      currentPage = 1;
      renderShop();
    };

    // Khởi tạo render lần đầu
    renderShop();
  }

  /* --- F. THANH TÌM KIẾM TOÀN TRANG (HEADER SEARCH) --- */
  const searchBoxes = document.querySelectorAll('.header__search, .header-search-box');
  searchBoxes.forEach(box => {
    const input = box.querySelector('.header__search-input, .header-search-input');
    const btn = box.querySelector('.header__search-btn, .header-search-btn');

    const handleSearch = () => {
      const query = input?.value.trim().toLowerCase();
      if (!query) return;

      if (document.getElementById('shopProductGrid') && typeof window._triggerShopSearch === 'function') {
        window._triggerShopSearch(query);
      } else {
        window.location.href = `./products.html?search=${encodeURIComponent(query)}`;
      }
    };

    btn?.addEventListener('click', handleSearch);
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSearch();
    });
  });

  // Nếu truy cập từ trang khác có param ?search=
  const initSearchParam = urlParams.get('search');
  if (initSearchParam) {
    const searchInputs = document.querySelectorAll('.header__search-input, .header-search-input');
    searchInputs.forEach(inp => inp.value = initSearchParam);
  }

  /* --- G. 21+ PREMIUM SHOWROOMS (Gallery & Bộ lọc Tìm theo tỉnh thành) --- */
  const showroomMainImg = document.getElementById('showroomMainImage');
  const showroomThumbs = document.querySelectorAll('.showroom-gallery__thumb');

  // 1. Chuyển ảnh Showroom khi bấm Thumbnail
  showroomThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      showroomThumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const newSrc = thumb.dataset.src;
      if (showroomMainImg && newSrc) {
        showroomMainImg.style.opacity = '0.4';
        setTimeout(() => {
          showroomMainImg.src = newSrc;
          showroomMainImg.style.opacity = '1';
        }, 120);
      }
    });
  });

  // 2. Dữ liệu hệ thống 21+ Showroom thực tế
  const SHOWROOMS_DATA = [
    {
      name: "Nệm Thuần Việt Showroom Vinh và Nghệ An (đại lý)",
      address: "26 Tô Hiến Thành, Khối 5 Quang Trung, Phường Thành Vinh, tỉnh Nghệ An",
      hours: "7h30 - 21h30 (Thứ 2 - Chủ Nhật)",
      province: "Nghệ An",
      district: "Thành phố Vinh",
      mapUrl: "https://maps.google.com/?q=26+Tô+Hiến+Thành,+Quang+Trung,+Thành+phố+Vinh,+Nghệ+An"
    },
    {
      name: "Nệm Thuần Việt Showroom Võ Cường, Bắc Ninh (Đại lý Ngọc Anh)",
      address: "358 Nguyễn Trãi, Võ Cường, Bắc Ninh",
      hours: "7h30 - 21h30 (Thứ 2 - Chủ Nhật)",
      province: "Bắc Ninh",
      district: "Thành phố Bắc Ninh",
      mapUrl: "https://maps.google.com/?q=358+Nguyễn+Trãi,+Võ+Cường,+Bắc+Ninh"
    },
    {
      name: "Nệm Thuần Việt Showroom Quận 10, Hồ Chí Minh",
      address: "562 3 Tháng 2, Diên Hồng, Hồ Chí Minh, Việt Nam",
      hours: "7h30 - 21h30 (Thứ 2 - Chủ Nhật)",
      province: "TP. Hồ Chí Minh",
      district: "Quận 10",
      mapUrl: "https://maps.google.com/?q=562+Ba+Thang+Hai,+Quan+10,+Ho+Chi+Minh"
    },
    {
      name: "Nệm Thuần Việt Showroom Tân Phú, Hồ Chí Minh",
      address: "303/41 Tân Sơn Nhì, Phường Tân Sơn Nhì, Quận Tân Phú, TP. HCM",
      hours: "7h30 - 21h30 (Thứ 2 - Chủ Nhật)",
      province: "TP. Hồ Chí Minh",
      district: "Quận Tân Phú",
      mapUrl: "https://maps.google.com/?q=303/41+Tân+Sơn+Nhì,+Tân+Phú,+TP.+HCM"
    },
    {
      name: "Nệm Thuần Việt Showroom Gò Vấp, Hồ Chí Minh",
      address: "1116 Quang Trung, Phường 8, Quận Gò Vấp, TP. HCM",
      hours: "7h30 - 21h30 (Thứ 2 - Chủ Nhật)",
      province: "TP. Hồ Chí Minh",
      district: "Quận Gò Vấp",
      mapUrl: "https://maps.google.com/?q=1116+Quang+Trung,+Go+Vap,+TP.+HCM"
    },
    {
      name: "Nệm Thuần Việt Showroom Bình Thạnh, Hồ Chí Minh",
      address: "150 Bạch Đằng, Phường 24, Quận Bình Thạnh, TP. HCM",
      hours: "7h30 - 21h30 (Thứ 2 - Chủ Nhật)",
      province: "TP. Hồ Chí Minh",
      district: "Quận Bình Thạnh",
      mapUrl: "https://maps.google.com/?q=150+Bạch+Đằng,+Bình+Thạnh,+TP.+HCM"
    },
    {
      name: "Nệm Thuần Việt Showroom Cầu Giấy, Hà Nội",
      address: "102 Cầu Giấy, Phường Quan Hoa, Quận Cầu Giấy, Hà Nội",
      hours: "7h30 - 21h30 (Thứ 2 - Chủ Nhật)",
      province: "Hà Nội",
      district: "Quận Cầu Giấy",
      mapUrl: "https://maps.google.com/?q=102+Cầu+Giấy,+Hà+Nội"
    },
    {
      name: "Nệm Thuần Việt Showroom Đống Đa, Hà Nội",
      address: "204 Xã Đàn, Phường Phương Liên, Quận Đống Đa, Hà Nội",
      hours: "7h30 - 21h30 (Thứ 2 - Chủ Nhật)",
      province: "Hà Nội",
      district: "Quận Đống Đa",
      mapUrl: "https://maps.google.com/?q=204+Xã+Đàn,+Đống+Đa,+Hà+Nội"
    },
    {
      name: "Nệm Thuần Việt Showroom Thanh Khê, Đà Nẵng",
      address: "452 Điện Biên Phủ, Phường Thanh Khê Đông, Quận Thanh Khê, Đà Nẵng",
      hours: "7h30 - 21h30 (Thứ 2 - Chủ Nhật)",
      province: "Đà Nẵng",
      district: "Quận Thanh Khê",
      mapUrl: "https://maps.google.com/?q=452+Điện+Biên+Phủ,+Thanh+Khê,+Đà+Nẵng"
    },
    {
      name: "Nệm Thuần Việt Showroom Ninh Kiều, Cần Thơ",
      address: "124 Đường 30 Tháng 4, Phường An Phú, Quận Ninh Kiều, Cần Thơ",
      hours: "7h30 - 21h30 (Thứ 2 - Chủ Nhật)",
      province: "Cần Thơ",
      district: "Quận Ninh Kiều",
      mapUrl: "https://maps.google.com/?q=124+Đường+30+Tháng+4,+Ninh+Kiều,+Cần+Thơ"
    },
    {
      name: "Nệm Thuần Việt Showroom Biên Hòa, Đồng Nai",
      address: "240 Phạm Văn Thuận, Phường Tam Hiệp, TP. Biên Hòa, Đồng Nai",
      hours: "7h30 - 21h30 (Thứ 2 - Chủ Nhật)",
      province: "Đồng Nai",
      district: "TP. Biên Hòa",
      mapUrl: "https://maps.google.com/?q=240+Phạm+Văn+Thuận,+Biên+Hòa,+Đồng+Nai"
    },
    {
      name: "Nệm Thuần Việt Showroom Thủ Dầu Một, Bình Dương",
      address: "378 Đại Lộ Bình Dương, Phường Phú Lợi, TP. Thủ Dầu Một, Bình Dương",
      hours: "7h30 - 21h30 (Thứ 2 - Chủ Nhật)",
      province: "Bình Dương",
      district: "TP. Thủ Dầu Một",
      mapUrl: "https://maps.google.com/?q=378+Đại+Lộ+Bình+Dương,+Bình+Dương"
    }
  ];

  const provinceSelect = document.getElementById('showroomProvinceSelect');
  const districtSelect = document.getElementById('showroomDistrictSelect');
  const showroomListEl = document.getElementById('showroomList');

  if (provinceSelect && districtSelect && showroomListEl) {
    // Lấy danh sách Tỉnh/Thành duy nhất
    const uniqueProvinces = [...new Set(SHOWROOMS_DATA.map(s => s.province))];
    uniqueProvinces.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p;
      opt.textContent = p;
      provinceSelect.appendChild(opt);
    });

    function renderShowrooms() {
      const selProv = provinceSelect.value;
      const selDist = districtSelect.value;

      let filtered = SHOWROOMS_DATA;
      if (selProv && selProv !== 'all') {
        filtered = filtered.filter(s => s.province === selProv);
      }
      if (selDist && selDist !== 'all') {
        filtered = filtered.filter(s => s.district === selDist);
      }

      if (filtered.length === 0) {
        showroomListEl.innerHTML = `
          <div class="showroom-list__empty">
            <p>Không tìm thấy showroom tại khu vực đã chọn.</p>
            <button type="button" class="showroom-list__empty-btn" id="btnResetShowrooms">Xem tất cả showroom</button>
          </div>
        `;
        document.getElementById('btnResetShowrooms')?.addEventListener('click', () => {
          provinceSelect.value = 'all';
          updateDistricts();
          renderShowrooms();
        });
        return;
      }

      showroomListEl.innerHTML = filtered.map(item => `
        <div class="showroom-item">
          <div class="showroom-item__header">
            <i class="fa-solid fa-location-dot showroom-item__icon"></i>
            <h4 class="showroom-item__name">${item.name}</h4>
          </div>
          <p class="showroom-item__address">${item.address}</p>
          <p class="showroom-item__hours"><strong>Mở cửa:</strong> ${item.hours}</p>
          <a href="${item.mapUrl}" target="_blank" rel="noopener noreferrer" class="showroom-item__link">Xem dẫn đường</a>
        </div>
      `).join('');
    }

    function updateDistricts() {
      const selProv = provinceSelect.value;
      districtSelect.innerHTML = '<option value="all">Chọn Quận Huyện</option>';

      if (!selProv || selProv === 'all') {
        districtSelect.disabled = true;
      } else {
        districtSelect.disabled = false;
        const districts = [...new Set(SHOWROOMS_DATA.filter(s => s.province === selProv).map(s => s.district))];
        districts.forEach(d => {
          const opt = document.createElement('option');
          opt.value = d;
          opt.textContent = d;
          districtSelect.appendChild(opt);
        });
      }
    }

    provinceSelect.addEventListener('change', () => {
      updateDistricts();
      renderShowrooms();
    });

    districtSelect.addEventListener('change', () => {
      renderShowrooms();
    });

    updateDistricts();
    renderShowrooms();
  }

  /* --- H. HIỆU ỨNG TĂNG SỐ THỐNG KÊ (ANIMATED STATS COUNTER) --- */
  const statsContainer = document.querySelector('.banner-intro__stats, #counterStats');
  if (statsContainer) {
    const counterElements = statsContainer.querySelectorAll('.counter-num');
    let hasAnimated = false;

    const startCounters = () => {
      if (hasAnimated) return;
      hasAnimated = true;

      counterElements.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target')) || 0;
        const isYear = counter.getAttribute('data-type') === 'year';
        const isDecimal = counter.getAttribute('data-type') === 'decimal';
        const startVal = isYear ? Math.max(target - 35, 0) : 0;
        const duration = 2000; // 2 giây mượt mà
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Easing mượt mà: easeOutExpo (nhanh lúc đầu, giảm tốc êm ái về sau)
          const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const current = startVal + (target - startVal) * ease;

          if (isYear) {
            counter.textContent = Math.round(current);
          } else if (isDecimal) {
            counter.textContent = progress === 1 ? target : current.toFixed(1);
          } else {
            const format = counter.getAttribute('data-format');
            if (format === 'dot') {
              counter.textContent = Math.round(current).toLocaleString('vi-VN');
            } else {
              counter.textContent = Math.round(current);
            }
          }

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            const finalFormat = counter.getAttribute('data-format');
            if (finalFormat === 'dot') {
              counter.textContent = target.toLocaleString('vi-VN');
            } else {
              counter.textContent = target;
            }
          }
        };

        requestAnimationFrame(updateCounter);
      });
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCounters();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      observer.observe(statsContainer);
    } else {
      startCounters();
    }
  }

  /* --- H. STICKY HEADER & SCROLL TO TOP --- */
  const siteHeader = document.getElementById('header') || document.querySelector('header.header');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    if (siteHeader) {
      if (scrollY > 20) {
        siteHeader.classList.add('header--scrolled', 'is-pinned');
      } else {
        siteHeader.classList.remove('header--scrolled', 'is-pinned');
      }
    }
    if (scrollTopBtn) {
      if (scrollY > 300) {
        scrollTopBtn.classList.add('active');
      } else {
        scrollTopBtn.classList.remove('active');
      }
    }
  }, { passive: true });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --- I. MOBILE MENU, DRAWER ACCORDION & SEARCH (NO BLOCKING OVERLAY) --- */
  const initMobileMenu = () => {
    const navbar = document.querySelector('.header__navbar');
    if (!navbar) return;

    // Loại bỏ hoàn toàn mobileMenuOverlay khỏi DOM để không bao giờ che chặn website
    document.getElementById('mobileMenuOverlay')?.remove();

    // 1. Khối đầu Drawer: Brand + Nút X
    if (!navbar.querySelector('.header__mobile-drawer-head')) {
      const drawerHead = document.createElement('div');
      drawerHead.className = 'header__mobile-drawer-head';
      drawerHead.innerHTML = `
        <span class="header__mobile-drawer-brand">TBAY GROUP</span>
        <button type="button" class="header__mobile-drawer-close" id="mobileDrawerClose" aria-label="Đóng menu">
          <i class="fa-solid fa-xmark"></i>
        </button>
      `;
      navbar.insertBefore(drawerHead, navbar.firstChild);
    }

    // 2. Khối tìm kiếm dạng viên thuốc (Pill Search Bar - Reference Image 2)
    if (!navbar.querySelector('.header__mobile-drawer-search')) {
      const drawerSearch = document.createElement('div');
      drawerSearch.className = 'header__mobile-drawer-search';
      drawerSearch.innerHTML = `
        <input type="text" class="header__mobile-drawer-search-input" id="drawerSearchInput" placeholder="Bạn đang cần tìm gì?">
        <button type="button" class="header__mobile-drawer-search-btn" id="drawerSearchBtn" aria-label="Tìm kiếm">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      `;
      const drawerHead = navbar.querySelector('.header__mobile-drawer-head');
      if (drawerHead && drawerHead.nextSibling) {
        navbar.insertBefore(drawerSearch, drawerHead.nextSibling);
      } else {
        navbar.insertBefore(drawerSearch, navbar.children[1] || null);
      }
    }

    // 3. Khối chân Drawer (Hotline)
    if (!navbar.querySelector('.header__mobile-drawer-footer')) {
      const drawerFooter = document.createElement('div');
      drawerFooter.className = 'header__mobile-drawer-footer';
      drawerFooter.innerHTML = `
        <a href="tel:0852080383" class="header__mobile-drawer-hotline">
          <i class="fa-solid fa-phone-volume"></i>
          <span>0852.080.383</span>
        </a>
        <p class="header__mobile-drawer-note">Hotline tư vấn giấc ngủ 24/7 (Miễn cước)</p>
      `;
      navbar.appendChild(drawerFooter);
    }

    const menuBtn = document.getElementById('mobileMenuToggle');
    const searchToggleBtn = document.getElementById('mobileSearchToggle');
    const drawerCloseBtn = document.getElementById('mobileDrawerClose');
    const drawerInput = document.getElementById('drawerSearchInput');
    const drawerSearchBtn = document.getElementById('drawerSearchBtn');

    const openMenu = (focusSearch = false) => {
      navbar.classList.add('is-active');
      if (focusSearch && drawerInput) {
        setTimeout(() => drawerInput.focus(), 250);
      }
    };

    const closeMenu = () => {
      navbar.classList.remove('is-active');
    };

    menuBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (navbar.classList.contains('is-active')) {
        closeMenu();
      } else {
        openMenu(false);
      }
    });

    searchToggleBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      openMenu(true);
    });

    drawerCloseBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMenu();
    });

    // Đóng drawer khi click ra ngoài menu
    document.addEventListener('click', (e) => {
      if (navbar.classList.contains('is-active')) {
        if (!navbar.contains(e.target) && !menuBtn?.contains(e.target) && !searchToggleBtn?.contains(e.target)) {
          closeMenu();
        }
      }
    });

    // Accordion cho danh mục có dropdown trên mobile (Reference Image 2)
    navbar.querySelectorAll('.header__nav-item--has-dropdown').forEach(item => {
      const link = item.querySelector('.header__nav-link');
      link?.addEventListener('click', (e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          e.stopPropagation();
          const isOpen = item.classList.contains('is-open');
          navbar.querySelectorAll('.header__nav-item--has-dropdown').forEach(other => {
            if (other !== item) other.classList.remove('is-open');
          });
          item.classList.toggle('is-open', !isOpen);
        }
      });
    });

    // Bấm link con hoặc link đơn thì đóng drawer
    navbar.querySelectorAll('.header__nav-link, .header__dropdown-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const isParentDropdown = link.parentElement && link.parentElement.classList.contains('header__nav-item--has-dropdown');
        if (window.innerWidth <= 992 && !isParentDropdown) {
          closeMenu();
        }
      });
    });

    // Xử lý tìm kiếm trong Drawer
    const handleDrawerSearch = () => {
      const q = drawerInput?.value.trim();
      if (q) {
        closeMenu();
        window.location.href = `./products.html?search=${encodeURIComponent(q)}`;
      }
    };

    drawerSearchBtn?.addEventListener('click', handleDrawerSearch);
    drawerInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleDrawerSearch();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navbar.classList.contains('is-active')) {
        closeMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 992 && navbar.classList.contains('is-active')) {
        closeMenu();
      }
    });
  };

  initMobileMenu();
});
