            // Função para filtrar os produtos com base na pesquisa
            document.getElementById("pesquisa").addEventListener("input", function() {
                var termoBusca = this.value.toLowerCase(); // Obtém o valor da pesquisa e transforma em minúsculas
                var produtos = document.querySelectorAll(".produto"); // Seleciona todos os produtos
    
                produtos.forEach(function(produto) {
                    // Obtém os atributos de nome e categoria de cada produto
                    var nomeProduto = produto.getAttribute("data-nome").toLowerCase();
                    var categoriaProduto = produto.getAttribute("data-categoria").toLowerCase();
    
                    // Se o termo de pesquisa for encontrado no nome ou na categoria, mostra o produto
                    if (nomeProduto.includes(termoBusca) || categoriaProduto.includes(termoBusca)) {
                        produto.style.display = "block"; // Exibe o produto
                    } else {
                        produto.style.display = "none"; // Oculta o produto
                    }
                });
            });

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