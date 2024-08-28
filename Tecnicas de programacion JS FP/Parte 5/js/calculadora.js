function sumar(){
    numero1=parseFloat(document.getElementById("numero1").value)
    numero2=parseFloat(document.getElementById("numero2").value)
    resultado=document.getElementById("resultado")
    resultado.value=numero1+numero2
}

function restar(){
    numero1=parseFloat(document.getElementById("numero1").value)
    numero2=parseFloat(document.getElementById("numero2").value)
    resultado=document.getElementById("resultado")
    resultado.value=numero1-numero2
}

function multiplicar(){
    numero1=parseFloat(document.getElementById("numero1").value)
    numero2=parseFloat(document.getElementById("numero2").value)
    resultado=document.getElementById("resultado")
    resultado.value=numero1*numero2
}

function dividir(){
    numero1=parseFloat(document.getElementById("numero1").value)
    numero2=parseFloat(document.getElementById("numero2").value)
    resultado=document.getElementById("resultado")
    if(numero2!=0)  resultado.value=numero1/numero2
    else            resultado.value="Error división / 0"
}
