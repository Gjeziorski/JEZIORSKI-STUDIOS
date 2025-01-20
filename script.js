// Inicializando AOS
AOS.init({
    duration: 1200,    // Duração da animação
    easing: 'ease-in-out',  // Efeito de transição
    once: false,   // A animação pode acontecer várias vezes
    
});

// Função para rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));

        // Rolando suavemente para o elemento
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Ajuste para que a seção fique visível
            behavior: 'smooth'
        });

        // Reexecutar AOS para animações
        AOS.refresh();
    });
});

// Função para alternar entre idiomas
document.getElementById('es-btn').addEventListener('click', function () {
    document.getElementById('home-link').innerText = 'Inicio';
    document.getElementById('gallery-link').innerText = 'Galería';
    document.getElementById('services-link').innerText = 'Servicios';
    document.getElementById('about-link').innerText = 'Sobre mí';
    document.getElementById('contact-link').innerText = 'Contacto';

    document.getElementById('banner-title').innerText = 'Capturando Momentos Inolvidables';
    document.getElementById('banner-description').innerText = 'Fotografía de calidad con un precio justo!';
    document.getElementById('gallery-title').innerText = 'Galería de Fotos';
    document.getElementById('services-title').innerText = 'Mis Servicios';
    document.getElementById('services-description').innerText = 'Ofrecemos los mejores servicios de fotografía, formateo, dualboot y mucho más.';
    document.getElementById('service-photography').innerText = 'Fotografía';
    document.getElementById('service-photography-description').innerText = '¡Ofrezco fotos de calidad con un precio justo!';
    document.getElementById('service-formatting').innerText = 'Formateo Completo';
    document.getElementById('service-formatting-description').innerText = '¡Formateamos tu computadora y la dejamos como nueva!';
    document.getElementById('service-dualboot').innerText = 'Dualboot';
    document.getElementById('service-dualboot-description').innerText = '¿Alguna vez pensaste en tener 2 sistemas en la misma máquina? ¡Ahora puedes!';

    document.getElementById('about-title').innerText = 'Sobre mí';
    document.getElementById('about-description').innerText = '¡Hola, mi nombre es Gustavo Jeziorski! Tengo 19 años y soy apasionado por la combinación entre fotografía y tecnología...';
    document.getElementById('about-mission').innerText = 'Mi misión es proporcionar a mis clientes imágenes de alta calidad...';
    document.getElementById('contact-title').innerText = 'Contacto:';
});

// Alternar para o idioma português
document.getElementById('pt-br-btn').addEventListener('click', function () {
    location.reload();
});
