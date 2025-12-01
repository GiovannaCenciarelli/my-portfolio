// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Se for um link para uma seção interna da página
        if (targetId.startsWith('#')) {
            e.preventDefault();
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
        // Se for um link externo (como para o PDF), não fazer preventDefault
    });
});

// Add active class to current section in navigation
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.navbar a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all section cards for animation
document.querySelectorAll('.section-card').forEach(card => {
    observer.observe(card);
});

// Observe all project cards for animation
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// Observe all experience cards for animation
document.querySelectorAll('.exp-card').forEach(card => {
    observer.observe(card);
});

// Add animation class for initial load
document.addEventListener('DOMContentLoaded', function() {
    // Add animation class to hero section
    document.querySelector('.hero-content').classList.add('animate-in');
    
    // Animate profile picture on load
    setTimeout(() => {
        const profilePic = document.querySelector('.profile-pic');
        if (profilePic) {
            profilePic.classList.add('animate-in');
        }
    }, 300);
    
    // Add click effect to download buttons
    document.querySelectorAll('.download-btn, .contact-link[href$=".pdf"]').forEach(button => {
        button.addEventListener('click', function(e) {
            // Adiciona um efeito visual ao clicar
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
});