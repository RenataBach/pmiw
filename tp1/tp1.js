// https://youtu.be/nfbiSmIlksw
//Renata Bach Comision 2 Imagen nro 47
//1er pestaña 
     
let filas = 5;
let columnas = 4;
let tamOriginal = 100; 
let espacio = 2;
let sombrasActivas = false; // Variable para controlar la activación de sombras
let incrementoTamanio = 10; // Itamaño al presionar '+' o '-'
let numIncrementos = 0; // Contador de incrementos/decrementos
function preload(){
  rombo = loadImage ("data/rombo.jpg");
}
function setup() {
  createCanvas (800, 400); 
  frameRate (30);
}

function draw() {
  background(67);
  image(rombo, 0, 0, 400, 400); 
  noStroke();
  dibujarRombos(filas,columnas,tamOriginal,espacio,sombrasActivas);
}
function keyPressed() {
  if (key == 'r' || key == 'R') {
    resetearVariables();
    // Llamar a la función para resetear variables
    resetearVariables();
  } else if (key == '+') {
    // Incrementar tamaño del rombo (hasta un máximo de 5 incrementos)
    if (numIncrementos < 5) {
      numIncrementos++;
    }
  } else if (key == '-') {
    // Aumento del tam del rombo hasta 5
    if (numIncrementos > -5) {
      numIncrementos--;
    }
  } else if (key == 'j' || key == 'J') {
    // Activar sombras al presionar 'J'
    sombrasActivas = true;
  }
}
   
