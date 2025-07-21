---
layout: base
title: Contacto
permalink: /contacto/
---

<section class="hero hero-contacto">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>&iquest;Listo para el siguiente nivel?</h1>
    <p>Cu&eacute;ntanos tu proyecto y descubre c&oacute;mo podemos ayudarte a automatizar procesos y multiplicar tu impacto en el mercado.</p>
    <a href="#contacto" class="flecha-scroll" aria-label="Ir al formulario de contacto">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19,12 12,19 5,12"></polyline>
      </svg>
    </a>
  </div>
</section>
<div class="post-hero-espaciado"></div>
<section id="contacto" class="seccion">
  <h2 class="titulo-h2 centrado">Cont&aacute;ctanos</h2>
  <div id="mensaje-envio"></div>
  <form class="form-contacto" id="form-contacto" method="POST">
    <label for="nombre">Nombre completo:</label>
    <input type="text" id="nombre" name="nombre" required minlength="5" maxlength="50">

    <label for="telefono">Tel&eacute;fono:</label>
    <input type="tel" id="telefono" name="telefono" pattern="[0-9]{10}" maxlength="10" required>

    <label for="correo">Correo electr&oacute;nico:</label>
    <input type="email" id="correo" name="correo" required>

    <label for="mensaje">Mensaje o duda:</label>
    <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

    <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response">

    <button type="submit" class="btn-primario">
      <span id="btn-texto">Enviar</span>
      <span id="btn-spinner" style="display:none;vertical-align:middle;">
        <svg class="spinner" width="20" height="20" viewBox="0 0 50 50">
          <circle class="path" cx="25" cy="25" r="20" fill="none" stroke="#fff" stroke-width="5"></circle>
        </svg>
      </span>
    </button>
    
    <div class="recaptcha-notice">
      Este sitio está protegido por reCAPTCHA y se aplican la <a href="https://policies.google.com/privacy" target="_blank">Política de privacidad</a> y los <a href="https://policies.google.com/terms" target="_blank">Términos de servicio</a> de Google.
    </div>

  </form>
</section>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contacto');
    const mensajeEnvio = document.getElementById('mensaje-envio');
    const boton = form.querySelector('button[type="submit"]');
    const btnTexto = document.getElementById('btn-texto');
    const btnSpinner = document.getElementById('btn-spinner');

    function mostrarAlerta(html) {
      mensajeEnvio.innerHTML = html;
      const y = mensajeEnvio.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      mensajeEnvio.innerHTML = '';

      const nombre = form.nombre.value.trim();
      const mensaje = form.mensaje.value.trim();

      if (nombre.length < 5 || mensaje.length < 10) {
        mostrarAlerta('<div class="alerta-error">Por favor escribe un nombre y mensaje v&aacute;lidos.</div>');
        setTimeout(() => mensajeEnvio.innerHTML = '', 4000);
        return;
      }

      boton.disabled = true;
      btnTexto.style.display = 'none';
      btnSpinner.style.display = 'inline-block';

        grecaptcha.ready(function () {
        grecaptcha.execute('6Le2RWwrAAAAAI8A-ZqmmB8ZVagQ8SS8-RL6jM8k', { action: 'submit' }).then(async function (token) {
        document.getElementById('g-recaptcha-response').value = token;
        document.getElementById('g-recaptcha-response').remove();

        const formData = new FormData(form);

          

          try {
            const resp = await fetch('https://formsubmit.co/ajax/contacto@negocios-que-fluyen.com', {
              method: 'POST',
              body: formData,
              headers: { 'Accept': 'application/json' }
            });

            if (resp.ok) {
              // Redirigir a la página de agradecimiento
              window.location.href = '/gracias/';
            } else {
              mostrarAlerta('<div class="alerta-error">Ocurri&oacute; un error al enviar el correo. Intenta de nuevo.</div>');
            }
          } catch {
            mostrarAlerta('<div class="alerta-error">Ocurri&oacute; un error al enviar el correo. Intenta de nuevo.</div>');
          } finally {
            boton.disabled = false;
            btnTexto.style.display = 'inline';
            btnSpinner.style.display = 'none';
            setTimeout(() => mensajeEnvio.innerHTML = '', 4000);
          }
        });
      });
    });
  });
</script>
<script src="https://www.google.com/recaptcha/api.js?render=6Le2RWwrAAAAAI8A-ZqmmB8ZVagQ8SS8-RL6jM8k"></script>
