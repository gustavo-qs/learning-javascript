function contar(){
    var inicio = Number(window.document.getElementById("in").value)
    var fim = Number(window.document.getElementById("end").value)
    var passo = Number(window.document.getElementById("p").value)
    var res = window.document.getElementById("res")
    if(inicio == 0 || fim == 0 || passo == 0){
        window.alert("Input inválido, favor inserir os dados necessários.")
    }else
        for(var i = inicio; i <= fim; i += passo){
            res.innerHTML += `${i} `
        }
}