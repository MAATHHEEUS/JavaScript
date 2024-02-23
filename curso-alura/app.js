function geraNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}

let numeroSecreto = geraNumeroAleatorio();

function exibirMensagem(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

mensagemInicial();

let tentativas = 1;
function verificarChute(){
    let chute = document.querySelector('input').value;
    if(parseInt(chute) == numeroSecreto){
        exibirMensagem('h1', 'Acertou');
        palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentivas = `Parabéns, você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`
        exibirMensagem('p', mensagemTentivas);
        document.getElementById('reiniciar').removeAttribute('disabled');
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
    exibirMensagem('h1', 'Bem vindo ao jogo do número secereto');
    exibirMensagem('p', 'Escolha um número entre 1 e 10');
}

function reiniciarJogo(){
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    numeroSecreto = geraNumeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}