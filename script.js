// DOM Elements
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const issueTabs = document.querySelectorAll('.issue-tab');
const issuePanels = document.querySelectorAll('.issue-panel');
const statNumbers = document.querySelectorAll('.stat-number');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Navigation active states
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Key Issues Tab Functionality
issueTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetIssue = tab.getAttribute('data-issue');
        
        // Remove active classes
        issueTabs.forEach(t => t.classList.remove('active'));
        issuePanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding panel
        const targetPanel = document.getElementById(targetIssue);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});

// Button Actions
document.querySelector('.btn-volunteer').addEventListener('click', () => {
    showModal('volunteer');
});

document.querySelector('.btn-donate').addEventListener('click', () => {
    showModal('donate');
});

// Join movement buttons
document.querySelectorAll('.btn-join').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const cardTitle = e.target.closest('.join-card').querySelector('h4').textContent;
        showModal('join', cardTitle);
    });
});

// Hero buttons
if (document.querySelector('.btn-primary')) {
    document.querySelector('.btn-primary').addEventListener('click', () => {
        document.getElementById('join-movement').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

if (document.querySelector('.btn-secondary')) {
    document.querySelector('.btn-secondary').addEventListener('click', () => {
        showModal('vision');
    });
}

// Modal functionality
function showModal(type, extra = '') {
    let modalContent = '';
    
    switch(type) {
        case 'volunteer':
            modalContent = `
                <div class="modal-header">
                    <h2>Volunteer With UCF</h2>
                    <span class="close-modal">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Join our dedicated team of volunteers and make a real difference in your community.</p>
                    <div class="volunteer-options">
                        <div class="option">
                            <h4>Field Operations</h4>
                            <p>Direct community service and outreach programs</p>
                        </div>
                        <div class="option">
                            <h4>Administrative Support</h4>
                            <p>Help with office work, coordination, and documentation</p>
                        </div>
                        <div class="option">
                            <h4>Skills-Based Volunteering</h4>
                            <p>Use your professional skills for specialized projects</p>
                        </div>
                        <div class="option">
                            <h4>Event Support</h4>
                            <p>Assist with organizing and managing community events</p>
                        </div>
                    </div>
                    <div class="contact-info">
                        <p><strong>Contact us:</strong></p>
                        <p>Email: volunteer@ucf.org</p>
                        <p>Phone: +1 (555) 123-4567</p>
                    </div>
                </div>
            `;
            break;
            
        case 'donate':
            modalContent = `
                <div class="modal-header">
                    <h2>Support Our Mission</h2>
                    <span class="close-modal">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Your donation helps us continue our vital work in the community.</p>
                    <div class="donation-options">
                        <div class="donation-tier">
                            <h4>Community Supporter - $25</h4>
                            <p>Provides school supplies for one child</p>
                        </div>
                        <div class="donation-tier">
                            <h4>Program Partner - $100</h4>
                            <p>Supports a family's monthly grocery needs</p>
                        </div>
                        <div class="donation-tier">
                            <h4>Change Maker - $500</h4>
                            <p>Funds a community development project</p>
                        </div>
                        <div class="donation-tier">
                            <h4>Impact Leader - $1000+</h4>
                            <p>Sponsors comprehensive community programs</p>
                        </div>
                    </div>
                    <div class="donation-methods">
                        <p><strong>Donation Methods:</strong></p>
                        <p>• Online: www.ucf.org/donate</p>
                        <p>• Bank Transfer: Account details available on request</p>
                        <p>• Check: Made payable to "Umesh Chandra Foundation"</p>
                        <p>• In-kind donations: Contact us for specific needs</p>
                    </div>
                </div>
            `;
            break;
            
        case 'join':
            modalContent = `
                <div class="modal-header">
                    <h2>${extra} - Join Our Team</h2>
                    <span class="close-modal">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Thank you for your interest in ${extra.toLowerCase()} with UCF!</p>
                    <div class="requirements">
                        <h4>What we're looking for:</h4>
                        <ul>
                            <li>Passion for community service and social impact</li>
                            <li>Commitment to our mission and values</li>
                            <li>Strong communication and teamwork skills</li>
                            <li>Reliability and dedication to making a difference</li>
                        </ul>
                    </div>
                    <div class="next-steps">
                        <h4>How to get started:</h4>
                        <ol>
                            <li>Submit your application via email</li>
                            <li>Attend an orientation session</li>
                            <li>Complete any required training</li>
                            <li>Begin making an impact in your community!</li>
                        </ol>
                    </div>
                    <div class="contact-info">
                        <p><strong>Ready to join?</strong></p>
                        <p>Email: careers@ucf.org</p>
                        <p>Phone: +1 (555) 123-4567</p>
                        <p>Office: UCF Headquarters, Main Street, City Center</p>
                    </div>
                </div>
            `;
            break;
            
        case 'vision':
            modalContent = `
                <div class="modal-header">
                    <h2>Our Vision & Mission</h2>
                    <span class="close-modal">&times;</span>
                </div>
                <div class="modal-body">
                    <div class="vision-section">
                        <h4>Our Vision</h4>
                        <p>To create a society where every individual has access to basic necessities, education, and opportunities for growth, inspired by the values and dedication of Umesh Chandra.</p>
                    </div>
                    <div class="mission-section">
                        <h4>Our Mission</h4>
                        <p>The Umesh Chandra Foundation is dedicated to uplifting communities through various social welfare programs, educational initiatives, and humanitarian services, carrying forward the legacy and vision of our founder.</p>
                    </div>
                    <div class="values-section">
                        <h4>Our Core Values</h4>
                        <div class="values-grid">
                            <div class="value">
                                <strong>Service:</strong> Dedicated to serving those in need with compassion
                            </div>
                            <div class="value">
                                <strong>Integrity:</strong> Transparent and honest in all our dealings
                            </div>
                            <div class="value">
                                <strong>Community:</strong> Building stronger, more resilient communities
                            </div>
                            <div class="value">
                                <strong>Excellence:</strong> Striving for the highest standards in our programs
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
    }
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            ${modalContent}
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Counter animation for statistics
function animateCounters() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + '+';
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

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Trigger counter animation for stats
            if (entry.target.classList.contains('stat-highlight')) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber && !statNumber.classList.contains('animated')) {
                    statNumber.classList.add('animated');
                    animateCounter(statNumber);
                }
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.featured-card, .update-item, .achievement-card, .join-card, .stat-highlight').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Individual counter animation
function animateCounter(element) {
    const target = parseInt(element.textContent.replace('+', ''));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        if (current < target) {
            current += increment;
            element.textContent = Math.ceil(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateCounter();
}

// Mobile menu functionality (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set first tab as active
    if (issueTabs.length > 0) {
        issueTabs[0].classList.add('active');
        issuePanels[0].classList.add('active');
    }
    
    // Add hover effects to cards
    document.querySelectorAll('.featured-card, .update-item, .achievement-card, .join-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// CSS for modals (injected via JavaScript)
const modalStyles = `
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
    animation: fadeIn 0.3s ease;
}

.modal-content {
    background: white;
    border-radius: 12px;
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    animation: slideInUp 0.3s ease;
}

.modal-header {
    padding: 25px;
    border-bottom: 2px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.modal-header h2 {
    color: var(--primary-blue);
    margin: 0;
    font-size: 1.5rem;
}

.close-modal {
    font-size: 28px;
    cursor: pointer;
    color: #999;
    line-height: 1;
}

.close-modal:hover {
    color: var(--congress-orange);
}

.modal-body {
    padding: 25px;
}

.modal-body p {
    line-height: 1.6;
    color: #666;
    margin-bottom: 20px;
}

.volunteer-options, .donation-options {
    display: grid;
    gap: 15px;
    margin: 20px 0;
}

.option, .donation-tier {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid var(--congress-orange);
}

.option h4, .donation-tier h4 {
    color: var(--primary-blue);
    margin: 0 0 8px 0;
    font-size: 1.1rem;
}

.option p, .donation-tier p {
    margin: 0;
    color: #777;
    font-size: 0.95rem;
}

.contact-info, .donation-methods {
    background: #f0f7ff;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
}

.requirements ul, .next-steps ol {
    padding-left: 20px;
    margin: 10px 0;
}

.requirements li, .next-steps li {
    margin-bottom: 8px;
    color: #666;
}

.values-grid {
    display: grid;
    gap: 12px;
    margin-top: 15px;
}

.value {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 6px;
    border-left: 3px solid var(--congress-orange);
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .modal-content {
        width: 95%;
        margin: 20px;
    }
    
    .modal-header, .modal-body {
        padding: 20px;
    }
    
    .modal-header h2 {
        font-size: 1.3rem;
    }
}
`;

// Inject modal styles
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

console.log('UCF Website loaded successfully! 🎉');
console.log('Umesh Chandra Foundation - Serving communities with compassion and dedication.'); 