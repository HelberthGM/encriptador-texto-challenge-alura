

// Funciones

function encriptar(texto) {
  let encriptado = "";
  for (let i = 0; i < texto.length; i++) {
    let letra = texto.charAt(i);

    switch (letra) {
      case "a":
        letra = "ai";
        break;
      case "e":
        letra = "enter";
        break;
      case "i":
        letra = "imes";
        break;
      case "o":
        letra = "ober";
        break;
      case "u":
        letra = "ufat";
        break;
      default:
        break;
    }
    encriptado += letra;
  }
  return encriptado;
}

function desencriptar(texto) {
  let desencriptado = texto;
  desencriptado = desencriptado.replaceAll('ai', 'a');
  desencriptado = desencriptado.replaceAll('enter', 'e');
  desencriptado = desencriptado.replaceAll('imes', 'i');
  desencriptado = desencriptado.replaceAll('ober', 'o');
  desencriptado = desencriptado.replaceAll('ufat', 'u');
  

  return desencriptado;
}

// conexion con el html
function mostarEncriptado() {
  let texto = document.getElementById("texto").value;
  let campoResultado = document.querySelector(".no-info");
  let btnCopiar = document.querySelector(".copiar");

  if(! /[A-Zäëïöüáéíóúáéíóúâêîôûàèìòù]/.test(texto) && texto != ""){
    // si no hay mayusculas ni acentos
    campoResultado.innerHTML = '<p id="txtEncriptado" disabled>' +encriptar(texto) + "</p>";
    btnCopiar.setAttribute("style","display:inline")
  }else{
    alert("Solo letras minúsculas y sin acentos.")
  }

}

function mostrarDesencriptado() {
  let texto = document.getElementById("texto").value;
  let campoResultado = document.querySelector(".no-info");
  let btnCopiar = document.querySelector(".copiar");
  
  //console.log(/[^a-zñ .,!:;]/.test(texto));

  if(! /[A-Zäëïöüáéíóúáéíóúâêîôûàèìòù]/.test(texto) && texto != ""){
    // si no hay mayusculas ni acentos
    campoResultado.innerHTML = '<p id="txtEncriptado" disabled>' +desencriptar(texto) + "</p>";
    btnCopiar.setAttribute("style","display:inline")
    
  }else{
    alert("Solo letras minúsculas y sin acentos.")
  }
}

function copiarTexto() {
  let txtEncriptado = document.getElementById("txtEncriptado");
  navigator.clipboard.writeText(txtEncriptado.textContent)
  //console.log("Copiado")
}

