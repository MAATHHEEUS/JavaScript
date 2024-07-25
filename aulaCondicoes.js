var bot1 = document.getElementById('bot1')
bot1.addEventListener('click', verificaVel)

var bot2 = document.getElementById('bot2')
bot2.addEventListener('click', verificaNac)

function verificaNac() {
    var nac = document.getElementById('nac').value
    var res = document.querySelector('div#res')
    res.innerHTML = `<p>Vivendo em ${nac}</p>`
    res.style.border = 'solid black 5px'
    if (nac.toUpperCase() == 'BRASIL') {//condição conposta
        res.innerHTML += "<p>Você é brasileiro!</p>"
    }
    else {
        res.innerHTML += '<p>Você é estrangeiro</p>'
    }
}

function verificaVel() {
    var vel = Number(document.getElementById('vel').value)
    var res = document.getElementById('res')
    res.innerHTML = `<p>Sua velocidade foi de <strong>${vel} km/h</strong></p>`
    res.style.border = 'solid black 5px'
    if (vel > 60) {//condição simples
        res.innerHTML += `<p>Você ultrapassou o limite de velocidade. <strong>MULTADO!!!</strong></p>`
    }
    res.innerHTML += '<p>Utilize o sinto de segurança</p>'
}