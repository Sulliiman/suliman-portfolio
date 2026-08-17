// ===== Translations =====
const translations = {
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_projects: 'Work',
    nav_contact: 'Contact',
    lang_btn: 'AR',

    hero_status: 'Available for work',
    hero_hi: 'Hello,',
    hero_iam: 'I am',
    hero_name: 'Suliman',
    hero_bio_html: 'Computer Science graduate turning <strong>raw ideas</strong> into <strong>real systems</strong> — from AI-powered platforms to backends that quietly do the heavy lifting.',
    hero_cta: 'View work',
    hero_cta_2: 'Get in touch',

    home_work_title: 'Selected work',
    home_work_meta: 'Recent — 2026',
    home_work_all: 'See all projects',

    about_eyebrow: 'About',
    about_title: 'About',
    about_p1: 'Computer Science graduate from Imam Mohammad Ibn Saud Islamic University. I work primarily on backend systems, data analysis, and data engineering, alongside AI integration, places where the logic has to be exact and the design has to be clean.',
    about_p2: 'I tend to fact-check claims and push back when something looks wrong. I prefer step-by-step approaches over big rewrites, and I value tools that are simple over tools that are clever.',
    about_p3: 'Outside the keyboard: aviation, processor hardware, and historical events.',

    stack_title: 'Stack',
    stack_lang: 'Languages',
    stack_backend: 'Backend',
    stack_db: 'Databases',
    stack_ai: 'AI / ML',
    stack_other: 'Other',

    projects_eyebrow: 'Work',
    projects_title: 'Selected work',
    projects_subtitle: "A small set of things I've built or am building.",

    contact_eyebrow: 'Contact',
    contact_title: "Let's talk",
    contact_subtitle: 'Open to internships, collaborations, and interesting problems.',
    form_name: 'Name',
    form_email: 'Email',
    form_message: 'Message',
    form_submit: 'Send',
    contact_or: 'Or directly',

    footer_text: '© 2026 Suliman',
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_about: 'عني',
    nav_projects: 'الأعمال',
    nav_contact: 'تواصل',
    lang_btn: 'EN',

    hero_status: 'متاح للعمل',
    hero_hi: 'أهلين،',
    hero_iam: 'أنا',
    hero_name: 'سليمان',
    hero_bio_html: 'خريج علوم حاسب أحول <strong>الأفكار الخام</strong> إلى <strong>أنظمة حقيقية</strong> — من منصات مدعومة بالذكاء الاصطناعي إلى backends تشتغل بهدوء وتتحمل الحمل.',
    hero_cta: 'استعراض الأعمال',
    hero_cta_2: 'تواصل معي',

    home_work_title: 'أعمال مختارة',
    home_work_meta: 'حديثة — 2026',
    home_work_all: 'كل المشاريع',

    about_eyebrow: 'عني',
    about_title: 'عني',
    about_p1: 'خريج علوم حاسب من جامعة الإمام محمد بن سعود الإسلامية. أشتغل بشكل رئيسي على أنظمة backend وتحليل البيانات وهندستها، إضافة لدمج الذكاء الاصطناعي، الأماكن اللي يكون فيها المنطق دقيق والتصميم نظيف.',
    about_p2: 'أميل للتدقيق في الأشياء وأناقش لما يكون شي مو صح. أفضل الخطوات التدريجية على إعادة الكتابة الكاملة، وأقدّر الأدوات البسيطة أكثر من الذكية.',
    about_p3: 'بعيداً عن الكيبورد: الطيران، معالجات الكمبيوتر، والأحداث التاريخية.',

    stack_title: 'الأدوات',
    stack_lang: 'اللغات',
    stack_backend: 'Backend',
    stack_db: 'قواعد البيانات',
    stack_ai: 'الذكاء الاصطناعي',
    stack_other: 'أخرى',

    projects_eyebrow: 'الأعمال',
    projects_title: 'أعمال مختارة',
    projects_subtitle: 'مجموعة صغيرة من المشاريع اللي بنيتها أو أبنيها.',

    contact_eyebrow: 'تواصل',
    contact_title: 'خلنا نتكلم',
    contact_subtitle: 'متاح للتدريب، التعاون، والمشاكل الممتعة.',
    form_name: 'الاسم',
    form_email: 'البريد',
    form_message: 'الرسالة',
    form_submit: 'إرسال',
    contact_or: 'أو مباشرة',

    footer_text: '© 2026 سليمان',
  },
};

function setLanguage(lang) {
  document.body.setAttribute('lang', lang);
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  localStorage.setItem('portfolio-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });

  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function toggleLanguage() {
  const current = document.body.getAttribute('lang') || 'en';
  setLanguage(current === 'en' ? 'ar' : 'en');
}

// ===== Mouse spotlight =====
function setupSpotlight() {
  const spot = document.querySelector('.bg-spotlight');
  if (!spot) return;

  // Initial position
  spot.style.left = '50%';
  spot.style.top = '30%';

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight * 0.3;
  let currentX = targetX;
  let currentY = targetY;

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function animate() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    spot.style.left = currentX + 'px';
    spot.style.top = currentY + 'px';
    requestAnimationFrame(animate);
  }
  animate();
}

// ===== Reveal =====
function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

// ===== Page transitions =====
function setupPageTransitions() {
  // Trigger fade-in on load
  document.body.classList.add('page-ready');

  // Intercept internal nav clicks
  document.querySelectorAll('a').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    // Only intercept same-origin .html navigations
    if (
      href.endsWith('.html') &&
      !link.hasAttribute('target') &&
      !href.startsWith('http')
    ) {
      link.addEventListener('click', (e) => {
        // Don't intercept if already on this page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (href === currentPage) {
          e.preventDefault();
          return;
        }
        e.preventDefault();
        document.body.classList.remove('page-ready');
        document.body.classList.add('page-leaving');
        setTimeout(() => {
          window.location.href = href;
        }, 280);
      });
    }
  });

  // Restore on back button
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
      document.body.classList.remove('page-leaving');
      document.body.classList.add('page-ready');
    }
  });
}

// script.js and partials.js load the header/footer asynchronously, so init
// only runs once BOTH the page HTML (DOMContentLoaded) and the injected
// header/footer (partialsready, from partials.js) are ready.
let domReady = false;
let partialsReady = false;

function initPage() {
  const savedLang = localStorage.getItem('portfolio-lang') || 'en';
  setLanguage(savedLang);

  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.addEventListener('click', toggleLanguage);

  setupSpotlight();
  setupReveal();
  setupPageTransitions();
}

function tryInitPage() {
  if (domReady && partialsReady) initPage();
}

document.addEventListener('DOMContentLoaded', () => {
  domReady = true;
  tryInitPage();
});

document.addEventListener('partialsready', () => {
  partialsReady = true;
  tryInitPage();
});
