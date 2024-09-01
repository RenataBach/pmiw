//pestaña 2 funciones

function dibujarRombos(filas,  columnas,  tamOriginal, espacio,  sombrasActivas) { 
  // Calculo la posición inicial para centrar los rombos
  let startX = 400 + (width - 400 - (columnas * (tamOriginal + espacio)) + espacio) / 2;
  let startY = (height - (filas * (tamOriginal + espacio)) + espacio) / 2; // Centro vertical de los rombos

  // Dibujar los rombos
  for ( i = 0; i < filas; i++) {
    for (j = 0; j < columnas; j++) {
      let x = startX + j * (tamOriginal + espacio) + tamOriginal / 2;
      let y = startY + i * (tamOriginal + espacio) + tamOriginal / 2;

      // Obtener el tamaño actual del rombo
      let tam = obtenerTamanoActual(tamOriginal, incrementoTamanio, numIncrementos); 

      // Determinar el color del rombo
      if (i == 0 || i == 4) {
        
        fill(0); 
      } else if (i == 2) {
        fill(0); 
      } else if (i == 1 || i == 3) {
        fill(255); 
      }

      // Verifico si el mouse está sobre el rombo actual, sombras activas
      if (sombrasActivas && mouseX > x - tam / 2 && mouseX < x + tam / 2 &&
          mouseY > y - tam / 2 && mouseY < y + tam / 2) {
        // Generar un color de sombra aleatorio
        let sombra = generarColorSombra(); 
        fill(sombra);
      }

      // Dibujar rombo
      dibujarRombo(x, y, tam);
    }
  }
}

function dibujarRombo( x, y, tam) {
  quad(x, y - tam / 2,
       x + tam / 2, y,
       x, y + tam / 2,
       x - tam / 2, y);
}
function resetearVariables() {
  mouseX = 0;
  mouseY = 0;
  sombrasActivas = false; // Desactivar sombras
  numIncrementos = 0; // contador de incrementos/decrementos
}
function obtenerTamanoActual( tamOriginal, incrementoTamanio,  numIncrementos) { 
  return tamOriginal + incrementoTamanio * numIncrementos;
}

function generarColorSombra() { 
  let sombraR = random(250); 
  let sombraG = 0; 
  let sombraB = random(255); 
  return color (sombraR, sombraG, sombraB);
}
