console.log("main.js")
caja1=document.getElementById("caja1")
caja2=document.getElementById("caja2")

caja1.innerHTML="<h1>Hola Mundo!</h1>"
caja1.style="color: blue; text-align: center; background-color: gray;"

nombre=prompt("Ingrese su mombre:")
caja2.innerHTML="<h1>Hola "+nombre+"!</h1>"
caja2.style="text-align: center;"

function rojo(){
    caja2.style="text-align: center; color: white; background-color: red;"
}

function verde(){
    caja2.style="text-align: center; color: white; background-color: green;"
}

function azul(){
    caja2.style="text-align: center; color: white; background-color: blue;"
}