var produtoImg = document.getElementById("produtoImg")
var produtoMiniatura = document.getElementsByClassName("produtoMiniatura")

produtoMiniatura[0].onclick = function(){
    produtoImg.src = produtoMiniatura[0].src;
}
produtoMiniatura[1].onclick = function(){
    produtoImg.src = produtoMiniatura[1].src;
}
produtoMiniatura[2].onclick = function(){
    produtoImg.src = produtoMiniatura[2].src;
}
produtoMiniatura[3].onclick = function(){
    produtoImg.src = produtoMiniatura[3].src;
}


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

// Função para expandir a imagem
function expandImage(imgElement) {
    var modal = document.getElementById('imageModal');
    var expandedImage = document.getElementById('expandedImage');
    
    // Defina a imagem expandida como a imagem clicada
    expandedImage.src = imgElement.src;

    // Exibe o modal
    modal.classList.add('show');
}

// Função para fechar o modal ao clicar na imagem expandida
function closeModal() {
    var modal = document.getElementById('imageModal');
    modal.classList.remove('show'); // Esconde o modal
}


