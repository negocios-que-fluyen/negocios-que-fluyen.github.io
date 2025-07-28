---
layout: base
title: Recursos
permalink: /recursos/
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

          <!-- Paso 1 - Derecha -->
          <div class="timeline-step timeline-step-right" data-step="1">
            <div class="roadmap-card-bootstrap">
              <div class="step-number-bootstrap">1</div>
              <div class="step-icon-bootstrap google-icon"></div>
              <h3 class="step-title-bootstrap">Perfil de Google</h3>
              <p class="step-subtitle-bootstrap">Google My Business</p>
              <button class="btn-bootstrap" onclick="openModal('modal-google-business')">Más detalles</button>
            </div>
            <!-- Conector hacia el centro -->
            <div class="connector-to-center">
              <svg viewBox="0 0 80 40" class="connector-svg">
                <path d="M0 20 Q20 8 40 20" stroke="#49AA9C" stroke-width="3" fill="none" stroke-linecap="round" />
                <circle cx="40" cy="20" r="4" fill="#49AA9C" />
              </svg>
            </div>
          </div>

          <!-- Paso 2 - Izquierda -->
          <div class="timeline-step timeline-step-left" data-step="2">
            <div class="roadmap-card-bootstrap">
              <div class="step-number-bootstrap">2</div>
              <div class="step-icon-bootstrap calendar-icon"></div>
              <h3 class="step-title-bootstrap">Google Calendar + Calendly</h3>
              <p class="step-subtitle-bootstrap">Appointment Scheduling</p>
              <button class="btn-bootstrap" onclick="openModal('modal-calendly')">Más detalles</button>
            </div>
            <!-- Conector hacia el centro -->
            <div class="connector-to-center">
              <svg viewBox="0 0 80 40" class="connector-svg">
                <path d="M80 20 Q60 8 40 20" stroke="#49AA9C" stroke-width="3" fill="none" stroke-linecap="round" />
                <circle cx="40" cy="20" r="4" fill="#49AA9C" />
              </svg>
            </div>
          </div>

          <!-- Paso 3 - Derecha -->
          <div class="timeline-step timeline-step-right" data-step="3">
            <div class="roadmap-card-bootstrap">
              <div class="step-number-bootstrap">3</div>
              <div class="step-icon-bootstrap whatsapp-icon"></div>
              <h3 class="step-title-bootstrap">WhatsApp Business</h3>
              <p class="step-subtitle-bootstrap">Semi-Automatic Responses</p>
              <button class="btn-bootstrap" onclick="openModal('modal-whatsapp-business')">Más detalles</button>
            </div>
            <!-- Conector hacia el centro -->
            <div class="connector-to-center">
              <svg viewBox="0 0 80 40" class="connector-svg">
                <path d="M0 20 Q20 32 40 20" stroke="#49AA9C" stroke-width="3" fill="none" stroke-linecap="round" />
                <circle cx="40" cy="20" r="4" fill="#49AA9C" />
              </svg>
            </div>
          </div>

          <!-- Paso 4 - Izquierda -->
          <div class="timeline-step timeline-step-left" data-step="4">
            <div class="roadmap-card-bootstrap">
              <div class="step-number-bootstrap">4</div>
              <div class="step-icon-bootstrap folder-icon"></div>
              <h3 class="step-title-bootstrap">Organizar Información</h3>
              <p class="step-subtitle-bootstrap">Information Management</p>
              <button class="btn-bootstrap" onclick="openModal('modal-organizar-informacion')">Más detalles</button>
            </div>
            <!-- Conector hacia el centro -->
            <div class="connector-to-center">
              <svg viewBox="0 0 80 40" class="connector-svg">
                <path d="M80 20 Q60 32 40 20" stroke="#49AA9C" stroke-width="3" fill="none" stroke-linecap="round" />
                <circle cx="40" cy="20" r="4" fill="#49AA9C" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="d-md-none"><!-- Mobile: Layout Vertical -->
      <div class="container">
        <div class="roadmap-mobile-container">

          <div class="roadmap-step-mobile-bootstrap" data-step="1"><!-- Paso 1 -->
            <div class="roadmap-card-mobile-bootstrap">
              <div class="step-number-mobile-bootstrap">1</div>
              <div class="step-icon-bootstrap google-icon"></div>
              <h3 class="step-title-mobile-bootstrap">Perfil de Google</h3>
              <p class="step-subtitle-mobile-bootstrap">Google My Business</p>
              <button class="btn-mobile-bootstrap" onclick="openModal('modal-google-business')">Más detalles</button>
            </div>
            <div class="connector-vertical">
              <svg viewBox="0 0 40 80" class="connector-svg-vertical">
                <path d="M20 5 Q5 40 20 75" stroke="#49AA9C" stroke-width="2" fill="none" stroke-linecap="round" />
                <circle cx="20" cy="75" r="3" fill="#49AA9C" />
              </svg>
            </div>
          </div>

          <div class="roadmap-step-mobile-bootstrap" data-step="2"><!-- Paso 2 -->
            <div class="roadmap-card-mobile-bootstrap">
              <div class="step-number-mobile-bootstrap">2</div>
              <div class="step-icon-bootstrap calendar-icon"></div>
              <h3 class="step-title-mobile-bootstrap">Google Calendar + Calendly</h3>
              <p class="step-subtitle-mobile-bootstrap">Appointment Scheduling</p>
              <button class="btn-mobile-bootstrap" onclick="openModal('modal-calendly')">Más detalles</button>
            </div>
            <div class="connector-vertical">
              <svg viewBox="0 0 40 80" class="connector-svg-vertical">
                <path d="M20 5 Q35 40 20 75" stroke="#49AA9C" stroke-width="2" fill="none" stroke-linecap="round" />
                <circle cx="20" cy="75" r="3" fill="#49AA9C" />
              </svg>
            </div>
          </div>

          <div class="roadmap-step-mobile-bootstrap" data-step="3"><!-- Paso 3 -->
            <div class="roadmap-card-mobile-bootstrap">
              <div class="step-number-mobile-bootstrap">3</div>
              <div class="step-icon-bootstrap whatsapp-icon"></div>
              <h3 class="step-title-mobile-bootstrap">WhatsApp Business</h3>
              <p class="step-subtitle-mobile-bootstrap">Semi-Automatic Responses</p>
              <button class="btn-mobile-bootstrap" onclick="openModal('modal-whatsapp-business')">Más detalles</button>
            </div>
            <div class="connector-vertical">
              <svg viewBox="0 0 40 80" class="connector-svg-vertical">
                <path d="M20 5 Q5 40 20 75" stroke="#49AA9C" stroke-width="2" fill="none" stroke-linecap="round" />
                <circle cx="20" cy="75" r="3" fill="#49AA9C" />
              </svg>
            </div>
          </div>

          <div class="roadmap-step-mobile-bootstrap" data-step="4"> <!-- Paso 4 -->
            <div class="roadmap-card-mobile-bootstrap">
              <div class="step-number-mobile-bootstrap">4</div>
              <div class="step-icon-bootstrap folder-icon"></div>
              <h3 class="step-title-mobile-bootstrap">Organizar Información</h3>
              <p class="step-subtitle-mobile-bootstrap">Information Management</p>
              <button class="btn-mobile-bootstrap" onclick="openModal('modal-organizar-informacion')">Más
                detalles</button>
            </div>

          </div><!-- Sin conector en el último paso -->

        </div>
      </div>
    </div>
  </div>
</section>

{% include "modal-recursos.md" %}