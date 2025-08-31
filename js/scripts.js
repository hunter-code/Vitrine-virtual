// Carousel
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

setInterval(() => {
    carouselSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    carouselSlides[currentSlide].classList.add('active');
}, 3000);

// Pagamento
const pagamentoButton = document.querySelectorAll('.pagamento-button');

pagamentoButton.forEach(button => {
    button.addEventListener('click', () => {
        const produtoId = button.dataset.produtoId;
        window.location.href = `pagamento.html?produtoId=${produtoId}`;
    });
});

// Produto
const produtoId = new URLSearchParams(window.location.search).get('id');
const produtoDescricao = document.querySelector('.produto-descricao');

if (produtoId) {
    // Carregar descrição do produto
    fetch(`https://api.seusite.com/produtos/${produtoId}`)
        .then(response => response.json())
        .then(data => {
            produtoDescricao.innerHTML = data.descricao;
        })
        .catch(error => console.error(error));
}


