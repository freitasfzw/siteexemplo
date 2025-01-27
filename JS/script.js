function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "IMG/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "IMG/close_white_36dp.svg";
    }
}

/* */

let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    
    currentIndex += step;
    
    if (currentIndex >= totalSlides) {
        currentIndex = 0;  // Volta para o primeiro slide
    }
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;  // Vai para o último slide
    }
    
    const slideWidth = slides[0].offsetWidth;  // Pega a largura do slide
    const carouselSlide = document.querySelector('.carousel-slide');
    
    carouselSlide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Desliza automaticamente a cada 3 segundos
setInterval(() => moveSlide(1), 3000);




//! exemplo

// Seleciona todos os botões de perguntas
const questions = document.querySelectorAll('.faq-question');

questions.forEach((button) => {
    button.addEventListener('click', () => {
        // Obtém a resposta relacionada ao botão clicado
        const answer = button.nextElementSibling;

        // Alterna a visibilidade da resposta com animação
        if (answer.classList.contains('show')) {
            answer.classList.remove('show');
        } else {
            // Esconde todas as respostas antes de mostrar a atual
            document.querySelectorAll('.faq-answer').forEach((item) => {
                item.classList.remove('show');
            });
            answer.classList.add('show');
        }
    });
});

