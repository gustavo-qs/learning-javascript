function carregar(){
    var i = Number(window.prompt("Digite 1 para hora atual e 2 para escolher a hora:"))
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    if(i == 1){
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    }else{
        var hora = Number(window.prompt("Digite as horas:"))
        var min = Number(window.prompt("Digite os minutos:"))
    }
    msg.innerHTML = `Agora são ${hora}:${min}`
    if(hora >= 0 && hora <12){
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        img.src='tarde.png'
        document.body.style.background = '#b9846f'

    }else if(hora>23 || hora <0){
        window.alert("Insira uma hora válida")
        carregar()
    }else {
        img.src='noite.png'
        document.body.style.background = '#515154'
    }
}
