var produtoImg = document.getElementById("produtoImg");
        var produtoMiniatura = document.getElementsByClassName("img-reserva");

        produtoMiniatura[0].onclick = function() {
            produtoImg.src = produtoMiniatura[0].src;
        }
        produtoMiniatura[1].onclick = function() {
            produtoImg.src = produtoMiniatura[1].src;
        }
        produtoMiniatura[2].onclick = function() {
            produtoImg.src = produtoMiniatura[2].src;
        }
        produtoMiniatura[3].onclick = function() {
            produtoImg.src = produtoMiniatura[3].src;
        }


        // Função para expandir a imagem no modal
        function expandImage(imgElement) {
            var modal = document.getElementById('imageModal');
            var expandedImage = document.getElementById('expandedImage');
            expandedImage.src = imgElement.src;
            modal.classList.add('show');
        }

        // Função para fechar o modal
        function closeModal() {
            var modal = document.getElementById('imageModal');
            modal.classList.remove('show');
        }