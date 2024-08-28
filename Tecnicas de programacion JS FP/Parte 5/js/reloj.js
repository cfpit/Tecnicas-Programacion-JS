function reloj(){
    tiempo=new Date()
    hora=tiempo.getHours().toString().padStart(2,"0")
    minuto=tiempo.getMinutes().toString().padStart(2,"0")
    segundo=tiempo.getSeconds().toString().padStart(2,"0")

    relojx = document.getElementById("reloj")
    relojx.innerHTML="<p>"+hora+":"+minuto+":"+segundo+"</p>"

    setTimeout("reloj()",1000)
}