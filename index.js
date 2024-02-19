//constantes de elementos HTML
const num = document.getElementById("num")
const decrease = document.getElementById("decrease")
const increase = document.getElementById("increase")
const reset = document.getElementById("reset")

let numero = 0
num.innerHTML = numero

//Configuración de botones
decrease.onclick = disminuir;
increase.onclick = aumentar;
reset.onclick = resetear;

//Funciones
function disminuir(){
    numero -= 1
    num.innerHTML = numero
    num.style.color = 'rgb(128, 0, 0)'
}

function aumentar(){
    numero += 1
    num.innerHTML = numero
    num.style.color = 'rgb(0, 128, 0)'
}

function resetear(){
    numero = 0
    num.innerHTML = numero
    num.style.color = 'rgb(255, 255, 255)'
}