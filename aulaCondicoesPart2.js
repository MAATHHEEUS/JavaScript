var bot1 = document.getElementById('bot1')
bot1.addEventListener('click', verificaIdade)

function verificaIdade() {
    var idade = Number(document.getElementById('idade').value)
    var res = document.getElementById('res')
    if (idade < 16) {
        res.innerHTML = `<p>Com ${idade} anos. Não vota</p>`
    } else if (idade < 18 || idade > 65) {
        res.innerHTML = `<p>Com ${idade} anos. Voto Opcional</p>`
    } else {
        res.innerHTML = `<p>Com ${idade} anos. Voto Obrigatório</p>`
    }
}