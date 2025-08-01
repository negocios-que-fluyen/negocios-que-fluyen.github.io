class ResponsiveNavbar {
  constructor() {
    this.hamburgerBtn = document.getElementById('hamburger-btn');
    this.closeBtn = document.getElementById('close-btn');
    this.mobileNav = document.getElementById('mobile-nav');
    this.mobileOverlay = document.getElementById('mobile-overlay');
    this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    this.body = document.body;
    this.isOpen = false;
    this.focusableElements = [];

    this.init();
  }

  init() {
    if (!this.hamburgerBtn || !this.closeBtn || !this.mobileNav || !this.mobileOverlay) {
      return;
    }

    // Accesibilidad: roles semánticos
    this.mobileNav.setAttribute('role', 'dialog');
    const mainNav = document.querySelector('.main-nav');
    if (mainNav) {
      mainNav.setAttribute('role', 'navigation');
    }

    // Event listeners principales
    this.hamburgerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggleMenu();
    });

    this.closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.closeMenu();
    });

    this.mobileOverlay.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.closeMenu();
    });

    // Importante: Prevenir que clicks en el menú cierren el overlay
    this.mobileNav.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Cerrar menú al hacer clic en enlaces
    this.mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMenu();
      });
    });

    // Manejar tecla ESC para cerrar menú
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeMenu();
      }
    });

    // Cerrar menú al cambiar tamaño de ventana a desktop
    window.addEventListener('resize', this.debounce(() => {
      if (window.innerWidth > 768 && this.isOpen) {
        this.closeMenu();
      }
    }, 250));

    // Setup focus trap para accesibilidad
    this.setupFocusTrap();

    // Prevenir scroll en móvil cuando el menú está abierto
    this.setupScrollPrevention();
  }

  toggleMenu() {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  openMenu() {
    this.isOpen = true;

    // Agregar clases activas con animación
    this.hamburgerBtn?.classList.add('active');
    this.mobileNav?.classList.add('active');
    this.mobileOverlay?.classList.add('active');
    this.body.classList.add('nav-open');

    // Actualizar atributos ARIA para accesibilidad
    this.hamburgerBtn?.setAttribute('aria-expanded', 'true');
    this.hamburgerBtn?.setAttribute('aria-label', 'Cerrar menú');
    this.mobileNav?.setAttribute('aria-hidden', 'false');
    this.mobileOverlay?.setAttribute('aria-hidden', 'false');

    // Focus en el primer enlace del menú después de la animación
    setTimeout(() => {
      const firstLink = this.mobileNav?.querySelector('.mobile-nav-link');
      firstLink?.focus();
    }, 300);

    // Actualizar elementos focusables
    this.updateFocusableElements();
  }

  closeMenu() {
    this.isOpen = false;

    // Remover clases activas
    this.hamburgerBtn?.classList.remove('active');
    this.mobileNav?.classList.remove('active');
    this.mobileOverlay?.classList.remove('active');
    this.body.classList.remove('nav-open');

    // Actualizar atributos ARIA
    this.hamburgerBtn?.setAttribute('aria-expanded', 'false');
    this.hamburgerBtn?.setAttribute('aria-label', 'Abrir menú');
    this.mobileNav?.setAttribute('aria-hidden', 'true');
    this.mobileOverlay?.setAttribute('aria-hidden', 'true');

    // Devolver focus al botón hamburguesa
    this.hamburgerBtn?.focus();
  }

  setupFocusTrap() {
    // Manejar navegación por teclado dentro del menú móvil
    this.mobileNav?.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;

      this.updateFocusableElements();

      if (this.focusableElements.length === 0) return;

      const firstFocusable = this.focusableElements[0];
      const lastFocusable = this.focusableElements[this.focusableElements.length - 1];

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab (navegación hacia atrás)
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          // Tab (navegación hacia adelante)
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    });
  }

  updateFocusableElements() {
    // Elementos que pueden recibir focus dentro del menú móvil
    const focusableSelectors = [
      'a[href]:not([disabled])',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input[type="text"]:not([disabled])',
      'input[type="radio"]:not([disabled])',
      'input[type="checkbox"]:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"]):not([disabled])'
    ].join(', ');

    this.focusableElements = Array.from(
      this.mobileNav?.querySelectorAll(focusableSelectors) || []
    ).filter(element => {
      return element.offsetWidth > 0 &&
        element.offsetHeight > 0 &&
        !element.hidden;
    });
  }

  setupScrollPrevention() {
    // Prevenir scroll del body cuando el menú está abierto
    let scrollY = 0;

    const preventScroll = () => {
      scrollY = window.scrollY;
      this.body.style.position = 'fixed';
      this.body.style.top = `-${scrollY}px`;
      this.body.style.width = '100%';
    };

    const restoreScroll = () => {
      this.body.style.position = '';
      this.body.style.top = '';
      this.body.style.width = '';
      window.scrollTo(0, scrollY);
    };

    // Observer para cambios en la clase nav-open
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (this.body.classList.contains('nav-open')) {
            preventScroll();
          } else {
            restoreScroll();
          }
        }
      });
    });

    observer.observe(this.body, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  // Función helper para debounce
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}

// Funcionalidad de búsqueda simplificada
function initSearchButtons() {
  document.querySelectorAll('.search-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      // Implementar funcionalidad de búsqueda en el futuro
    });
  });
}

// Inicialización optimizada cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const navbarInstance = new ResponsiveNavbar();
  new ScrollNavbar(navbarInstance.mobileNav);
  initSearchButtons();
});

/**
 * Funcionalidad para ocultar/mostrar el navbar al hacer scroll
 */
class ScrollNavbar {
  constructor(mobileNavElement = null) {
    this.header = document.querySelector('.main-header');
    this.mobileNav = mobileNavElement || document.getElementById('mobile-nav');
    this.lastScrollTop = 0;
    this.scrollThreshold = 100; // Píxeles de scroll antes de que se active el efecto
    this.isScrolling = false;
    this.isMobileMenuOpen = false;

    this.init();
  }

  init() {
    if (!this.header) return;

    window.addEventListener('scroll', this.throttleScroll.bind(this), { passive: true });

    // Observar cambios en el menú móvil para pausar el scroll behavior
    this.observeMobileMenu();
  }

  observeMobileMenu() {
    if (this.mobileNav) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'aria-hidden') {
            this.isMobileMenuOpen = this.mobileNav.getAttribute('aria-hidden') === 'false';
          }
        });
      });

      observer.observe(this.mobileNav, {
        attributes: true,
        attributeFilter: ['aria-hidden']
      });
    }
  }

  throttleScroll() {
    if (!this.isScrolling) {
      window.requestAnimationFrame(() => {
        this.handleScroll();
        this.isScrolling = false;
      });
      this.isScrolling = true;
    }
  }

  handleScroll() {
    // No ocultar el navbar si el menú móvil está abierto
    if (this.isMobileMenuOpen) return;

    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Si está en el tope, mostrar navbar y remover todas las clases
    if (currentScrollTop === 0) {
      this.header.classList.remove('hidden');
      this.header.classList.remove('scrolled');
      this.lastScrollTop = 0;
      return;
    }

    // Agregar clase 'scrolled' cuando se hace scroll hacia abajo
    if (currentScrollTop > this.scrollThreshold) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }

    // Ocultar/mostrar navbar basado en dirección del scroll
    if (currentScrollTop > this.lastScrollTop && currentScrollTop > this.scrollThreshold) {
      // Scrolling hacia abajo - ocultar navbar
      this.header.classList.add('hidden');
    } else if (currentScrollTop < this.lastScrollTop) {
      // Scrolling hacia arriba - mostrar navbar
      this.header.classList.remove('hidden');
    }

    this.lastScrollTop = currentScrollTop;
  }
}