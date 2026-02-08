// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCarousels);
} else {
  initCarousels();
}

function initCarousels() {
  const sections = document.querySelectorAll(".pf-carousel");
  sections.forEach(initCarousel);
}

function initCarousel(section) {
  const rail = section.querySelector("[data-carousel-rail]");
  
  if (!rail) return;

  // ✅ Click and drag to scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  rail.addEventListener('mousedown', (e) => {
    // Don't interfere with clicking cards
    if (e.target.closest('.pf-ai-card')) return;
    
    isDown = true;
    rail.style.cursor = 'grabbing';
    rail.style.userSelect = 'none';
    startX = e.pageX - rail.offsetLeft;
    scrollLeft = rail.scrollLeft;
  });

  rail.addEventListener('mouseleave', () => {
    isDown = false;
    rail.style.cursor = 'grab';
  });

  rail.addEventListener('mouseup', () => {
    isDown = false;
    rail.style.cursor = 'grab';
  });

  rail.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - rail.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    rail.scrollLeft = scrollLeft - walk;
  });

  // Card click events
  rail.addEventListener('click', (e) => {
    const card = e.target.closest('.pf-ai-card');
    if (!card) return;
    const id = card.getAttribute('data-ai-id');
    window.dispatchEvent(new CustomEvent('pf:openAiCard', { detail: { id } }));
  });

  // Keyboard support
  rail.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') scrollByCard(rail, -1);
    if (e.key === 'ArrowRight') scrollByCard(rail, +1);
  });
}

function scrollByCard(rail, direction) {
  const firstCard = rail.querySelector('.pf-ai-card');
  const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 340;
  const gap = 16;
  
  rail.scrollBy({ 
    left: direction * (cardWidth + gap), 
    behavior: 'smooth' 
  });
}