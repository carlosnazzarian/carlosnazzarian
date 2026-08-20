const menuToggle = document.getElementById('menu-toggle');
const navPanel = document.getElementById('nav-links');

menuToggle?.addEventListener('click', () => {
  const open = navPanel.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('#nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navPanel.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const translations = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Biomedical Engineering',
    'hero.intro': "Hi, I'm",
    'hero.title': 'I build at the intersection of embedded systems, electronics, software, and medical devices.',
    'hero.description': 'Biomedical Engineering graduate from Polytechnique Montréal and R&D intern developing embedded control electronics for a medical cold-air skin cooling system.',
    'hero.experienceBtn': 'View current R&D work',
    'hero.resumeBtn': 'Resume',
    'hero.currentRoleLabel': 'Current role',
    'hero.currentRole': 'Biomedical Engineering / R&D Intern',
    'hero.focus1Label': 'Current focus',
    'hero.focus1': 'Embedded control',
    'hero.focus2Label': 'Domain',
    'hero.focus2': 'Medical devices',
    'hero.focus3Label': 'Tools',
    'hero.focus4Label': 'Location',
    'about.kicker': '01 — About',
    'about.title': 'Engineering across hardware and software.',
    'about.p1': 'My background combines biomedical engineering, electronics, instrumentation, and software development. I enjoy projects where code interacts with real hardware: sensors, actuators, control logic, data acquisition, and physical prototypes.',
    'about.p2': 'I currently apply this multidisciplinary background in medical-device R&D at Laser Medical Canada.',
    'experience.kicker': '02 — Experience',
    'experience.title': 'Current engineering work',
    'experience.subtitle': 'Hands-on R&D, prototyping, testing, and system integration.',
    'experience.lmc.title': 'Biomedical Engineering / R&D Intern',
    'experience.lmc.date': 'June 2026 — Present',
    'experience.lmc.lead': 'Developing a cold-air skin cooling system intended to support medical laser treatments, with work spanning thermal-system analysis, embedded control, electronics, and prototype validation.',
    'experience.lmc.b1': 'Studied refrigeration-system architecture, thermodynamic principles, and technical documentation to identify operating and control requirements.',
    'experience.lmc.b2': 'Evaluated a 24 VDC refrigeration unit and used the results to guide a transition toward a higher-capacity compressor-based architecture.',
    'experience.lmc.b3': 'Developed Arduino C/C++ control logic for temperature monitoring, fan and compressor control, pressure-switch supervision, treatment states, and safety alarms.',
    'experience.lmc.b4': 'Designed preliminary electronic schematics and PCB routing in KiCad and validated the control logic on breadboard prototypes.',
    'experience.lmc.b5': 'Integrated PWM, relays, MOSFET-based control, RTC/EEPROM error logging, user-interface communication, and hands-on SMD soldering/troubleshooting.',
    'experience.lmc.diagramNote': 'High-level architecture only — no proprietary design details shown.',
    'experience.basyl.date': 'Summer 2024',
    'experience.basyl.title': 'Research Intern — BASyL Laboratory, Polytechnique Montréal',
    'experience.basyl.desc': 'Worked on biomedical instrumentation and experimental systems involving PCB design, microfluidics, signal quality, and laboratory validation.',
    'experience.basyl.b1': 'Designed and optimized a PCB to improve signal quality and reduce electrical noise.',
    'experience.basyl.b2': 'Validated system performance through experimental data acquisition and measurement tools.',
    'experience.basyl.b3': 'Integrated electronic, mechanical, and microfluidic components and documented test results.',
    'experience.ct.date': 'May 2022 — May 2026',
    'experience.ct.title': 'Customer Service Associate — Couche-Tard',
    'experience.ct.desc': 'Worked in a fast-paced environment requiring autonomy, prioritization, communication, and problem-solving; also supported the onboarding of new employees.',
    'projects.kicker': '03 — Selected Projects',
    'projects.title': 'Projects that connect software to the physical world.',
    'projects.pcb.title': 'Low-noise Potentiostat PCB',
    'projects.pcb.desc': 'Designed and optimized a PCB for an electrochemical measurement system to reduce noise compared with breadboard prototypes and improve measurement stability.',
    'projects.lsci.title': 'Laser Speckle Contrast Imaging System',
    'projects.lsci.desc': 'Built an optical acquisition workflow combining a laser source, camera, and Python-based real-time acquisition and processing.',
    'projects.dl.title': 'Medical Image Segmentation',
    'projects.dl.desc': 'Prepared microscopy datasets, trained segmentation models, automated processing with Python/Bash, and evaluated model performance.',
    'projects.radar.title': 'Mini Radar System',
    'projects.radar.desc': 'Real-time Arduino radar prototype using an ultrasonic sensor, servo, serial communication, and a Python/Pygame visualization interface.',
    'projects.details': 'View details →',
    'skills.kicker': '04 — Technical Toolkit',
    'skills.title': 'A practical hardware + software skill set.',
    'skills.embedded.title': 'Embedded & Control',
    'skills.embedded.text': 'C/C++, Arduino, state machines, PWM, GPIO, sensor acquisition, actuator control, safety logic.',
    'skills.electronics.title': 'Electronics & Prototyping',
    'skills.electronics.text': 'KiCad, schematic capture, preliminary PCB layout, breadboards, relays, MOSFETs, SMD soldering, oscilloscope, multimeter.',
    'skills.software.title': 'Software & Data',
    'skills.software.text': 'Python, NumPy, SciPy, Matplotlib, Bash, Git, data processing, test automation, real-time acquisition.',
    'skills.biomed.title': 'Biomedical & Validation',
    'skills.biomed.text': 'Biomedical instrumentation, medical-device R&D, experimental validation, signal/data analysis, technical documentation.',
    'education.kicker': '05 — Education',
    'education.title': 'Biomedical engineering education and technical training.',
    'common.present': 'Present',
    'education.poly.degree': 'Bachelor of Engineering — Biomedical Engineering',
    'education.poly.text': 'Coursework and projects in biomedical instrumentation, medical imaging, numerical methods, electronics, data analysis, and medical-device regulation.',
    'certs.kicker': 'Certifications',
    'certs.title': 'Selected continuing education',
    'contact.kicker': '06 — Contact',
    'contact.title': "Let's connect.",
    'contact.text': 'Interested in embedded systems, firmware, biomedical R&D, software, and hardware/software integration.',
    'contact.resumeLabel': 'Resume',
    'contact.resumeText': 'Open PDF ↗',
    'footer.back': 'Back to top ↑'
  },
  fr: {
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.education': 'Formation',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Génie biomédical × Systèmes embarqués',
    'hero.intro': 'Bonjour, je suis',
    'hero.title': 'Je développe à l’intersection des systèmes embarqués, de l’électronique, du logiciel et des dispositifs médicaux.',
    'hero.description': 'Diplômé en génie biomédical de Polytechnique Montréal, étudiant en génie logiciel à l’ÉTS et stagiaire en R&D sur le développement du contrôle embarqué d’un système médical de refroidissement cutané par air froid.',
    'hero.experienceBtn': 'Voir mon travail R&D actuel',
    'hero.resumeBtn': 'CV',
    'hero.currentRoleLabel': 'Rôle actuel',
    'hero.currentRole': 'Stagiaire en génie biomédical / R&D',
    'hero.focus1Label': 'Focus actuel',
    'hero.focus1': 'Contrôle embarqué',
    'hero.focus2Label': 'Domaine',
    'hero.focus2': 'Dispositifs médicaux',
    'hero.focus3Label': 'Outils',
    'hero.focus4Label': 'Localisation',
    'about.kicker': '01 — À propos',
    'about.title': 'De l’ingénierie entre matériel et logiciel.',
    'about.p1': 'Mon parcours combine génie biomédical, électronique, instrumentation et développement logiciel. J’aime particulièrement les projets où le code interagit avec du matériel réel : capteurs, actionneurs, logique de contrôle, acquisition de données et prototypes physiques.',
    'about.p2': 'J’applique actuellement ce parcours multidisciplinaire en R&D de dispositifs médicaux chez Laser Medical Canada.',
    'experience.kicker': '02 — Expérience',
    'experience.title': 'Travail d’ingénierie actuel',
    'experience.subtitle': 'R&D pratique, prototypage, essais et intégration de systèmes.',
    'experience.lmc.title': 'Stagiaire en génie biomédical / R&D',
    'experience.lmc.date': 'Juin 2026 — Présent',
    'experience.lmc.lead': 'Développement d’un système de refroidissement cutané par air froid destiné à accompagner des traitements laser médicaux, avec un travail couvrant l’analyse thermique, le contrôle embarqué, l’électronique et la validation de prototypes.',
    'experience.lmc.b1': 'Analyse de l’architecture du circuit frigorifique, des principes thermodynamiques et de la documentation technique afin d’identifier les besoins de fonctionnement et de contrôle.',
    'experience.lmc.b2': 'Évaluation d’une unité frigorifique 24 VDC et utilisation des résultats pour orienter la transition vers une architecture à compresseur de plus grande capacité.',
    'experience.lmc.b3': 'Développement de la logique de contrôle Arduino en C/C++ pour la surveillance de température, le contrôle du ventilateur et du compresseur, le pressostat, les états de traitement et les alarmes de sécurité.',
    'experience.lmc.b4': 'Conception préliminaire des schémas électroniques et du routage PCB dans KiCad, avec validation de la logique de contrôle sur breadboard.',
    'experience.lmc.b5': 'Intégration du PWM, de relais, de commandes MOSFET, d’un journal d’erreurs RTC/EEPROM, de la communication avec l’interface utilisateur ainsi que soudure SMD et dépannage.',
    'experience.lmc.diagramNote': 'Architecture de haut niveau seulement — aucun détail de conception propriétaire.',
    'experience.basyl.date': 'Été 2024',
    'experience.basyl.title': 'Stagiaire de recherche — Laboratoire BASyL, Polytechnique Montréal',
    'experience.basyl.desc': 'Travail sur des systèmes d’instrumentation et d’expérimentation biomédicale impliquant PCB, microfluidique, qualité du signal et validation en laboratoire.',
    'experience.basyl.b1': 'Conception et optimisation d’un PCB afin d’améliorer la qualité du signal et de réduire le bruit électrique.',
    'experience.basyl.b2': 'Validation des performances par acquisition de données expérimentales et utilisation d’instruments de mesure.',
    'experience.basyl.b3': 'Intégration de composantes électroniques, mécaniques et microfluidiques et documentation des essais.',
    'experience.ct.date': 'Mai 2022 — Mai 2026',
    'experience.ct.title': 'Préposé au service à la clientèle — Couche-Tard',
    'experience.ct.desc': 'Travail dans un environnement rapide nécessitant autonomie, gestion des priorités, communication et résolution de problèmes; soutien à la formation de nouveaux employés.',
    'projects.kicker': '03 — Projets sélectionnés',
    'projects.title': 'Des projets qui relient le logiciel au monde physique.',
    'projects.pcb.title': 'PCB de potentiostat à faible bruit',
    'projects.pcb.desc': 'Conception et optimisation d’un PCB pour un système de mesure électrochimique afin de réduire le bruit par rapport aux prototypes sur breadboard et d’améliorer la stabilité des mesures.',
    'projects.lsci.title': 'Système d’imagerie LSCI',
    'projects.lsci.desc': 'Développement d’un flux d’acquisition optique combinant une source laser, une caméra et du traitement/acquisition temps réel en Python.',
    'projects.dl.title': 'Segmentation d’images médicales',
    'projects.dl.desc': 'Préparation de jeux de données de microscopie, entraînement de modèles de segmentation, automatisation Python/Bash et évaluation des performances.',
    'projects.radar.title': 'Système Mini Radar',
    'projects.radar.desc': 'Prototype radar Arduino en temps réel utilisant un capteur ultrasonique, un servomoteur, la communication série et une interface Python/Pygame.',
    'projects.details': 'Voir les détails →',
    'skills.kicker': '04 — Compétences techniques',
    'skills.title': 'Un ensemble pratique de compétences matériel + logiciel.',
    'skills.embedded.title': 'Systèmes embarqués & contrôle',
    'skills.embedded.text': 'C/C++, Arduino, machines à états, PWM, GPIO, acquisition de capteurs, commande d’actionneurs, logique de sécurité.',
    'skills.electronics.title': 'Électronique & prototypage',
    'skills.electronics.text': 'KiCad, schémas électroniques, routage PCB préliminaire, breadboards, relais, MOSFET, soudure SMD, oscilloscope, multimètre.',
    'skills.software.title': 'Logiciel & données',
    'skills.software.text': 'Python, NumPy, SciPy, Matplotlib, Bash, Git, traitement de données, automatisation de tests, acquisition temps réel.',
    'skills.biomed.title': 'Biomédical & validation',
    'skills.biomed.text': 'Instrumentation biomédicale, R&D de dispositifs médicaux, validation expérimentale, analyse de signaux/données, documentation technique.',
    'education.kicker': '05 — Formation',
    'education.title': 'Formation en génie biomédical et perfectionnement technique.',
    'common.present': 'Présent',
    'education.poly.degree': 'Baccalauréat en génie — Génie biomédical',
    'education.poly.text': 'Cours et projets en instrumentation biomédicale, imagerie médicale, méthodes numériques, électronique, analyse de données et réglementation des dispositifs médicaux.',
    'certs.kicker': 'Certifications',
    'certs.title': 'Formation continue sélectionnée',
    'contact.kicker': '06 — Contact',
    'contact.title': 'Restons en contact.',
    'contact.text': 'Intérêt pour les systèmes embarqués, le firmware, la R&D biomédicale, le logiciel et l’intégration matériel-logiciel.',
    'contact.resumeLabel': 'CV',
    'contact.resumeText': 'Ouvrir le PDF ↗',
    'footer.back': 'Retour en haut ↑'
  }
};

function applyLanguage(lang) {
  const selected = translations[lang] ? lang : 'en';
  document.documentElement.lang = selected;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[selected][key]) {
      el.textContent = translations[selected][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === selected);
  });

  document.querySelectorAll('.resume-link').forEach((link) => {
    link.href = selected === 'fr' ? 'cv-fr.pdf' : 'cv-en.pdf';
  });

  document.title = selected === 'fr'
    ? 'Carlos Nazzarian | Portfolio d’ingénierie'
    : 'Carlos Nazzarian | Engineering Portfolio';

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.content = selected === 'fr'
      ? 'Carlos Nazzarian — diplômé en génie biomédical avec un intérêt pour les systèmes embarqués, l’électronique, le contrôle et la R&D de dispositifs médicaux.'
      : 'Carlos Nazzarian — Biomedical Engineering graduate focused on embedded systems, electronics, control, software, and medical device R&D.';
  }

  try {
    localStorage.setItem('portfolioLanguage', selected);
  } catch (_) {}
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

let initialLanguage = 'en';
try {
  initialLanguage = localStorage.getItem('portfolioLanguage') || 'en';
} catch (_) {}
applyLanguage(initialLanguage);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
