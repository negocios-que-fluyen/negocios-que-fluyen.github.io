{% for modal in recursos.modales %}
<!-- Modal: {{ modal.titulo }} -->
<div id="{{ modal.modal }}" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="modal-title">{{ modal.titulo }}</h3>
      <button type="button" class="modal-close" onclick="closeModal('{{ modal.modal }}')" aria-label="Cerrar modal">
        <span>&times;</span>
      </button>
    </div>
    
    <div class="modal-body">
      <div class="modal-description">
        <p>{{ modal.descripcion }}</p>
      </div>
      
      <div class="modal-benefits">
        <h4>Beneficios:</h4>
        <ul class="benefits-list">
          {% for beneficio in modal.beneficios %}
          <li>{{ beneficio }}</li>
          {% endfor %}
        </ul>
      </div>
      
      <div class="modal-result">
        <h4>Resultado:</h4>
        <p>{{ modal.resultado }}</p>
      </div>
      
      <div class="modal-cta">
        <h4>{{ modal.cta.titulo }}</h4>
        <p>{{ modal.cta.descripcion }}</p>
        <a href="{{ modal.cta.enlace }}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
          {{ modal.cta.textoBoton }}
        </a>
      </div>
    </div>
  </div>
</div>
{% endfor %}

<script>
  // Modal functionality with improved animations and scroll management
  let savedScrollPosition = 0;

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      // Guardar posición actual del scroll
      savedScrollPosition = window.scrollY;
      
      // Prevenir scroll del body
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${savedScrollPosition}px`;
      document.body.style.width = '100%';
      
      // Mostrar modal
      modal.style.display = 'flex';
      
      // Forzar reflow antes de añadir la clase
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
