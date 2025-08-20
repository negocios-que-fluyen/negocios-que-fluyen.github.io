<!-- Modales para cada etapa -->
{% for etapa in recursos.etapas %}
<div class="modal fade" id="{{ etapa.modal }}" tabindex="-1" aria-labelledby="{{ etapa.modal }}Label" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="{{ etapa.modal }}Label">{{ etapa.titulo }}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>{{ etapa.descripcion }}</p>
        {% if etapa.caracteristicas %}
        <ul>
          {% for caracteristica in etapa.caracteristicas %}
          <li>{{ caracteristica }}</li>
          {% endfor %}
        </ul>
        {% endif %}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
{% endfor %}
