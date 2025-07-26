// Intersection Observer para animaciones al scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar elementos que necesitan animación
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.impact-headline, .impact-grid, .impact-final, .info-title, .info-grid, .info-centered, .message-content, .value-content, .program-content, .info-content, .cta-content');
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Smooth scroll para navegación
document.addEventListener('DOMContentLoaded', () => {
    // Scroll suave para el indicador de scroll en el hero
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const impactSection = document.querySelector('.impact');
            impactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Activar background vidriado del navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
});

// Animación de números en las estadísticas
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/\D/g, ''));
        const suffix = stat.textContent.replace(/\d/g, '');
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + suffix;
        }, 30);
    });
}

// Observar cuando las estadísticas son visibles para animarlas
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Efecto hover en las áreas del programa
document.addEventListener('DOMContentLoaded', () => {
    const areas = document.querySelectorAll('.area');
    
    areas.forEach(area => {
        area.addEventListener('mouseenter', () => {
            area.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        area.addEventListener('mouseleave', () => {
            area.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Funcionalidad del botón CTA
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Aquí puedes agregar la lógica para el formulario de aplicación
            // Por ahora, abrirá un modal o redirigirá a un formulario
            alert('¡Gracias por tu interés! Pronto estará disponible el formulario de aplicación.');
            
            // Alternativa: abrir un enlace externo
            // window.open('https://forms.example.com/internship-application', '_blank');
        });
    }
});

// Navegación por teclado mejorada
document.addEventListener('keydown', (e) => {
    // Navegación con flechas arriba/abajo
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const sections = document.querySelectorAll('section');
        const currentSection = Array.from(sections).find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
        });
        
        if (currentSection) {
            const currentIndex = Array.from(sections).indexOf(currentSection);
            let nextIndex;
            
            if (e.key === 'ArrowDown') {
                nextIndex = Math.min(currentIndex + 1, sections.length - 1);
            } else {
                nextIndex = Math.max(currentIndex - 1, 0);
            }
            
            sections[nextIndex].scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Efecto de carga progresiva de imágenes (para futuras implementaciones)
function preloadImages() {
    const imageUrls = [
        // Aquí puedes agregar URLs de imágenes cuando las tengas
        // 'assets/images/hero-bg.jpg',
        // 'assets/images/testimonial-1.jpg',
        // etc.
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Optimización de performance
let ticking = false;

function updateOnScroll() {
    // Aquí puedes agregar efectos que se ejecuten en cada scroll
    // pero optimizados para no afectar el performance
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Detectar el tipo de dispositivo para optimizaciones
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const isTablet = /iPad|Android/i.test(navigator.userAgent) && window.innerWidth >= 768 && window.innerWidth <= 1024;

// Ajustar animaciones según el dispositivo
if (isMobile || isTablet) {
    // Reducir la intensidad de las animaciones en dispositivos móviles
    document.documentElement.style.setProperty('--transition-slow', 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)');
}

// Función para manejar el cambio de tamaño de ventana
function handleResize() {
    // Recalcular posiciones si es necesario
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', handleResize);
handleResize(); // Ejecutar una vez al cargar

// Función para detectar si el usuario prefiere movimiento reducido
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Deshabilitar animaciones si el usuario prefiere movimiento reducido
    document.documentElement.style.setProperty('--transition-smooth', 'none');
    document.documentElement.style.setProperty('--transition-slow', 'none');
}

// Escuchar cambios en la preferencia de movimiento
prefersReducedMotion.addEventListener('change', (e) => {
    if (e.matches) {
        document.documentElement.style.setProperty('--transition-smooth', 'none');
        document.documentElement.style.setProperty('--transition-slow', 'none');
    } else {
        document.documentElement.style.setProperty('--transition-smooth', 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)');
        document.documentElement.style.setProperty('--transition-slow', 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)');
    }
});

// Función para manejar errores de carga de fuentes
function handleFontLoadError() {
    console.warn('Algunas fuentes personalizadas no pudieron cargarse. Se usarán fuentes del sistema.');
}

// Detectar cuando las fuentes están cargadas
if ('fonts' in document) {
    Promise.all([
        document.fonts.load('1em Neue Montreal'),
        document.fonts.load('1em Queens')
    ]).catch(handleFontLoadError);
}

// Función para agregar clases de carga
document.addEventListener('DOMContentLoaded', () => {
    // Agregar clase para indicar que el contenido está listo
    document.body.classList.add('loaded');
    
    // Remover clase de carga después de un breve delay
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 100);
});

// Función para manejar el estado de carga
window.addEventListener('load', () => {
    document.body.classList.add('fully-loaded');
});

// Exportar funciones para uso externo si es necesario
window.UnCorazonInternship = {
    animateNumbers,
    preloadImages,
    handleResize
}; 