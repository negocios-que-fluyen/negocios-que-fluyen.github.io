---
layout: base
title: Contacto
permalink: /contacto/
---

<br>
<section id="contacto" class="seccion">
  <h2 class="titulo-h2 centrado">Contáctanos</h2>
  <form class="form-contacto" action="https://formsubmit.co/contacto@negocios-que-fluyen.com" method="POST">
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


