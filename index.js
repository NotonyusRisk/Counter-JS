//constantes de elementos HTML
const num = document.getElementById("num")
const decrease = document.getElementById("decrease")
const increase = document.getElementById("increase")
const reset = document.getElementById("reset")

let numero = 0
num.innerHTML = numero

//Configuración de botones
decrease.onclick = aumentar
increase.onclick = disminuir
reset.onclick = resetear

//Funciones
function disminuir(){
    numero -= 1
    num.innerHTML = numero
}

function aumentar(){
    numero += 1
    num.innerHTML = numero
}

function resetear(){
    numero = 0
    num.innerHTML = numero
}