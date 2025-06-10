document.addEventListener('DOMContentLoaded', () => {

    // --- UPDATED TRANSLATIONS ---
    const translations = {
    en: {
    "page-title": "Dr. Wassim Jomaa - Music Therapy, Crisis Management & Research",
    "meta-description": "Personal website of Dr. Wassim Jomaa, University Assistant, Researcher, Expert in Music Therapy, Crisis Management (Financial & Humanitarian), Neuroscience, and Education based in Sousse, Tunisia.",
    "nav-home": "Home", "nav-about": "About", "nav-experience": "Experience", "nav-skills": "Skills", "nav-publications": "Publications", "nav-contact": "Contact",
    "hero-title": "Dr. Wassim <span>Jomaa</span>",
    "hero-subtitle": "University Assistant, Researcher, Music Therapy & Crisis Management Expert, PMP, ISO Auditor, CFA",
    "hero-contact-btn": "Contact Me",
    "about-title": "About Me", "about-subtitle": "Biography",
    "about-para1": "Dr. Wassim Jomaa is a highly accomplished University Assistant and Researcher at the University of Sousse with diverse expertise spanning Music Therapy, Crisis Management (both financial and humanitarian), Neuroscience, and Education.",
    "about-para2": "He holds a PhD in Art and Cultural Studies (Musicology & Social Psychology) from the University of Tunis. His work focuses on the therapeutic application of music, particularly in healthcare and crisis contexts. He directs the Music Therapy Master's program at the Faculty of Medicine of Sousse and leads the Mediterranean Association of Music Therapy (AMM).",
    "about-para3": "Dr. Jomaa is also a certified Project Management Professional (PMP), ISO 21001 Lead Auditor, CFA charterholder, and Chief Investment Officer. He serves as President of the Tunisian Red Crescent (Hammam Sousse) and Director of a TRC/UNHCR refugee program, demonstrating a unique blend of academic, therapeutic, financial, and humanitarian leadership.",
    "about-experience-btn": "View Experience",
    "experience-title": "Experience & Research",
    "exp1-title": "Assistant Professor", "exp1-date": "Sept 2018 - Present", "exp1-desc": "Higher Institute of Music of Sousse (Univ. Sousse). Teaching music theory, neurosciences of music, music therapy, Oud performance. Head of Music & New Technologies Dept.",
    "exp2-title": "Doctorate Awarded (PhD)", "exp2-date": "Dec 2017", "exp2-desc": "PhD in Art And Cultural Studies (Musicology & Social Psychology) from the University Of Tunis.",
    "exp3-title": "Chief Investment Officer", "exp3-date": "Feb 2023 - Present", "exp3-desc": "The Family Office Company BSC (c). Previously CIO at Capital Investments DIFC (2021-2023). CFA Charterholder.",
    "exp4-title": "President, Tunisian Red Crescent Branch", "exp4-date": "Ongoing", "exp4-desc": "Leading the Hammam Sousse branch, coordinating local humanitarian actions and crisis response (e.g., COVID-19 support).",
    "exp5-title": "Director, TRC/UNHCR Refugee Program", "exp5-date": "Ongoing", "exp5-desc": "Managing the program for protection and assistance to refugees in collaboration with UNHCR. Participant in UNHCR MENA consultations.",
    "exp6-title": "Director, Music Therapy Master's Program", "exp6-date": "Ongoing", "exp6-desc": "Leading the joint Master's program (Faculty of Medicine & Higher Institute of Musicology of Sousse).",
    "exp7-title": "President, Mediterranean Association of Music Therapy (AMM)", "exp7-date": "Ongoing", "exp7-desc": "Leading the regional association promoting music therapy practice and research across the Mediterranean.",
    "exp8-title": "Coordinator, HEALING Project", "exp8-date": "2020 - 2023", "exp8-desc": "Responsible for monitoring the 'Art Therapy in Higher Educational Institutions' project (Jordan & Tunisia).",
    "exp9-title": "Senior Portfolio / Fund Manager", "exp9-date": "2004 - 2021 (Various Roles)", "exp9-desc": "Extensive experience in asset management and investment strategy (e.g., Qatar National Bank, AB INVEST).",
    "exp10-title": "Certifications", "exp10-date": "2017 (PMP), 2019 (ISO Auditor)", "exp10-desc": "Project Management Professional (PMP) from PMI and ISO 21001 Lead Auditor for educational organizations.",
    "skills-title": "Certifications & Skills",
    "skill1-title": "Music Therapy", "skill1-desc": "Expert in therapeutic applications (e.g., anxiety reduction in healthcare), Director of Master's program, President of Mediterranean Association of Music Therapy (AMM).",
    "skill2-title": "Project Management (PMP)", "skill2-desc": "Certified PMP professional skilled in leading and directing complex international research, educational, and humanitarian projects.",
    "skill3-title": "Educational Management (ISO 21001)", "skill3-desc": "Certified ISO 21001 Lead Auditor with expertise in quality management systems and curriculum development for educational organizations.",
    "skill4-title": "Humanitarian & Crisis Management", "skill4-desc": "President of Red Crescent branch, Director of TRC/UNHCR refugee program. Experienced in crisis response, aid coordination, and support for vulnerable populations.",
    "skill5-title": "Neuroscience of Music", "skill5-desc": "Teaching and research interest in the neurosciences of music, exploring its impact on the brain and therapeutic applications.",
    "skill6-title": "Higher Education Leadership", "skill6-desc": "Experienced Assistant Professor, Head of Department, Director of Master's Program, contributing to curriculum development (e.g., HEALING project).",
    "skill7-title": "Financial & Investment Management", "skill7-desc": "Chief Investment Officer (current & past roles), CFA charterholder. Expertise in asset/portfolio management, investment strategy, and financial crisis analysis.",
    "publications-title": "Media & Publications",
    "pub1-title": "Effect of music on patient anxiety undergoing bronchoscopy", "pub1-date": "<i class='fas fa-calendar-alt' aria-hidden='true'></i> Mar 2024", "pub1-type": "<i class='fas fa-flask' aria-hidden='true'></i> Preprint/RCT", "pub1-desc": "Co-authored randomized controlled trial investigating music's impact on anxiety during bronchoscopy procedures.", "pub1-link": "Read More <span aria-hidden='true'>→</span>",
    "pub2-title": "Efficacy of music in the endoscopy setting", "pub2-date": "<i class='fas fa-calendar-alt' aria-hidden='true'></i> Feb 2020", "pub2-type": "<i class='fas fa-book-reader' aria-hidden='true'></i> Literature Review", "pub2-desc": "Co-authored literature review (Gastrointestinal Nursing) on music as a non-pharmacological intervention during endoscopy.", "pub2-link": "Read More <span aria-hidden='true'>→</span>",
    "pub3-title": "HEALING Project Contributor", "pub3-date": "<i class='fas fa-calendar-alt' aria-hidden='true'></i> 2020-2023", "pub3-type": "<i class='fas fa-project-diagram' aria-hidden='true'></i> Intl. Project", "pub3-desc": "Coordinator for monitoring the 'Art Therapy in Higher Educational Institutions' project (Jordan & Tunisia), developing multidisciplinary diplomas.", "pub3-link": "Read More <span aria-hidden='true'>→</span>",
    "contact-title": "Contact Me", "contact-getintouch": "Get In Touch",
    "contact-intro": "For academic collaborations, speaking engagements, consultation (music therapy, crisis management, finance), or humanitarian partnerships, please reach out.",
    "contact-location-label": "Location", "contact-email-label": "Email", "contact-phone-label": "Phone", "contact-follow": "Follow Me",
    "contact-name-label": "Name", "contact-email-label-form": "Email", "contact-subject-label": "Subject", "contact-message-label": "Message", "contact-send-btn": "Send Message",
    "form-status-sending": "Sending message...", "form-status-success": "Thank you! Your message has been sent successfully.", "form-status-error-generic": "Oops! There was a problem submitting your form. Please try again.", "form-status-error-network": "Oops! Network error. Please check your connection and try again.",
    "map-section-title": "My Location",
    "footer-tagline": "Academic | Researcher | Music Therapy | Crisis Management | Humanitarian Leader",
    "footer-nav-home": "Home", "footer-nav-about": "About", "footer-nav-experience": "Experience", "footer-nav-skills": "Skills", "footer-nav-publications": "Publications", "footer-nav-contact": "Contact",
    "footer-rights": "All Rights Reserved.",
    "alt-hero-profile-img": "Portrait photo of Dr. Wassim Jomaa", "alt-about-img": "Professional working environment", "alt-pub1-img": "Medical research concept", "alt-pub2-img": "Medical journal or literature review concept", "alt-pub3-img": "International collaboration or project concept",
    },
    fr: { // --- FRENCH TRANSLATIONS (Full translations included as in original) ---
        "page-title": "Dr. Wassim Jomaa - Musicothérapie, Gestion de Crise & Recherche",
        "meta-description": "Site personnel du Dr. Wassim Jomaa, Assistant Universitaire, Chercheur, Expert en Musicothérapie, Gestion de Crise (Financière & Humanitaire), Neurosciences et Éducation basé à Sousse, Tunisie.",
        "nav-home": "Accueil", "nav-about": "À Propos", "nav-experience": "Expérience", "nav-skills": "Compétences", "nav-publications": "Publications", "nav-contact": "Contact",
        "hero-title": "Dr. Wassim <span>Jomaa</span>",
        "hero-subtitle": "Assistant Universitaire, Chercheur, Expert Musicothérapie & Gestion de Crise, PMP, Auditeur ISO, CFA",
        "hero-contact-btn": "Contactez-moi",
        "about-title": "À Propos de Moi", "about-subtitle": "Biographie",
        "about-para1": "Dr. Wassim Jomaa est un Assistant Universitaire et Chercheur très accompli à l'Université de Sousse, avec une expertise diversifiée couvrant la Musicothérapie, la Gestion de Crise (financière et humanitaire), les Neurosciences et l'Éducation.",
        "about-para2": "Il détient un Doctorat en Arts et Études Culturelles (Musicologie & Psychologie Sociale) de l'Université de Tunis. Son travail se concentre sur l'application thérapeutique de la musique, notamment dans les contextes de soins de santé et de crise. Il dirige le Master en Musicothérapie à la Faculté de Médecine de Sousse et préside l'Association Méditerranéenne de Musicothérapie (AMM).",
        "about-para3": "Dr. Jomaa est également certifié Project Management Professional (PMP), Auditeur Principal ISO 21001, détenteur de la charte CFA et Directeur des Investissements (Chief Investment Officer). Il est Président du Croissant-Rouge Tunisien (Hammam Sousse) et Directeur d'un programme TRC/UNHCR pour les réfugiés, démontrant un mélange unique de leadership académique, thérapeutique, financier et humanitaire.",
        "about-experience-btn": "Voir l'Expérience",
        "experience-title": "Expérience & Recherche",
        "exp1-title": "Assistant Universitaire", "exp1-date": "Sept 2018 - Présent", "exp1-desc": "Institut Supérieur de Musique de Sousse (Univ. Sousse). Enseignement : théorie musicale, neurosciences de la musique, musicothérapie, Oud. Chef du Dépt. Musique & Nouvelles Technologies.",
        "exp2-title": "Doctorat Obtenu (PhD)", "exp2-date": "Déc 2017", "exp2-desc": "Doctorat en Arts et Études Culturelles (Musicologie & Psychologie Sociale) de l'Université de Tunis.",
        "exp3-title": "Directeur des Investissements (CIO)", "exp3-date": "Fév 2023 - Présent", "exp3-desc": "The Family Office Company BSC (c). Précédemment CIO chez Capital Investments DIFC (2021-2023). Détenteur charte CFA.",
        "exp4-title": "Président, Branche du Croissant-Rouge Tunisien", "exp4-date": "En cours", "exp4-desc": "Direction de la branche de Hammam Sousse, coordination des actions humanitaires locales et réponse aux crises (ex: support COVID-19).",
        "exp5-title": "Directeur, Programme Réfugiés TRC/UNHCR", "exp5-date": "En cours", "exp5-desc": "Gestion du programme de protection et d'assistance aux réfugiés en collaboration avec l'UNHCR. Participant aux consultations UNHCR MENA.",
        "exp6-title": "Directeur, Master en Musicothérapie", "exp6-date": "En cours", "exp6-desc": "Direction du programme de Master conjoint (Faculté de Médecine & Institut Supérieur de Musicologie de Sousse).",
        "exp7-title": "Président, Association Méditerranéenne de Musicothérapie (AMM)", "exp7-date": "En cours", "exp7-desc": "Direction de l'association régionale promouvant la pratique et la recherche en musicothérapie en Méditerranée.",
        "exp8-title": "Coordinateur, Projet HEALING", "exp8-date": "2020 - 2023", "exp8-desc": "Responsable du suivi du projet 'Art-thérapie dans les Établissements d'Enseignement Supérieur' (Jordanie & Tunisie).",
        "exp9-title": "Gestionnaire de Portefeuille Senior / Fonds", "exp9-date": "2004 - 2021 (Divers Rôles)", "exp9-desc": "Vaste expérience en gestion d'actifs et stratégie d'investissement (ex: Qatar National Bank, AB INVEST).",
        "exp10-title": "Certifications", "exp10-date": "2017 (PMP), 2019 (ISO Auditor)", "exp10-desc": "Project Management Professional (PMP) du PMI et Auditeur Principal ISO 21001 pour les organismes éducatifs.",
        "skills-title": "Certifications & Compétences",
        "skill1-title": "Musicothérapie", "skill1-desc": "Expert en applications thérapeutiques (ex: réduction anxiété), Directeur de Master, Président de l'Association Méditerranéenne de Musicothérapie (AMM).",
        "skill2-title": "Gestion de Projet (PMP)", "skill2-desc": "Professionnel certifié PMP, compétent pour diriger des projets complexes internationaux de recherche, éducatifs et humanitaires.",
        "skill3-title": "Management Éducatif (ISO 21001)", "skill3-desc": "Auditeur Principal certifié ISO 21001 avec expertise en systèmes de management de la qualité et développement de curriculum.",
        "skill4-title": "Gestion Humanitaire & de Crise", "skill4-desc": "Président branche Croissant-Rouge, Directeur programme réfugiés TRC/UNHCR. Expérience en réponse aux crises, coordination aide, soutien populations vulnérables.",
        "skill5-title": "Neuroscience de la Musique", "skill5-desc": "Intérêt pour l'enseignement et la recherche en neurosciences de la musique, explorant son impact cérébral et ses applications thérapeutiques.",
        "skill6-title": "Leadership Enseignement Supérieur", "skill6-desc": "Assistant Universitaire expérimenté, Chef de Département, Directeur de Master, contribuant au développement curriculaire (ex: projet HEALING).",
        "skill7-title": "Gestion Financière & Investissement", "skill7-desc": "Directeur des Investissements (CIO - rôles actuel & passés), détenteur charte CFA. Expertise en gestion actifs/portefeuille, stratégie d'investissement, analyse crises financières.",
        "publications-title": "Médias & Publications",
        "pub1-title": "Effet de la musique sur l'anxiété des patients lors d'une bronchoscopie", "pub1-date": "<i class='fas fa-calendar-alt' aria-hidden='true'></i> Mars 2024", "pub1-type": "<i class='fas fa-flask' aria-hidden='true'></i> Prépublication/ECR", "pub1-desc": "Essai contrôlé randomisé co-écrit étudiant l'impact de la musique sur l'anxiété pendant les procédures de bronchoscopie.", "pub1-link": "Lire Plus <span aria-hidden='true'>→</span>",
        "pub2-title": "Efficacité de la musique en contexte d'endoscopie", "pub2-date": "<i class='fas fa-calendar-alt' aria-hidden='true'></i> Fév 2020", "pub2-type": "<i class='fas fa-book-reader' aria-hidden='true'></i> Revue Littérature", "pub2-desc": "Revue de littérature co-écrite (Gastrointestinal Nursing) sur la musique comme intervention non pharmacologique en endoscopie.", "pub2-link": "Lire Plus <span aria-hidden='true'>→</span>",
        "pub3-title": "Contributeur Projet HEALING", "pub3-date": "<i class='fas fa-calendar-alt' aria-hidden='true'></i> 2020-2023", "pub3-type": "<i class='fas fa-project-diagram' aria-hidden='true'></i> Projet Intl.", "pub3-desc": "Coordinateur du suivi du projet 'Art-thérapie dans les Établissements d'Enseignement Supérieur' (Jordanie & Tunisie), développant des diplômes multidisciplinaires.", "pub3-link": "Lire Plus <span aria-hidden='true'>→</span>",
        "contact-title": "Contactez-Moi", "contact-getintouch": "Prendre Contact",
        "contact-intro": "Pour collaborations académiques, conférences, consultations (musicothérapie, gestion de crise, finance) ou partenariats humanitaires, veuillez me contacter.",
        "contact-location-label": "Lieu", "contact-email-label": "Email", "contact-phone-label": "Téléphone", "contact-follow": "Suivez-Moi",
        "contact-name-label": "Nom", "contact-email-label-form": "Email", "contact-subject-label": "Sujet", "contact-message-label": "Message", "contact-send-btn": "Envoyer Message",
        "form-status-sending": "Envoi du message...", "form-status-success": "Merci ! Votre message a été envoyé avec succès.", "form-status-error-generic": "Oups ! Un problème est survenu lors de l'envoi. Veuillez réessayer.", "form-status-error-network": "Oups ! Erreur réseau. Vérifiez votre connexion et réessayez.",
        "map-section-title": "Ma Localisation",
        "footer-tagline": "Académique | Chercheur | Musicothérapie | Gestion Crise | Leader Humanitaire",
        "footer-nav-home": "Accueil", "footer-nav-about": "À Propos", "footer-nav-experience": "Expérience", "footer-nav-skills": "Compétences", "footer-nav-publications": "Publications", "footer-nav-contact": "Contact",
        "footer-rights": "Tous Droits Réservés.",
        "alt-hero-profile-img": "Portrait photo du Dr. Wassim Jomaa", "alt-about-img": "Environnement de travail professionnel", "alt-pub1-img": "Concept recherche médicale", "alt-pub2-img": "Concept revue médicale ou littérature", "alt-pub3-img": "Concept collaboration ou projet international",
    }
    };

    // --- Image Paths (Keep placeholders or update if you have specific images) ---
    const imagePaths = {
    en: {
    hero: 'https://i1.rgstatic.net/ii/profile.image/11431281272521721-1724160105555_Q512/Wassim-Jomaa.jpg',
    about: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=450&q=80',
    pub1: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80',
    pub2: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80',
    pub3: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80',
    },
    fr: { // Assuming same images for FR
    hero: 'https://i1.rgstatic.net/ii/profile.image/11431281272521721-1724160105555_Q512/Wassim-Jomaa.jpg',
    about: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=450&q=80',
    pub1: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80',
    pub2: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80',
    pub3: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=350&q=80',
    }
    };

    // --- Elements & Functions (Language/Menu/Form logic remains the same) ---
    const langButtons = document.querySelectorAll('.language-switcher button');
    const htmlEl = document.documentElement;
    const imgElements = {
    hero: document.getElementById('hero-profile-img'),
    about: document.getElementById('about-img'),
    pub1: document.querySelector('#publications .publication-card:nth-child(1) img'),
    pub2: document.querySelector('#publications .publication-card:nth-child(2) img'),
    pub3: document.querySelector('#publications .publication-card:nth-child(3) img'),
    };
    const metaDescriptionEl = document.getElementById('meta-description');

    function updateLanguage(lang) {
    if (!translations[lang] || !imagePaths[lang]) { console.error(`Language '${lang}' not fully configured.`); return; }
    const langTranslations = translations[lang];
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    for (const key in langTranslations) {
    if (!key.startsWith('alt-')) {
    const element = document.getElementById(key);
    if (element) {
    try {
    if (key.includes('title') || key.endsWith('-type') || key.endsWith('-link') || key.endsWith('-date')) {
    element.innerHTML = langTranslations[key];
    }
    else if (key === 'meta-description') {
    element.setAttribute('content', langTranslations[key]);
    }
    else if (key === 'page-title'){
    document.title = langTranslations[key];
    }
    else {
    element.textContent = langTranslations[key];
    }
    } catch (error) {
    console.warn(`Could not update element with ID: ${key}`, error);
    }
    } else {
    if(key !== 'meta-description' && key !== 'page-title') {
    // console.warn(`Element with ID '${key}' not found in HTML.`);
    }
    }
    }
    }

    for (const imgKey in imgElements) {
    const imgElement = imgElements[imgKey];
    const imgPath = imagePaths[lang]?.[imgKey];
    const altTextKey = `alt-${imgKey}-img`;
    const altText = langTranslations[altTextKey];

    if (imgElement) {
    if (imgPath) {
    imgElement.src = imgPath;
    } else {
    console.warn(`Image path for '${imgKey}' in language '${lang}' not found.`);
    }
    if(altText){
    imgElement.alt = altText;
    } else {
    console.warn(`Alt text key '${altTextKey}' for language '${lang}' not found.`);
    imgElement.alt = '';
    }
    } else {
    // console.warn(`Image element for key '${imgKey}' not found in HTML.`);
    }
    }

    langButtons.forEach(button => {
    const buttonLang = button.getAttribute('data-lang');
    button.classList.toggle('active', buttonLang === lang);
    button.setAttribute('aria-current', buttonLang === lang ? 'true' : 'false');
    });

    try {
    localStorage.setItem('preferredLang', lang);
    } catch (e) {
    console.warn("Could not save language preference to localStorage:", e);
    }
    }

    // --- Initialize Language ---
    const navLinksForLang = document.querySelector('.nav-links'); // Defined for use in updateLanguage
    function closeMobileMenuForLang() { // Defined for use in updateLanguage
        if (navLinksForLang && menuToggle) { // menuToggle defined later
            navLinksForLang.classList.remove('active');
            // ... rest of closeMobileMenu logic if needed here
        }
    }
    langButtons.forEach(button => {
    button.addEventListener('click', () => {
    const selectedLang = button.getAttribute('data-lang');
    updateLanguage(selectedLang);
    // Access navLinks and closeMobileMenu after they are defined
    if (typeof navLinks !== 'undefined' && navLinks.classList.contains('active') && typeof closeMobileMenu === 'function') {
         closeMobileMenu();
        }
    });
    });

    let savedLang = 'en';
    try {
    const browserLang = navigator.language.split('-')[0];
    const storedLang = localStorage.getItem('preferredLang');
    savedLang = storedLang || (translations[browserLang] ? browserLang : 'en');
    } catch(e) {
    console.warn("Could not read language preference:", e);
    }
    if (!translations[savedLang]) {
    savedLang = 'en';
    }
    updateLanguage(savedLang);


    // --- Mobile Menu Logic ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links'); // Already defined for lang, ensure scope is correct
    const body = document.body;

    function closeMobileMenu() {
    if (navLinks && menuToggle) {
    navLinks.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    body.classList.remove('nav-open');
    menuToggle.querySelector('i').className = 'fas fa-bars';
    }
    }
    if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen);
    body.classList.toggle('nav-open', isOpen);
    menuToggle.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-bars';
    });
    navLinks.querySelectorAll('a').forEach(link => { link.addEventListener('click', closeMobileMenu); });
    body.addEventListener('click', (e) => { if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) { closeMobileMenu(); } });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && navLinks.classList.contains('active')) { closeMobileMenu(); } });
    } else { console.warn("Mobile menu toggle or nav links not found."); }


    // --- Contact Form Submission Logic ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    // currentLang already defined within the language logic, ensure it's accessible or redefine.
    // For safety, redefine here if previous scope was too narrow.
    const getCurrentLang = () => document.documentElement.lang || 'en';

    const makeWebhookUrl = 'https://hook.eu2.make.com/u349ghb9an5p3y90nn2tp53ku99gxqi2';

    if (contactForm && formStatus) {
    contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const lang = getCurrentLang(); // Use redefined/accessible function
    const formData = new FormData(contactForm);
    const dataObject = Object.fromEntries(formData.entries());
    const jsonData = JSON.stringify(dataObject);

    formStatus.textContent = translations[lang]?.['form-status-sending'] || 'Sending...';
    formStatus.className = '';

    fetch(makeWebhookUrl, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
    },
    body: jsonData
    })
    .then(response => {
    if (response.ok) {
    formStatus.textContent = translations[lang]?.['form-status-success'] || 'Message sent successfully!';
    formStatus.className = 'success';
    contactForm.reset();
    } else {
    console.error("Webhook submission error response:", response);
    formStatus.textContent = translations[lang]?.['form-status-error-generic'] || 'Submission failed. Please try again.';
    formStatus.className = 'error';
    }
    })
    .catch(error => {
    console.error("Network error during webhook submission:", error);
    formStatus.textContent = translations[lang]?.['form-status-error-network'] || 'Network error. Please check connection.';
    formStatus.className = 'error';
    })
    .finally(() => {
    setTimeout(() => {
    formStatus.textContent = '';
    formStatus.className = '';
    }, 8000);
    });
    });
    } else {
    console.warn("Contact form or status element not found.");
    }

    // --- Footer Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) { yearSpan.textContent = new Date().getFullYear(); }

    // --- Dark Mode Toggle Logic ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    // htmlElement already defined for language logic
    // const htmlElement = document.documentElement;

    function applyTheme(theme) {
        if (theme === 'dark') {
            htmlElement.classList.add('dark-mode');
            if (darkModeToggle) darkModeToggle.innerHTML = '<i class="fas fa-sun" aria-hidden="true"></i><span class="sr-only">Activate light mode</span>';
        } else {
            htmlElement.classList.remove('dark-mode');
            if (darkModeToggle) darkModeToggle.innerHTML = '<i class="fas fa-moon" aria-hidden="true"></i><span class="sr-only">Activate dark mode</span>';
        }
    }

    let currentTheme = localStorage.getItem('theme');
    if (!currentTheme) {
        currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    applyTheme(currentTheme);

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            let newTheme = htmlElement.classList.contains('dark-mode') ? 'light' : 'dark';
            applyTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // --- Header Scroll Logic ---
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    } else {
        console.warn("Header element not found for scroll effect.");
    }

    // --- Scroll Animation Logic ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    function observerCallback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }

    const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);
    const elementsToObserve = document.querySelectorAll(
        '.section-title, #about .about-image, #about .about-text, #experience .timeline, #skills .skills-container, #publications .publications-container, #contact .contact-info, #contact .contact-form, .map-section .map-container'
    );

    if (elementsToObserve.length > 0) {
        elementsToObserve.forEach(el => {
            if (!el.classList.contains('skills-container') && !el.classList.contains('publications-container') && !el.classList.contains('timeline')) {
               el.classList.add('fade-in-element');
            }
            scrollObserver.observe(el);
        });
    } else {
         console.warn("No elements found for scroll animations.");
    }

}); // End DOMContentLoaded
