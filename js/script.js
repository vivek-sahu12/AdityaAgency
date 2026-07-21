// Aditya Agency - Custom Scripts

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 50
    });

    // 2. Set Current Year
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // 3. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const menuIcon = mobileMenuBtn.querySelector('i');

    function toggleMenu() {
        mobileNav.classList.toggle('open');
        if (mobileNav.classList.contains('open')) {
            menuIcon.classList.remove('ph-list');
            menuIcon.classList.add('ph-x');
        } else {
            menuIcon.classList.remove('ph-x');
            menuIcon.classList.add('ph-list');
        }
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    // 5. Active Link Highlighting
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
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

    // 6. Language Toggle functionality
    const langEnBtn = document.getElementById('lang-en');
    const langHiBtn = document.getElementById('lang-hi');
    const langElements = document.querySelectorAll('[data-en][data-hi]');
    
    // Check local storage for language preference
    let currentLang = localStorage.getItem('aditya-lang') || 'en';
    
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('aditya-lang', lang);
        
        // Update buttons
        if (lang === 'en') {
            langEnBtn.classList.add('active');
            langHiBtn.classList.remove('active');
        } else {
            langHiBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        }
        
        // Update content
        langElements.forEach(el => {
            if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea' || el.tagName.toLowerCase() === 'option') {
                // If it's a placeholder or text content for inputs/selects
                if (el.hasAttribute('placeholder')) {
                    el.setAttribute('placeholder', el.getAttribute(`data-${lang}`));
                } else {
                    el.textContent = el.getAttribute(`data-${lang}`);
                }
            } else {
                el.textContent = el.getAttribute(`data-${lang}`);
            }
        });
    }
    
    // Initialize language
    setLanguage(currentLang);
    
    langEnBtn.addEventListener('click', () => setLanguage('en'));
    langHiBtn.addEventListener('click', () => setLanguage('hi'));

    // 7. Counter Animation for Stats
    const counters = document.querySelectorAll('.counter');
    let hasAnimated = false;
    
    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // ms
            const step = target / (duration / 16); // 60fps
            
            let current = 0;
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCounter();
        });
    };
    
    // Observe Stats Section to trigger animation
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated) {
                animateCounters();
                hasAnimated = true;
            }
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }

    // 8. Product WhatsApp Enquire Links
    const whatsappEnquireBtns = document.querySelectorAll('.whatsapp-enquire');
    const ownerPhone = "919926920588";
    
    whatsappEnquireBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const productName = btn.getAttribute('data-product');
            const message = `Hello Aditya Agency, I am interested in knowing more about your ${productName} products. Please share details.`;
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${ownerPhone}?text=${encodedMessage}`, '_blank');
        });
    });
});

// 9. Contact Form Submission
function submitForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const product = document.getElementById('product').value;
    const message = document.getElementById('message').value;
    
    // Create WhatsApp message
    const waMessage = `*New Enquiry from Website*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Product Interest:* ${product}%0A*Message:* ${message}`;
    const ownerPhone = "919926920588";
    
    // Open WhatsApp
    window.open(`https://wa.me/${ownerPhone}?text=${waMessage}`, '_blank');
    
    // Reset form
    document.getElementById('enquiryForm').reset();
    
    // Show simple alert
    const isHindi = document.getElementById('lang-hi').classList.contains('active');
    if (isHindi) {
        alert("पूछताछ भेजने के लिए व्हाट्सएप पर रीडायरेक्ट किया जा रहा है।");
    } else {
        alert("Redirecting to WhatsApp to send your enquiry.");
    }
}
