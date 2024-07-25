var bot1 = document.getElementById('bot1')
bot1.addEventListener('click', calculaIdade)

function calculaIdade() {
    var anoAtual = new Date
    var ano = Number(document.getElementById('ano').value)
    var sexo = document.querySelector('input[name=sexo]:checked').value//pega qual sexo foi selecionado
    //var sexo = document.getElementByName('sexo')//outra forma de pegar o sexo selecionado
    var idade = anoAtual.getFullYear() - ano
    var res = document.getElementById('res')
    if (ano <= 0 || idade <= 0) {
        alert('Verifique os dados e digite novamente')
    } else {
        if (idade < 12) {
            if (sexo == 'Masculino') {//if(sexo[0].checked){}//outra forma de verificar o sexo
                //Menino
                res.innerHTML = `É um menino de ${idade} anos<br>`
                var img = document.createElement("IMG")
                img.src = 'https://thumbs.dreamstime.com/b/crian%C3%A7a-feliz-do-menino-do-mulato-est%C3%A1-sorrindo-apreciando-vida-adotada-73541872.jpg'
                img.style.width = '400'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
                res.appendChild(img)
            } else {//menina
                res.innerHTML = `É uma menina de ${idade} anos<br>`
                var img = document.createElement("IMG")
                img.src = 'https://i.pinimg.com/564x/ba/4d/f8/ba4df86332cd109f5201f15b0cd47167--cute-girls-natural-beauty.jpg'
                img.style.width = '400'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
                res.appendChild(img)
            }
        } else if (idade < 40) {
            if (sexo == 'Masculino') {
                //homem
                res.innerHTML = `É um homem de ${idade} anos<br>`
                var img = document.createElement("IMG")
                img.src = 'https://img.freepik.com/fotos-gratis/foto-horizontal-de-um-homem-negro-sorridente-com-as-maos-juntas-acredita-em-algo-positivo_273609-19031.jpg'
                img.style.width = '400'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
                res.appendChild(img)
            } else {//mulher
                res.innerHTML = `É uma mulher de ${idade} anos<br>`
                var img = document.createElement("IMG")
                img.src = 'https://img.freepik.com/fotos-gratis/mulher-de-negocios-elegante-e-confiante-sorrindo_176420-19466.jpg?w=2000'
                img.style.width = '400'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
                res.appendChild(img)
            }
        } else {
            if (sexo == 'Masculino') {
                //idoso
                res.innerHTML = `É um senhor de ${idade} anos<br>`
                var img = document.createElement("IMG")
                img.src = 'https://corasenior.com.br/wp-content/uploads/elementor/thumbs/idoso-sociedade-cora-residencial-para-idosos-ova5juvui2agrp7ez89ttb61pnwqs5wx52tykaeyjc.jpg'
                img.style.width = '400'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
                res.appendChild(img)
            } else {//idosa
                res.innerHTML = `É uma senhora de ${idade} anos<br>`
                var img = document.createElement("IMG")
                img.src = 'https://img.freepik.com/fotos-gratis/mulher-africana-idosa-sorridente-retrato-de-rosto_53876-143107.jpg?w=2000'
                img.style.width = '400'
                img.style.height = '250px'
                img.style.borderRadius = '50%'
                res.appendChild(img)
            }
        }
    }
}