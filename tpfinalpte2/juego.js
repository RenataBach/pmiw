class Juego {
  constructor(cantidadConos) {
    this.cantidadConos = cantidadConos;
    this.crearPersonaje();
    this.crearConos();
    this.pantallas = new Pantallas();
    this.tiempoInicio = millis();
    this.estado = "jugando";  // Estado inicial del juego
    this.vidas = 3;  // Inicializa las vidas en 3
  }

  dibujar() {
    this.Personaje.dibujar();

    for (let i = this.Conos.length - 1; i >= 0; i--) {
      this.Conos[i].moverEnY();
      this.Conos[i].dibujar();

      if (this.Conos[i].colisionar(this.Personaje)) {
        this.perderVida(i);

        if (this.vidas <= 0) {
          pantallas.estado = "finalMalo";
        } else {
          this.Conos[i].posY = -100;
        }
      }
    }


    fill(0);
    textSize(32);
    textAlign(LEFT, TOP);
    text("Vidas: " + this.vidas, 20, 20);

    let tiempoRestante = max(0, 30 - (millis() - this.tiempoInicio) / 1000);
    text("Tiempo: " + int(tiempoRestante), width - 200, 20);

    if (tiempoRestante <= 0 && this.vidas > 0) {
      pantallas.estado = "finalBueno";
    }
  }

  crearPersonaje() {
    this.Personaje = new Personaje(width / 2 - 50, height - 200);
  }

  crearConos() {
    this.Conos = [];
    for (let i = 0; i < this.cantidadConos; i++) {
      let posY = -i * 200;
      this.Conos[i] = new Cono(posY);
    }
  }

  perderVida(indiceCono) {
    this.vidas--;
    if (this.vidas > 0) {
      this.reiniciarPersonaje();
    }
  }

  reiniciarPersonaje() {
    this.Personaje.posX = width / 2 - 50;
    this.Personaje.posY = height - 200;
  }

  reiniciarJuego() {
    if (this.vidas <= 0) {
      this.estado = "finalMalo";
    }
  }

  teclaPresionada(keyCode) {
    this.Personaje.teclaPresionada(keyCode);
  }
}
