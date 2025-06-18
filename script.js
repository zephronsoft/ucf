// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Button click handlers
document.addEventListener('DOMContentLoaded', function() {
    // Volunteer button
    const volunteerBtns = document.querySelectorAll('.btn-volunteer, .btn-primary');
    volunteerBtns.forEach(btn => {
        if (btn.textContent.includes('Join') || btn.textContent.includes('Volunteer')) {
            btn.addEventListener('click', function() {
                alert('Thank you for your interest! Please contact us at info@peoplesparty.org to get started.');
            });
        }
    });

    // Donate button
    const donateBtns = document.querySelectorAll('.btn-donate');
    donateBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Thank you for wanting to support us! Donation portal coming soon.');
        });
    });

    // Manifesto button
    const manifestoBtns = document.querySelectorAll('.btn-secondary');
    manifestoBtns.forEach(btn => {
        if (btn.textContent.includes('Manifesto')) {
            btn.addEventListener('click', function() {
                alert('Our detailed manifesto will be available soon. Stay tuned!');
            });
        }
    });
});

// Add some animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.issue-card, .focus-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
}); 