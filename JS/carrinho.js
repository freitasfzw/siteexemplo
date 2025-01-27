function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../IMG/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../IMG/close_white_36dp.svg";
    }
}

// Função para verificar se o usuário já aceitou os cookies
function verificarAceiteCookies() {
    // Verifica se o valor 'cookiesAceitos' está armazenado no localStorage
    return localStorage.getItem("cookiesAceitos") === "true";
}

// Função para armazenar o aceite de cookies no localStorage
function aceitarCookies() {
    // Armazena a escolha do usuário no localStorage
    localStorage.setItem("cookiesAceitos", "true");

    // Inicia o fade-out
    var cookieBanner = document.getElementById("cookieBanner");
    cookieBanner.style.opacity = "0";  // Faz a barra desaparecer
    cookieBanner.style.visibility = "hidden";  // Oculta a barra após a animação
}

// Função para exibir a barra de cookies com fade-in
function mostrarBarraCookies() {
    var cookieBanner = document.getElementById("cookieBanner");

    // Exibe a barra de cookies com animação fade-in
    cookieBanner.style.visibility = "visible";
    setTimeout(function() {
        cookieBanner.style.opacity = "1";  // Torna a barra visível
    }, 20);  // Delay de 20ms para ativar a transição
}

// Exibe a barra de cookies se o usuário ainda não aceitou
if (!verificarAceiteCookies()) {
    mostrarBarraCookies();
}
