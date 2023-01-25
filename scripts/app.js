

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
