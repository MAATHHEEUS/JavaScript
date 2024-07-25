var bot1 = document.getElementById('bot1')
bot1.addEventListener('click', gerar)

var res = document.getElementById('res')

function gerar() {
    var n = document.getElementById('num').value
    if (n.length == 0) {
        alert(`Erro!!! É necessário digitar um número`)
    }
    else {
        res.innerHTML = ``
        for (var i = 0; i <= 10; i++) {
            res.innerHTML += `${i} x ${Number(n)} = ${i * Number(n)}<br>`
        }
    }
}