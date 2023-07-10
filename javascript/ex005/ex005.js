var futuro = new Date('2023-07-09T17:00:00.000Z')
var agora = new Date()
var delta = futuro.getTime() - agora.getTime()
var segundos = delta/1000
var minutos = Number.parseInt(segundos/60)
var hora = Number.parseInt(minutos/60)

var x =10
//while (x>0) {
delta = futuro.getTime() - agora.getTime()   
segundos = delta/1000
minutos = Number.parseInt(segundos/60)
hora = Number.parseInt(minutos/60)
segundos = (minutos/60 - hora)*3600
minutos = Number.parseInt(segundos/60)
segundos = Number.parseFloat((segundos/60 - minutos)*60)
console.log( `<p>FALTAM ${hora}:${minutos}:${segundos}</p>`)
//x--
//}

