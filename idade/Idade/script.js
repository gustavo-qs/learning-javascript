function verificar(){
    var ano = document.getElementById("ano")
    var data = new Date() 
    var anoAtual = data.getFullYear();
    var r = document.getElementById("r")
    if(ano.value.length == 0 || ano.value > anoAtual){
        window.alert("Verifique os dados e tente novamente")
    }else{
        var sex = document.getElementsByName("sexo")
        var idade = Number(anoAtual - ano.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            gender = "Homem"
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', "bh.png")
            }else if(idade < 21){
                img.setAttribute('src', "jh.png")
            }else if(idade < 50){
                img.setAttribute('src', "ah.png")
            }else{
                img.setAttribute('src', "vh.png")
            }
        }else{
            gender = "Mulher"
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', "bm.png")
            }else if(idade < 21){
                img.setAttribute('src', "jm.png")
            }else if(idade < 50){
                img.setAttribute('src', "am.png")
            }else{
                img.setAttribute('src', "vm.png")
            }
        }
        r.style.textAlign = 'center'
        r.innerHTML = `${gender} com ${idade} anos.`
        r.appendChild(img)
    }
}
