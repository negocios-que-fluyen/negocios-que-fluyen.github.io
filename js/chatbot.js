// Configuración del chat
const config = {
  webhookUrl: 'https://n8n.josuem01.dev/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat',
  route: 'general',
  initialMessages: [
    { type: 'bot', text: '¡Hola! 👋' },
    { type: 'bot', text: 'Soy el asistente de Negocios que fluyen. Estoy aquí para resolver tus dudas.' }
  ]
};

// Estado del chat
let chatVisible = false;
let isTyping = false;
let sessionId = localStorage.getItem('chatSessionId') || generateSessionId();

// Elementos del DOM
let chatElement;
let messagesContainer;
let chatForm;
let chatInput;

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initChat);

function initChat() {
  // Obtener elementos del DOM
  chatElement = document.getElementById('custom-chat');
  messagesContainer = document.getElementById('chat-messages');
  chatForm = document.getElementById('chat-form');
  chatInput = document.getElementById('chat-input');
  const chatToggleButton = document.getElementById('chat-cta');

  // Si no existe el contenedor del chat, detener inicialización
  if (!chatElement) {
    console.warn('custom-chat no encontrado. Chat no inicializado.');
    return;
  }

  // Configurar event listeners
  var btnOpen = chatToggleButton;
  var btnClose = document.getElementById('close-chat');
  btnOpen && btnOpen.addEventListener('click', toggleChat);
  btnClose && btnClose.addEventListener('click', toggleChat);
  chatForm && chatForm.addEventListener('submit', handleSubmit);

  // Guardar ID de sesión
  localStorage.setItem('chatSessionId', sessionId);

  // Mostrar mensajes iniciales
  if (messagesContainer) {
    config.initialMessages.forEach(msg => addMessage(msg.text, msg.type));
  }

  // Ocultar el botón del chat cuando el footer es visible
  setupFooterObserver(chatToggleButton);
}

// Función para generar ID de sesión único
function generateSessionId() {
  return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// Alternar visibilidad del chat
function toggleChat() {
  chatVisible = !chatVisible;
  if (!chatElement) return;
  chatElement.classList.toggle('chat-visible');
  
  if (chatVisible) {
    chatInput && chatInput.focus();
    scrollToBottom();
  }
}

// Manejar envío de mensajes
async function handleSubmit(e) {
  e.preventDefault();
  const message = chatInput.value.trim();
  if (!message || isTyping) return;

  // Agregar mensaje del usuario
  addMessage(message, 'user');
  chatInput.value = '';
  
  // Mostrar indicador de typing
  showTypingIndicator();
  
  try {
    // Enviar mensaje a n8n
    const response = await sendMessage(message);
    hideTypingIndicator();
    
    // Agregar respuesta del bot
    if (response && response.text) {
      addMessage(response.text, 'bot');
    }
  } catch (error) {
    console.error('Error:', error);
    hideTypingIndicator();
    addMessage('Lo siento, ha ocurrido un error. Por favor, intenta de nuevo.', 'bot');
  }
}

// Enviar mensaje a n8n
async function sendMessage(text) {
  try {
    const response = await fetch(config.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Chat-Lang': 'es'
      },
      body: JSON.stringify({
        chatInput: text,
        sessionId: sessionId,
        action: 'sendMessage',
        lang: 'es',
        urlPath: window.location.pathname
      })
    });

    if (!response.ok) {
      console.error('Error de servidor:', response.status, response.statusText);
      throw new Error('Error en la comunicación con el servidor');
    }

    // Primero obtenemos el texto de la respuesta para depuración
    const responseText = await response.text();
    console.log('Respuesta raw:', responseText);

    let data;
    try {
      // Intentamos parsear como JSON solo si hay contenido
      data = responseText ? JSON.parse(responseText) : {};
    } catch (e) {
      console.log('La respuesta no es JSON, usando texto plano');
      return { text: responseText || 'No se recibió respuesta del servidor' };
    }

    // Si llegamos aquí, tenemos un JSON válido
    console.log('Respuesta parseada:', data);
    
    // Extraemos específicamente el campo output que devuelve n8n según tu flujo
    if (data && data.output) {
      return { text: data.output };
    }
    
    // Si es una cadena directa, la usamos
    if (typeof data === 'string') {
      return { text: data };
    }
    
    // Comprobamos otras posibles propiedades que podría devolver n8n
    if (data.response) return { text: data.response };
    if (data.text) return { text: data.text };
    if (data.message) return { text: data.message };
    if (data.content) return { text: data.content };
    
    // Si no encontramos la respuesta pero hay datos, convertimos a string para mostrar algo
    if (Object.keys(data).length > 0) {
      console.log("No se encontró la respuesta en un formato conocido:", data);
      return { text: "Recibí una respuesta pero no pude interpretarla correctamente." };
    }
    
    // Si la respuesta está completamente vacía
    console.error('El servidor devolvió un objeto vacío');
    return { text: 'Lo siento, no recibí respuesta del servidor. ¿Podrías intentarlo de nuevo?' };
  } catch (error) {
    console.error('Error completo:', error);
    throw new Error(`Error en la comunicación: ${error.message}`);
  }
}

// Agregar un mensaje al chat
function addMessage(text, type) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message message-${type}`;
  messageDiv.textContent = text;
  messagesContainer.appendChild(messageDiv);
  scrollToBottom();
}

// Mostrar indicador de typing
function showTypingIndicator() {
  isTyping = true;
  const indicator = document.createElement('div');
  indicator.className = 'typing-indicator message message-bot';
  indicator.innerHTML = '<span></span><span></span><span></span>';
  messagesContainer.appendChild(indicator);
  scrollToBottom();
}

// Ocultar indicador de typing
function hideTypingIndicator() {
  isTyping = false;
  const indicator = messagesContainer.querySelector('.typing-indicator');
  if (indicator) {
    indicator.remove();
  }
}

// Scroll al último mensaje
function scrollToBottom() {
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Ocultar el botón del chatbot si el footer entra en pantalla
function setupFooterObserver(chatToggleButton) {
  if (!chatToggleButton) return;

  const footer = document.querySelector('.site-footer');
  if (!footer) return;

  const toggleVisibility = (isHidden) => {
    chatToggleButton.classList.toggle('hidden', isHidden);
  };

  if (window.IntersectionObserver) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        toggleVisibility(entry.isIntersecting);
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    observer.observe(footer);
    return;
  }

  // Fallback para navegadores sin IntersectionObserver
  function fallbackCheck() {
    const rect = footer.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    toggleVisibility(isVisible);
  }

  window.addEventListener('scroll', fallbackCheck, { passive: true });
  window.addEventListener('resize', fallbackCheck);
  fallbackCheck();
}
