document.addEventListener('DOMContentLoaded', function() {
    const socialHub = document.getElementById('socialHub');
    const mainIcon = document.getElementById('mainSocialIcon');
    const currentIcon = document.getElementById('currentIcon');
    const expandedIcons = document.getElementById('expandedIcons');
    const overlay = document.getElementById('socialOverlay');
    const footer = document.querySelector('.site-footer');
    
    if (!socialHub || !mainIcon || !currentIcon || !expandedIcons) {
        return;
    }

    // Configuración de redes sociales
    const socialNetworks = [
        {
            name: 'whatsapp',
            icon: '/assets/icons/whatsapp.svg',
            alt: 'WhatsApp'
        },
        {
            name: 'instagram',
            icon: '/assets/icons/instagram.svg',
            alt: 'Instagram'
        },
        {
            name: 'facebook', 
            icon: '/assets/icons/facebook.svg',
            alt: 'Facebook'
        },
    ];

    let currentIndex = 0;
    let isExpanded = false;
    let rotationInterval;
    let lastScrollY = window.scrollY;
    let scrollTimeout;

    // Función para actualizar el icono principal
    function updateMainIcon() {
        if (isExpanded) return; // No rotar si está expandido
        
        const currentNetwork = socialNetworks[currentIndex];
        
        // Añadir clase de rotación
        mainIcon.classList.add('rotating');
        
        // Cambiar icono y clase después de la mitad de la animación
        setTimeout(() => {
            currentIcon.src = currentNetwork.icon;
            currentIcon.alt = currentNetwork.alt;
            
            // Actualizar clases del icono principal
            mainIcon.className = `main-social-icon ${currentNetwork.name}`;
            
            // Avanzar al siguiente índice
            currentIndex = (currentIndex + 1) % socialNetworks.length;
        }, 300);
        
        // Remover clase de rotación al final
        setTimeout(() => {
            mainIcon.classList.remove('rotating');
        }, 600);
    }

    // Función para iniciar rotación automática
    function startRotation() {
        if (!isExpanded && !rotationInterval) {
            // Iniciar inmediatamente con el primer cambio después de 3 segundos
            rotationInterval = setInterval(updateMainIcon, 4000);
        }
    }

    // Función para detener rotación
    function stopRotation() {
        if (rotationInterval) {
            clearInterval(rotationInterval);
            rotationInterval = null;
        }
    }

    // Función para expandir iconos
    function expandIcons() {
        if (isExpanded) return;
        
        isExpanded = true;
        stopRotation();
        
        expandedIcons.classList.add('active');
        expandedIcons.setAttribute('aria-hidden', 'false');
        mainIcon.setAttribute('aria-expanded', 'true');
        
        // Mejorar accesibilidad - focus en el primer elemento expandido
        const firstExpandedIcon = expandedIcons.querySelector('.expanded-icon');
        if (firstExpandedIcon) {
            setTimeout(() => firstExpandedIcon.focus(), 100);
        }
    }

    // Función para colapsar iconos
    function collapseIcons() {
        if (!isExpanded) return;
        
        isExpanded = false;
        
        expandedIcons.classList.remove('active');
        expandedIcons.setAttribute('aria-hidden', 'true');
        overlay.classList.remove('active');
        mainIcon.setAttribute('aria-expanded', 'false');
        
        // Reiniciar rotación después de un breve delay
        setTimeout(() => {
            startRotation();
        }, 500);
    }

    // Event listeners
    mainIcon.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (isExpanded) {
            collapseIcons();
        } else {
            expandIcons();
        }
    });

    // Soporte para teclado
    mainIcon.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            mainIcon.click();
        }
        if (e.key === 'Escape' && isExpanded) {
            collapseIcons();
            mainIcon.focus();
        }
    });

    // Navegación con teclado en iconos expandidos
    expandedIcons.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            collapseIcons();
            mainIcon.focus();
        }
    });

    // Cerrar al hacer clic fuera
    overlay.addEventListener('click', collapseIcons);

    // Manejo de clicks en el documento - ENFOQUE SIMPLIFICADO
    document.addEventListener('click', function(e) {
        if (!isExpanded) return;
        
        // Solo cerrar si se hace clic fuera del hub completo
        // NO interferir con los enlaces de redes sociales
        if (!socialHub.contains(e.target)) {
            collapseIcons();
        }
    });

    expandedIcons.addEventListener('click', function(e) {
        const clickedLink = e.target.closest('a.expanded-icon');

        if (clickedLink?.href) {
            // Solo colapsar si no se abre en una nueva pestaña
            if (clickedLink.target !== '_blank') {
                e.preventDefault();
                // Validar href antes de redireccionar manualmente
                if (/^https?:\/\//.test(clickedLink.href)) {
                    window.location.href = clickedLink.href;
                }
            }

            // En ambos casos colapsa el menú después de un breve retraso
            setTimeout(() => {
                collapseIcons();
            }, 400);
        }
    });


    // Ocultar/mostrar según visibilidad del footer
    if (footer) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    socialHub.classList.add('hidden');
                    stopRotation();
                } else {
                    socialHub.classList.remove('hidden');
                    if (!isExpanded) {
                        startRotation();
                    }
                }
            });
        }, observerOptions);

        observer.observe(footer);
    }

    // Ocultar al hacer scroll rápido hacia abajo
    function handleScroll() {
        clearTimeout(scrollTimeout);
        
        const currentScrollY = window.scrollY;
        const scrollDifference = currentScrollY - lastScrollY;
        
        // Si hace scroll rápido hacia abajo (más de 100px)
        if (scrollDifference > 100 && isExpanded) {
            collapseIcons();
        }
        
        lastScrollY = currentScrollY;
        
        // Timeout para reactivar después de parar el scroll
        scrollTimeout = setTimeout(() => {
            if (!footer || !socialHub.classList.contains('hidden')) {
                if (!isExpanded) {
                    startRotation();
                }
            }
        }, 150);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Inicializar - configurar el primer icono y empezar la rotación
    // Configurar el icono inicial (Instagram)
    const initialNetwork = socialNetworks[0];
    currentIcon.src = initialNetwork.icon;
    currentIcon.alt = initialNetwork.alt;
    mainIcon.className = `main-social-icon ${initialNetwork.name}`;
    
    // Iniciar la rotación después de 3 segundos
    setTimeout(() => {
        startRotation();
    }, 3000); // Esperar 3 segundos antes de la primera rotación

    // Fallback para navegadores sin Intersection Observer
    if (!window.IntersectionObserver && footer) {
        function fallbackFooterCheck() {
            const footerRect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (footerRect.top < windowHeight && footerRect.bottom > 0) {
                socialHub.classList.add('hidden');
                stopRotation();
            } else {
                socialHub.classList.remove('hidden');
                if (!isExpanded) {
                    startRotation();
                }
            }
        }

        window.addEventListener('scroll', fallbackFooterCheck);
        window.addEventListener('resize', fallbackFooterCheck);
        fallbackFooterCheck();
    }

    // Agregar roles semánticos para accesibilidad
    if (mainIcon) {
        mainIcon.setAttribute('role', 'button');
    }
    if (expandedIcons) {
        expandedIcons.setAttribute('role', 'list');
        expandedIcons.querySelectorAll('.expanded-icon').forEach(function(icon) {
            icon.setAttribute('role', 'listitem');
        });
    }
});
