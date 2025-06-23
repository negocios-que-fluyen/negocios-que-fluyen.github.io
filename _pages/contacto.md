---
layout: base
title: Contacto
permalink: /contacto/
---

<br>
<section id="contacto" class="seccion">
  <h2 class="titulo-h2 centrado">Contáctanos</h2>
  <div id="mensaje-envio"></div>
  <form class="form-contacto" id="form-contacto" method="POST">
    <!-- Campo oculto para evitar captcha -->
    <input type="hidden" name="_captcha" value="false">
    <label for="nombre">Nombre completo:</label>
    <input type="text" id="nombre" name="nombre" required minlength="5" maxlength="50">

    <label for="telefono">Teléfono:</label>
    <input type="tel" id="telefono" name="telefono" pattern="[0-9]{10}" maxlength="10" required>

    <label for="correo">Correo electrónico:</label>
    <input type="email" id="correo" name="correo" required>

    <label for="mensaje">Mensaje o duda:</label>
    <textarea id="mensaje" name="mensaje" rows="5" required></textarea>

    <button type="submit" class="btn-primario">Enviar</button>
  </form>
</section>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-contacto');
    const mensajeEnvio = document.getElementById('mensaje-envio');
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      mensajeEnvio.innerHTML = '';
      const formData = new FormData(form);
      try {
        const resp = await fetch('https://formsubmit.co/ajax/contacto@negocios-que-fluyen.com', {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        if (resp.ok) {
          mensajeEnvio.innerHTML = '<div class="alerta-exito">¡Correo enviado con éxito! Te responderemos pronto.</div>';
          form.reset();
        } else {
          mensajeEnvio.innerHTML = '<div class="alerta-error">Ocurrió un error al enviar el correo. Intenta de nuevo.</div>';
        }
      } catch {
        mensajeEnvio.innerHTML = '<div class="alerta-error">Ocurrió un error al enviar el correo. Intenta de nuevo.</div>';
      }
      setTimeout(() => {
        mensajeEnvio.innerHTML = '';
        window.scrollTo({ top: form.offsetTop, behavior: 'smooth' });
      }, 4000);
    });
  });
</script>


