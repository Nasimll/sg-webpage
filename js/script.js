document.addEventListener('DOMContentLoaded', function() {
    // Mobile nav toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.querySelector('.header');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            header.classList.remove('transparent');

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

    // Close menu on outside click
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.mobile-menu-toggle') && !event.target.closest('.nav-menu')) {
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const toggle = item.querySelector('.faq-toggle');

        question.addEventListener('click', function() {
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-toggle i').className = 'fas fa-plus';
                }
            });

            item.classList.toggle('active');

            if (toggle) {
                const icon = toggle.querySelector('i');
                icon.className = item.classList.contains('active') ? 'fas fa-minus' : 'fas fa-plus';
            }
        });
    });

    // Timeline indicator
    const timelineYears = document.querySelectorAll('.timeline-year');
    const indicator = document.createElement('div');
    indicator.classList.add('timeline-indicator');
    document.querySelector('.timeline-container').appendChild(indicator);

    function moveIndicatorTo(activeYear) {
        const offsetLeft = activeYear.offsetLeft + activeYear.offsetWidth / 2;
        indicator.style.left = `${offsetLeft}px`;
    }

    const initial = document.querySelector('.timeline-year.active');
    if (initial) moveIndicatorTo(initial);

    timelineYears.forEach(year => {
        year.addEventListener('click', () => {
            timelineYears.forEach(y => y.classList.remove('active'));
            year.classList.add('active');
            moveIndicatorTo(year);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }

                window.scrollTo({
                    top: targetElement.offsetTop - 80, // offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in sections on scroll
    const animateElements = document.querySelectorAll('section:not(.hero-section)');

    function checkScroll() {
        animateElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('load', checkScroll);
    window.addEventListener('scroll', checkScroll);
});

// Header transparency on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.remove('transparent');
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        header.classList.add('transparent');
    }
});

// Translations — fetches lang/{lang}.json and applies data-i18n attributes
function setLanguage(lang) {
    fetch(`lang/${lang}.json`)
        .then(res => res.json())
        .then(data => {
            document.querySelectorAll("[data-i18n]").forEach(el => {
                const key = el.getAttribute("data-i18n");
                if (data[key]) el.textContent = data[key];
            });
            document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
                const key = el.getAttribute("data-i18n-placeholder");
                if (data[key]) el.placeholder = data[key];
            });
            localStorage.setItem('lang', lang);
        });
}

// Load saved language on startup (defaults to Polish)
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

// Statistics counter animation — triggers once when section enters view
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
            if (entry.isIntersecting) startCounters();
        });
    }, { threshold: 0.4 });

    observer.observe(section);
});

// Reviews slider
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
        const maxIndex = Math.max(cards.length - getCardsPerView(), 0);
        currentIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
        updateSlider();
    });

    prevBtn.addEventListener("click", function () {
        const maxIndex = Math.max(cards.length - getCardsPerView(), 0);
        currentIndex = currentIndex > 0 ? currentIndex - 1 : maxIndex;
        updateSlider();
    });

    window.addEventListener("resize", updateSlider);
    updateSlider();
});
