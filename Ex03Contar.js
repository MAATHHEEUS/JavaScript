var bot1 = document.getElementById('bot1')
bot1.addEventListener('click', contar)

var res = document.getElementById('res')

function contar() {
    var ini = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    if (ini.length == 0 || fim.length == 0 || passo.length == 0) {//validação dos passos
        res.innerHTML += `Impossível contar!!!`
    }
    else {
        if (passo == 0) {
            alert(`Passo inválido! Considerando passo igual a 1`)
            passo = 1
        }
        if (ini <= fim) {//contagem crescente
            res.innerHTML = ``//antes de printar a tabuada limpar a área
            for (var i = Number(ini); i <= Number(fim); i = Number(passo) + i) {
                res.innerHTML += `${i}->`
            }
            res.innerHTML += `FIM!`
        }
        else {
            if (passo >= 1) {//contagem regressiva
                alert(`Erro!!! Se a contagem for regressiva o passo tem que ser negativo`)
                passo = -1
            }
            res.innerHTML = ``//antes de printar a tabuada limpar a área
            for (var i = Number(ini); i >= Number(fim); i = Number(passo) + i) {
                res.innerHTML += `${i}->`
            }
            res.innerHTML += `FIM!`
        }
    }

}