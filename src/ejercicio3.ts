//pizza
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Menú de opciones:\n1. Pizza\n2. Sándwiches\n3. Ensaladas\nSeleccione una opción: ", (opcionStr: string) => {
  const opcion: number = parseInt(opcionStr);

  rl.question("Ingrese la cantidad de porciones: ", (cantidadStr: string) => {
    const cantidad: number = parseInt(cantidadStr);
    let costoTotal: number = 0;

    if (opcion === 1) {
      costoTotal = cantidad * 7000;
    } else if (opcion === 2) {
      costoTotal = cantidad * 5000;
    } else if (opcion === 3) {
      costoTotal = cantidad * 8000;
    }

    console.log(`El costo total es: ${costoTotal} pesos`);

    rl.close();
  });
});