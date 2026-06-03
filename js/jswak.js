// UI translations (nav, buttons, labels) — vacancy text comes from Google Sheets
var TRANSLATIONS = {
  pl: {
    nav_home:"Strona główna", nav_services:"Usługi", nav_vacancies:"Wakaty",
    nav_about:"O nas", nav_faq:"FAQ", nav_contact:"Kontakt",
    nav_reviews:"Opinie", nav_cta:"Kontakt",
    hero_eyebrow:"Aktualne oferty pracy",
    hero_title:"Zatrudnienie cudzoziemców w Polsce — ",
    hero_title_accent:"legalnie i bezpiecznie",
    hero_sub:"Pomagamy obywatelom Uzbekistanu, Tadżykistanu, Kirgistanu i innych krajów WNP znaleźć legalną pracę w Polsce.",
    carousel_eyebrow:"Wyróżnione oferty", carousel_title:"Najlepsze wakaty dla Ciebie",
    carousel_hint:"Najedź na kartę, aby zobaczyć szczegóły",
    cat_warehouse:"Magazyn", cat_construction:"Budowa", cat_production:"Produkcja", cat_transport:"Transport",
    cat_other:"Inne",
    list_title:"Wszystkie oferty pracy", list_sub:"Znajdź pracę dopasowaną do siebie",
    filter_all:"Wszystkie", no_results:"Brak ofert w tej kategorii.",
    btn_apply:"Aplikuj teraz →", btn_apply_short:"Aplikuj →",
    btn_details:"Szczegóły", btn_register:"Zapisz się →",
    status_active:"● Aktywna", status_inactive:"● Niedostępna",
    form_eyebrow:"Aplikuj teraz", form_title:"Zostaw wniosek — skontaktujemy się z Tobą",
    form_sub:"Nasz specjalista bezpłatnie wyjaśni wszystkie szczegóły",
    form_name:"Imię *", form_email:"Email *", form_phone:"Telefon *",
    form_service:"Wybrana oferta", form_message:"Wiadomość (opcjonalnie)",
    form_submit:"Wyślij wniosek",
    form_note:"* Zgadzam się na przetwarzanie danych osobowych zgodnie z polityką prywatności.",
    form_success_title:"Dziękujemy!", form_success_sub:"Skontaktujemy się z Tobą wkrótce.",
    modal_location:"📍 Lokalizacja", modal_salary:"💰 Wynagrodzenie", modal_type:"🕐 Wymiar",
    modal_active:"● Aktywna", modal_inactive:"● Niedostępna",
    modal_apply:"Aplikuj teraz →", modal_notify:"Powiadom mnie gdy pojawi się miejsce",
    footer_quick_links:"Szybkie linki", footer_contact:"Kontakt", footer_follow:"Obserwuj nas",
    footer_copyright:"© 2025 Sadykov Group. Wszelkie prawa zastrzeżone.",
    loading:"Ładowanie ofert...", load_error:"Nie udało się załadować ofert. Spróbuj odświeżyć stronę."
  },
  ru: {
    nav_home:"Главная", nav_services:"Услуги", nav_vacancies:"Вакансии",
    nav_about:"О нас", nav_faq:"FAQ", nav_contact:"Контакты",
    nav_reviews:"Отзывы", nav_cta:"Контакты",
    hero_eyebrow:"Актуальные вакансии",
    hero_title:"Трудоустройство иностранцев в Польше — ",
    hero_title_accent:"легально и безопасно",
    hero_sub:"Помогаем гражданам Узбекистана, Таджикистана, Кыргызстана и других стран СНГ найти официальную работу в Польше.",
    carousel_eyebrow:"Избранные вакансии", carousel_title:"Лучшие предложения для вас",
    carousel_hint:"Наведите на карточку, чтобы увидеть детали",
    cat_warehouse:"Склад", cat_construction:"Строительство", cat_production:"Производство",
    cat_transport:"Транспорт", cat_other:"Другое",
    list_title:"Все вакансии", list_sub:"Найдите работу, которая вам подходит",
    filter_all:"Все", no_results:"Вакансий в этой категории нет.",
    btn_apply:"Откликнуться →", btn_apply_short:"Откликнуться →",
    btn_details:"Подробнее", btn_register:"Записаться →",
    status_active:"● Активна", status_inactive:"● Недоступна",
    form_eyebrow:"Откликнуться", form_title:"Оставьте заявку — мы свяжемся с вами",
    form_sub:"Наш специалист бесплатно расскажет обо всех деталях",
    form_name:"Имя *", form_email:"Email *", form_phone:"Телефон *",
    form_service:"Выбранная вакансия", form_message:"Сообщение (необязательно)",
    form_submit:"Отправить заявку",
    form_note:"* Я согласен на обработку персональных данных.",
    form_success_title:"Спасибо!", form_success_sub:"Мы свяжемся с вами в ближайшее время.",
    modal_location:"📍 Местоположение", modal_salary:"💰 Зарплата", modal_type:"🕐 График",
    modal_active:"● Активна", modal_inactive:"● Недоступна",
    modal_apply:"Откликнуться →", modal_notify:"Уведомить меня когда появится место",
    footer_quick_links:"Быстрые ссылки", footer_contact:"Контакты", footer_follow:"Мы в соц. сетях",
    footer_copyright:"© 2025 Sadykov Group. Все права защищены.",
    loading:"Загрузка вакансий...", load_error:"Не удалось загрузить вакансии. Обновите страницу."
  },
  en: {
    nav_home:"Home", nav_services:"Services", nav_vacancies:"Vacancies",
    nav_about:"About us", nav_faq:"FAQ", nav_contact:"Contact",
    nav_reviews:"Reviews", nav_cta:"Contact us",
    hero_eyebrow:"Current job offers",
    hero_title:"Employment for foreigners in Poland — ",
    hero_title_accent:"legal and safe",
    hero_sub:"We help citizens of Uzbekistan, Tajikistan, Kyrgyzstan and other CIS countries find legal work in Poland.",
    carousel_eyebrow:"Featured roles", carousel_title:"Best vacancies for you",
    carousel_hint:"Hover a card to see details",
    cat_warehouse:"Warehouse", cat_construction:"Construction", cat_production:"Production",
    cat_transport:"Transport", cat_other:"Other",
    list_title:"All job offers", list_sub:"Find the job that suits you",
    filter_all:"All", no_results:"No offers in this category.",
    btn_apply:"Apply now →", btn_apply_short:"Apply →",
    btn_details:"Details", btn_register:"Register interest →",
    status_active:"● Active", status_inactive:"● Unavailable",
    form_eyebrow:"Apply now", form_title:"Leave a request — we will contact you",
    form_sub:"Our specialist will explain all the details free of charge",
    form_name:"Name *", form_email:"Email *", form_phone:"Phone *",
    form_service:"Selected position", form_message:"Message (optional)",
    form_submit:"Send application",
    form_note:"* I agree to the processing of personal data.",
    form_success_title:"Thank you!", form_success_sub:"We will get in touch shortly.",
    modal_location:"📍 Location", modal_salary:"💰 Salary", modal_type:"🕐 Type",
    modal_active:"● Active", modal_inactive:"● Unavailable",
    modal_apply:"Apply now →", modal_notify:"Notify me when available",
    footer_quick_links:"Quick links", footer_contact:"Contact", footer_follow:"Follow us",
    footer_copyright:"© 2025 Sadykov Group. All Rights Reserved.",
    loading:"Loading offers...", load_error:"Failed to load offers. Please refresh the page."
  }
};

// Populated after fetching from Google Sheets
var VACANCIES = {};
var currentLang = 'pl';

// Replace with your deployed Apps Script Web App URL
var SHEET_API_URL = 'YOUR_APPS_SCRIPT_URL_HERE';

// Returns the translated category label
function getCatLabel(cat, lang) {
  var t = TRANSLATIONS[lang] || TRANSLATIONS.pl;
  var key = 'cat_' + (cat === 'magazyn' ? 'warehouse' : cat === 'budowa' ? 'construction' : cat === 'produkcja' ? 'production' : cat === 'transport' ? 'transport' : 'other');
  return t[key] || cat;
}

// Builds the VACANCIES lookup object from raw sheet rows
// PL/EN fields fall back to Russian if left empty in the sheet
function buildVacanciesMap(rows) {
  VACANCIES = {};
  rows.forEach(function(v) {
    function f(ru, other) { return (other && other.toString().trim()) ? other : ru; }
    VACANCIES[v.id] = {
      ru: { title: v.title_ru, salary: v.salary_ru, location: v.location_ru, type: v.type_ru, b1: v.b1_ru, b2: v.b2_ru, b3: v.b3_ru, desc: v.desc_ru },
      pl: { title: f(v.title_ru, v.title_pl), salary: f(v.salary_ru, v.salary_pl), location: f(v.location_ru, v.location_pl), type: f(v.type_ru, v.type_pl), b1: f(v.b1_ru, v.b1_pl), b2: f(v.b2_ru, v.b2_pl), b3: f(v.b3_ru, v.b3_pl), desc: f(v.desc_ru, v.desc_pl) },
      en: { title: f(v.title_ru, v.title_en), salary: f(v.salary_ru, v.salary_en), location: f(v.location_ru, v.location_en), type: f(v.type_ru, v.type_en), b1: f(v.b1_ru, v.b1_en), b2: f(v.b2_ru, v.b2_en), b3: f(v.b3_ru, v.b3_en), desc: f(v.desc_ru, v.desc_en) }
    };
  });
}

// Renders sk-row articles into #skList from fetched vacancy data
function renderRows(vacancies) {
  var list = document.getElementById('skList');
  list.innerHTML = '';

  vacancies.forEach(function(v) {
    var vl = VACANCIES[v.id] ? VACANCIES[v.id][currentLang] : null;
    if (!vl) return;

    var avail = v.available === true;
    var catLabel = getCatLabel(v.category, currentLang);

    var article = document.createElement('article');
    article.className = 'sk-row' + (avail ? '' : ' sk-row--unavailable');
    article.dataset.vacancyId = v.id;
    article.dataset.cat       = v.category;
    article.dataset.available = avail ? 'true' : 'false';
    article.dataset.img       = v.imageUrl || '';

    article.innerHTML =
      '<div class="sk-row-info">' +
        '<div class="sk-row-tags">' +
          '<span class="sk-row-badge">' + catLabel + '</span>' +
          '<span class="sk-row-location">📍 ' + (vl.location || '') + '</span>' +
          '<span class="sk-status ' + (avail ? 'sk-status--open' : 'sk-status--closed') + '">' + (avail ? '● Aktywna' : '● Niedostępna') + '</span>' +
        '</div>' +
        '<p class="sk-row-title">' + (vl.title || '') + '</p>' +
        '<p class="sk-row-meta">' + (vl.salary || '') + ' · ' + (vl.type || '') + '</p>' +
      '</div>' +
      '<div class="sk-row-actions">' +
        '<button class="sk-details-btn">Szczegóły</button>' +
        '<a href="#contact-form" class="sk-row-btn' + (avail ? '' : ' dimmed') + '">' + (avail ? 'Aplikuj →' : 'Zapisz się →') + '</a>' +
      '</div>';

    list.appendChild(article);
  });

  var nr = document.createElement('p');
  nr.className = 'sk-no-results';
  nr.id = 'skNoResults';
  nr.style.display = 'none';
  list.appendChild(nr);
}

// Fetches vacancies from Google Sheets via Apps Script, then renders and initializes
function fetchAndRender() {
  var list = document.getElementById('skList');
  var t = TRANSLATIONS[currentLang] || TRANSLATIONS.pl;
  list.innerHTML = '<p class="sk-loading">' + t.loading + '</p>';

  fetch(SHEET_API_URL)
    .then(function(r) { return r.json(); })
    .then(function(data) {
      if (data.error || !data.vacancies) throw new Error(data.error || 'No data');
      buildVacanciesMap(data.vacancies);
      renderRows(data.vacancies);
      initAfterRender();
      setLanguage(currentLang);
    })
    .catch(function() {
      var t = TRANSLATIONS[currentLang] || TRANSLATIONS.pl;
      list.innerHTML = '<p class="sk-load-error">' + t.load_error + '</p>';
    });
}

function setLanguage(lang) {
  var data = TRANSLATIONS[lang] || TRANSLATIONS.pl;
  currentLang = lang;

  // Apply UI string translations
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    if (el.querySelector('[data-i18n]')) return;
    var key = el.getAttribute('data-i18n');
    if (data[key] !== undefined) el.textContent = data[key];
  });

  // Update each rendered vacancy row
  document.querySelectorAll('.sk-row').forEach(function(row) {
    var vid = row.dataset.vacancyId;
    var v = (vid && VACANCIES[vid] && VACANCIES[vid][lang]) ? VACANCIES[vid][lang] : null;

    if (v) {
      var titleEl = row.querySelector('.sk-row-title');
      if (titleEl) titleEl.textContent = v.title;

      var metaEl = row.querySelector('.sk-row-meta');
      if (metaEl) metaEl.textContent = v.salary + ' · ' + v.type;

      var locEl = row.querySelector('.sk-row-location');
      if (locEl) locEl.textContent = '📍 ' + v.location;
    }

    var statusEl = row.querySelector('.sk-status');
    if (statusEl) {
      var avail = row.dataset.available === 'true';
      statusEl.textContent = avail ? data.status_active : data.status_inactive;
    }

    var badgeEl = row.querySelector('.sk-row-badge');
    if (badgeEl) badgeEl.textContent = getCatLabel(row.dataset.cat, lang);

    var detailsBtn = row.querySelector('.sk-details-btn');
    if (detailsBtn) detailsBtn.textContent = data.btn_details;

    var applyBtn = row.querySelector('.sk-row-btn');
    if (applyBtn) {
      var availA = row.dataset.available === 'true';
      applyBtn.textContent = availA ? data.btn_apply_short : data.btn_register;
    }
  });

  // Update filter buttons
  document.querySelectorAll('.sk-filter').forEach(function(btn) {
    var cat = btn.dataset.cat;
    if (cat === 'all') { btn.textContent = data.filter_all; return; }
    btn.textContent = getCatLabel(cat, lang);
  });

  var noRes = document.getElementById('skNoResults');
  if (noRes) noRes.textContent = data.no_results;

  var label = document.getElementById('langLabel');
  if (label) label.textContent = lang.toUpperCase();
  try { localStorage.setItem('lang', lang); } catch(e) {}
  var dd = document.getElementById('langMenu');
  if (dd) dd.style.display = 'none';

  // Rebuild carousel in new language
  if (typeof window.skBuildCarousel === 'function') window.skBuildCarousel();
}

function toggleLangDropdown(e) {
  e.stopPropagation();
  var dd = document.getElementById('langMenu');
  if (dd) dd.style.display = dd.style.display === 'block' ? 'none' : 'block';
}
window.addEventListener('click', function() {
  var dd = document.getElementById('langMenu');
  if (dd) dd.style.display = 'none';
});
window.setLanguage = setLanguage;
window.setLang = setLanguage;
window.toggleLangDropdown = toggleLangDropdown;

// Initializes toggle, carousel, filter, and popup — called after rows are rendered
function initAfterRender() {

  /* Coordinator toggle — password-protected availability switch */
  var COORD_PASSWORD = 'sadykov2024';

  function loadStates() {
    try { return JSON.parse(localStorage.getItem('sk_avail') || '{}'); } catch(e) { return {}; }
  }
  function saveStates(s) {
    try { localStorage.setItem('sk_avail', JSON.stringify(s)); } catch(e) {}
  }

  function applyRowState(row, available) {
    var statusEl = row.querySelector('.sk-status');
    var applyBtn = row.querySelector('.sk-row-btn');
    var inp = row.querySelector('.sk-switch input');
    row.dataset.available = available ? 'true' : 'false';
    if (available) {
      row.classList.remove('sk-row--unavailable');
      if (statusEl) { statusEl.className = 'sk-status sk-status--open'; statusEl.textContent = '● Aktywna'; }
      if (applyBtn) { applyBtn.classList.remove('dimmed'); applyBtn.textContent = 'Aplikuj →'; }
      if (inp) inp.checked = true;
    } else {
      row.classList.add('sk-row--unavailable');
      if (statusEl) { statusEl.className = 'sk-status sk-status--closed'; statusEl.textContent = '● Niedostępna'; }
      if (applyBtn) { applyBtn.classList.add('dimmed'); applyBtn.textContent = 'Zapisz się →'; }
      if (inp) inp.checked = false;
    }
    syncCarousel();
  }

  var states  = loadStates();
  var swCount = 0;

  document.querySelectorAll('.sk-row').forEach(function(row) {
    // Use the sheet vacancy ID as the localStorage key (stable across re-renders)
    var id = row.dataset.vacancyId;
    row.dataset.rowId = id;
    var isAvail = row.dataset.available === 'true';
    if (states[id] !== undefined) { isAvail = states[id]; applyRowState(row, isAvail); }

    var uid = 'sk-sw-' + (swCount++);
    var swLabel = document.createElement('label');
    swLabel.className = 'sk-switch';
    swLabel.title = 'Toggle (coordinator only)';

    var inp = document.createElement('input');
    inp.type = 'checkbox'; inp.id = uid; inp.checked = isAvail;

    var slider = document.createElement('span');
    slider.className = 'sk-switch-slider';

    swLabel.appendChild(inp);
    swLabel.appendChild(slider);
    row.insertBefore(swLabel, row.firstChild);

    inp.addEventListener('change', function(e) {
      e.stopPropagation();
      var intended = inp.checked;
      inp.checked = !intended;
      var pwd = prompt('🔒 Coordinator password:');
      if (pwd === null) return;
      if (pwd !== COORD_PASSWORD) { alert('❌ Wrong password.'); return; }
      inp.checked = intended;
      applyRowState(row, intended);
      var s = loadStates(); s[id] = intended; saveStates(s);
    });
    swLabel.addEventListener('click', function(e) { e.stopPropagation(); });
  });

  /* Carousel — shows only available vacancies */
  var track    = document.getElementById('skTrack');
  var prevBtn  = document.getElementById('skPrev');
  var nextBtn  = document.getElementById('skNext');
  var dotsWrap = document.getElementById('skDots');

  function buildCarousel() {
    if (!track || !prevBtn || !nextBtn || !dotsWrap) return;

    track.innerHTML = '';
    dotsWrap.innerHTML = '';

    var availableRows = [];
    document.querySelectorAll('.sk-row').forEach(function(row) {
      if (row.dataset.available === 'true') availableRows.push(row);
    });

    if (availableRows.length === 0) {
      track.closest('.sk-featured').style.display = 'none';
      return;
    }
    track.closest('.sk-featured').style.display = '';

    var t = TRANSLATIONS[currentLang] || TRANSLATIONS.pl;
    availableRows.forEach(function(row) {
      var img = row.dataset.img || '';
      var vid = row.dataset.vacancyId;
      var v = (vid && VACANCIES[vid] && VACANCIES[vid][currentLang]) ? VACANCIES[vid][currentLang] : null;

      var title  = v ? v.title    : ((row.querySelector('.sk-row-title') || {}).textContent || '');
      var salary = v ? v.salary   : '';
      var loc    = v ? v.location : '';
      var b1     = v ? v.b1       : '';
      var b2     = v ? v.b2       : '';
      var b3     = v ? v.b3       : '';
      var badge  = getCatLabel(row.dataset.cat, currentLang);

      var card = document.createElement('article');
      card.className = 'sk-card';
      card.innerHTML =
        '<img class="sk-card-image" src="' + img + '" alt="">' +
        '<div class="sk-card-overlay"></div>' +
        '<div class="sk-card-base">' +
          '<span class="sk-badge">' + badge + '</span>' +
          '<h3 class="sk-card-title">' + title + '</h3>' +
          '<p class="sk-card-meta">' + loc + '</p>' +
        '</div>' +
        '<div class="sk-card-hover">' +
          '<span class="sk-badge">' + badge + '</span>' +
          '<h3 class="sk-card-title">' + title + '</h3>' +
          '<p class="sk-card-salary">' + salary + ' · ' + loc + '</p>' +
          '<div class="sk-benefits">' +
            (b1 ? '<div class="sk-benefit"><span class="sk-benefit-check">✓</span><span>' + b1 + '</span></div>' : '') +
            (b2 ? '<div class="sk-benefit"><span class="sk-benefit-check">✓</span><span>' + b2 + '</span></div>' : '') +
            (b3 ? '<div class="sk-benefit"><span class="sk-benefit-check">✓</span><span>' + b3 + '</span></div>' : '') +
          '</div>' +
          '<a href="#contact-form" class="sk-btn">' + t.btn_apply + '</a>' +
        '</div>';
      track.appendChild(card);
    });

    // Clone cards for infinite scroll
    var origCards = Array.from(track.querySelectorAll('.sk-card'));
    var N = origCards.length;
    origCards.forEach(function(c) {
      var cl = c.cloneNode(true); cl.setAttribute('aria-hidden','true'); track.appendChild(cl);
    });
    origCards.slice().reverse().forEach(function(c) {
      var cl = c.cloneNode(true); cl.setAttribute('aria-hidden','true'); track.insertBefore(cl, track.firstChild);
    });

    // Tap-to-reveal on mobile
    if ('ontouchstart' in window) {
      track.querySelectorAll('.sk-card').forEach(function(card) {
        card.addEventListener('click', function(e) {
          if (e.target.closest('.sk-btn')) return;
          track.querySelectorAll('.sk-card').forEach(function(c) {
            if (c !== card) c.classList.remove('is-revealed');
          });
          card.classList.toggle('is-revealed');
        });
      });
    }

    var idx = N, busy = false;
    function vis() { return window.innerWidth <= 768 ? 1 : 2; }
    function cw()  { return (track.parentElement.offsetWidth - 16*(vis()-1)) / vis(); }

    function goTo(i, anim) {
      track.style.transition = anim ? 'transform 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none';
      track.style.transform  = 'translateX(-' + (i*(cw()+16)) + 'px)';
      var ri = ((i-N)%N+N)%N;
      Array.from(dotsWrap.children).forEach(function(d,j) { d.classList.toggle('is-active', j===ri); });
    }

    track.addEventListener('transitionend', function() {
      busy = false;
      if (idx >= N*2) { idx = N+(idx-N*2); goTo(idx,false); }
      else if (idx < N) { idx = N*2-N+idx; goTo(idx,false); }
    });

    function slide(dir) { if(busy) return; busy=true; idx+=dir; goTo(idx,true); }
    prevBtn.onclick = function() { slide(-1); };
    nextBtn.onclick = function() { slide(1); };

    for (var i=0; i<N; i++) {
      (function(i) {
        var d = document.createElement('button');
        d.className = 'sk-dot';
        d.addEventListener('click', function(){ if(busy)return; busy=true; idx=N+i; goTo(idx,true); });
        dotsWrap.appendChild(d);
      })(i);
    }

    var tx=0;
    track.addEventListener('touchstart', function(e){ tx=e.changedTouches[0].screenX; },{passive:true});
    track.addEventListener('touchend',   function(e){
      var d=tx-e.changedTouches[0].screenX;
      if(Math.abs(d)>50) slide(d>0?1:-1);
    },{passive:true});

    var rt;
    window.addEventListener('resize', function(){ clearTimeout(rt); rt=setTimeout(function(){ goTo(idx,false); },150); });
    goTo(idx, false);
  }

  function syncCarousel() { buildCarousel(); }
  window.skBuildCarousel = buildCarousel;
  buildCarousel();

  /* Category filter */
  document.querySelectorAll('.sk-filter').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var cat = btn.dataset.cat;
      document.querySelectorAll('.sk-filter').forEach(function(b){ b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      var count = 0;
      document.querySelectorAll('.sk-row').forEach(function(row) {
        var show = cat === 'all' || row.dataset.cat === cat;
        row.style.display = show ? 'flex' : 'none';
        if (show) count++;
      });
      var nr = document.getElementById('skNoResults');
      if (nr) nr.style.display = count === 0 ? 'block' : 'none';
    });
  });

  /* Vacancy detail popup */
  var backdrop   = document.getElementById('skBackdrop');
  var modalClose = document.getElementById('skModalClose');

  function openPopup(row) {
    if (!backdrop) return;
    var d     = row.dataset;
    var avail = d.available === 'true';
    var t     = TRANSLATIONS[currentLang] || TRANSLATIONS.pl;
    var vid   = d.vacancyId;
    var vdata = (vid && VACANCIES[vid] && VACANCIES[vid][currentLang])
              ? VACANCIES[vid][currentLang]
              : { title:'', location:'', salary:'', type:'', b1:'', b2:'', b3:'', desc:'' };

    var img = document.getElementById('skModalImg');
    if (img) { img.src = d.img || ''; img.alt = vdata.title; }

    var catEl = document.getElementById('skModalCat');
    if (catEl) catEl.textContent = getCatLabel(d.cat, currentLang);

    var titleEl = document.getElementById('skModalTitle');
    if (titleEl) titleEl.textContent = vdata.title;

    var av = document.getElementById('skModalAvail');
    if (av) {
      av.textContent = avail ? t.modal_active : t.modal_inactive;
      av.className   = 'sk-modal-avail ' + (avail ? 'open' : 'closed');
    }

    var loc = document.getElementById('skModalLoc');    if (loc) loc.textContent = vdata.location;
    var sal = document.getElementById('skModalSalary'); if (sal) sal.textContent = vdata.salary;
    var typ = document.getElementById('skModalType');   if (typ) typ.textContent = vdata.type;

    var labels = document.querySelectorAll('.sk-modal-meta-label');
    if (labels[0]) labels[0].textContent = t.modal_location;
    if (labels[1]) labels[1].textContent = t.modal_salary;
    if (labels[2]) labels[2].textContent = t.modal_type;

    var desc = document.getElementById('skModalDesc');
    if (desc) desc.textContent = vdata.desc;

    var ben = document.getElementById('skModalBenefits');
    if (ben) {
      ben.innerHTML = '';
      ['b1','b2','b3'].forEach(function(k) {
        if (!vdata[k]) return;
        var item = document.createElement('div');
        item.className = 'sk-modal-benefit';
        item.innerHTML = '<div class="sk-modal-benefit-icon">✓</div><span>' + vdata[k] + '</span>';
        ben.appendChild(item);
      });
    }

    var foot = document.getElementById('skModalFooter');
    if (foot) {
      foot.innerHTML = '';
      var a = document.createElement('a');
      a.href = '#contact-form';
      a.className   = avail ? 'sk-modal-apply' : 'sk-modal-notify';
      a.textContent = avail ? t.modal_apply    : t.modal_notify;
      a.addEventListener('click', closePopup);
      foot.appendChild(a);
    }

    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closePopup() {
    if (!backdrop) return;
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.sk-details-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) { e.stopPropagation(); openPopup(btn.closest('.sk-row')); });
  });
  if (modalClose) modalClose.addEventListener('click', closePopup);
  if (backdrop) backdrop.addEventListener('click', function(e) { if (e.target === backdrop) closePopup(); });
  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closePopup(); });
}

document.addEventListener('DOMContentLoaded', function() {

  /* 1. Language */
  var saved = 'pl';
  try { saved = localStorage.getItem('lang') || 'pl'; } catch(e) {}
  currentLang = saved;
  setLanguage(saved);

  /* 2. Header scroll */
  var hdr = document.getElementById('mainHeader');
  if (hdr) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) { hdr.classList.remove('transparent'); hdr.classList.add('scrolled'); }
      else { hdr.classList.remove('scrolled'); hdr.classList.add('transparent'); }
    });
  }

  /* 3. Mobile menu */
  var toggle  = document.getElementById('mobileToggle');
  var navMenu = document.getElementById('navMenu');
  function openMenu() {
    if (!navMenu || !toggle) return;
    if (!navMenu.querySelector('.nav-close-btn')) {
      var x = document.createElement('button');
      x.className = 'nav-close-btn'; x.textContent = '✕';
      x.addEventListener('click', closeMenu);
      navMenu.appendChild(x);
    }
    navMenu.classList.add('open'); toggle.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    if (!navMenu || !toggle) return;
    navMenu.classList.remove('open'); toggle.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  if (toggle) toggle.addEventListener('click', function() {
    navMenu.classList.contains('open') ? closeMenu() : openMenu();
  });
  if (navMenu) navMenu.querySelectorAll('a').forEach(function(a) { a.addEventListener('click', closeMenu); });

  /* 4. Contact form */
  var FORM_URL   = 'https://script.google.com/macros/s/AKfycbzfuANduorYN8_uOzeV5xMshp3_kozG93FA6CvADGpeT9s_EkY4QLJK8jn6Kq3Zbg_J8A/exec';
  var form       = document.getElementById('skForm');
  var successBox = document.getElementById('skSuccess');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn  = form.querySelector('.sk-submit-btn');
      var orig = btn.textContent;
      btn.textContent = '⏳ Wysyłanie...'; btn.disabled = true;
      var data = new FormData(form);
      data.append('Timestamp', new Date().toLocaleString('pl-PL'));
      data.append('Język', currentLang.toUpperCase());
      fetch(FORM_URL, { method:'POST', body:data })
        .then(function() { form.style.display = 'none'; if (successBox) successBox.style.display = 'block'; })
        .catch(function() { btn.textContent = orig; btn.disabled = false; alert('Coś poszło nie tak. Spróbuj ponownie.'); });
    });
  }

  /* 5. Fetch vacancies from Google Sheets and render everything */
  fetchAndRender();
});
