let estado; // Variable para el estado globalmente
let botonAncho = 100; // Ancho del botón
let botonAlto = 50;   // Alto del botón
let botonX, botonY;    // Posiciones del primer botón
let boton2X, boton2Y;  // Posiciones del segundo botón


/*
function textosTXT (posX, posY, numLinea) {
 fill (0);
 let lineaCompleta = guionTXT [numLinea];
 let textosDivididos= split (lineaCompleta, ': ') ;
 text (textosDivididos [0], posX, posY);
 text (textosDivididos [1], posX+70, posY);
 
 for (let i=0; i < guionTXT.length; i++) {
 text (guionTXT [i], 30, 30 + (30*i));
 }
 }
 */



function pantallaInicio() {
  image(imagenes[0], 0, 0, width, height);
  image(imagenes[1], width - 50, 10, 30, 30);

  fill(124, 135, 255);
  rect(10, 10, 200, 200, 20);
  fill(0);
  textSize(18);
  text("¡Ayuda a Bob Esponja ", 20, 50);
  text("a recuperar la receta ", 20, 80);
  text("secreta, y llegar a ", 20, 110);
  text("tiempo al concurso ", 20, 140);
  text("de cocina!", 20, 170);

  // Botón "Iniciar"
  botonX = width / 2 - botonAncho / 2;
  botonY = height / 2 - botonAlto - 20;
  fill(245, 238, 22);
  dibujarBoton(botonX, botonY, botonAncho, botonAlto, "Iniciar");

  // Botón "Créditos"
  boton2X = width / 2 - botonAncho / 2;
  boton2Y = botonY + botonAlto + 20;
  fill (0);
  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Créditos");
}

function pantallaDos() {
  image(imagenes[2], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(10);
  text("¡Hoy es el gran día! Voy a conseguir mi licencia de conducir y llegaré justo a tiempo para el concurso!", 20, 30);

  textSize(18);

  // Parámetros para el botón "Continuar"
  boton2X = width - width / 4;
  boton2Y = height - 100;

  // Llamada a la función dibujarBoton
  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Continuar");
}



function pantallaTres () {
  image(imagenes[2], 0, 0, width, height);
  image(imagenes[15], width - width / 3, 100, 200, 200);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(10);
  text("llamada entrante", 20, 30);

  // Parámetros para el botón "Contestar"
  boton2X = width - width / 4;
  boton2Y = height - 100;
  botonAncho = 150;
  botonAlto = 50;

  // Llamada a la función dibujarBoton
  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Contestar");
}

function pantallaCuatro () {
  image(imagenes[3], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(10);
  text("¡Bob, estamos en problemas! Plankton ha robado la receta secreta!", 20, 30);

  // Parámetros para el botón "Continuar"
  boton2X = width - width / 4;
  boton2Y = height - 100;
  botonAncho = 150; // Asegúrate de definir el ancho
  botonAlto = 50; // Asegúrate de definir la altura

  // Llamada a la función dibujarBoton
  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Continuar");
}

function pantallaCinco () {
  image(imagenes[4], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(10);
  text("¡Ay no! ¿Qué hago ahora? Debo tomar una decisión inmediatamente", 20, 30);

  botonX = width / 4 - 100;
  botonY = height - 100;
  botonAncho = 200;
  botonAlto = 50;

  dibujarBoton(botonX, botonY, botonAncho, botonAlto, "Seguir con el plan de\nsacar la licencia.");

  boton2X = width - width / 4;
  boton2Y = height - 100;

  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "No perder el tiempo e ir\ncorriendo tras Plankton");
}

function pantallaSeis () {
  image(imagenes[2], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(10);
  text("¡No hay tiempo que perder!", 20, 30);

  boton2X = width - width / 4;
  boton2Y = height - 100;
  botonAncho = 150;
  botonAlto = 50;

  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Continuar");
}

function pantallaSiete () {
  image(imagenes[5], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 600, 50, 20);
  fill(0);
  textSize(10);
  text("¡Qué sorpresa, Bob Esponja! Creí que tardarías más. No importa, ya es demasiado tarde. ¿Como planeas detenerme sin licencia?", 20, 30);

  // Parámetros para el botón regresar
  botonX = width / 4 - 100;
  botonY = 70;
  botonAncho = 200;
  botonAlto = 50;

  dibujarBoton(botonX, botonY, botonAncho, botonAlto, "Proponerle ir al concurso\nde cocina juntos");

  // Parámetros para el botón continuar
  boton2X = width - width / 4;
  boton2Y = 70;

  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Intentar robarle la receta");
}

function pantallaOcho () {
  image(imagenes[5], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(10);
  text("¡Ja! Buen intento, pero me quedaré la receta", 20, 30);

  // Parámetros para el botón continuar
  boton2X = width - width / 4;
  boton2Y = 70;
  botonAncho = 150;
  botonAlto = 50;

  //botón "Continuar"
  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Continuar");
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FINAL MALO
function pantallaNueve () {
  image(imagenes[6], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(10);
  text("¡Intenta de nuevo!", 20, 30);

  // Parámetros para el botón regresar
  botonX = width / 4 - 100;
  botonY = 70;
  botonAncho = 150; // Asegúrate de definir el ancho
  botonAlto = 50; // Asegúrate de definir la altura

  // Intentar todo de nuevo
  dibujarBoton(botonX, botonY, botonAncho, botonAlto, "Intentar todo de nuevo");

  // Parámetros para el botón continuar
  boton2X = width - width / 4;
  boton2Y = 70;

  //el botón volver con Plankton
  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Volver a la elección\ncon Plankton");
}

function pantallaDiez() {
  image(imagenes[7], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(10);
  text("¡Acepto! Buena suerte cocinando sin la receta", 20, 30);

  boton2X = width - width / 4;
  boton2Y = 70;
  botonAncho = 150;
  botonAlto = 50;

  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Continuar");
}

function pantallaOnce() {
  image(imagenes[11], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(10);
  text("Llegué justo a tiempo al concurso, ahora debo de competir contra Plankton", 20, 30);

  // Parámetros para el botón continuar
  boton2X = width - width / 4;
  boton2Y = height - 100;
  botonAncho = 150;
  botonAlto = 50;

  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Continuar");
}

function pantallaDoce() {
  image(imagenes[12], 0, 0, width, height);

  boton2X = width - width / 4;
  boton2Y = height - 100;
  botonAncho = 150;
  botonAlto = 50;

  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Siguiente");
}

function pantallaTrece() {
  image(imagenes[12], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(10);
  text("¿Qué debería de hacer?", 20, 30);

  botonX = width / 4 - 100;
  botonY = height - 100;
  botonAncho = 150;
  botonAlto = 50;

  dibujarBoton(botonX, botonY, botonAncho, botonAlto, "Inventar sobre la marcha");

  boton2X = width - width / 4;
  boton2Y = height - 100;

  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Intentar recordar la receta");
}

function pantallaCatorce() {
  image(imagenes[13], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(10);
  text("Lograste recordar la receta", 20, 30);

  boton2X = width - width / 4;
  boton2Y = height - 100;
  botonAncho = 150;
  botonAlto = 50;

  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Continuar");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////// FINAL BUENO
function pantallaQuince() {
  image(imagenes[13], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(10);
  text("¡Felicidades! Ganaste el primer puesto y Plankton te devolvió la receta.", 20, 30);

  boton2X = width - width / 4;
  boton2Y = height - 100;
  botonAncho = 150;
  botonAlto = 50;

  //Volver al inicio
  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Volver al inicio");
}

function pantallaDieciseis() {
  image(imagenes[14], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(10);
  text("No recordaste la receta", 20, 30);

  boton2X = width - width / 4;
  boton2Y = height - 100;
  botonAncho = 150;
  botonAlto = 50;

  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Continuar");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// FINAL MALO 2
function pantallaDiecisiete() {
  image(imagenes[14], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(14);
  text("Trataste de inventar una receta y salió fatal. Plankton se quedó con el primer puesto y con la receta", 20, 30);

  boton2X = width - width / 4;
  boton2Y = height - 100;
  botonAncho = 150;
  botonAlto = 50;

  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Volver al inicio");
}

function pantallaDieciocho() {
  image(imagenes[2], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(10);
  text("Si obtengo la licencia llegaré más rápido a detener a Plankton", 20, 30);

  boton2X = width - width / 4;
  boton2Y = height - 100;
  botonAncho = 150;
  botonAlto = 50;

  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Continuar");
}

function pantallaDiecinueve() {
  image(imagenes[8], 0, 0, width, height);

  botonX = width / 4 - 100;
  botonY = height - 100;
  botonAncho = 150;
  botonAlto = 50;

  //Desaprobar
  dibujarBoton(botonX, botonY, botonAncho, botonAlto, "Desaprobar");

  boton2X = width - width / 4;
  boton2Y = height - 100;

  // Aprobar
  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Aprobar");
}

function pantallaVeinte() {
  image(imagenes[10], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(10);
  text("¡Aprobaste! Maneja rápido hasta el concurso, ¡Seguro Plankton estará allí!", 20, 30);

  boton2X = width - width / 4;
  boton2Y = height - 100;
  botonAncho = 150;
  botonAlto = 50;

  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Siguiente");
}

function pantallaVeintiuno() {
  image(imagenes[9], 0, 0, width, height);

  fill(124, 135, 255);
  rect(10, 10, 500, 50, 20);
  fill(0);
  textSize(10);
  text("Chocaste y desaprobaste. ¡Ve corriendo tras Plankton!", 20, 30);

  boton2X = width - width / 4;
  boton2Y = height - 100;
  botonAncho = 150;
  botonAlto = 50;

  dibujarBoton(boton2X, boton2Y, botonAncho, botonAlto, "Siguiente");
}

function pantallaCreditos() {
  background(124, 135, 255);


  fill(255, 240, 64);
  let rectX = 50;
  let rectY = 50;
  let rectAncho = width - 100;
  let rectAlto = height / 2;
  rect(rectX, rectY, rectAncho, rectAlto, 20);


  fill(0);
  textSize(24);
  push ();
  textAlign(CENTER, CENTER);
  text("Creado por:", rectX + rectAncho / 2, rectY + rectAlto / 4);
  text("Rocío Belén Amaya, legajo 118957/6", rectX + rectAncho / 2, rectY + rectAlto / 2);
  text("Renata Bach, legajo 118966/7", rectX + rectAncho / 2, rectY + (rectAlto * 3) / 4);
  pop ();

  // Botón de "Volver a inicio"
  botonAncho = 150;
  botonAlto = 50;
  boton2X = width / 2 - botonAncho / 2;
  boton2Y = height - 100;

  // Dibujo del botón
  fill(255);
  rect(boton2X, boton2Y, botonAncho, botonAlto);

  // Texto del botón
  fill(0);
  textSize(16);
  push ();
  textAlign(CENTER, CENTER);
  text("Volver a inicio", boton2X + botonAncho / 2, boton2Y + botonAlto / 2);
  pop ();
}

function dibujarBoton(posX, posY, ancho, alto, texto) {
  fill(255);
  rect(posX, posY, ancho, alto);
  fill(0);
  textSize(11);
  text(texto, posX + 10, posY + 30);
}




function logicaDeEstados () {
  if (estado === "inicio") {
    pantallaInicio();
  } else if (estado === "dos") {
    pantallaDos();
  } else if (estado === "tres") {
    pantallaTres();
  } else if (estado === "cuatro") {
    pantallaCuatro();
  } else if (estado === "cinco") {
    pantallaCinco();
  } else if (estado === "seis") {
    pantallaSeis();
  } else if (estado === "siete") {
    pantallaSiete();
  } else if (estado === "ocho") {
    pantallaOcho();
  } else if (estado === "nueve") {
    pantallaNueve();
  } else if (estado === "diez") {
    pantallaDiez();
  } else if (estado === "once") {
    pantallaOnce();
  } else if (estado === "doce") {
    pantallaDoce();
  } else if (estado === "trece") {
    pantallaTrece();
  } else if (estado === "catorce") {
    pantallaCatorce();
  } else if (estado === "quince") {
    pantallaQuince();
  } else if (estado === "dieciseis") {
    pantallaDieciseis();
  } else if (estado === "diecisiete") {
    pantallaDiecisiete();
  } else if (estado === "dieciocho") {
    pantallaDieciocho();
  } else if (estado === "diecinueve") {
    pantallaDiecinueve();
  } else if (estado=== "veinte") {
    pantallaVeinte ();
  } else if (estado=== "veintiuno") {
    pantallaVeintiuno ();
  } else if (estado=== "creditos") {
    pantallaCreditos ();
  }
}


function funcionamientoBotones () {
  if (estado === "inicio") {
    if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
      estado = "dos";
    }
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "creditos";
    }
  } else if (estado === "dos") {
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "tres";
    }
  } else if (estado === "tres") {
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "cuatro";
    }
  } else if (estado === "cuatro") {
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "cinco";
    }
  } else if (estado === "cinco") {
    //regresar
    if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
      estado = "dieciocho";
    }
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "seis";
    }
  } else if (estado === "seis") {
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "siete";
    }
  } else if (estado === "siete") {
    //regresar
    if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
      estado = "diez";
    }
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "ocho";
    }
  } else if (estado === "ocho") {
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "nueve";
    }
  } else if (estado === "nueve") {
    //regresar
    if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
      estado = "dos";
    }
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "siete";
    }
  } else if (estado === "diez") {
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "once";
    }
  } else if (estado === "once") {
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "doce";
    }
  } else if (estado === "doce") {
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "trece";
    }
  } else if (estado === "trece") {
    //regresar
    if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
      estado = "dieciseis";
    }
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "catorce";
    }
  } else if (estado === "catorce") {
    //regresar
    if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
      estado = "trece";
    }
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "quince";
    }
  } else if (estado === "quince") {
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "inicio";
    }
  } else if (estado === "dieciseis") {
    //regresar
    if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
      estado = "quince";
    }
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "diecisiete";
    }
  } else if (estado === "diecisiete") {
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "inicio";
    }
  } else if (estado === "dieciocho") {
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "diecinueve";
    }
  } else if (estado === "diecinueve") {
    //regresar
    if (mouseX > botonX && mouseX < botonX + botonAncho && mouseY > botonY && mouseY < botonY + botonAlto) {
      estado = "veintiuno";
    }
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "veinte";
    }
  } else if (estado === "veinte") {
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "once";
    }
  } else if (estado === "veintiuno") {
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "siete";
    }
  } else if (estado === "creditos") {
    // siguiente
    if (mouseX > boton2X && mouseX < boton2X + botonAncho && mouseY > boton2Y && mouseY < boton2Y + botonAlto) {
      estado = "inicio";
    }
  }
}
