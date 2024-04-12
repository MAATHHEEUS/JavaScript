const listaDeTeclas = document.querySelectorAll('.tecla');

const reproduzirSom=(idElementoAudio) => {
    let elemento = document.querySelector(idElementoAudio);
    if(elemento && elemento.tagName === 'AUDIO') elemento.play();
    else console.log('Elemento não encontrado ou seletor inválido!');
}

// FUNÇÃO PARA ATRIBUIR O CLICK EM CADA TECLA DA LISTA
listaDeTeclas.forEach((tecla) => {
    let instrumento = tecla.classList[1];
    let idElementoAudio = `#som_${instrumento}`;
    tecla.onclick = function () {
        reproduzirSom(idElementoAudio);
    }
    tecla.onkeydown = function (evento) {
        if(evento.code === 'Space' || evento.code === 'Enter')tecla.classList.add('ativa');
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
});