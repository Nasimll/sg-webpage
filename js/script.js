// Main JavaScript file for SD

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active'),
            header.classList.remove('transparent');

            // Toggle hamburger to X
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(8.5px, 7px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.mobile-menu-toggle') && !event.target.closest('.nav-menu')) {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                
                // Reset hamburger icon
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });
    
    // Testimonials Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    
    function showSlide(index) {
        testimonialSlides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }
    
    if (prevBtn && nextBtn && testimonialSlides.length > 0) {
        prevBtn.addEventListener('click', function() {
            currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
            showSlide(currentSlide);
        });
        
        nextBtn.addEventListener('click', function() {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(currentSlide);
        });
        
        // Auto slide every 5 seconds
        setInterval(function() {
            currentSlide = (currentSlide + 1) % testimonialSlides.length;
            showSlide(currentSlide);
        }, 5000);
    }
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const toggle = item.querySelector('.faq-toggle');
        
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherToggle = otherItem.querySelector('.faq-toggle i');
                    otherToggle.className = 'fas fa-plus';
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            
            // Change icon
            if (toggle) {
                const icon = toggle.querySelector('i');
                if (item.classList.contains('active')) {
                    icon.className = 'fas fa-minus';
                } else {
                    icon.className = 'fas fa-plus';
                }
            }
        });
    });

    
  const timelineYears = document.querySelectorAll('.timeline-year');
  const indicator = document.createElement('div');
  indicator.classList.add('timeline-indicator');
  document.querySelector('.timeline-container').appendChild(indicator);

  function moveIndicatorTo(activeYear) {
    const offsetLeft = activeYear.offsetLeft + activeYear.offsetWidth / 2;
    indicator.style.left = `${offsetLeft}px`;
  }

  // Initial indicator position
  const initial = document.querySelector('.timeline-year.active');
  if (initial) moveIndicatorTo(initial);

  timelineYears.forEach(year => {
    year.addEventListener('click', () => {
      timelineYears.forEach(y => y.classList.remove('active'));
      year.classList.add('active');
      moveIndicatorTo(year);
    });
  });

    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    
                    // Reset hamburger icon
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation on scroll
    const animateElements = document.querySelectorAll('.service-item, .pricing-card, .blog-card, .commitment-card, .segment-card, .stat-item, .partner-logo');
    
    function checkScroll() {
        animateElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animation
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check on load and scroll
    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
});

    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header');
        if (window.scrollY > 50 ) {
            header.classList.remove('transparent');
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            header.classList.add('transparent');
        }
});






  //Trasnaltion procces

  function setLanguage(lang) {
  fetch(`lang/${lang}.json`)  
    .then(res => res.json())
    .then(data => {
        console.log("Loaded language:", lang);
console.log(data);

      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (data[key]) {
          el.textContent = data[key];
        }
      });
       document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (data[key]) {
          el.placeholder = data[key];
        }
      });
      localStorage.setItem('lang', lang);
    });
}

// default to 'pl'
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem('lang') || 'pl';
  setLanguage(savedLang);
});

 function toggleLangDropdown(event) {
    const dropdown = document.getElementById("langMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    event.stopPropagation();
  }

  window.addEventListener("click", () => {
    const dropdown = document.getElementById("langMenu");
    if (dropdown) dropdown.style.display = "none";
  });