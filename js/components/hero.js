/* ==================== HERO SLIDER ==================== */
const heroSlider = document.getElementById('heroSlider');

if (heroSlider) {
  const heroImages = [
    './assets/images/hero1.webp',
    './assets/images/hero2.webp',
    './assets/images/hero3.webp',
    './assets/images/hero4.webp',
    './assets/images/hero5.webp',
    './assets/images/hero6.webp'
  ];

  heroSlider.innerHTML = `
    <div class="container">
      <div class="hero-slider">
        <div class="slider-track">
          ${heroImages.map((src, i) => `
            <div class="slide ${i === 0 ? 'active' : ''}">
              <img src="${src}" alt="Hero Banner ${i + 1}">
            </div>
          `).join('')}
        </div>

        <button class="slider-btn prev-btn" id="prevHero">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="slider-btn next-btn" id="nextHero">
          <i class="fa-solid fa-chevron-right"></i>
        </button>

        <div class="slider-dots" id="heroDots">
          ${heroImages.map((_, i) => `
            <span class="dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>
          `).join('')}
        </div>
      </div>
    </div>
  `;

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

/* ==================== HERO 2 BANNER ==================== */
const hero2 = document.getElementById('hero2');

if (hero2) {
  hero2.innerHTML = `
    <div class="container">
      <div class="wrapper">
        <img src="./assets/images/middle.png" alt="Middle Banner">
      </div>
    </div>
  `;
}

