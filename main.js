document.addEventListener('DOMContentLoaded', () => {
  // intersection observer for scroll reveal
  const revealElements = document.querySelectorAll('.reveal-content');

  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const revealOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  // smooth scroll for the indicator
  const scrollIndicator = document.querySelector('.bubbles-container');
  const revealSection = document.querySelector('.reveal-section');

  if (scrollIndicator && revealSection) {
    scrollIndicator.style.cursor = 'pointer';
    scrollIndicator.addEventListener('click', () => {
      revealSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // hover Reveal logic
  const imageWrapper = document.getElementById('hover-reveal-wrapper');
  const thirstImage = document.querySelector('.thirst-image');

  if (imageWrapper && thirstImage) {
    imageWrapper.addEventListener('mousemove', (e) => {
      const rect = imageWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      thirstImage.style.setProperty('--mask-x', `${x}px`);
      thirstImage.style.setProperty('--mask-y', `${y}px`);
      thirstImage.style.setProperty('--mask-size', '80px');
    });

    imageWrapper.addEventListener('mouseleave', () => {
      thirstImage.style.setProperty('--mask-size', '0px');
    });
  }
});
