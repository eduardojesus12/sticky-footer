var boton = document.getElementById("agregar");
boton.addEventListener("click", agregarTexto);
var texto = document.getElementById("texto");

function agregarTexto () {
  texto.innerHTML += "texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto, texto <br />"
}
