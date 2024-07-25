var b = document.getElementById('area2')
b.addEventListener('click', clicar)
b.addEventListener('mouseenter', entrar)
b.addEventListener('mouseout', saiu)

function saiu() {
    var a = document.getElementById('area')
    var a2 = document.querySelector('div#area2')
    a2.style.background = 'yellow'
    a.style.background = 'aqua'
    a2.innerText = 'Saiu'
    a.innerHTML = '<strong>saiu!!!<strong>'
}

function clicar() {
    var a = document.getElementById('area')
    var a2 = document.getElementsByTagName('div')[1]
    a2.style.background = 'gray'
    a.style.background = 'green'
    a2.innerText = 'CLICOU!!'
    a.innerText = 'CLICOU!!!'
}

function entrar() {
    var a2 = document.getElementById('area2')
    var a = document.getElementById('area')
    a.style.background = 'pink'
    a2.style.background = 'purple'
    a2.innerText = 'ENTROU!!'
    a.innerText = 'Entrou!!!'
}