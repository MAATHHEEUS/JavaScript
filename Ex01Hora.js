var data = new Date

var horas = data.getHours()

if (horas < 12) {
    var hora = document.getElementById('hora')//pega o titulo h2
    hora.innerHTML = `São ${horas} horas`
    document.body.style.background = 'green'
    document.body.main.style.img = 'https://i.pinimg.com/236x/ea/76/11/ea761156ba76b867ed12a76a566b4da5.jpg'//vai até o elemento img
} else if (horas < 18) {
    document.body.style.background = 'yellow'
    var hora = document.getElementById('hora')
    hora.innerHTML = `São ${horas} horas`
    var imagem = document.getElementById('imagem')
    imagem.src = 'https://i0.wp.com/emotioncard.com.br/wp-content/uploads/2017/07/mensagens-de-boa-tarde-ka0z3-fxl.jpg?fit=1120%2C588&ssl=1'
} else {
    hora = document.getElementById('hora')
    hora.innerHTML = `São ${horas} horas`
    document.body.style.background = 'black'
    var imagem = document.getElementById('imagem')
    imagem.src = 'https://st2.depositphotos.com/4404267/6487/i/450/depositphotos_64872759-stock-photo-full-moon-in-night-sky.jpg'
}