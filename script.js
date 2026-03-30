const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const translations = {
  fr: {
    pageTitle: "Carlos Nazzarian | Portfolio",
    pageDescription:
      "Portfolio de Carlos Nazzarian, diplômé en génie biomédical spécialisé en instrumentation, systèmes embarqués, électronique et R&D.",

    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.expertise": "Expertise",
    "nav.projects": "Projets",
    "nav.experience": "Expérience",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.highlights": "Réalisations",
    "nav.contact": "Contact",
    "nav.cv": "CV",

    "hero.tag": "Portfolio professionnel",
    "hero.title": 'Bonjour, je suis <span>Carlos Nazzarian</span>',
    "hero.description":
      "Diplômé en génie biomédical spécialisé en systèmes embarqués, instrumentation électronique et validation expérimentale. Expérience pratique en conception de PCB, acquisition de signaux, intégration matériel-logiciel et essais en laboratoire. Actuellement à la recherche d’un poste d’entrée en carrière en biomédical, électronique, systèmes embarqués ou R&D.",
    "hero.projectsBtn": "Voir mes projets",
    "hero.cvBtn": "Ouvrir mon CV",

    "about.title": "À propos",
    "about.subtitle": "Résumé professionnel",
    "about.p1":
      "Je suis un diplômé récent en génie biomédical de Polytechnique Montréal, avec un intérêt marqué pour les systèmes embarqués, l’électronique, l’instrumentation, la validation et la recherche et développement.",
    "about.p2":
      "Mon parcours m’a permis de travailler sur des projets combinant matériel et logiciel, notamment la conception de PCB, l’acquisition de signaux, le prototypage expérimental, l’automatisation en Python et l’analyse de données en laboratoire.",
    "about.p3":
      "Je recherche actuellement une opportunité d’entrée en carrière où je pourrai contribuer à des systèmes techniques concrets dans les domaines du biomédical, de l’électronique, des systèmes embarqués ou de la R&D.",

    "expertise.title": "Expertise",
    "expertise.subtitle": "Ce que je peux apporter à votre équipe",
    "expertise.item1": "Développement de systèmes embarqués",
    "expertise.item2": "Instrumentation électronique",
    "expertise.item3": "Conception et débogage de PCB",
    "expertise.item4": "Acquisition et traitement de signaux",
    "expertise.item5": "Validation et essais matériels",
    "expertise.item6": "Automatisation de tests avec Python",
    "expertise.item7": "Intégration de systèmes biomédicaux",
    "expertise.item8": "Conception expérimentale",

    "projects.title": "Projets",
    "projects.subtitle": "Projets académiques et techniques pertinents",
    "projects.tech": "Technologies :",

    "projects.pcb.title": "Conception PCB pour potentiostat",
    "projects.pcb.desc":
      "Conception et réalisation d’un PCB pour un système de potentiostat afin de réduire le bruit observé sur les prototypes montés sur breadboard.",
    "projects.pcb.b1": "Optimisation du placement et du routage des composantes",
    "projects.pcb.b2": "Validation par mesures comparatives à l’oscilloscope",
    "projects.pcb.b3": "Amélioration de la stabilité et de la fiabilité du signal",
    "projects.pcb.techList":
    "KiCad, électronique analogique, oscilloscopes, validation expérimentale",

    "projects.lsci.title": "Projet LSCI",
    "projects.lsci.desc":
      "Développement d’un système d’imagerie par contraste de speckle laser combinant une source laser, une caméra et des scripts Python pour l’acquisition et le traitement en temps réel.",
    "projects.lsci.b1": "Intégration d’un montage optique expérimental",
    "projects.lsci.b2": "Optimisation de l’illumination, de l’exposition et de l’acquisition",
    "projects.lsci.b3": "Production de documentation technique et de procédures de test",
    "projects.lsci.techList":
    "Python, traitement d’images, acquisition temps réel, instrumentation",

    "projects.dl.title": "Segmentation d’images par deep learning",
    "projects.dl.desc":
      "Préparation de jeux de données de microscopie, prétraitement, entraînement de modèles, inférence et analyse morphométrique pour la segmentation d’axones.",
    "projects.dl.b1": "Préparation de données et annotations manuelles",
    "projects.dl.b2": "Automatisation des flux de travail avec Python et Bash",
    "projects.dl.b3": "Évaluation quantitative des performances du modèle",
    "projects.dl.techList":
    "Python, Bash, analyse d’images, apprentissage automatique",

    "projects.micro.title": "Développement d’un système microfluidique",
    "projects.micro.desc":
      "Conception d’une chambre microfluidique compacte imprimée en 3D pour l’intégration d’électrodes sur papier et la réalisation d’essais expérimentaux.",
    "projects.micro.b1": "Intégration des composantes fluidiques et mécaniques",
    "projects.micro.b2": "Vérification de l’écoulement et de l’étanchéité",
    "projects.micro.b3": "Support aux essais électrochimiques et à l’analyse des réponses",
    "projects.micro.techList":
    "Impression 3D, microfluidique, expérimentation, intégration de systèmes",

    "projects.echem.title": "Instrument de mesure électrochimique",
    "projects.echem.desc":
      "Réalisation d’un circuit de mesure analogique utilisant des amplificateurs opérationnels, des composants passifs et des signaux générés par Arduino.",
    "projects.echem.b1": "Validation des formes d’onde et du comportement du circuit",
    "projects.echem.b2": "Expériences de voltammétrie sur différents analytes",
    "projects.echem.b3": "Documentation des résultats, limites et observations expérimentales",

    "projects.radar.title": "Système Mini Radar",
    "projects.radar.desc":
      "Système radar en temps réel utilisant Arduino, un capteur ultrasonique, un servomoteur et une interface Python pour la visualisation et le contrôle.",
    "projects.radar.b1": "Communication série en temps réel entre Arduino et Python",
    "projects.radar.b2": "Modes de balayage automatique et manuel",
    "projects.radar.b3": "Interface radar interactive développée avec Pygame",
    "projects.radar.b4": "Système de contrôle via joystick et interface logicielle",
    "projects.radar.techList":
    "Arduino, Python, Pygame, systèmes embarqués, communication série",


    "experience.title": "Expérience",
    "experience.subtitle": "Expérience professionnelle et de recherche",
    "experience.basyL.date": "Été 2024",
    "experience.basyL.title":
      "Stagiaire de recherche — Laboratoire BASyL, Polytechnique Montréal",
    "experience.basyL.desc":
      "Contribution à des projets d’instrumentation et d’expérimentation biomédicale incluant la conception de PCB, des systèmes microfluidiques et la validation de montages expérimentaux.",
    "experience.basyL.b1":
      "Validation matérielle avec oscilloscopes et outils de mesure",
    "experience.basyL.b2":
      "Exécution de procédures expérimentales et analyse de résultats",
    "experience.basyL.b3":
      "Rédaction de documentation technique et d’ingénierie",
    "experience.ct.date": "2022 – présent",
    "experience.ct.title": "Préposé au service à la clientèle — Couche-Tard",
    "experience.ct.desc":
      "Expérience dans un environnement rapide nécessitant autonomie, communication, rigueur et résolution de problèmes au quotidien.",

    "skills.title": "Compétences",
    "skills.subtitle": "Compétences techniques principales",
    "skills.group1.title": "Systèmes embarqués et électronique",
    "skills.group1.text":
      "Arduino, C/C++, acquisition de signaux, capteurs, intégration matériel-logiciel, conception de PCB",
    "skills.group2.title": "Instrumentation et validation",
    "skills.group2.text":
      "Oscilloscopes, multimètres, DAQ, dépannage matériel, calibration, vérification de performance",
    "skills.group3.title": "Programmation et automatisation",
    "skills.group3.text":
      "Python, MATLAB, Bash, automatisation de tests, pipelines d’acquisition et de traitement",
    "skills.group4.title": "Analyse de données",
    "skills.group4.text":
      "NumPy, SciPy, Matplotlib, traitement d’images, analyse expérimentale",
    "skills.group5.title": "CAD et prototypage",
    "skills.group5.text":
      "KiCad, CATIA V5, FreeCAD, impression 3D, fabrication et intégration de prototypes",

    "education.title": "Formation",
    "education.subtitle": "Parcours académique et certificats",
    "education.degreeLabel": "Diplôme :",
    "education.degreeValue":
      "Baccalauréat en génie biomédical — Polytechnique Montréal",
    "education.dateLabel": "Période :",
    "education.dateValue": "2021 – 2025",
    "education.gpaLabel": "Moyenne cumulative :",
    "education.gpaValue": "3,13 / 4,00",
    "education.courseworkTitle": "Cours techniques clés",
    "education.c1": "Circuits électriques",
    "education.c2": "Instrumentation et mesures biomédicales",
    "education.c3": "Champs électromagnétiques",
    "education.c4": "Traitement numérique d’images médicales",
    "education.c5": "Principes d’imagerie biomédicale",
    "education.c6": "Modélisation et commande en physiologie",
    "education.c7": "Réseaux informatiques",
    "education.certTitle": "Certificats",
    "education.cert1":
      "Python Specialization — Coursera (University of Michigan)",
    "education.cert2":
      "Advanced Embedded Systems with Arduino — Coursera (Packt)",

    "highlights.title": "Réalisations",
    "highlights.subtitle": "Quelques points forts de mon parcours",
    "highlights.h1":
      "Conçu et validé des systèmes matériels en environnement de laboratoire",
    "highlights.h2":
      "Amélioré la qualité du signal dans un système de mesure sur PCB",
    "highlights.h3":
      "Développé des pipelines Python pour l’acquisition et le traitement d’images en temps réel",
    "highlights.h4":
      "Automatisé des flux de traitement et d’analyse de données expérimentales",
    "highlights.h5":
      "Contribué à des projets interdisciplinaires combinant électronique, logiciel et expérimentation biomédicale",

    "contact.title": "Contact",
    "contact.subtitle": "Vous pouvez me joindre ici",
    "contact.nameLabel": "Nom :",
    "contact.locationLabel": "Localisation :",
    "contact.phoneLabel": "Téléphone :",
    "contact.emailLabel": "Email :",
    "contact.linkedinLabel": "LinkedIn :",
    "contact.cvLabel": "CV :",
    "contact.cvOpen": "Ouvrir le CV",

    "footer.text": "© 2026 Carlos Nazzarian. Tous droits réservés."
  },

  en: {
    pageTitle: "Carlos Nazzarian | Portfolio",
    pageDescription:
      "Portfolio of Carlos Nazzarian, Biomedical Engineering graduate focused on instrumentation, embedded systems, electronics, and R&D.",

    "nav.home": "Home",
    "nav.about": "About",
    "nav.expertise": "Expertise",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.highlights": "Highlights",
    "nav.contact": "Contact",
    "nav.cv": "Resume",

    "hero.tag": "Professional Portfolio",
    "hero.title": 'Hello, I’m <span>Carlos Nazzarian</span>',
    "hero.description":
      "Biomedical Engineering graduate specialized in embedded systems, electronic instrumentation, and experimental validation. Hands-on experience in PCB design, signal acquisition, hardware-software integration, and laboratory testing. Currently seeking an entry-level role in biomedical engineering, electronics, embedded systems, or R&D.",
    "hero.projectsBtn": "View My Projects",
    "hero.cvBtn": "Open Resume",

    "about.title": "About",
    "about.subtitle": "Professional Summary",
    "about.p1":
      "I am a recent Biomedical Engineering graduate from Polytechnique Montréal with a strong interest in embedded systems, electronics, instrumentation, validation, and research and development.",
    "about.p2":
      "My background allowed me to work on projects combining hardware and software, including PCB design, signal acquisition, experimental prototyping, Python automation, and laboratory data analysis.",
    "about.p3":
      "I am currently looking for an entry-level opportunity where I can contribute to practical technical systems in biomedical engineering, electronics, embedded systems, or R&D.",

    "expertise.title": "Expertise",
    "expertise.subtitle": "What I can bring to your team",
    "expertise.item1": "Embedded systems development",
    "expertise.item2": "Electronic instrumentation",
    "expertise.item3": "PCB design and debugging",
    "expertise.item4": "Signal acquisition and processing",
    "expertise.item5": "Hardware validation and testing",
    "expertise.item6": "Python test automation",
    "expertise.item7": "Biomedical systems integration",
    "expertise.item8": "Experimental design",

    "projects.title": "Projects",
    "projects.subtitle": "Relevant academic and technical projects",
    "projects.tech": "Technologies:",

    "projects.pcb.title": "PCB Design for a Potentiostat",
    "projects.pcb.desc":
      "Designed and implemented a PCB for a potentiostat system to reduce the noise observed in breadboard-based prototypes.",
    "projects.pcb.b1": "Optimized component placement and routing",
    "projects.pcb.b2": "Validated performance through comparative oscilloscope measurements",
    "projects.pcb.b3": "Improved signal stability and measurement reliability",
    "projects.pcb.techList":
    "KiCad, analog electronics, oscilloscopes, experimental validation",


    "projects.lsci.title": "LSCI Project",
    "projects.lsci.desc":
      "Developed a Laser Speckle Contrast Imaging system combining a laser source, a camera, and Python scripts for acquisition and real-time processing.",
    "projects.lsci.b1": "Integrated an experimental optical setup",
    "projects.lsci.b2": "Optimized illumination, exposure, and acquisition settings",
    "projects.lsci.b3": "Produced technical documentation and test procedures",
    "projects.lsci.techList":
    "Python, image processing, real-time acquisition, instrumentation",

    "projects.dl.title": "Deep Learning Image Segmentation",
    "projects.dl.desc":
      "Prepared microscopy datasets, performed preprocessing, trained models, ran inference, and carried out morphometric analysis for axon segmentation.",
    "projects.dl.b1": "Prepared datasets and manual labels",
    "projects.dl.b2": "Automated workflows using Python and Bash",
    "projects.dl.b3": "Evaluated model performance with quantitative metrics",
    "projects.dl.techList":
    "Python, Bash, image analysis, machine learning",

    "projects.micro.title": "Microfluidic System Development",
    "projects.micro.desc":
      "Designed a compact 3D-printed microfluidic chamber for integrating paper-based electrodes and supporting experimental testing.",
    "projects.micro.b1": "Integrated fluidic and mechanical components",
    "projects.micro.b2": "Verified fluid flow and sealing performance",
    "projects.micro.b3": "Supported electrochemical testing and response analysis",
    "projects.micro.techList":
    "3D printing, microfluidics, experimentation, systems integration",

    "projects.echem.title": "Electrochemical Measurement Instrument",
    "projects.echem.desc":
      "Built an analog measurement circuit using operational amplifiers, passive components, and Arduino-generated signals.",
    "projects.echem.b1": "Validated waveforms and circuit behavior",
    "projects.echem.b2": "Performed voltammetry experiments on different analytes",
    "projects.echem.b3": "Documented results, limitations, and experimental observations",

    "projects.radar.title": "Mini Radar System",

    "projects.radar.desc":
    "Real-time radar system using Arduino, an ultrasonic sensor, a servo motor, and a Python interface for visualization and control.",
    "projects.radar.b1":
    "Real-time serial communication between Arduino and Python",
    "projects.radar.b2":
    "Automatic and manual scanning modes",
    "projects.radar.b3":
    "Interactive radar interface developed using Pygame",
    "projects.radar.b4":
    "Control system using both joystick and software interface",
    "projects.radar.techList":
    "Arduino, Python, Pygame, embedded systems, serial communication",

    "experience.title": "Experience",
    "experience.subtitle": "Research and professional experience",
    "experience.basyL.date": "Summer 2024",
    "experience.basyL.title":
      "Research Intern — BASyL Laboratory, Polytechnique Montréal",
    "experience.basyL.desc":
      "Contributed to biomedical instrumentation and experimental projects involving PCB design, microfluidic systems, and validation of experimental setups.",
    "experience.basyL.b1":
      "Performed hardware validation using oscilloscopes and measurement tools",
    "experience.basyL.b2":
      "Executed experimental procedures and analyzed results",
    "experience.basyL.b3":
      "Prepared technical and engineering documentation",
    "experience.ct.date": "2022 – Present",
    "experience.ct.title": "Customer Service Attendant — Couche-Tard",
    "experience.ct.desc":
      "Experience in a fast-paced environment requiring autonomy, communication, attention to detail, and day-to-day problem solving.",

    "skills.title": "Skills",
    "skills.subtitle": "Core technical skills",
    "skills.group1.title": "Embedded Systems & Electronics",
    "skills.group1.text":
      "Arduino, C/C++, signal acquisition, sensors, hardware-software integration, PCB design",
    "skills.group2.title": "Instrumentation & Validation",
    "skills.group2.text":
      "Oscilloscopes, multimeters, DAQ, hardware troubleshooting, calibration, performance verification",
    "skills.group3.title": "Programming & Automation",
    "skills.group3.text":
      "Python, MATLAB, Bash, test automation, acquisition and processing pipelines",
    "skills.group4.title": "Data Analysis",
    "skills.group4.text":
      "NumPy, SciPy, Matplotlib, image processing, experimental analysis",
    "skills.group5.title": "CAD & Prototyping",
    "skills.group5.text":
      "KiCad, CATIA V5, FreeCAD, 3D printing, prototype fabrication and integration",

    "education.title": "Education",
    "education.subtitle": "Academic background and certificates",
    "education.degreeLabel": "Degree:",
    "education.degreeValue":
      "B.Eng. in Biomedical Engineering — Polytechnique Montréal",
    "education.dateLabel": "Period:",
    "education.dateValue": "2021 – 2025",
    "education.gpaLabel": "Cumulative GPA:",
    "education.gpaValue": "3.13 / 4.00",
    "education.courseworkTitle": "Key Technical Coursework",
    "education.c1": "Electrical Circuits",
    "education.c2": "Biomedical Instrumentation and Measurements",
    "education.c3": "Electromagnetic Fields",
    "education.c4": "Digital Medical Image Processing",
    "education.c5": "Principles of Biomedical Imaging",
    "education.c6": "Modeling and Control in Physiology",
    "education.c7": "Computer Networks",
    "education.certTitle": "Certificates",
    "education.cert1":
      "Python Specialization — Coursera (University of Michigan)",
    "education.cert2":
      "Advanced Embedded Systems with Arduino — Coursera (Packt)",

    "highlights.title": "Highlights",
    "highlights.subtitle": "A few key strengths from my background",
    "highlights.h1":
      "Designed and validated hardware systems in laboratory environments",
    "highlights.h2":
      "Improved signal quality in a PCB-based measurement system",
    "highlights.h3":
      "Built Python pipelines for real-time image acquisition and processing",
    "highlights.h4":
      "Automated experimental data processing and analysis workflows",
    "highlights.h5":
      "Contributed to interdisciplinary projects combining electronics, software, and biomedical experimentation",

    "contact.title": "Contact",
    "contact.subtitle": "You can reach me here",
    "contact.nameLabel": "Name:",
    "contact.locationLabel": "Location:",
    "contact.phoneLabel": "Phone:",
    "contact.emailLabel": "Email:",
    "contact.linkedinLabel": "LinkedIn:",
    "contact.cvLabel": "Resume:",
    "contact.cvOpen": "Open Resume",

    "footer.text": "© 2026 Carlos Nazzarian. All rights reserved."
  }
};

const langButtons = {
  fr: document.getElementById("lang-fr"),
  en: document.getElementById("lang-en"),
};

const cvLinks = [
  document.getElementById("cv-link-nav"),
  document.getElementById("cv-link-hero"),
  document.getElementById("cv-link-contact"),
];

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.title = dict.pageTitle;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", dict.pageDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (dict[key]) {
      element.innerHTML = dict[key];
    }
  });

  const cvPath = lang === "fr" ? "cv-fr.pdf" : "cv-en.pdf";
  cvLinks.forEach((link) => {
    if (link) {
      link.setAttribute("href", cvPath);
    }
  });

  langButtons.fr.classList.toggle("active", lang === "fr");
  langButtons.en.classList.toggle("active", lang === "en");

  localStorage.setItem("preferredLanguage", lang);
}

langButtons.fr.addEventListener("click", () => setLanguage("fr"));
langButtons.en.addEventListener("click", () => setLanguage("en"));

const savedLanguage = localStorage.getItem("preferredLanguage");
setLanguage(savedLanguage === "en" ? "en" : "fr");
