var button1 = document.querySelector(".btn-encriptar");
var button2 = document.querySelector(".btn-desencriptar");
var button3 = document.querySelector(".btn-copiar");
var button4 = document.querySelector(".btn-borrar-input");
var button5 = document.querySelector(".btn-borrar-content");
var imagen = document.querySelector(".container-img");
var texto1 = document.querySelector(".container-h3");
var texto2 = document.querySelector(".container-p");
var content = document.querySelector(".desencriptado");
var input = document.querySelector(".area");






button1.onclick = encriptar;
button2.onclick = desencriptar;
button3.onclick = copiar;
button4.onclick = borrarInput;





function hide() {
    imagen.classList.add("hide");
    texto1.classList.add("hide");
    texto2.classList.add("hide");
}

function show() {
    imagen.classList.remove("hide");
    texto1.classList.remove("hide");
    texto2.classList.remove("hide");
}





function encriptar() {
    

    var frase = input.value.toLowerCase();
    if (frase == "") {
        alert("No hay nada para encriptar");
        return;
    }
    else {

        hide();
        var textoEncriptado = frase.replace(/e/img, "enter");
        textoEncriptado = textoEncriptado.replace(/o/img, "ober");
        textoEncriptado = textoEncriptado.replace(/i/img, "imes");
        textoEncriptado = textoEncriptado.replace(/a/img, "ai");
        textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

        content.innerHTML = textoEncriptado;
        
    }
}

function desencriptar() {
    
    
    var frase = input.value.toLowerCase();

    if (frase == "") {
        alert("No hay nada para encriptar");
        return;
    }

    else {
        hide();
        var textoEncriptado = frase.replace(/enter/img, "e");
        textoEncriptado = textoEncriptado.replace(/ober/img, "o");
        textoEncriptado = textoEncriptado.replace(/imes/img, "i");
        textoEncriptado = textoEncriptado.replace(/ai/img, "a");
        textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

        content.innerHTML = textoEncriptado;
        
    }
}



function borrarInput() {
    input.value = "";
}

function borrarContent() {
    content.value = "";
}

function copiar() {
    if (input.value == "") {
        alert("No hay nada para copiar");
        return;
    }
    else {
        content.select();
        document.execCommand("copy");

        input.focus();
        borrarInput();
        show();
        
    }
}

// function borrar1() {
//     document.getElementById("texto-encriptado").value = "";
// }

// function borrar2() {
//     document.getElementById("desencriptado").value = "";
// }



// button4.onclick = borrar1;
// button5.onclick = borrar2;
