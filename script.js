// DOM Elements
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const prosperityTabs = document.querySelectorAll('.prosperity-tab');
const prosperityPanels = document.querySelectorAll('.prosperity-panel');
const langBtns = document.querySelectorAll('.lang-btn');

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

// Prosperity Tab Functionality
prosperityTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.getAttribute('data-tab');
        
        // Remove active classes
        prosperityTabs.forEach(t => t.classList.remove('active'));
        prosperityPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Show corresponding panel
        const targetPanel = document.getElementById(targetTab);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    });
});

// Language Toggle Functionality
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Here you could implement actual language switching
        const language = btn.textContent.toLowerCase();
        console.log(`Switched to ${language} language`);
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
                    <h2>Volunteer With UCP</h2>
                    <span class="close-modal">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Join our dedicated team of volunteers and help build a stronger nation through democratic participation.</p>
                    <div class="volunteer-options">
                        <div class="option">
                            <h4>Campaign Operations</h4>
                            <p>Support election campaigns and grassroots organizing</p>
                        </div>
                        <div class="option">
                            <h4>Community Outreach</h4>
                            <p>Connect with voters and spread party message</p>
                        </div>
                        <div class="option">
                            <h4>Event Management</h4>
                            <p>Help organize rallies, meetings, and party events</p>
                        </div>
                        <div class="option">
                            <h4>Digital Campaigns</h4>
                            <p>Social media management and online engagement</p>
                        </div>
                    </div>
                    <div class="contact-info">
                        <p><strong>Join the movement:</strong></p>
                        <p>Email: volunteer@ucp.in</p>
                        <p>Phone: 91 11 2301 9080</p>
                        <p>Address: UCP Headquarters, Gandhi Bhawan, New Delhi</p>
                    </div>
                </div>
            `;
            break;
            
        case 'donate':
            modalContent = `
                <div class="modal-header">
                    <h2>Support Our Democratic Mission</h2>
                    <span class="close-modal">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Your contribution helps us strengthen democracy and serve the people better.</p>
                    <div class="donation-options">
                        <div class="donation-tier">
                            <h4>Supporter - ₹500</h4>
                            <p>Help fund local campaign activities</p>
                        </div>
                        <div class="donation-tier">
                            <h4>Advocate - ₹2,000</h4>
                            <p>Support community outreach programs</p>
                        </div>
                        <div class="donation-tier">
                            <h4>Champion - ₹10,000</h4>
                            <p>Fund major campaign initiatives</p>
                        </div>
                        <div class="donation-tier">
                            <h4>Leader - ₹50,000+</h4>
                            <p>Support comprehensive party operations</p>
                        </div>
                    </div>
                    <div class="donation-methods">
                        <p><strong>Donation Methods:</strong></p>
                        <p>• Online: www.ucp.in/donate</p>
                        <p>• Bank Transfer: Account details available on request</p>
                        <p>• Cheque: Made payable to "Umesh Chandra Party"</p>
                        <p>• Cash: At authorized party offices only</p>
                        <p><em>Note: All donations are subject to Election Commission guidelines</em></p>
                    </div>
                </div>
            `;
            break;
            
        case 'join':
            modalContent = `
                <div class="modal-header">
                    <h2>${extra} - Join Our Party</h2>
                    <span class="close-modal">&times;</span>
                </div>
                <div class="modal-body">
                    <p>Thank you for your interest in ${extra.toLowerCase()} with the Umesh Chandra Party!</p>
                    <div class="requirements">
                        <h4>What we're looking for:</h4>
                        <ul>
                            <li>Commitment to democratic values and constitutional principles</li>
                            <li>Dedication to serving the people and nation</li>
                            <li>Strong leadership and communication skills</li>
                            <li>Integrity and ethical conduct in all activities</li>
                        </ul>
                    </div>
                    <div class="next-steps">
                        <h4>How to get started:</h4>
                        <ol>
                            <li>Submit your application with required documents</li>
                            <li>Attend party orientation and training sessions</li>
                            <li>Complete background verification process</li>
                            <li>Begin active participation in party activities!</li>
                        </ol>
                    </div>
                    <div class="contact-info">
                        <p><strong>Ready to serve the nation?</strong></p>
                        <p>Email: recruitment@ucp.in</p>
                        <p>Phone: 91 11 2301 9080</p>
                        <p>Office: UCP Headquarters, Gandhi Bhawan, Constitution Avenue</p>
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
                        <p>To build a prosperous, inclusive, and just society where every citizen has equal opportunities to succeed and contribute to the nation's progress, guided by the principles of democracy, secularism, and social justice.</p>
                    </div>
                    <div class="mission-section">
                        <h4>Our Mission</h4>
                        <p>The Umesh Chandra Party is committed to serving the people through transparent governance, progressive policies, and inclusive development that benefits all sections of society while preserving our democratic values and constitutional principles.</p>
                    </div>
                    <div class="values-section">
                        <h4>Our Core Values</h4>
                        <div class="values-grid">
                            <div class="value">
                                <strong>Democracy:</strong> Upholding democratic principles and people's participation
                            </div>
                            <div class="value">
                                <strong>Equality:</strong> Ensuring equal rights and opportunities for all citizens
                            </div>
                            <div class="value">
                                <strong>Progress:</strong> Promoting inclusive development and modernization
                            </div>
                            <div class="value">
                                <strong>Integrity:</strong> Maintaining highest standards of public service
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

// Quick action items functionality
document.querySelectorAll('.action-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const actionType = item.textContent.trim();
        
        switch(actionType) {
            case 'Press Releases':
                showModal('press');
                break;
            case 'Party Herald':
                showModal('herald');
                break;
            case 'Donate':
                showModal('donate');
                break;
        }
    });
});

// Publication items functionality
document.querySelectorAll('.publication-item').forEach(item => {
    item.addEventListener('click', () => {
        const pubType = item.querySelector('.pub-label').textContent;
        showModal('publication', pubType);
    });
});

// Speech items functionality
document.querySelectorAll('.speech-item').forEach(item => {
    item.addEventListener('click', () => {
        const speechTitle = item.querySelector('h4').textContent;
        showModal('speech', speechTitle);
    });
});

// Achievement cards functionality
document.querySelectorAll('.achievement-card').forEach(card => {
    card.addEventListener('click', () => {
        const achievementTitle = card.querySelector('h4').textContent;
        showModal('achievement', achievementTitle);
    });
});

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
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.speech-item, .achievement-card, .join-card, .episode-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu functionality (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set first prosperity tab as active
    if (prosperityTabs.length > 0) {
        prosperityTabs[0].classList.add('active');
        prosperityPanels[0].classList.add('active');
    }
    
    // Set first language button as active
    if (langBtns.length > 0) {
        langBtns[0].classList.add('active');
    }
    
    // Add hover effects to interactive elements
    document.querySelectorAll('.speech-item, .achievement-card, .join-card, .publication-item').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'translateY(-5px)';
            element.style.cursor = 'pointer';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translateY(0)';
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
    background: linear-gradient(135deg, var(--primary-blue), var(--light-blue));
    color: white;
    border-radius: 12px 12px 0 0;
}

.modal-header h2 {
    margin: 0;
    font-size: 1.5rem;
}

.close-modal {
    font-size: 28px;
    cursor: pointer;
    color: rgba(255,255,255,0.8);
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

console.log('UCP Political Party Website loaded successfully! 🏛️');

// Page loading animation
document.addEventListener('DOMContentLoaded', function() {
    // Create page loader
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">UCP</div>
            <div class="loader-text">Loading Umesh Chandra Party</div>
            <div class="loader-bar">
                <div class="loader-progress"></div>
            </div>
        </div>
    `;
    document.body.appendChild(loader);

    // Hide loader after 3 seconds
    setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 3000);

    // Initialize all features after loading
    initializeWebsite();
});

function initializeWebsite() {
    initScrollEffects();
    initProsperityTabs();
    initLanguageToggle();
    initModals();
    initAnimations();
    initScrollToTop();
    initHeaderEffects();
    initInteractiveElements();
    initCounterAnimations();
    initTypingEffect();
    initParallaxEffects();
}

// Enhanced scroll effects
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Special animations for different elements
                if (entry.target.classList.contains('achievement-card')) {
                    setTimeout(() => {
                        entry.target.style.transform = 'translateY(0) scale(1)';
                        entry.target.style.opacity = '1';
                    }, Math.random() * 300);
                }
                
                if (entry.target.classList.contains('speech-item')) {
                    entry.target.style.animationDelay = Math.random() * 0.5 + 's';
                }
            }
        });
    }, observerOptions);

    // Observe all animatable elements
    const elements = document.querySelectorAll('.speech-item, .achievement-card, .join-card, .episode-item, .action-item, .publication-item');
    elements.forEach(el => observer.observe(el));
}

// Enhanced prosperity tabs with smooth transitions
function initProsperityTabs() {
    const tabs = document.querySelectorAll('.prosperity-tab');
    const panels = document.querySelectorAll('.prosperity-panel');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => {
                p.classList.remove('active');
                p.style.opacity = '0';
                p.style.transform = 'translateY(20px)';
            });

            // Add active class to clicked tab
            tab.classList.add('active');

            // Animate in the corresponding panel
            setTimeout(() => {
                panels[index].classList.add('active');
                panels[index].style.opacity = '1';
                panels[index].style.transform = 'translateY(0)';
            }, 150);

            // Add ripple effect
            createRippleEffect(tab, event);
        });
    });

    // Set first tab as active by default
    if (tabs.length > 0) {
        tabs[0].click();
    }
}

// Enhanced language toggle
function initLanguageToggle() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const episodes = document.querySelectorAll('.episode-item');

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Animate language switch
            episodes.forEach((episode, index) => {
                episode.style.opacity = '0';
                episode.style.transform = 'translateX(-20px)';
                
                setTimeout(() => {
                    // Toggle between English and Hindi content
                    const title = episode.querySelector('.episode-title');
                    const isHindi = btn.textContent === 'हिंदी';
                    
                    if (isHindi) {
                        title.textContent = title.textContent.replace('Episode', 'एपिसोड');
                    } else {
                        title.textContent = title.textContent.replace('एपिसोड', 'Episode');
                    }
                    
                    episode.style.opacity = '1';
                    episode.style.transform = 'translateX(0)';
                }, index * 100);
            });

            createRippleEffect(btn, event);
        });
    });
}

// Enhanced modal system
function initModals() {
    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    modalContainer.innerHTML = `
        <div class="modal-backdrop"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-body"></div>
        </div>
    `;
    document.body.appendChild(modalContainer);

    // Modal styles
    const modalStyles = `
        .modal-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        .modal-container.active {
            opacity: 1;
            visibility: visible;
        }
        .modal-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            backdrop-filter: blur(5px);
        }
        .modal-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0.8);
            background: white;
            border-radius: 20px;
            padding: 40px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            transition: transform 0.3s ease;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        .modal-container.active .modal-content {
            transform: translate(-50%, -50%) scale(1);
        }
        .modal-close {
            position: absolute;
            top: 15px;
            right: 20px;
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: #666;
            transition: color 0.3s ease;
        }
        .modal-close:hover {
            color: var(--congress-orange);
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);

    // Modal event handlers
    const backdrop = modalContainer.querySelector('.modal-backdrop');
    const closeBtn = modalContainer.querySelector('.modal-close');
    const modalBody = modalContainer.querySelector('.modal-body');

    function openModal(content) {
        modalBody.innerHTML = content;
        modalContainer.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalContainer.classList.remove('active');
        document.body.style.overflow = '';
    }

    backdrop.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);

    // Attach modal triggers
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-volunteer')) {
            e.preventDefault();
            openModal(`
                <h2 style="color: var(--primary-blue); margin-bottom: 20px;">Join as Volunteer</h2>
                <form>
                    <input type="text" placeholder="Full Name" style="width: 100%; padding: 12px; margin-bottom: 15px; border: 2px solid #ddd; border-radius: 8px;">
                    <input type="email" placeholder="Email" style="width: 100%; padding: 12px; margin-bottom: 15px; border: 2px solid #ddd; border-radius: 8px;">
                    <input type="tel" placeholder="Phone" style="width: 100%; padding: 12px; margin-bottom: 15px; border: 2px solid #ddd; border-radius: 8px;">
                    <select style="width: 100%; padding: 12px; margin-bottom: 20px; border: 2px solid #ddd; border-radius: 8px;">
                        <option>Select Area of Interest</option>
                        <option>Campaign Management</option>
                        <option>Social Media</option>
                        <option>Ground Operations</option>
                        <option>Event Organization</option>
                    </select>
                    <button type="submit" style="background: var(--gradient-orange); color: white; border: none; padding: 12px 30px; border-radius: 25px; font-weight: 600; cursor: pointer;">Submit Application</button>
                </form>
            `);
        }
        
        if (e.target.classList.contains('btn-donate')) {
            e.preventDefault();
            openModal(`
                <h2 style="color: var(--primary-blue); margin-bottom: 20px;">Support Our Movement</h2>
                <div style="text-align: center;">
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 20px;">
                        <button class="donation-amount" data-amount="500" style="padding: 15px; border: 2px solid var(--congress-orange); background: white; color: var(--congress-orange); border-radius: 10px; cursor: pointer; font-weight: 600;">₹500</button>
                        <button class="donation-amount" data-amount="1000" style="padding: 15px; border: 2px solid var(--congress-orange); background: white; color: var(--congress-orange); border-radius: 10px; cursor: pointer; font-weight: 600;">₹1000</button>
                        <button class="donation-amount" data-amount="2000" style="padding: 15px; border: 2px solid var(--congress-orange); background: white; color: var(--congress-orange); border-radius: 10px; cursor: pointer; font-weight: 600;">₹2000</button>
                    </div>
                    <input type="number" placeholder="Custom Amount" style="width: 100%; padding: 12px; margin-bottom: 20px; border: 2px solid #ddd; border-radius: 8px; text-align: center;">
                    <button style="background: var(--gradient-orange); color: white; border: none; padding: 15px 40px; border-radius: 25px; font-weight: 600; cursor: pointer; font-size: 16px;">Proceed to Payment</button>
                </div>
            `);
        }
    });
}

// Enhanced animations
function initAnimations() {
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('animate-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Add hover animations to cards
    const cards = document.querySelectorAll('.speech-item, .achievement-card, .join-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '';
        });
    });
}

// Scroll to top button
function initScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '↑';
    scrollBtn.title = 'Scroll to Top';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Enhanced header effects
function initHeaderEffects() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active navigation highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
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
}

// Interactive elements
function initInteractiveElements() {
    // Add click effects to buttons
    const buttons = document.querySelectorAll('button, .btn-primary, .btn-secondary, .action-item');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            createRippleEffect(btn, e);
        });
    });

    // Speech item interactions
    const speechItems = document.querySelectorAll('.speech-item');
    speechItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.querySelector('h4').textContent;
            const date = item.querySelector('.speech-date').textContent;
            
            // Create a simple speech modal
            const modalContent = `
                <h2 style="color: var(--primary-blue); margin-bottom: 20px;">${title}</h2>
                <p style="color: var(--congress-orange); font-weight: 600; margin-bottom: 20px;">${date}</p>
                <div style="text-align: center; padding: 40px;">
                    <div style="font-size: 4rem; color: var(--congress-orange); margin-bottom: 20px;">🎥</div>
                    <p style="color: #666; margin-bottom: 20px;">Video content would be loaded here</p>
                    <button style="background: var(--gradient-orange); color: white; border: none; padding: 12px 30px; border-radius: 25px; font-weight: 600; cursor: pointer;">Watch Full Speech</button>
                </div>
            `;
            
            document.querySelector('.modal-body').innerHTML = modalContent;
            document.querySelector('.modal-container').classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Publication item effects
    const pubItems = document.querySelectorAll('.publication-item');
    pubItems.forEach(item => {
        item.addEventListener('click', () => {
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.transform = '';
            }, 150);
        });
    });
}

// Counter animations
function initCounterAnimations() {
    const counters = [
        { selector: '.achievement-card', start: 0, end: 100, suffix: '+' },
    ];

    const animateCounter = (element, start, end, duration, suffix = '') => {
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            element.textContent = current + suffix;
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    };

    // Trigger counters when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('.achievement-number');
                if (counter && !counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    animateCounter(counter, 0, Math.random() * 1000 + 100, 2000, '+');
                }
            }
        });
    });

    document.querySelectorAll('.achievement-card').forEach(card => {
        // Add number element if it doesn't exist
        if (!card.querySelector('.achievement-number')) {
            const numberEl = document.createElement('div');
            numberEl.className = 'achievement-number';
            numberEl.style.fontSize = '2rem';
            numberEl.style.fontWeight = 'bold';
            numberEl.style.color = 'var(--congress-orange)';
            numberEl.style.marginBottom = '10px';
            numberEl.textContent = '0';
            card.insertBefore(numberEl, card.querySelector('h4'));
        }
        observer.observe(card);
    });
}

// Typing effect for hero title
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after page load
        setTimeout(typeWriter, 3500);
    }
}

// Parallax effects
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero-main, .join-movement-section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(el => {
            el.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Ripple effect function
function createRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.backgroundColor = 'rgba(255,255,255,0.5)';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = size + 'px';
    ripple.style.height = size + 'px';
    ripple.style.pointerEvents = 'none';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple animation CSS
const rippleStyles = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;

const rippleStyleSheet = document.createElement('style');
rippleStyleSheet.textContent = rippleStyles;
document.head.appendChild(rippleStyleSheet);

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

// Add loading states for interactive elements
function addLoadingState(element) {
    element.style.opacity = '0.7';
    element.style.pointerEvents = 'none';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.pointerEvents = 'auto';
    }, 1000);
}

// Enhanced form handling
document.addEventListener('submit', (e) => {
    if (e.target.tagName === 'FORM') {
        e.preventDefault();
        const submitBtn = e.target.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.textContent = 'Processing...';
            addLoadingState(submitBtn);
            
            setTimeout(() => {
                submitBtn.textContent = 'Success!';
                submitBtn.style.background = '#28a745';
                
                setTimeout(() => {
                    document.querySelector('.modal-container').classList.remove('active');
                    document.body.style.overflow = '';
                }, 1500);
            }, 2000);
        }
    }
});

// Performance optimization
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Debounced scroll handler
const debouncedScrollHandler = debounce(() => {
    // Scroll-based animations and effects
    const scrolled = window.pageYOffset;
    document.documentElement.style.setProperty('--scroll', scrolled + 'px');
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add custom cursor effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'custom-cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: var(--congress-orange);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            opacity: 0.7;
        `;
        document.body.appendChild(newCursor);
    }
    
    const currentCursor = document.querySelector('.custom-cursor');
    currentCursor.style.left = e.clientX - 10 + 'px';
    currentCursor.style.top = e.clientY - 10 + 'px';
});

// Hide custom cursor when leaving window
document.addEventListener('mouseleave', () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.style.opacity = '0';
});

document.addEventListener('mouseenter', () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) cursor.style.opacity = '0.7';
});

console.log('Umesh Chandra Party website enhanced and ready! 🎉'); 