window.document.write('Olá mundo!')

var p1 = window.document.getElementsByTagName('p')[0]
document.write("No primeiro parágrafo está escrito: " + p1.innerText)

var d = document.getElementById('div1')
d.style.background = 'green'

var d2 = document.querySelector('div#div1')