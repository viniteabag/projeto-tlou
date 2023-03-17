// pegar os elementos que forem botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// identificar o clique do mouse
botoesCarrossel.forEach((botao, i) => {
    botao.addEventListener('click', () => {
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

// adicionar a classe selecinado ao botão clicado
        botao.classList.add('selecionado');

        //tirar a classe ativa da imagem de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        // adicionar a classe ativa no botão clicado
        imagens[i].classList.add('ativa');

    })
})