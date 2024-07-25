var bot1 = document.getElementById('bot1')

var bot2 = document.getElementById('bot2')

bot1.addEventListener('click', adiciona)
bot2.addEventListener('click', analisa)

var res = document.getElementById('res')

var tab = document.getElementById('tab')

var lista = []
var maior = 0
var menor = 110
var soma = 0

function adiciona() {
    res.innerHTML = `` // limpa a resposta
    var num = document.getElementById('num').value
    if (num.lenght == '' || Number(num) <= 0 || Number(num) > 100 || lista.indexOf(Number(num)) != -1) {
        alert('Erro não foi possível adicionar! Ou número ja está na lista.')
    } else {
        lista.push(Number(num))
        tab.innerHTML += `Você adicionou ${num}<br>`
        soma += Number(num)
        if (maior < Number(num)) {
            maior = Number(num)
        }
        if (menor > Number(num)) {
            menor = Number(num)
        }
    }
}

function analisa() {
    if (lista.length == 0) {
        alert('Adicione números a lista!')
    } else {
        res.innerHTML += `Ao todo, temos ${lista.length} números cadastrados.<br>
                O maior valor foi ${maior}.<br>
                O menor valor foi ${menor}.<br>
                Somando todos os valores, temos ${soma}.<br>
                A média dos valores digitados é ${soma / lista.length}.`
    }
}