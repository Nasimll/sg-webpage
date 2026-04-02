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
    const animateElements = document.querySelectorAll('section');
    
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


    //Reviews SLider Section
    
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
  localStorage.removeItem("lang");
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


//Count NAimation
document.addEventListener("DOMContentLoaded", () => {

  const counters = document.querySelectorAll(".stat-number");
  const section = document.querySelector(".statistics");
  let started = false;

  function startCounters() {

    if (started) return;
    started = true;

    counters.forEach(counter => {

      const text = counter.innerText.trim();

      const number = parseInt(text.replace(/\D/g, ""));
      const symbol = text.replace(/[0-9]/g, "");

      let current = 0;
      const increment = number / 100;

      function updateCounter() {
        current += increment;

        if (current < number) {
          counter.innerText = Math.ceil(current) + symbol;
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = number + symbol;
        }
      }

      counter.innerText = "0" + symbol;
      updateCounter();

    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounters();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(section);

});

// //paralax 
// const bannerBg = document.querySelector('.banner-bg');

// window.addEventListener('scroll', () => {
//     const scroll = window.pageYOffset;
//     bannerBg.style.transform = `translateY(${scroll * 0.3}px)`; 
// });

// window.addEventListener('scroll', function () {
//     const banner = document.querySelector('.banner');
//     const bg = document.querySelector('.banner-bg');

//     if (!banner || !bg) return;

//     const rect = banner.getBoundingClientRect();
//     const speed = 0.3;

//     if (rect.bottom > 0 && rect.top < window.innerHeight) {
//         const offset = rect.top * speed;
//         bg.style.transform = `translateY(${offset}px)`;
//     }
// });

// ===== HEADER SCROLL =====
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.remove("transparent");
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
        header.classList.add("transparent");
    }
});


document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("reviewSlider");
  const cards = document.querySelectorAll(".review-card");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentIndex = 0;

  function getCardsPerView() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
  }

  function updateSlider() {
    const cardsPerView = getCardsPerView();
    const gap = 22;
    const cardWidth = cards[0].offsetWidth + gap;
    const maxIndex = Math.max(cards.length - cardsPerView, 0);

    if (currentIndex > maxIndex) currentIndex = maxIndex;

    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    cards.forEach(card => card.classList.remove("active"));

    for (let i = currentIndex; i < currentIndex + cardsPerView; i++) {
      if (cards[i]) cards[i].classList.add("active");
    }
  }

  nextBtn.addEventListener("click", function () {
    const cardsPerView = getCardsPerView();
    const maxIndex = Math.max(cards.length - cardsPerView, 0);

    currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
    updateSlider();
  });

  prevBtn.addEventListener("click", function () {
    const cardsPerView = getCardsPerView();
    const maxIndex = Math.max(cards.length - cardsPerView, 0);

    currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
    updateSlider();
  });

  window.addEventListener("resize", updateSlider);

  updateSlider();
});


