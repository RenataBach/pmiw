class Cono {
  constructor (posY) {
    this.posX = 0;
    this.posY = posY;
    this.velocidad =3;
    this.vida = 1;
    this.numRandom = int ( random (0, 2));
    this.moverEnX();
    //print (this.posY);
  }


  dibujar () {
    image(imagenes[2], this.posX, this.posY, 100, 100);
  }

  moverEnY () {
    this.posY += this.velocidad;
  }


  moverEnX () {
    if (this.numRandom === 0) {
      this.posXIzquierda ();
    } else if (this.numRandom === 1) {
      this.posXDerecha ();
    }
  }

  posXIzquierda () {
    this.posX = width / 2 + 30;
  }

  posXDerecha () {
    this.posX = width / 2 - 100;
  }


  estaVivo () {
    return this.vida >= 1;
  }

  colisionar(personaje) {
    let distancia = dist(this.posX + 50, this.posY + 50, personaje.posX + 85, personaje.posY + 85);
    return distancia < 50; 
  }
}
