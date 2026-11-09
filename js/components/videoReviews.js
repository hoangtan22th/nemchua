import { videoReviews } from '../products.js';

/* ==================== RENDER VIDEO REVIEWS ==================== */
const videoReviewsContainer = document.getElementById('videoReviews');

if (videoReviewsContainer) {
  videoReviewsContainer.innerHTML = `
    <div class="container">
      <div class="reviews-header">
        <h2 class="reviews-title">Chia sẻ cảm nhận từ khách hàng</h2>
        <div class="reviews-arrows">
          <button class="review-arrow-btn prev-review" id="prevReview">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button class="review-arrow-btn next-review" id="nextReview">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div class="reviews-slider" id="reviewsTrack">
        ${videoReviews.map(item => `
          <div class="review-card" data-video="${item.videoUrl}">
            <div class="review-bg" style="background-image: url('${item.poster}');"></div>
            <div class="review-overlay"></div>

            <button class="review-play-btn" aria-label="Xem video">
              <i class="fa-solid fa-play"></i>
            </button>

            <div class="review-content">
              <div class="review-tag">${item.reviewer}</div>
              <h3 class="review-card-title">${item.title}</h3>
              <p class="review-subtitle">${item.subtitle}</p>

              <a href="./details.html?id=${item.productId}" class="review-product-box">
                <img src="${item.product.image}" alt="${item.product.name}">
                <div class="review-product-meta">
                  <div class="review-product-top">
                    <span class="review-old-price">${item.product.originalPrice.toLocaleString('vi-VN')}₫</span>
                    <span class="review-discount">-${item.product.discount}%</span>
                  </div>
                  <div class="review-sale-price">Từ ${item.product.salePrice.toLocaleString('vi-VN')}₫</div>
                  <div class="review-product-name">${item.product.name}</div>
                </div>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Video Modal -->
    <div class="video-modal" id="videoModal">
      <div class="video-modal-backdrop" id="videoBackdrop"></div>
      <div class="video-modal-box">
        <button class="video-modal-close" id="videoClose">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div class="video-modal-player">
          <video id="modalVideoPlayer" controls playsinline></video>
        </div>
      </div>
    </div>
  `;

  /* ==================== VIDEO MODAL LOGIC ==================== */
  const videoModal = document.getElementById('videoModal');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');
  const videoClose = document.getElementById('videoClose');
  const videoBackdrop = document.getElementById('videoBackdrop');
  const reviewCards = videoReviewsContainer.querySelectorAll('.review-card');

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
      openVideo(videoUrl);
    });

    card.addEventListener('click', (e) => {
      if (e.target.closest('.review-product-box')) return;
      openVideo(videoUrl);
    });
  });

  videoClose?.addEventListener('click', closeVideo);
  videoBackdrop?.addEventListener('click', closeVideo);

  /* ==================== SLIDER SCROLL ==================== */
  const reviewsTrack = document.getElementById('reviewsTrack');
  const prevReview = document.getElementById('prevReview');
  const nextReview = document.getElementById('nextReview');

  prevReview?.addEventListener('click', () => {
    reviewsTrack?.scrollBy({ left: -260, behavior: 'smooth' });
  });

  nextReview?.addEventListener('click', () => {
    reviewsTrack?.scrollBy({ left: 260, behavior: 'smooth' });
  });
}

