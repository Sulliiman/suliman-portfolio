// ===== Project data =====
// This is the ONLY file you need to edit to add, remove, or reorder a
// project. Everything (home page preview, Work grid, and each project's
// own page) is generated from this array.
//
// TO ADD A NEW PROJECT: copy one of the objects below, change every field,
// give it a unique "id", and add it to the array. Nothing else to touch.
//
// TO ADD PHOTOS: create a folder images/<id>/, drop your image files in
// it, and list their paths in that project's "images" array.

const PROJECTS = [
  {
    id: 'ticket-system',
    year: '2026',
    title: { en: 'Ticket System', ar: 'نظام إدارة تذاكر الدعم الفني' },
    desc: {
      en: 'A client-facing support ticketing system built at Beta IT (Node.js, Express, MongoDB). Clients raise tickets for their issues, track their status, and tickets get assigned to engineers to resolve — with RBAC, SLA tracking and auto-escalation.',
      ar: 'نظام تذاكر دعم فني للعملاء بنيته في Beta IT (Node.js, Express, MongoDB). العملاء يرفعون تذاكر لمشاكلهم، يتابعون حالتها، وتنسند التذاكر لمهندسين لحلها — مع صلاحيات حسب الدور (RBAC)، متابعة SLA مع تصعيد تلقائي.',
    },
    tags: ['Node.js', 'MongoDB', 'Vanilla JS'],
    links: { github: '#', demo: '#' },
    images: [
      'images/ticket-system/1.jpg',
      'images/ticket-system/2.jpg'
    ],
  },
  {
    id: 'find-it',
    year: '2026',
    title: { en: 'Find It', ar: 'Find It' },
    desc: {
      en: 'AI-powered lost & found platform. CLIP embeddings for visual matching, pgvector for similarity search, Gemini Vision for auto-generated descriptions.',
      ar: 'منصة مفقودات مدعومة بالذكاء الاصطناعي. CLIP embeddings للمطابقة البصرية، pgvector للبحث بالتشابه، Gemini Vision لتوليد الأوصاف تلقائياً.',
    },
    tags: ['Node.js', 'PostgreSQL', 'pgvector', 'CLIP', 'Gemini'],
    links: { github: '#', demo: '#' },
    images: [
      // 'images/find-it/1.jpg',
    ],
  },
  {
    id: 'smart-parking',
    year: '2026',
    title: { en: 'Smart Parking System', ar: 'نظام مواقف ذكي' },
    desc: {
      en: 'Parking management system that tracks slot availability, handles entry/exit, and manages reservations in real time.',
      ar: 'نظام إدارة مواقف يتابع المواقف المتاحة، يدير الدخول والخروج، ويتعامل مع الحجوزات لحظياً.',
    },
    tags: ['Node.js', 'MySQL', 'Real-time'],
    links: { github: '#' },
    images: [],
  },
  {
    id: 'meeting-room-booking',
    year: '2026',
    title: { en: 'Meeting Room Booking', ar: 'إدارة حجوزات غرف الاجتماعات' },
    desc: {
      en: 'Internal booking system for meeting rooms. Conflict detection, calendar integration, and per-room availability views.',
      ar: 'نظام حجز داخلي لغرف الاجتماعات. يكشف التعارضات في الأوقات، يتكامل مع التقويم، ويعرض توفر كل غرفة.',
    },
    tags: ['Node.js', 'MongoDB', 'Calendar'],
    links: { github: '#' },
    images: [],
  },
  {
    id: 'whatsapp-bot',
    year: '2026',
    title: { en: 'WhatsApp Automation Bot', ar: 'بوت أتمتة واتساب' },
    desc: {
      en: 'Scheduled WhatsApp bot built on Baileys that runs autonomously on Termux via cron. Connect-send-exit architecture with MongoDB persistence for reliable daily message delivery.',
      ar: 'بوت واتساب مجدول مبني على Baileys يشتغل ذاتياً على Termux عبر cron. معمارية connect-send-exit مع MongoDB لإرسال رسائل يومية موثوقة.',
    },
    tags: ['Node.js', 'Baileys', 'MongoDB', 'Termux'],
    links: { github: '#' },
    images: [],
  },
  {
    id: 't3-bank',
    year: '2025',
    title: { en: 'T3 Bank', ar: 'T3 Bank' },
    desc: {
      en: 'Simple banking system with user accounts, transfers, and balance management. Full-stack build with authentication, transaction history, and a clean dashboard.',
      ar: 'نظام بنكي بسيط فيه حسابات مستخدمين وتحويلات وإدارة أرصدة. مشروع full-stack مع نظام تسجيل دخول، سجل عمليات، ولوحة تحكم نظيفة.',
    },
    tags: ['Node.js', 'MySQL', 'HTML/CSS/JS', 'Auth'],
    links: { github: '#' },
    images: [],
  }
];
