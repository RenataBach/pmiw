//Rocío Belén Amaya, legajo 118957/6
//"Renata Bach, legajo 118966/7 
//https://youtu.be/6S6FFkRQm8o
 
let imagenes = [
  'data/inicio.jpg', 'data/logoAudio.png', 'data/img2.jpg', 'data/img3.jpg', 'data/img4y5.jpg', 'data/img6.jpg',
  'data/img7final1.jpg', 'data/img8.jpg', 'data/img9.jpg', 'data/img10.jpg', 'data/img11.jpg',
  'data/img12.jpg', 'data/img13.jpg', 'data/img14.jpg', 'data/img15.jpg', 'data/llamada.png'
];

let guionTXT;
let sonido;

function preload () {
  for (let i = 0; i < imagenes.length; i++) {
    imagenes[i] = loadImage(imagenes[i]);
  }
  soundFormats ('mp3');
  sonido= loadSound ("data/sonido.mp3");
  //guionTXT=loadStrings ('/data/textos.txt');
}

function setup() {
  createCanvas(640, 480);
  estado = "inicio";
  textSize (18);

  /* textosTXT (30, 30, 0);
   textosTXT (30, 60, 1);
   textosTXT (30, 90, 2);
   textosTXT (30, 120, 3);
   */
}

function draw() {
  logicaDeEstados ();
}

function mousePressed() {

  funcionamientoBotones ();
  
  // activar el sonido con la imagen
  if (estado === "inicio" && mouseX > width - 50 && mouseX < width - 20 && mouseY > 10 && mouseY < 40) {
    if (!sonido.isPlaying()) {
      sonido.play();
    } else {
      sonido.stop();
    }
  }
}

function keyPressed() {
  // Si presionas la tecla s, el sonido se activa o desactiva
  if (key === 's' || 'S') {
    if (!sonido.isPlaying()) {
      sonido.play();
    } else {
      sonido.stop();
    }
  }
} 
