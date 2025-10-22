---
layout: base
title: Contacto
permalink: /contacto/
description: "¿Listo para el siguiente nivel? Contáctanos y descubre cómo automatizar procesos y multiplicar el impacto de tu negocio con soluciones digitales personalizadas."
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
<section id="contacto" class="seccion contacto-seccion">
  <div class="contacto-layout">
    <div class="contacto-cabecera">
      <h2 class="titulo-h2 centrado">Cont&aacute;ctanos</h2>
    </div>
    <div class="contacto-formulario">
      <div id="mensaje-envio"></div>
      <form class="form-contacto" id="form-contacto" method="POST">
        <div class="form-contacto-campos">
          <div class="campo-formulario">
            <label for="nombre">Nombre completo:</label>
            <input type="text" id="nombre" name="nombre" required minlength="5" maxlength="50">
          </div>
          <div class="campo-formulario">
            <label for="telefono">Tel&eacute;fono:</label>
            <input type="tel" id="telefono" name="telefono" pattern="[0-9]{10}" maxlength="10" required>
          </div>
          <div class="campo-formulario campo-full">
            <label for="correo">Correo electr&oacute;nico:</label>
            <input type="email" id="correo" name="correo" required>
          </div>
          <div class="campo-formulario campo-full">
            <label for="mensaje">Mensaje o duda:</label>
            <textarea id="mensaje" name="mensaje" rows="2" required></textarea>
          </div>
        </div>
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
          Este sitio est&aacute; protegido por reCAPTCHA y se aplica la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Pol&iacute;tica de privacidad</a> y los <a href="https://policies.google.com/terms" target="_blank" rel="noopener">T&eacute;rminos de servicio</a> de Google.
        </div>
      </form>
    </div>
    <aside class="contacto-panel" aria-label="Opciones de contacto alternas">
      <div class="contact-card">
        <h3 class="contacto-panel-titulo">&iquest;Prefieres hablar directo?</h3>
        <p>Elige el canal que te funcione mejor, estamos listos para ayudarte.</p>
        <ul class="contacto-lista">
          <li class="contacto-item contacto-item-whatsapp">
            <span class="contacto-icono" aria-hidden="true">
              <img src="/assets/icons/whatsapp.svg" alt="">
            </span>
            <div class="contacto-item-contenido">
              <strong>WhatsApp</strong>
              <a href="https://wa.me/5213342822799" target="_blank" rel="noopener">Escr&iacute;benos al instante</a>
            </div>
          </li>
          <li class="contacto-item contacto-item-email">
            <span class="contacto-icono" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                <polyline points="3,7 12,13 21,7"></polyline>
              </svg>
            </span>
            <div class="contacto-item-contenido">
              <strong>Email</strong>
              <a href="mailto:contacto@negocios-que-fluyen.com">contacto@negocios-que-fluyen.com</a>
            </div>
          </li>
          <li class="contacto-item contacto-item-google">
            <span class="contacto-icono" aria-hidden="true">
              <img src="/assets/icons/google.svg" alt="">
            </span>
            <div class="contacto-item-contenido">
              <strong>Google Business Profile</strong>
              <a href="https://www.google.com/search?q=Negocios+que+Fluyen" target="_blank" rel="noopener">Consulta rese&ntilde;as y novedades</a>
            </div>
          </li>
        </ul>
        <div class="contacto-horario">
          <h4>Horario de atenci&oacute;n</h4>
          <p>Lunes a Viernes, 9:00 - 18:00&nbsp;hrs (GMT-6).</p>
        </div>
        <div class="contacto-remoto">
          <h4>D&oacute;nde trabajamos</h4>
          <p>Operamos 100&nbsp;% de forma remota para clientes en M&eacute;xico y Latinoam&eacute;rica.</p>
        </div>
      </div>
    </aside>
  </div>
  <div class="contacto-human">
    <blockquote>
      <p>En Negocios que Fluyen dise&ntilde;amos soluciones digitales claras para que puedas enfocarte en hacer crecer tu negocio sin fricci&oacute;n.</p>
      <cite>Equipo de Negocios que Fluyen</cite>
    </blockquote>
  </div>
  <div class="contacto-pasos">
    <h3>Lo que sucede despu&eacute;s</h3>
    <div class="contacto-pasos-grid">
      <div class="contacto-paso">
        <span class="contacto-paso-numero">1</span>
        <h4>Revisamos tu mensaje</h4>
        <p>Analizamos tu contexto y llegamos con ideas claras a la primera reuni&oacute;n.</p>
      </div>
      <div class="contacto-paso">
        <span class="contacto-paso-numero">2</span>
        <h4>Te contactamos en 24&nbsp;h</h4>
        <p>Coordinamos el siguiente paso: llamada, demo o propuesta puntual seg&uacute;n lo que necesites.</p>
      </div>
    </div>
    <p class="contacto-pasos-nota">Si requieres una respuesta inmediata, escr&iacute;benos por WhatsApp dentro del horario de atenci&oacute;n y te respondemos en minutos.</p>
  </div>
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
              window.location.href = '/gracias/';
              form.reset();
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
