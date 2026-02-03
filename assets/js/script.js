const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");
const themeToggle = document.querySelector(".theme-toggle");
const langToggle = document.querySelector(".lang-toggle");
const langLabel = document.querySelector(".lang-label");

const menuData = {
  starters: [
    {
      name: "Saffron Citrus Salad",
      price: "Rs 950",
      description: "Seasonal greens, citrus pearls, and rose vinaigrette.",
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=800&q=80",
      signature: true,
    },
    {
      name: "Smoked Eggplant Bruschetta",
      price: "Rs 820",
      description: "Charred eggplant, tahini mousse, heirloom tomatoes.",
      image: "https://images.unsplash.com/photo-1458644267420-66bc8a5f21e4?auto=format&fit=crop&w=800&q=80",
      signature: false,
    },
    {
      name: "Spiced Prawn Tempura",
      price: "Rs 1,200",
      description: "Crisp prawns with tamarind glaze and mint aioli.",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80",
      signature: true,
    },
  ],
  mains: [
    {
      name: "Truffle Chicken Karahi",
      price: "Rs 2,450",
      description: "Free-range chicken with truffle aroma and garlic naan.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      signature: true,
    },
    {
      name: "Charcoal Lamb Chops",
      price: "Rs 2,900",
      description: "Slow-marinated lamb with smoked yogurt and herbs.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      signature: false,
    },
    {
      name: "Heritage Veg Biryani",
      price: "Rs 1,650",
      description: "Aromatic rice, roasted vegetables, saffron essence.",
      image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
      signature: false,
    },
  ],
  desserts: [
    {
      name: "Rose Pistachio Kulfi",
      price: "Rs 650",
      description: "Silky kulfi with pistachio crumble.",
      image: "https://images.unsplash.com/photo-1505253216365-7cfe4a0d0d6c?auto=format&fit=crop&w=800&q=80",
      signature: true,
    },
    {
      name: "Date & Cardamom Pudding",
      price: "Rs 580",
      description: "Warm pudding with cardamom caramel.",
      image: "https://images.unsplash.com/photo-1505253216365-7cfe4a0d0d6c?auto=format&fit=crop&w=800&q=80",
      signature: false,
    },
    {
      name: "Mango Basil Sorbet",
      price: "Rs 520",
      description: "Refreshing sorbet with basil syrup.",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80",
      signature: false,
    },
  ],
  beverages: [
    {
      name: "Spiced Pomegranate Cooler",
      price: "Rs 420",
      description: "Pomegranate, cinnamon, and citrus fizz.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      signature: true,
    },
    {
      name: "Kashmiri Kahwa",
      price: "Rs 390",
      description: "Green tea with saffron and almonds.",
      image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=800&q=80",
      signature: false,
    },
    {
      name: "Signature Mocktail Flight",
      price: "Rs 780",
      description: "Three curated mocktails with herb infusions.",
      image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=800&q=80",
      signature: true,
    },
  ],
};

const reviews = [
  {
    name: "Amina K.",
    rating: 5,
    text: "An unforgettable dining experience — the truffle karahi is divine.",
  },
  {
    name: "Hassan R.",
    rating: 4,
    text: "Beautiful ambiance and attentive service. Loved the chef's tasting menu.",
  },
  {
    name: "Sana T.",
    rating: 5,
    text: "Every dish was balanced and creative. The kulfi was a highlight.",
  },
  {
    name: "Omar J.",
    rating: 5,
    text: "Best fusion dining in Lahore. The team made our anniversary special.",
  },
  {
    name: "Lina M.",
    rating: 4,
    text: "Sophisticated flavors and presentation. Reservation process was easy.",
  },
];

const translations = {
  en: {
    heroEyebrow: "Fine Dining · Lahore",
    heroTitle: "ANOOKHA",
    heroTagline: "A Unique Culinary Experience",
    reserveTable: "Reserve Table",
    viewMenu: "View Menu",
    openHours: "Open Today",
    callUs: "Call Us",
    aboutEyebrow: "Our Story",
    aboutTitle: "An immersive dining journey since 2012",
    aboutBody:
      "ANOOKHA was born from a desire to reimagine the flavors of South Asia with modern elegance. Our chefs blend heritage spices with global techniques to craft an experience that feels both familiar and unexpected.",
    aboutPoint1: "Signature tasting menus curated seasonally.",
    aboutPoint2: "Immersive service with table-side storytelling.",
    aboutPoint3: "An ambient setting inspired by Lahore’s artistic heritage.",
    chefSignature: "Chef Signature:",
    yearsLabel: "Years of Excellence",
    awardsLabel: "International Awards",
    guestLabel: "Guest Satisfaction",
    discoverMenu: "Discover Menu",
    menuEyebrow: "Curated Flavors",
    menuTitle: "Explore Our Signature Menu",
    tabStarters: "Starters",
    tabMains: "Mains",
    tabDesserts: "Desserts",
    tabBeverages: "Beverages",
    reserveEyebrow: "Reservations",
    reserveTitle: "Book Your Table",
    formName: "Name",
    formContact: "Phone / Email",
    formDate: "Date",
    formTime: "Time",
    formGuests: "Number of Guests",
    formRequests: "Special Requests",
    bookNow: "Book Now",
    reserveCardTitle: "Why Reserve Online?",
    reservePoint1: "Priority seating for online guests.",
    reservePoint2: "Instant confirmation via SMS/email.",
    reservePoint3: "Personalized dining preferences saved.",
    contactConcierge: "Contact Concierge",
    orderOnline: "Order Online",
    galleryEyebrow: "Visual Journey",
    galleryTitle: "Gallery & Food Moments",
    reviewsEyebrow: "Testimonials",
    reviewsTitle: "What Guests Are Saying",
    teamEyebrow: "Meet the Team",
    teamTitle: "Guided by Culinary Artistry",
    chefBio: "Head Chef | Modern South Asian Cuisine",
    sousBio: "Sous Chef | Seasonal Tastings",
    sommelierBio: "Sommelier | Pairing Experiences",
    eventsEyebrow: "Specials & Events",
    eventsTitle: "Upcoming Moments at ANOOKHA",
    eventTitle1: "Live Sitar Evenings",
    eventDesc1: "Every Friday · 7 PM – 10 PM · Complimentary welcome drink.",
    eventTitle2: "Chef’s Table Tasting",
    eventDesc2: "Monthly 8-course menu with wine pairings. Limited to 12 guests.",
    eventTitle3: "Summer Celebration Offer",
    eventDesc3: "Enjoy 15% off for parties of 4+ on weekdays.",
    contactEyebrow: "Contact",
    contactTitle: "Visit ANOOKHA",
    contactInfoTitle: "Get in Touch",
    addressLabel: "Address:",
    phoneLabel: "Phone:",
    emailLabel: "Email:",
    hoursLabel: "Opening Hours",
    contactFormName: "Name",
    contactFormEmail: "Email",
    contactFormMessage: "Message",
    sendMessage: "Send Message",
    footerAbout: "A refined culinary destination blending artistry and hospitality.",
    quickLinks: "Quick Links",
    newsletterTitle: "Newsletter",
    newsletterBody: "Receive our seasonal tasting menus and event updates.",
    subscribe: "Subscribe",
    privacyPolicy: "Privacy Policy",
  },
  ur: {
    heroEyebrow: "فائن ڈائننگ · لاہور",
    heroTitle: "انوکھا",
    heroTagline: "منفرد ذائقوں کا تجربہ",
    reserveTable: "ٹیبل ریزرو کریں",
    viewMenu: "مینو دیکھیں",
    openHours: "آج کھلا ہے",
    callUs: "کال کریں",
    aboutEyebrow: "ہماری کہانی",
    aboutTitle: "2012 سے یادگار ڈائننگ سفر",
    aboutBody:
      "انوکھا کا مقصد روایتی ذائقوں کو جدید انداز میں پیش کرنا ہے۔ ہمارے شیفز وراثتی مصالحوں اور عالمی تکنیکوں کو ملا کر ایک منفرد تجربہ بناتے ہیں۔",
    aboutPoint1: "موسمی دستخطی ٹیسٹنگ مینیو۔",
    aboutPoint2: "ٹیبل سائیڈ کہانی کے ساتھ بہترین سروس۔",
    aboutPoint3: "لاہور کی ثقافت سے متاثرہ ماحول۔",
    chefSignature: "شیف دستخط:",
    yearsLabel: "کامیابی کے سال",
    awardsLabel: "بین الاقوامی ایوارڈز",
    guestLabel: "مہمانوں کی تسلی",
    discoverMenu: "مینو دریافت کریں",
    menuEyebrow: "ذائقوں کا انتخاب",
    menuTitle: "ہمارا دستخطی مینیو",
    tabStarters: "اسٹارٹرز",
    tabMains: "مین کورس",
    tabDesserts: "ڈیزرٹس",
    tabBeverages: "مشروبات",
    reserveEyebrow: "ریزرویشن",
    reserveTitle: "اپنی میز بک کریں",
    formName: "نام",
    formContact: "فون / ای میل",
    formDate: "تاریخ",
    formTime: "وقت",
    formGuests: "مہمانوں کی تعداد",
    formRequests: "خصوصی ہدایات",
    bookNow: "ابھی بک کریں",
    reserveCardTitle: "آن لائن کیوں؟",
    reservePoint1: "آن لائن مہمانوں کے لیے ترجیحی نشست۔",
    reservePoint2: "ایس ایم ایس/ای میل پر فوری تصدیق۔",
    reservePoint3: "ذاتی ترجیحات محفوظ رہیں۔",
    contactConcierge: "کنسئیرج سے رابطہ",
    orderOnline: "آن لائن آرڈر",
    galleryEyebrow: "تصویری سفر",
    galleryTitle: "گیلری اور لمحات",
    reviewsEyebrow: "تاثرات",
    reviewsTitle: "مہمانوں کی رائے",
    teamEyebrow: "ٹیم سے ملیں",
    teamTitle: "ذائقوں کے ماہر",
    chefBio: "ہیڈ شیف | جدید جنوبی ایشیائی",
    sousBio: "سوس شیف | موسمی مینیو",
    sommelierBio: "سوملیے | پیئرنگ ماہر",
    eventsEyebrow: "خصوصی تقریبات",
    eventsTitle: "آنے والی تقریبات",
    eventTitle1: "لائیو ستار شام",
    eventDesc1: "ہر جمعہ · شام 7 تا 10 بجے · خوش آمدید ڈرنک۔",
    eventTitle2: "شیف ٹیبل ٹیسٹنگ",
    eventDesc2: "ماہانہ 8 کورس مینیو، 12 مہمانوں کے لیے محدود۔",
    eventTitle3: "گرمیوں کی پیشکش",
    eventDesc3: "ہفتے کے دن 4+ مہمانوں کے لیے 15% رعایت۔",
    contactEyebrow: "رابطہ",
    contactTitle: "انوکھا آئیں",
    contactInfoTitle: "ہم سے رابطہ",
    addressLabel: "پتہ:",
    phoneLabel: "فون:",
    emailLabel: "ای میل:",
    hoursLabel: "اوقات کار",
    contactFormName: "نام",
    contactFormEmail: "ای میل",
    contactFormMessage: "پیغام",
    sendMessage: "پیغام بھیجیں",
    footerAbout: "فن اور مہمان نوازی کا حسین امتزاج۔",
    quickLinks: "فوری لنکس",
    newsletterTitle: "نیوز لیٹر",
    newsletterBody: "موسمی مینیو اور ایونٹس کی اپ ڈیٹس۔",
    subscribe: "سبسکرائب",
    privacyPolicy: "پرائیویسی پالیسی",
  },
};

const animateElements = document.querySelectorAll(".section, .menu-card, .event-card, .team-card");

const renderMenu = (category = "starters") => {
  const grid = document.getElementById("menu-grid");
  grid.innerHTML = "";
  menuData[category].forEach((item) => {
    const card = document.createElement("article");
    card.className = "menu-card";
    card.setAttribute("data-animate", "");
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="menu-card-content">
        <div class="menu-card-header">
          <h3>${item.name}</h3>
          <span class="price">${item.price}</span>
        </div>
        <p>${item.description}</p>
        ${item.signature ? '<span class="badge">Signature</span>' : ""}
      </div>
    `;
    grid.appendChild(card);
  });
};

const renderReviews = () => {
  const track = document.getElementById("review-track");
  track.innerHTML = "";
  reviews.forEach((review) => {
    const card = document.createElement("article");
    card.className = "review-card";
    card.innerHTML = `
      <div class="review-rating">${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}</div>
      <p>“${review.text}”</p>
      <strong>— ${review.name}</strong>
    `;
    track.appendChild(card);
  });
};

const updateTranslations = (lang) => {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  langLabel.textContent = lang.toUpperCase();
  document.documentElement.lang = lang;
};

const toggleTheme = () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "light" : "dark");
  themeToggle.querySelector(".theme-icon").textContent = isDark ? "☀️" : "🌙";
};

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((btn) => btn.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  });
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.querySelector(".lightbox-image");

const openLightbox = (src) => {
  lightboxImage.src = src;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
};

const closeLightbox = () => {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
};

document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => openLightbox(item.dataset.image));
});

document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

const reservationForm = document.getElementById("reservation-form");
reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.getElementById("reservation-message");
  message.textContent = "Thank you! Your reservation request has been received.";
  reservationForm.reset();
});

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const status = document.getElementById("contact-message-status");
  status.textContent = "Thanks for reaching out. We'll reply within 24 hours.";
  contactForm.reset();
});

const carouselTrack = document.getElementById("review-track");
let currentReview = 0;

const updateCarousel = () => {
  carouselTrack.style.transform = `translateX(-${currentReview * 100}%)`;
};

document.querySelector(".carousel-control.next").addEventListener("click", () => {
  currentReview = (currentReview + 1) % reviews.length;
  updateCarousel();
});

document.querySelector(".carousel-control.prev").addEventListener("click", () => {
  currentReview = (currentReview - 1 + reviews.length) % reviews.length;
  updateCarousel();
});

langToggle.addEventListener("click", () => {
  const newLang = document.documentElement.lang === "en" ? "ur" : "en";
  updateTranslations(newLang);
});

themeToggle.addEventListener("click", toggleTheme);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

animateElements.forEach((el) => {
  el.setAttribute("data-animate", "");
  observer.observe(el);
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("dark");
  themeToggle.querySelector(".theme-icon").textContent = "☀️";
}

renderMenu();
renderReviews();
updateTranslations("en");
updateCarousel();
