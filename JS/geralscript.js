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


// Função para monitorar o evento de rolagem da página
let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        console.log("Rolando para baixo");

        // Mudando a cor de fundo quando rolar para baixo
        document.getElementById("nav-bar").style.backgroundColor = "#000";
        document.getElementById("login-button").style.backgroundColor = "#FFF";
        document.getElementById("mobile-menu").style.backgroundColor = "#000";


        // Exemplo de esconder um botão quando rolar para baixo
        document.getElementById("meuBotao").style.display = "none";
    } else {
        console.log("Rolando para cima");

        // Mudando a cor de fundo quando rolar para cima
        document.getElementById("nav-bar").style.backgroundColor = "transparent";
        document.getElementById("login-button").style.backgroundColor = "#FFF";
        document.getElementById("mobile-menu").style.backgroundColor = "transparent";

        // Exemplo de mostrar o botão quando rolar para cima
        document.getElementById("meuBotao").style.display = "block";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);






