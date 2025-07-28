<!-- MODALES PARA RECURSOS -->
<div id="modal-google-business" class="modal">
  <div class="modal-content">
    <button class="modal-close" onclick="closeModal('modal-google-business')" aria-label="Cerrar modal">&times;</button>
    <h3>Perfil de Google My Business</h3>
    <p class="modal-subtitle">Configura tu presencia online local y aumenta tu visibilidad en Google.</p>
    
    <h4>Beneficios:</h4>
    <ul>
      <li>📍 Aparece en búsquedas locales</li>
      <li>⭐ Gestiona reseñas de clientes</li>
      <li>📞 Facilita el contacto directo</li>
      <li>📊 Obtén estadísticas de rendimiento</li>
    </ul>
    
    <p class="resultado"><strong>Resultado:</strong> Mayor visibilidad local y más clientes potenciales encontrándote fácilmente.</p>
    
    <div class="modal-cta">
      <h4>¿Listo para empezar?</h4>
      <p>Descarga un manual que te guiara en el proceso y comienza a aparecer en las búsquedas locales.</p>
      <a href="https://drive.google.com/file/d/1aKtlOqF4CvBYuPr95-SjBTMfPhZ9bD0R/view?usp=sharing" target="_blank" class="modal-btn" rel="noopener noreferrer">Descargar manual gratuito</a>
    </div>
  </div>
</div>

<div id="modal-calendly" class="modal">
  <div class="modal-content">
    <button class="modal-close" onclick="closeModal('modal-calendly')" aria-label="Cerrar modal">&times;</button>
    <h3>Página de Calendly</h3>
    <p class="modal-subtitle">Automatiza la programación de citas y elimina el intercambio de mensajes.</p>
    
    <h4>Beneficios:</h4>
    <ul>
      <li>🗓️ Reservas automáticas 24/7</li>
      <li>⏰ Sincroniza con tu calendario</li>
      <li>📧 Confirmaciones automáticas</li>
      <li>💰 Reduce tiempo administrativo</li>
    </ul>
    
    <p class="resultado"><strong>Resultado:</strong> Ahorra horas semanales en coordinación de citas y mejora la experiencia del cliente.</p>
    
    <div class="modal-cta">
      <h4>Automatiza tus citas</h4>
      <p>Descarga un manual y configura tu calendario que permite a los clientes reserven automáticamente.</p>
      <a href="https://drive.google.com/file/d/1tuaz3dna9U0wbKjWBbiyz5CgvENvtQag/view?usp=sharing" target="_blank" class="modal-btn" rel="noopener noreferrer">Descargar manual</a>
    </div>
  </div>
</div>

<div id="modal-whatsapp-business" class="modal">
  <div class="modal-content">
    <button class="modal-close" onclick="closeModal('modal-whatsapp-business')" aria-label="Cerrar modal">&times;</button>
    <h3>WhatsApp Business</h3>
    <p class="modal-subtitle">Implementa respuestas automáticas y mejora la atención al cliente.</p>
    
    <h4>Beneficios:</h4>
    <ul>
      <li>🤖 Respuestas instantáneas</li>
      <li>📋 Menús interactivos</li>
      <li>📈 Métricas de conversación</li>
      <li>👥 Gestión de contactos</li>
    </ul>
    
    <p class="resultado"><strong>Resultado:</strong> Atención al cliente más eficiente y profesional, disponible 24/7.</p>
    
    <div class="modal-cta">
      <h4>Mejora tu atención</h4>
      <p>Descarga un manual de WhatsApp Business y configura respuestas automáticas.</p>
      <a href="https://drive.google.com/file/d/1U3fNyi3qe6RHXauLpRMyXJwhatgK7-ll/view?usp=sharing" target="_blank" class="modal-btn" rel="noopener noreferrer">Descargar manual WhatsApp Business</a>
    </div>
  </div>
</div>

<div id="modal-organizar-informacion" class="modal">
  <div class="modal-content">
    <button class="modal-close" onclick="closeModal('modal-organizar-informacion')" aria-label="Cerrar modal">&times;</button>
    <h3>Organizar Información</h3>
    <p class="modal-subtitle">Centraliza y estructura toda la información de tu negocio.</p>
    
    <h4>Beneficios:</h4>
    <ul>
      <li>📁 Sistema organizado</li>
      <li>🔍 Búsqueda rápida</li>
      <li>📊 Reportes automáticos</li>
      <li>🔄 Procesos estandarizados</li>
    </ul>
    
    <p class="resultado"><strong>Resultado:</strong> Información accesible, procesos claros y operaciones más eficientes.</p>
    
    <div class="modal-cta">
      <h4>Organiza tu negocio</h4>
      <p>Explora más recursos y herramientas para optimizar tu información.</p>
      <a href="/contacto#contacto" class="modal-btn">Solicitar ayuda personalizada</a>
    </div>
  </div>
</div>

<script>
  // Modal functionality with improved animations and scroll management
  let savedScrollPosition = 0;

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      // Guardar posición actual del scroll
      savedScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      
      // Prevenir scroll del body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${savedScrollPosition}px`;
      document.body.style.width = '100%';

      // Mostrar modal
      modal.style.display = 'flex';
      
      // Forzar reflow para que la animación funcione
      modal.offsetHeight;
      
      // Añadir clase show para animación
      modal.classList.add('show');

      // Focus en el botón cerrar después de la animación
      setTimeout(() => {
        const closeButton = modal.querySelector('.modal-close');
        if (closeButton) {
          closeButton.focus();
        }
      }, 400);
    }
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      // Quitar clase show para animación de salida
      modal.classList.remove('show');
      
      // Esperar a que termine la animación antes de ocultar
      setTimeout(() => {
        modal.style.display = 'none';
        
        // Restaurar scroll del body
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        
        // Restaurar posición del scroll
        window.scrollTo({
          top: savedScrollPosition,
          left: 0,
          behavior: 'instant'
        });
      }, 300);
    }
  }

  // Initialize modal event listeners
  document.addEventListener('DOMContentLoaded', function() {
    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal.id);
        }
      });
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal.show').forEach(modal => {
          closeModal(modal.id);
        });
      }
    });
  });
</script>
