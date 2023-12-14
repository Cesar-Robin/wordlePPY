const diccionario = ["APPLE", "HOUSE", "HELLO", "ROBOT"];
let random = Math.floor(Math.random() *diccionario.length);
const palabra = diccionario[random];
let intentos = 6;
console.log(palabra);

const button = document.getElementById("guess-button");


button.addEventListener("click", () => {
  const INTENTO = leerIntento();
  const GRID = document.getElementById("grid");
  let row = document.createElement("div");
  row.className = "row";
  if (INTENTO == palabra ) {
      terminar("<h1>GANASTE</h1>");
  } else {
  for (let i in palabra){
      if (palabra[i] === INTENTO[i]){
        let cuadroLetra = armarLetra(INTENTO[i], "green");
        row.appendChild(cuadroLetra);
      } else if( palabra.includes(INTENTO[i]) ) {
        let cuadroLetra = armarLetra(INTENTO[i], "yellow");
        row.appendChild(cuadroLetra);
      } else {
        let cuadroLetra = armarLetra(INTENTO[i], "gray");
        row.appendChild(cuadroLetra);
      }
  }
  intentos--;
  }
  GRID.appendChild(row);
  if (intentos == 0){
    terminar("<h1>PERDISTE</h1>");
  }
});


function leerIntento(){
  return document.getElementById("guess-input").value.toUpperCase();

}

function terminar(mensaje) {
  document.getElementById("mensaje").innerHTML  =  mensaje;
}

function armarLetra(Letra, color){
  let span = document.createElement("spam");
  span.className = "letter";
  span.innerHTML = Letra;
  span.style.backgroundColor = color;
  return span;
   
  }
 
