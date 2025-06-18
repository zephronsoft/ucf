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
    const navLinks = document.querySelectorAll('.nav-list a');
    
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

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    }
});

// Button click handlers
document.addEventListener('DOMContentLoaded', function() {
    // Volunteer button handlers
    const volunteerBtns = document.querySelectorAll('.btn-volunteer, .btn-primary');
    volunteerBtns.forEach(btn => {
        if (btn.textContent.includes('Join') || btn.textContent.includes('Volunteer')) {
            btn.addEventListener('click', function() {
                showModal('volunteer');
            });
        }
    });

    // Donate button handlers
    const donateBtns = document.querySelectorAll('.btn-donate, .btn-accent');
    donateBtns.forEach(btn => {
        if (btn.textContent.includes('Donate')) {
            btn.addEventListener('click', function() {
                showModal('donate');
            });
        }
    });

    // Get Involved button handlers
    const getInvolvedBtns = document.querySelectorAll('.btn-secondary');
    getInvolvedBtns.forEach(btn => {
        if (btn.textContent.includes('Get Involved') || btn.textContent.includes('View Events')) {
            btn.addEventListener('click', function() {
                showModal('get-involved');
            });
        }
    });

    // Program Learn More buttons
    const programBtns = document.querySelectorAll('.btn-program');
    programBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const programCard = btn.closest('.program-card');
            const programTitle = programCard.querySelector('h3').textContent;
            showProgramDetails(programTitle);
        });
    });
});

// Modal functionality
function showModal(type) {
    let message = '';
    let title = '';
    
    switch(type) {
        case 'volunteer':
            title = 'Join Our Volunteer Team';
            message = `Thank you for your interest in volunteering with UCF!
            
We offer various volunteer opportunities:
• Community outreach programs
• Educational support activities  
• Event organization and coordination
• Administrative support
• Healthcare assistance programs

To get started, please contact us at:
📧 volunteer@ucf.org
📞 +1 (555) 123-4567

We'll match you with opportunities that fit your skills and schedule.`;
            break;
            
        case 'donate':
            title = 'Support Our Mission';
            message = `Your donation helps us continue our vital work in the community.

Donation Options:
💳 One-time donation
🔄 Monthly giving program
🎁 In-kind donations
🏢 Corporate partnerships

Ways to donate:
• Online: www.ucf.org/donate
• Phone: +1 (555) 123-4567
• Mail: UCF Headquarters, Main Street, City Center

All donations are tax-deductible. Thank you for your generosity!`;
            break;
            
        case 'get-involved':
            title = 'Get Involved with UCF';
            message = `Join us in making a difference!

Upcoming Events:
📅 Annual Charity Gala - December 15th
🚶 Community Walkathon - January 20th
🎪 Awareness Campaign - February 10th
🤝 Volunteer Training - Ongoing

For more information:
📧 info@ucf.org
🌐 www.ucf.org/events
📞 +1 (555) 123-4567

Follow us on social media for updates!`;
            break;
    }
    
    alert(`${title}\n\n${message}`);
}

// Program details modal
function showProgramDetails(programTitle) {
    let details = '';
    
    switch(programTitle) {
        case 'Social Welfare Programs':
            details = `Social Welfare Programs Details:

🏠 Community Support Initiatives
• Family assistance programs
• Food distribution networks
• Housing support services

🚨 Emergency Relief Services  
• Disaster response coordination
• Emergency financial assistance
• Crisis intervention support

💊 Healthcare Assistance Programs
• Medical expense support
• Health screening camps
• Medicine distribution

👴 Elder Care Services
• Senior citizen support
• Healthcare for elderly
• Social engagement programs

Contact us to learn more or apply for assistance.`;
            break;
            
        case 'Educational Support':
            details = `Educational Support Programs:

🎓 Scholarship Programs
• Merit-based scholarships
• Need-based financial aid
• Vocational training support

📚 Educational Material Distribution
• Free textbooks and supplies
• Digital learning resources
• Library development

🛠️ Skill Development Workshops
• Computer literacy training
• Vocational skill courses
• Entrepreneurship development

📖 Adult Literacy Programs
• Basic education for adults
• Language learning classes
• Life skills training

Apply today to transform your future through education!`;
            break;
            
        case 'Community Development':
            details = `Community Development Projects:

🏗️ Infrastructure Development
• Road and bridge construction
• Community center development
• Public facility improvements

💧 Clean Water Initiatives
• Well drilling projects
• Water purification systems
• Sanitation infrastructure

🚿 Sanitation Programs
• Toilet construction projects
• Waste management systems
• Hygiene awareness campaigns

🌱 Environmental Conservation
• Tree plantation drives
• Renewable energy projects
• Environmental education

Building stronger communities together!`;
            break;
            
        case 'Humanitarian Aid':
            details = `Humanitarian Aid Services:

🆘 Disaster Relief Operations
• Emergency response teams
• Relief material distribution
• Rehabilitation support

🍽️ Food Distribution Programs
• Daily meal programs
• Nutritional support
• Community kitchens

🏠 Clothing and Shelter Assistance
• Emergency shelter provision
• Clothing distribution drives
• Temporary housing support

🏥 Medical Camps and Health Screenings
• Free medical checkups
• Specialist consultations
• Health awareness programs

We're here to help in times of need.`;
            break;
    }
    
    alert(`${programTitle}\n\n${details}\n\nFor more information: info@ucf.org | +1 (555) 123-4567`);
}

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace('+', ''));
        let current = 0;
        const increment = target / 100;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Trigger counter animation when stats section is visible
            if (entry.target.classList.contains('hero-stats')) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
    // Observe cards for fade-in animation
    const animatedElements = document.querySelectorAll('.value-card, .program-card, .impact-card, .involvement-card, .contact-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Observe stats section for counter animation
    const statsSection = document.querySelector('.hero-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
});

// Smooth reveal animations on scroll
window.addEventListener('scroll', function() {
    const reveals = document.querySelectorAll('.section-header, .hero-text');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('animate-reveal');
        }
    });
});

// Add CSS class for reveal animation
const style = document.createElement('style');
style.textContent = `
    .animate-reveal {
        animation: slideInUp 0.8s ease-out;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
}

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', toggleMobileMenu);

// Social media link handlers
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link, .social-icon');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').className;
            let message = 'Follow us on social media for updates about our programs and community impact!';
            
            if (platform.includes('facebook')) {
                message = 'Like our Facebook page for daily updates and community stories!';
            } else if (platform.includes('twitter')) {
                message = 'Follow us on Twitter @UCF_Foundation for real-time updates!';
            } else if (platform.includes('instagram')) {
                message = 'Follow @ucf_foundation on Instagram for inspiring photos and stories!';
            } else if (platform.includes('linkedin')) {
                message = 'Connect with us on LinkedIn for professional updates and partnership opportunities!';
            }
            
            alert(`Social Media\n\n${message}\n\nComing soon: Direct links to our social media profiles!`);
        });
    });
});

console.log('UCF Website loaded successfully! 🎉');
console.log('Umesh Chandra Foundation - Serving communities with compassion and dedication.'); 