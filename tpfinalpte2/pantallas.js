class Pantallas {
  constructor() {
    this.estado = "inicio";
    this.sonidoJugado = false;
  }

  dibujar () {
    if (this.estado === "inicio") {
      this.pantallaInicio();
    } else if (this.estado === "instrucciones") {
      this.pantallaInstrucciones();
    } else if (this.estado === "juego") {
      this.pantallaJuego();
    } else if (this.estado === "finalBueno") {
      this.pantallaFinalBueno ();
    } else if (this.estado === "finalMalo") {
      this.pantallaFinalMalo();
    }
  }

  pantallaInicio () {
    background(124, 135, 255);

    fill(255, 240, 64);
    this.rectX = 50;
    this.rectY = 50;
    this.rectAncho = width - 100;
    this.rectAlto = height / 2;

    rect(this.rectX, this.rectY, this.rectAncho, this.rectAlto, 20);

    fill(0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Creado por:", this.rectX + this.rectAncho / 2, this.rectY + this.rectAlto / 4);
    text("Rocío Belén Amaya, legajo 118957/6", this.rectX + this.rectAncho / 2, this.rectY + this.rectAlto / 2);
    text("Renata Bach, legajo 118966/7", this.rectX + this.rectAncho / 2, this.rectY + (this.rectAlto * 3) / 4);

    this.boton(width / 2 - 75, height - 100, 150, 50, "Empezar");
  }

  pantallaInstrucciones () {
 
  background(255, 240, 64);  

  fill(0); 
  textSize(14); 
  textAlign(LEFT, CENTER);  
  textLeading(18); 

  // Escribir el texto, con las frases separadas
  const margenX = 30;
  const margenY = 20;

  text("Ayuda a Bob Esponja a aprobar su examen de conducir.", margenX, margenY);

  text("Tienes 30 segundos para sobrevivir y 3 vidas en total.", margenX, margenY + 40);

  text("Si Bob Esponja choca con un cono, perderá una vida.", margenX, margenY + 60);

  text("El objetivo es esquivar todos los conos hasta que el tiempo termine.", margenX, margenY + 100);

  text("Controles:", margenX, margenY + 140);

  text("Flecha izquierda: Moverse a la izquierda.", margenX, margenY + 160);

  text("Flecha derecha: Moverse a la derecha.", margenX, margenY + 180);

  text("Si pierdes todas las vidas o si el tiempo se acaba,", margenX, margenY + 220);

  text("podrás reiniciar el juego presionando el botón de 'Reiniciar'.", margenX, margenY + 240);

  text("¡Buena suerte ayudando a Bob Esponja a aprobar su examen!", margenX, margenY + 280);

 
  fill(255);
  this.boton(width / 2 - 75, height - 100, 150, 50, "Jugar");

 
  fill(172, 173, 3);  
  const radio = 30;  


}

  pantallaJuego() {
    if (!objJuego) {
      objJuego = new Juego(100, 4);
    }
    image(imagenes[1], -150, 0, width + 300, height * 2);
    objJuego.dibujar();
  }


  pantallaFinalBueno () {
    image(imagenes[3], 0, 0, width, height);
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡GANASTE!", width / 2, height / 2);
    this.boton(width / 2 - 75, height - 100, 150, 50, "Reiniciar");
  }

  pantallaFinalMalo () {
    image(imagenes[4], 0, 0, width, height);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡PERDISTE!", width / 2, height / 2);
    this.boton(width / 2 - 75, height - 100, 150, 50, "Reiniciar");
    if (!this.sonidoJugado) {
      if (!sonido.isPlaying()) {
        sonido.stop();
        sonido.play();
        this.sonidoJugado = true;
      }
    }
  }

  boton(posX, posY, ancho, alto, texto) {
    fill(255);
    rect(posX, posY, ancho, alto, 10);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(texto, posX + ancho / 2, posY + alto / 2);

    this.botonX = posX;
    this.botonY = posY;
    this.botonAncho = ancho;
    this.botonAlto = alto;
  }

  funcionamientoBotones() {
    if (this.estado === "inicio") {
      if (mouseX > this.botonX && mouseX < this.botonX + this.botonAncho && mouseY > this.botonY && mouseY < this.botonY + this.botonAlto) {
        this.estado = "instrucciones";
      }
    } else if (this.estado === "instrucciones") {
      if (mouseX > this.botonX && mouseX < this.botonX + this.botonAncho && mouseY > this.botonY && mouseY < this.botonY + this.botonAlto) {
        this.estado = "juego";
      }
    } else if (this.estado === "finalBueno" || this.estado === "finalMalo") {
      if (mouseX > this.botonX && mouseX < this.botonX + this.botonAncho && mouseY > this.botonY && mouseY < this.botonY + this.botonAlto) {
        this.estado = "inicio";
        objJuego = null;
      }
    }
  }
}
