/* =========================================================
   TataTech Solutions — main.js
   Portfolio interactions
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================
     NAVBAR — Scroll Effect
     ========================================================= */

  const navbar = document.getElementById('navbar');

  if (navbar) {
    const handleNavbarScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    };

    handleNavbarScroll();
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  }


  /* =========================================================
     MOBILE MENU
     ========================================================= */

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {

    const spans = hamburger.querySelectorAll('span');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    const openMenu = () => {
      mobileMenu.classList.add('open');
      hamburger.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');

      if (spans.length >= 3) {
        spans[0].style.transform = 'translateY(7px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      }

      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');

      spans.forEach(span => {
        span.style.transform = '';
        span.style.opacity = '';
      });

      document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu with Escape
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMenu();
        hamburger.focus();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (
        mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        closeMenu();
      }
    });

    // Reset menu when resizing back to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }


  /* =========================================================
     SCROLL REVEAL
     ========================================================= */

  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length) {

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  }


  /* =========================================================
     ACTIVE NAVIGATION LINK
     ========================================================= */

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  if (sections.length && navLinks.length) {

    const sectionObserver = new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            const id = entry.target.getAttribute('id');

            navLinks.forEach(link => {
              const isActive = link.getAttribute('href') === `#${id}`;
              link.classList.toggle('active', isActive);
            });

          }

        });

      },
      {
        threshold: 0.35,
        rootMargin: '-80px 0px -40% 0px'
      }
    );

    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  }


  /* =========================================================
     CONTACT FORM
     ========================================================= */

  const form = document.getElementById('contactForm');

  if (form) {

    form.addEventListener('submit', async (event) => {

      event.preventDefault();

      const button = form.querySelector('[type="submit"]');

      if (!button || button.disabled) return;

      const originalText = button.innerHTML;

      button.disabled = true;
      button.innerHTML = '<span>Sending...</span>';

      /*
       * NOTE:
       * This currently simulates a successful submission.
       *
       * Replace this section later with Formspree,
       * EmailJS, Resend, or your own backend/API.
       */

      await new Promise(resolve => setTimeout(resolve, 1500));

      button.innerHTML = '✓ Message sent!';
      button.classList.add('success');

      form.reset();

      setTimeout(() => {

        button.innerHTML = originalText;
        button.classList.remove('success');
        button.disabled = false;

      }, 3000);
    });
  }


  /* =========================================================
     CURSOR GLOW — DESKTOP
     ========================================================= */

  if (
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {

    const glow = document.createElement('div');

    glow.className = 'cursor-glow';

    document.body.appendChild(glow);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    window.addEventListener('mousemove', (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });

    window.addEventListener('mouseleave', () => {
      glow.style.opacity = '0';
    });

    window.addEventListener('mouseenter', () => {
      glow.style.opacity = '1';
    });

    const animateGlow = () => {

      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      glow.style.left = `${currentX}px`;
      glow.style.top = `${currentY}px`;

      requestAnimationFrame(animateGlow);
    };

    animateGlow();
  }


  /* =========================================================
     TYPED TEXT EFFECT
     ========================================================= */

  const typedElement = document.getElementById('typed');

  if (typedElement) {

    const words = [
      'Websites',
      'Web Apps',
      'E-Commerce Platforms',
      'Digital Products'
    ];

    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    const type = () => {

      const currentWord = words[wordIndex];

      if (deleting) {
        characterIndex--;
      } else {
        characterIndex++;
      }

      typedElement.textContent =
        currentWord.substring(0, characterIndex);

      let delay = deleting ? 55 : 100;

      // Finished typing
      if (!deleting && characterIndex === currentWord.length) {
        deleting = true;
        delay = 1600;
      }

      // Finished deleting
      if (deleting && characterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
      }

      setTimeout(type, delay);
    };

    type();
  }


  /* =========================================================
     SMOOTH ANCHOR SCROLL
     ========================================================= */

  document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', (event) => {

      const targetId = link.getAttribute('href');

      if (!targetId || targetId === '#') return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      const navbarHeight = navbar
        ? navbar.offsetHeight
        : 0;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

    });

  });


  /* =========================================================
     CURRENT YEAR
     ========================================================= */

  const yearElements = document.querySelectorAll('[data-current-year]');

  yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
  });

});