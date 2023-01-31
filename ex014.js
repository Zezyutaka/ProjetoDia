function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var saudacao = window.document.getElementById('saudacao')
var data = new Date()
var hora = data.getHours()
//var hora = 19
msg.innerHTML = `Agora são ${hora} horas!`

if (hora >=5 && hora < 12){

img.src = 'manhã.PNG'
document.body.style.background ='#3FA4D9'
saudacao.innerHTML = `Bom Dia!`
} else if (hora >= 12 && hora <17){
  //BOA TARDE
img.src = 'tarde.PNG'
document.body.style.background ='#82A8C9'
saudacao.innerHTML = `Boa tarde!`
} else if (hora >=17 && hora <20){
  //BOM FIM DE TARDE
img.src = 'pordosol.PNG'
document.body.style.background ='#FCBB8B'
saudacao.innerHTML = `Bom Fim de Tarde!`
} else if (hora >=20 || hora <5){
  //BOA NOITE
img.src = 'noite.PNG'
document.body.style.background ='#27210F'
saudacao.innerHTML = `Boa Noite!`
}
}
