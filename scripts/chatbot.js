class Chatbot {
    constructor() {
        this.isOnline = false; // Default to offline
        this.language = document.documentElement.getAttribute('data-lang') || 'es'; // Initialize language based on current page state
        this.responses = {
            es: {
                greeting: [
                    "¡Hola! Soy el asistente virtual de Miguel. ¿En qué puedo ayudarte?",
                    "¡Bienvenido! Estoy aquí para responder tus preguntas sobre el portafolio de Miguel."
                ],
                projects: "Puedo contarte sobre varios proyectos interesantes. Por ejemplo, el portafolio web que estás viendo ahora mismo, desarrollado con HTML, CSS y JavaScript.",
                skills: "Miguel tiene experiencia en desarrollo web front-end con HTML, CSS y JavaScript. También maneja herramientas como Git y está aprendiendo constantemente nuevas tecnologías.",
                contact: "Puedes contactar a Miguel a través del formulario de contacto en la página, o mediante sus redes sociales que encontrarás en el pie de página.",
                education: "Miguel está cursando su tercer año de Ingeniería en Ciencias de la Computación en la Universidad Tecnológica de Panamá.",
                experience: "Miguel ha trabajado en varios proyectos de desarrollo web, incluyendo sitios web responsivos y aplicaciones web interactivas.",
                hobbies: "En su tiempo libre, a Miguel le gusta practicar deportes, leer libros de tecnología y explorar nuevas herramientas de desarrollo.",
                age: "Miguel tiene 21 años.",
                country: "Miguel es de Colombia.",
                fieldOfStudy: "Miguel estudia Ingeniería de Sistemas.",
                default: "Lo siento, no entiendo esa pregunta. ¿Podrías reformularla? Puedo hablar sobre proyectos, habilidades, educación, experiencia o información de contacto.",
                goodbye: "¡Gracias por chatear! Si tienes más preguntas, no dudes en volver a escribir.",
                humor: "¡Ups! Parece que no tengo esa información. ¿Te cuento un chiste mientras tanto? ¿Por qué los programadores prefieren el té? Porque el café causa demasiados errores."
            },
            en: {
                greeting: [
                    "Hello! I'm Miguel's virtual assistant. How can I help you?",
                    "Welcome! I'm here to answer your questions about Miguel's portfolio."
                ],
                projects: "I can tell you about several interesting projects. For example, the web portfolio you are viewing right now, developed with HTML, CSS, and JavaScript.",
                skills: "Miguel has experience in front-end web development with HTML, CSS, and JavaScript. He also handles tools like Git and is constantly learning new technologies.",
                contact: "You can contact Miguel through the contact form on the page, or via his social media found in the footer.",
                education: "Miguel is in his third year of Computer Science Engineering at the Technological University of Panama.",
                experience: "Miguel has worked on several web development projects, including responsive websites and interactive web applications.",
                hobbies: "In his free time, Miguel enjoys playing sports, reading technology books, and exploring new development tools.",
                age: "Miguel is 21 years old.",
                country: "Miguel is from Colombia.",
                fieldOfStudy: "Miguel studies Systems Engineering.",
                default: "Sorry, I don't understand that question. Could you rephrase it? I can talk about projects, skills, education, experience, or contact information.",
                goodbye: "Thanks for chatting! If you have more questions, feel free to write again.",
                humor: "Oops! It seems I don't have that information. Want to hear a joke in the meantime? Why do programmers prefer tea? Because coffee causes too many errors."
            }
        };
        this.init();
    }

    init() {
        this.chatToggle = document.querySelector('.chatbot-toggle');
        this.chatContainer = document.querySelector('.chatbot-container');
        this.chatMessages = document.querySelector('.chat-messages');
        this.chatInput = document.querySelector('.chat-input');
        this.sendButton = document.querySelector('.send-message');
        this.statusDot = document.querySelector('.status-dot');
        this.statusText = document.querySelector('.status-text');
        this.resetButton = document.querySelector('.reset-chat');
        this.closeButton = document.querySelector('.close-chat');

        // Listen for changes in the document's data-lang attribute
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-lang') {
                    this.language = document.documentElement.getAttribute('data-lang') || 'es';
                    this.resetChat();
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-lang']
        });

        this.setupEventListeners();
        this.updateOnlineStatus();
        this.sendBotMessage(this.responses[this.language].greeting[0]); // Send welcome message immediately
    }

    setupEventListeners() {
        this.chatToggle.addEventListener('click', () => this.toggleChat());
        this.sendButton.addEventListener('click', () => this.handleUserMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleUserMessage();
        });
        this.resetButton.addEventListener('click', () => this.resetChat());
        this.closeButton.addEventListener('click', () => this.toggleChat());

        // Listen for language change
        document.getElementById('lang-toggle').addEventListener('click', () => this.toggleLanguage());
    }

    toggleChat() {
        this.chatContainer.classList.toggle('show');
        this.updateOnlineStatus();
        if (this.chatContainer.classList.contains('show') && this.chatMessages.children.length === 0) {
            this.sendBotMessage(this.responses[this.language].greeting[0]);
        }
    }

    toggleOnlineStatus() {
        this.isOnline = this.chatContainer.classList.contains('show');
        this.statusDot.style.background = this.isOnline ? '#2ecc71' : '#e74c3c';
        this.statusText.textContent = this.isOnline ? 'Online' : 'Offline';
    }

    toggleLanguage() {
        // Synchronize with the page language instead of toggling internally
        this.language = document.documentElement.getAttribute('data-lang') || 'es';
        this.resetChat();
    }

    async handleUserMessage() {
        const message = this.chatInput.value.trim();
        if (!message) return;

        // Añadir mensaje del usuario
        this.addMessage(message, 'user');
        this.chatInput.value = '';

        // Mostrar indicador de escritura
        this.showTypingIndicator();

        // Simular tiempo de respuesta
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Ocultar indicador de escritura y enviar respuesta
        this.sendBotResponse(message);
        this.hideTypingIndicator();
    }

    sendBotResponse(userMessage) {
        const message = userMessage.toLowerCase();
        let response;

        if (message.includes('hola') || message.includes('hi') || message.includes('hello')) {
            response = this.responses[this.language].greeting[Math.floor(Math.random() * this.responses[this.language].greeting.length)];
        } else if (message.includes('proyecto') || message.includes('project')) {
            response = this.responses[this.language].projects;
        } else if (message.includes('habilidad') || message.includes('skill')) {
            response = this.responses[this.language].skills;
        } else if (message.includes('contacto') || message.includes('contact') || message.includes('email')) {
            response = this.responses[this.language].contact;
        } else if (message.includes('educacion') || message.includes('education')) {
            response = this.responses[this.language].education;
        } else if (message.includes('experiencia') || message.includes('experience')) {
            response = this.responses[this.language].experience;
        } else if (message.includes('hobbies') || message.includes('pasatiempos')) {
            response = this.responses[this.language].hobbies;
        } else if (message.includes('edad') || message.includes('age')) {
            response = this.responses[this.language].age;
        } else if (message.includes('pais') || message.includes('country')) {
            response = this.responses[this.language].country;
        } else if (message.includes('carrera') || message.includes('field of study')) {
            response = this.responses[this.language].fieldOfStudy;
        } else if (message.includes('adios') || message.includes('bye')) {
            response = this.responses[this.language].goodbye;
        } else if (message.includes('descargar') || message.includes('download')) {
            response = this.responses[this.language].humor;
        } else {
            response = this.responses[this.language].default;
        }

        this.sendBotMessage(response);
        this.hideTypingIndicator(); // Ensure typing indicator is hidden after sending the response
    }

    sendBotMessage(message) {
        this.addMessage(message, 'bot');
    }

    addMessage(message, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', type);

        if (type === 'bot') {
            const avatar = document.createElement('img');
            avatar.src = './img/bot.png'; // Ruta de la imagen del avatar
            avatar.alt = 'Chatbot Avatar';
            avatar.classList.add('avatar');
            messageElement.appendChild(avatar);
        }

        const textElement = document.createElement('div');
        textElement.classList.add('text');
        textElement.textContent = message;
        messageElement.appendChild(textElement);

        this.chatMessages.appendChild(messageElement);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.classList.add('typing-indicator', 'active');
        indicator.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        this.chatMessages.appendChild(indicator);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }

    hideTypingIndicator() {
        const indicator = this.chatMessages.querySelector('.typing-indicator');
        if (indicator) indicator.remove();
    }

    resetChat() {
        this.chatMessages.innerHTML = '';
        this.sendBotMessage(this.responses[this.language].greeting[0]);
    }
}

// Inicializar el chatbot cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new Chatbot();
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const closeChat = document.querySelector('.close-chat');
    const messages = document.querySelector('.chat-messages');
    let isOpen = false;

    // Mensaje de bienvenida con avatar
    const welcomeMessage = {
        delay: 1000,
        message: `
            <div class="message bot">
                <img src="img/miguelGarcia.jpeg" alt="Bot Avatar" class="avatar">
                <div class="text">
                    ¡Hola! 👋 Soy el asistente virtual de Miguel. ¿En qué puedo ayudarte hoy?
                </div>
            </div>
        `
    };

    const suggestions = [
        "💼 Ver proyectos",
        "📄 Descargar CV",
        "📱 Información de contacto",
        "🎓 Ver certificaciones"
    ];

    function toggleChat() {
        isOpen = !isOpen;
        chatbotContainer.classList.toggle('show');
        
        if (isOpen && messages.children.length === 0) { // No hay mensajes previos
            setTimeout(() => {
                messages.innerHTML += welcomeMessage.message;
                setTimeout(() => {
                    addSuggestions();
                }, 1000);
            }, welcomeMessage.delay);
        }
    }

    chatbotToggle.addEventListener('click', toggleChat);
    closeChat.addEventListener('click', () => {
        isOpen = false;
        chatbotContainer.classList.remove('show');
    });

    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.innerHTML = text;
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight;
    }

    function addSuggestions() {
        const suggestionsDiv = document.createElement('div');
        suggestionsDiv.className = 'suggestions';
        suggestions.forEach(suggestion => {
            const button = document.createElement('button');
            button.className = 'suggestion-btn';
            button.textContent = suggestion;
            button.onclick = () => handleSuggestion(suggestion);
            suggestionsDiv.appendChild(button);
        });
        messages.appendChild(suggestionsDiv);
    }

    function handleSuggestion(suggestion) {
        addMessage(suggestion, 'user');
        chatbot.handleUserMessage(suggestion);
    }
});