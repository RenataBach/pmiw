class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vida = 5;
  }

  dibujar() {
    image(imagenes[0], this.posX, this.posY, 170, 170);
  }

  teclaPresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    }
  }

  moverDerecha() {
    this.posX = width / 2 + 20;
  }

  moverIzquierda() {
    this.posX = width / 2 - 150;
  }

   perderVida() {
    if (this.vida > 0) {
      this.vida--;
    }
  }

  estaMuerto() {
    return this.vida <= 0; 
  }
}
