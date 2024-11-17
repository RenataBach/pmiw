//https://youtu.be/P2N1k4tSwgk
//Renata Bach y Rocio Amaya Com 2
 let objJuego; 
let imagenes = ['data/barco.png', 'data/calle.jpg', 'data/cono.png', 'data/finalBueno.jpg', 'data/finalMalo.jpg'];
let sonido;
let pantallas;

function preload () {
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i] = loadImage(imagenes[i]);
  }
  soundFormats ('mp3');
  sonido = loadSound("data/choque.mp3");
}

function setup() {
  createCanvas(640, 480);
  pantallas = new Pantallas();
  userStartAudio();
}

function draw() {
  pantallas.dibujar();
}

function keyPressed() {
  if (objJuego && pantallas.estado === "juego") {
    objJuego.teclaPresionada(keyCode);
  }
}

function mousePressed() {

  pantallas.funcionamientoBotones();
} 
