var div = document.getElementById('dividi')
div.addEventListener('click', dividi)

var mul = document.querySelector('input#multiplica')
mul.addEventListener('click', multiplica)

var sub = document.getElementById('subtrai')
sub.addEventListener('click', subtrair)

var soma = document.getElementById('somar')
soma.addEventListener('click', somar)

function multiplica() {
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.querySelector('input#num2').value)
    var res = document.getElementById('res')
    var r = num1 * num2
    res.innerText = `A multiplicação de ${num1} por ${num2} é ${r}`
}

function dividi() {
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.querySelector('input#num2').value)
    var res = document.getElementById('res')
    if (num2 != 0) {
        var r = num1 / num2
        res.innerText = `A divisão de ${num1} por ${num2} é ${r}`
    }
    else {
        alert('DIVISÃO POR ZERO!!!')
    }
}

function subtrair() {
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.querySelector('input#num2').value)
    var res = document.getElementById('res')
    var r = num1 - num2
    res.innerText = `A diferença entre ${num1} e ${num2} é ${r}`
}

function somar() {
    var num1 = Number(document.getElementById('num1').value)
    var num2 = Number(document.querySelector('input#num2').value)
    var res = document.getElementById('res')
    var r = num2 + num1
    res.innerText = `A soma entre ${num1} e ${num2} é ${r}`
}