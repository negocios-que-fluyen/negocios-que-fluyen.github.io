---
layout: base
title: Recursos
permalink: /recursos/
description: "Herramientas gratuitas para emprendedores. Descarga guías prácticas, plantillas y recursos que potencian tu crecimiento y te ayudan a automatizar procesos clave de tu negocio."
---

<section class="hero hero-recursos">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <h1>Herramientas que potencian tu crecimiento</h1>
    <p>Descarga recursos gratuitos, guías prácticas y plantillas que te ayudarán a optimizar tu negocio y automatizar
      procesos clave.</p>
    <a href="#recursos" class="flecha-scroll" aria-label="Ver nuestros recursos">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19,12 12,19 5,12"></polyline>
      </svg>
    </a>
  </div>
</section>

<div class="post-hero-espaciado"></div>
<section id="recursos" class="roadmap-bootstrap py-5 seccion">
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 text-center mb-5">
        <h2 class="roadmap-title-bootstrap">Tu Ruta hacia la Automatización</h2>
        <p class="roadmap-subtitle-bootstrap">Sigue estos pasos para transformar tu negocio paso a paso</p>
      </div>
    </div>


    <div class="d-none d-md-block"> <!-- Desktop: Layout Zigzag con Timeline -->
      <div class="container-fluid">
        <div class="roadmap-desktop-timeline">
          <!-- Línea central del timeline -->
          <div class="timeline-line"></div>

          {% for etapa in recursos.etapas %}
          <!-- Paso {{ etapa.numero }} - {{ etapa.posicion }} -->
          <div class="timeline-step timeline-step-{{ etapa.posicion }}" data-step="{{ etapa.numero }}">
            <div class="roadmap-card-bootstrap">
              <div class="step-number-bootstrap">{{ etapa.numero }}</div>
              <div class="step-icon-bootstrap {{ etapa.icon }}"></div>
              <h3 class="step-title-bootstrap">{{ etapa.titulo }}</h3>
              <p class="step-subtitle-bootstrap">{{ etapa.subtitulo }}</p>
              <button class="btn-bootstrap" onclick="openModal('{{ etapa.modal }}')">Más detalles</button>
            </div>
            <!-- Conector hacia el centro -->
            <div class="connector-to-center">
              <svg viewBox="0 0 80 40" class="connector-svg">
                <path d="{{ etapa.pathSvg }}" stroke="#49AA9C" stroke-width="3" fill="none" stroke-linecap="round" />
                <circle cx="40" cy="20" r="4" fill="#49AA9C" />
              </svg>
            </div>
          </div>
          {% endfor %}

        </div>
      </div>
    </div>

    <div class="d-md-none"><!-- Mobile: Layout Vertical -->
      <div class="container">
        <div class="roadmap-mobile-container">

          {% for etapa in recursos.etapas %}
          <div class="roadmap-step-mobile-bootstrap" data-step="{{ etapa.numero }}">
            <div class="roadmap-card-mobile-bootstrap">
              <div class="step-number-mobile-bootstrap">{{ etapa.numero }}</div>
              <div class="step-icon-bootstrap {{ etapa.icon }}"></div>
              <h3 class="step-title-mobile-bootstrap">{{ etapa.titulo }}</h3>
              <p class="step-subtitle-mobile-bootstrap">{{ etapa.subtitulo }}</p>
              <button class="btn-mobile-bootstrap" onclick="openModal('{{ etapa.modal }}')">Más detalles</button>
            </div>
            {% unless etapa.ultimo %}
            <div class="connector-vertical">
              <svg viewBox="0 0 40 80" class="connector-svg-vertical">
                <path d="{{ etapa.pathSvgVertical }}" stroke="#49AA9C" stroke-width="2" fill="none" stroke-linecap="round" />
                <circle cx="20" cy="75" r="3" fill="#49AA9C" />
              </svg>
            </div>
            {% endunless %}
          </div>
          {% endfor %}

        </div>
      </div>
    </div>
  </div>
</section>

{% include "modal-recursos.md" %}
