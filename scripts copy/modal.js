document.addEventListener('DOMContentLoaded', () => {
    // Project Modal Functions
    window.openProjectModal = function(projectId) {
        const modal = document.getElementById('projectModal');
        const project = projects[projectId];
        const currentLang = document.documentElement.getAttribute('data-lang') || 'en';
        
        if (!project) {
            console.error('Proyecto no encontrado');
            return;
        }

        // Reset modal content
        document.getElementById('modalTitle').textContent = '';
        document.getElementById('modalDescription').textContent = '';
        document.getElementById('modalMainImage').src = '';
        document.getElementById('modalMainImage').alt = '';
        document.getElementById('modalLiveLink').href = '#';
        document.getElementById('modalGithubLink').href = '#';
        document.querySelector('.project-tags').innerHTML = '';
        document.getElementById('modalFeatures').innerHTML = '';
        document.querySelector('.gallery-thumbs').innerHTML = '';

        // Actualizar contenido del modal
        document.getElementById('modalTitle').textContent = project.title[currentLang];
        document.getElementById('modalDescription').textContent = project.description[currentLang];
        
        // Actualizar imagen principal
        const modalMainImage = document.getElementById('modalMainImage');
        modalMainImage.src = project.images[0];
        modalMainImage.alt = project.title[currentLang];

        // Actualizar enlaces
        document.getElementById('modalLiveLink').href = project.liveLink;
        document.getElementById('modalGithubLink').href = project.githubLink;

        // Actualizar etiquetas de tecnologías
        const tagsContainer = document.querySelector('.project-tags');
        tagsContainer.innerHTML = project.technologies
            .map(tech => `<span class="tag">${tech}</span>`)
            .join('');

        // Actualizar características
        const featuresList = document.getElementById('modalFeatures');
        featuresList.innerHTML = project.features[currentLang]
            .map(feature => `<li>${feature}</li>`)
            .join('');

        // Actualizar galería de miniaturas
        const galleryThumbs = document.querySelector('.gallery-thumbs');
        galleryThumbs.innerHTML = project.images
            .map((img, index) => `
                <img src="${img}" 
                     alt="${project.title[currentLang]} image ${index + 1}"
                     onclick="changeMainImage(${index})"
                     class="${index === 0 ? 'active' : ''}"
                >
            `).join('');

        // Mostrar modal
        modal.classList.add('show');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    // Función para cambiar la imagen principal
    window.changeMainImage = function(index) {
        const mainImage = document.getElementById('modalMainImage');
        const thumbnails = document.querySelectorAll('.gallery-thumbs img');
        const selectedThumb = thumbnails[index];

        if (!selectedThumb) return;

        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        selectedThumb.classList.add('active');
        mainImage.src = selectedThumb.src;
    };

    // Función para cerrar el modal
    window.closeModal = function() {
        const modal = document.getElementById('projectModal');
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    };

    // Certificate Modal Functions
    window.openCertificateModal = function(certId) {
        const cert = certificates[certId];
        const modal = document.getElementById('certificateModal');
        
        if (!cert) return;

        document.getElementById('certificateImage').src = cert.image;
        document.getElementById('certificateTitle').textContent = cert.title;
        document.getElementById('certificateIssuer').textContent = `Issued by: ${cert.issuer}`;
        document.getElementById('certificateDate').textContent = `Date: ${cert.date}`;
        document.getElementById('certificateDescription').textContent = cert.description;
        document.getElementById('certificateVerifyLink').href = cert.verifyLink;
        
        modal.classList.add('show');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    // Close Certificate Modal
    const certificateModal = document.getElementById('certificateModal');
    const certificateCloseBtn = certificateModal.querySelector('.close-modal');

    certificateCloseBtn.addEventListener('click', () => {
        certificateModal.classList.remove('show');
        setTimeout(() => {
            certificateModal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    });

    certificateModal.addEventListener('click', (e) => {
        if (e.target === certificateModal) {
            certificateModal.classList.remove('show');
            setTimeout(() => {
                certificateModal.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
        }
    });

    // Event Listeners
    const modal = document.getElementById('projectModal');
    const closeBtn = modal.querySelector('.close-modal');
    const prevBtn = modal.querySelector('.gallery-nav.prev');
    const nextBtn = modal.querySelector('.gallery-nav.next');

    closeBtn.addEventListener('click', closeModal);

    // Cerrar al hacer clic fuera del modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Navegación del carrusel
    prevBtn?.addEventListener('click', () => {
        const active = document.querySelector('.gallery-thumbs img.active');
        const prev = active?.previousElementSibling;
        if (prev) {
            changeMainImage(Array.from(active.parentNode.children).indexOf(prev));
        }
    });

    nextBtn?.addEventListener('click', () => {
        const active = document.querySelector('.gallery-thumbs img.active');
        const next = active?.nextElementSibling;
        if (next) {
            changeMainImage(Array.from(active.parentNode.children).indexOf(next));
        }
    });

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('show')) return;

        switch(e.key) {
            case 'Escape':
                closeModal();
                break;
            case 'ArrowLeft':
                prevBtn?.click();
                break;
            case 'ArrowRight':
                nextBtn?.click();
                break;
        }
    });
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeSlide {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);
