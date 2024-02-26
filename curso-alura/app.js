let numeroLimite = 10;
let listaDeNumerosSorteados = [];

function geraNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    if(numeroLimite == listaDeNumerosSorteados.length){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return geraNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

let numeroSecreto = geraNumeroAleatorio();

function exibirMensagem(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

mensagemInicial();

let tentativas = 1;
function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == ''){
        return;
    }
    if(parseInt(chute) == numeroSecreto){
        exibirMensagem('h1', 'Acertou');
        palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentivas = `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`
        exibirMensagem('p', mensagemTentivas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled', true);
    }else{
        if(parseInt(chute) > numeroSecreto){
            exibirMensagem('p', `O número secreto é menor que ${chute}!`);
        }else{
            exibirMensagem('p', `O número secreto é maior que ${chute}!`);
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function mensagemInicial(){
    exibirMensagem('h1', 'Bem vindo ao jogo do número secreto');
    exibirMensagem('p', `Escolha um número entre 1 e ${numeroLimite}`);
}

function reiniciarJogo(){
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    numeroSecreto = geraNumeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chutar').removeAttribute('disabled');
}