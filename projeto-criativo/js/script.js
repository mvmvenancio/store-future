let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let themeBtn = document.getElementById('theme-btn');
let items = document.querySelectorAll('.item');
let dots = document.querySelectorAll('.dot');
let numberDisplay = document.querySelector('.number');

let active = 0;
let lastPosition = items.length - 1;

function updateSlider() {
    // Remover classe active do item e do ponto anterior
    let oldActive = document.querySelector('.item.active');
    let oldDot = document.querySelector('.dot.active');
    oldActive.classList.remove('active');
    oldDot.classList.remove('active');

    // Adicionar classe active ao novo item e ponto
    items[active].classList.add('active');
    dots[active].classList.add('active');

    // Atualizar o número lateral
    numberDisplay.innerHTML = "0" + (active + 1);
}

nextBtn.onclick = () => {
    active = active + 1 > lastPosition ? 0 : active + 1;
    updateSlider();
}

prevBtn.onclick = () => {
    active = active - 1 < 0 ? lastPosition : active - 1;
    updateSlider();
}

// Lógica de Troca de Tema (Dark/Light)
themeBtn.onclick = () => {
    document.body.classList.toggle('light-mode');
    
    // Opcional: Alterar texto do botão
    if (document.body.classList.contains('light-mode')) {
        themeBtn.innerText = "Modo Claro";
    } else {
        themeBtn.innerText = "Modo Escuro";
    }
}

function irParaProduto() {
    // Pegamos os dados do item que está com a classe 'active' no momento
    const activeItem = document.querySelector('.item.active');
    const nome = activeItem.querySelector('.title').innerText;
    const desc = activeItem.querySelector('.description').innerText;
    const imgFull = activeItem.querySelector('img').src;
    const imgName = imgFull.split('/').pop(); // Pega apenas o nome do arquivo (ex: apple-watch.png)

    // Definimos preços fictícios baseados no nome
    let preco = "0,00";
    if (nome.includes("Watch")) preco = "3.999,00";
    if (nome.includes("AirPods")) preco = "2.299,00";
    if (nome.includes("Vision")) preco = "34.999,00";

    // Criamos a URL com os dados (Query Params)
    const url = `produto.html?nome=${encodeURIComponent(nome)}&desc=${encodeURIComponent(desc)}&img=${imgName}&preco=${preco}`;
    
    // Redireciona
    window.location.href = url;
}