/**
 * Cookie Banner - Aviso de cookies para Negocios que Fluyen
 * Similar al implementado en josuem01.dev
 */

(function() {
  'use strict';

  const COOKIE_NAME = 'cookies_accepted';
  const COOKIE_DURATION = 365; // días

  // Verificar si ya se aceptaron las cookies
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  // Establecer cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
  }

  // Mostrar el banner
  function showBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
      setTimeout(() => {
        banner.classList.add('show');
      }, 500); // Pequeño delay para mejor UX
    }
  }

  // Ocultar el banner
  function hideBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
      banner.classList.remove('show');
      setTimeout(() => {
        banner.style.display = 'none';
      }, 300); // Espera a que termine la animación
    }
  }

  // Aceptar cookies
  function acceptCookies() {
    setCookie(COOKIE_NAME, 'true', COOKIE_DURATION);
    hideBanner();
    
    // Aquí puedes agregar código para activar analytics u otras cookies
    // Por ejemplo: activar Google Analytics, Facebook Pixel, etc.
    console.log('Cookies aceptadas');
  }

  // Cerrar banner (sin aceptar)
  function closeBanner() {
    hideBanner();
    // Opcional: Guardar que el usuario cerró el banner para no mostrarlo en esta sesión
    sessionStorage.setItem('banner_closed', 'true');
  }

  // Inicializar el banner
  function init() {
    // Verificar si ya se aceptaron las cookies o si se cerró en esta sesión
    const cookiesAccepted = getCookie(COOKIE_NAME);
    const bannerClosed = sessionStorage.getItem('banner_closed');
    
    if (!cookiesAccepted && !bannerClosed) {
      showBanner();
    }

    // Event listeners
    const acceptBtn = document.getElementById('acceptCookies');
    const closeBtn = document.getElementById('closeCookies');
    
    if (acceptBtn) {
      acceptBtn.addEventListener('click', acceptCookies);
    }
    
    if (closeBtn) {
      closeBtn.addEventListener('click', closeBanner);
    }
  }

  // Ejecutar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
