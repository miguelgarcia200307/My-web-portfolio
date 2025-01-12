// Define projects array globally
const projects = [
    {
        id: 0,
        title: {
            en: "My Portfolio Website",
            es: "Mi Portafolio Web"
        },
        description: {
            en: "A modern and responsive website built with HTML, CSS and JavaScript, featuring language translation, theme switching, and an interactive chatbot.",
            es: "Una página web moderna y responsiva construida con HTML, CSS y JavaScript, que incluye traducción de idiomas, cambio de tema y un chatbot interactivo."
        },
        features: {
            en: [
                "Dynamic Language Translation",
                "Light/Dark Theme Toggle",
                "Interactive Chatbot",
                "Project Gallery Showcase"
            ],
            es: [
                "Traducción Dinámica de Idiomas",
                "Cambio entre Tema Claro y Oscuro",
                "Chatbot Interactivo",
                "Galería de Proyectos"
            ]
        },
        technologies: ["HTML5", "CSS3", "JavaScript", "Git"],
        images: [
            "img/port1.png",
            "img/port4.png",
            "img/port5.png"
        ],
        liveLink: "https://your-portfolio-url.com",
        githubLink: "https://github.com/yourusername/portfolio"
    },
    {
        id: 1,
        title: {
            en: "Cultiva PRO",
            es: "Cultiva PRO"
        },
        description: {
            en: "Agricultural management platform designed to help farmers optimize their crop planning and monitoring.",
            es: "Plataforma diseñada para optimizar la gestión agrícola, permitiendo a los usuarios planificar y hacer un seguimiento de sus cultivos de manera eficiente."
        },
        features: {
            en: [
                "Interactive Calendar for Crop Planning",
                "Data Analysis Tools",
                "Market Access Platform",
                "Talentotech Hackathon Winner"
            ],
            es: [
                "Calendario Interactivo para Planificación",
                "Herramientas de Análisis de Datos",
                "Plataforma de Acceso al Mercado",
                "Ganador del Hackathon Talentotech"
            ]
        },
        technologies: ["HTML5", "CSS3", "JavaScript", "Git"],
        images: [
            "img/cultiva2.png",
            "img/cultiva1.png",
            "img/cultiva3.png"
        ],
        liveLink: "https://cultivapro.onrender.com/page/inicio.html",
        githubLink: "https://github.com/miguelunilibre/cultivaPRO.git"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme === 'dark');

    // Toggle theme
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme === 'dark');
    });

    function updateIcon(isDark) {
        themeIcon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }

    // Translations object
    const translations = {
        en: {
            // Navigation
            home: "Home",
            aboutMe: "About Me",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
            student: "Systems engineering student",

            // Hero Section
            heroTitle: "Miguel DEV",
            heroSubtitle: "Welcome to my professional portfolio! Here you will find a sample of my skills, projects and experience. My goal is to offer innovative and effective solutions for every challenge.",
            exploreWork: "Explore and discover how I can add value to your ideas.",

            // About Section
            aboutTitle: "About Me",
            aboutDescription: "I am a Systems Engineering student with an interest in software development. In my first years of college, I have worked on various projects, including a website with which I won a hackathon organized by Talentotech. I have knowledge in Python, C++, Java, JavaScript, CSS and HTML, and I am in the fifth semester of my degree.My professional goal is to specialize in Full Stack Development, combining frontend and backend skills to create functional applications. In addition, I have obtained several certificates that support my knowledge in the area.I am a person dedicated to continuous learning, with an interest in applying new technologies to solve problems efficiently.",
            funFactTitle: "Fun Fact:",
            funFactText: "When I’m not working, you can find me experimenting with new recipes in the kitchen.",

            // Projects Section
            projectsTitle: "Featured Projects",
            viewLive: "View Live",
            github: "GitHub",
            keyFeatures: "Key Features",

            // Skills Section
            skillsTitle: "What I Bring to the Table",
            frontEnd: "Front-End Development",
            frontEndSkills: `
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Figma</li>
                </ul>
            `,
            backEnd: "Back-End Development",
            backEndSkills: `
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>C++</li>
                    <li>GIT</li>
                </ul>
            `,
            creativeTools: "Creative Tools",
            creativeSkills: `
                <ul>
                    <li>Photoshop</li>
                    <li>Canva</li>
                    <li>Adobe (including Illustrator, Premiere, etc.)</li>
                </ul>
            `,

            // Contact Section
            contactTitle: "Let's Connect",
            nameLabel: "Name",
            emailLabel: "Email",
            messageLabel: "Message",
            sendMessage: "Send Message",

            // Footer
            footerText: "Designed and developed by Miguel García. © 2025 - All rights reserved.",

            // Education Section
            education: "Education",
            educationTitle: "Education & Certifications",
            certificationsTitle: "Certifications",
            computerScience: "Systems engineering",
            university: "Universidad Popular Del Cesar",
            presentDate: "2022 - Present",
            currentStatus: "Currently in my fifth semester of Systems Engineering."
        },
        es: {
            // Navigation
            home: "Inicio",
            aboutMe: "Sobre Mí",
            projects: "Proyectos",
            skills: "Habilidades",
            contact: "Contacto",
            student: "Estudiante de ingeneria de sistemas ",

            // Hero Section
            heroTitle: "Miguel DEV",
            heroSubtitle: "¡Bienvenido a mi portafolio profesional! Aquí encontrarás una muestra de mis habilidades, proyectos y experiencia. Mi objetivo es ofrecer soluciones innovadoras y efectivas para cada desafío.",
            exploreWork: "Explora y descubre cómo puedo aportar valor a tus ideas.",

            // About Section
            aboutTitle: "Sobre Mí",
            aboutDescription: "Soy estudiante de Ingeniería de Sistemas con interés en el desarrollo de software. En mis primeros años de carrera, he trabajado en diversos proyectos, incluyendo una página web con la que gané una hackatón organizada por Talentotech. Tengo conocimientos en Python, C++, Java, JavaScript, CSS y HTML, y me encuentro en el quinto semestre de mi carrera.Mi objetivo profesional es especializarme en Full Stack Development, combinando habilidades en frontend y backend para crear aplicaciones funcionales. Además, he obtenido varios certificados que respaldan mis conocimientos en el área.Soy una persona dedicada al aprendizaje continuo, con interés en aplicar nuevas tecnologías para resolver problemas de manera eficiente.",
            funFactTitle: "Dato Curioso:",
            funFactText: "Cuando no estoy trabajando, me puedes encontrar probando nuevas recetas en la cocina.",

            // Projects Section
            projectsTitle: "Proyectos Destacados",
            viewLive: "Ver Proyecto",
            github: "GitHub",
            keyFeatures: "Características",

            // Skills Section
            skillsTitle: "Lo que Aporto",
            frontEnd: "Desarrollo Front-End",
            frontEndSkills: `
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Figma</li>
                </ul>
            `,
            backEnd: "Desarrollo Back-End",
            backEndSkills: `
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>C++</li>
                    <li>GIT</li>
                </ul>
            `,
            creativeTools: "Herramientas Creativas",
            creativeSkills: `
                <ul>
                    <li>Photoshop</li>
                    <li>Canva</li>
                    <li>Adobe (incluyendo Illustrator, Premiere, etc.)</li>
                </ul>
            `,

            // Contact Section
            contactTitle: "Conectemos",
            nameLabel: "Nombre",
            emailLabel: "Correo",
            messageLabel: "Mensaje",
            sendMessage: "Enviar Mensaje",

            // Footer
            footerText: "Diseñada y desarrollada por Miguel García. © 2025 - Todos los derechos reservados.",

            // Education Section
            education: "Educación",
            educationTitle: "Educación y Certificaciones",
            certificationsTitle: "Certificaciones",
            computerScience: "Ingeniería de Sistemas",
            university: "Universidad Popular Del Cesar",
            presentDate: "2022 - Presente",
            currentStatus: "Actualmente cursando quinto semestre de Ingeniería de Sistemas."
        }
    };

    const langToggle = document.getElementById('lang-toggle');
    const langIcon = langToggle.querySelector('i');
    let currentLang = 'en';

    // Function to update text content
    function updateTexts(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                if (key.includes('Skills')) {
                    element.innerHTML = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        langToggle.setAttribute('title', lang === 'en' ? 'Cambiar a Español' : 'Switch to English');
        
        // Update project titles and descriptions
        projects.forEach(project => {
            const projectTitleElement = document.querySelector(`[data-project-title="${project.id}"]`);
            const projectDescriptionElement = document.querySelector(`[data-project-description="${project.id}"]`);
            if (projectTitleElement) projectTitleElement.textContent = project.title[lang];
            if (projectDescriptionElement) projectDescriptionElement.textContent = project.description[lang];
        });
    }

    // Toggle language
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        document.documentElement.setAttribute('data-lang', currentLang);
        updateTexts(currentLang);
        console.log('Language changed to:', currentLang); // Para debugging
    });

    // Initial text update
    updateTexts(currentLang);
});

// Make functions globally accessible
window.openProjectModal = function(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projects[projectId];
    const currentLang = document.documentElement.getAttribute('data-lang') || 'en';
    
    if (!project) return;

    // Reset and update content with proper translations
    document.getElementById('modalTitle').textContent = project.title[currentLang];
    document.getElementById('modalDescription').textContent = project.description[currentLang];
    
    // Actualizar imagen
    const modalMainImage = document.getElementById('modalMainImage');
    if (project.images && project.images.length > 0) {
        modalMainImage.src = project.images[0];
        modalMainImage.alt = project.title[currentLang];
    }

    // Actualizar enlaces
    const liveLink = document.getElementById('modalLiveLink');
    const githubLink = document.getElementById('modalGithubLink');
    if (liveLink) liveLink.href = project.liveLink || '#';
    if (githubLink) githubLink.href = project.githubLink || '#';

    // Actualizar tags
    const tagsContainer = document.querySelector('.project-tags');
    if (tagsContainer && project.technologies) {
        tagsContainer.innerHTML = project.technologies
            .map(tech => `<span class="tag">${tech}</span>`)
            .join('');
    }

    // Actualizar features
    const featuresList = document.getElementById('modalFeatures');
    if (featuresList && project.features) {
        featuresList.innerHTML = project.features[currentLang]
            .map(feature => `<li>${feature}</li>`)
            .join('');
    }

    // Actualizar galería de miniaturas
    const galleryThumbs = document.querySelector('.gallery-thumbs');
    if (galleryThumbs && project.images) {
        galleryThumbs.innerHTML = project.images
            .map((img, index) => `
                <img src="${img}" 
                     alt="${project.title[currentLang]} image ${index + 1}"
                     onclick="changeMainImage(${index})"
                     class="${index === 0 ? 'active' : ''}"
                >
            `).join('');
    }

    const viewLiveText = translations[currentLang].viewLive;
    const githubText = translations[currentLang].github;
    document.querySelector('#modalLiveLink span').textContent = viewLiveText;
    document.querySelector('#modalGithubLink span').textContent = githubText;
    
    document.querySelector('.project-features h3').textContent = translations[currentLang].keyFeatures;

    // Mostrar modal
    modal.classList.add('show');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }, 300);
};

window.changeMainImage = function(index) {
    const mainImage = document.getElementById('modalMainImage');
    const thumbnails = document.querySelectorAll('.gallery-thumbs img');
    
    mainImage.src = thumbnails[index].src;
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnails[index].classList.add('active');
};

// Actualizar los datos de certificados
const certificates = [
    {
        id: 0,
        title: "JavaScript Development",
        issuer: "EDteam",
        date: "2024",
        description: "Certificación completa cubriendo JavaScript moderno, ES6+, y desarrollo web front-end.",
        image: "img/certificad-curso-javascript.png",
        verifyLink: "https://ed.team/"
    }
    // Add more certificates...
];

// Mejorar la funcionalidad del modal de certificados
window.openCertificateModal = function(certId) {
    const cert = certificates[certId];
    const modal = document.getElementById('certificateModal');
    
    if (!cert) return; // Validación

    document.getElementById('certificateImage').src = cert.image;
    document.getElementById('certificateTitle').textContent = cert.title;
    document.getElementById('certificateIssuer').textContent = `Issued by: ${cert.issuer}`;
    document.getElementById('certificateDate').textContent = `Date: ${cert.date}`;
    document.getElementById('certificateDescription').textContent = cert.description;
    document.getElementById('certificateVerifyLink').href = cert.verifyLink;
    
    modal.style.display = 'block';
};
