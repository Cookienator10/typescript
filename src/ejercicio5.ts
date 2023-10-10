//triangulo
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Ingrese la longitud del lado 1: ", (lado1Str: string) => {
  const lado1: number = parseFloat(lado1Str);

  rl.question("Ingrese la longitud del lado 2: ", (lado2Str: string) => {
    const lado2: number = parseFloat(lado2Str);

    rl.question("Ingrese la longitud del lado 3: ", (lado3Str: string) => {
      const lado3: number = parseFloat(lado3Str);

      if (lado1 === lado2 && lado2 === lado3) {
        console.log("El triángulo es equilátero.");
      } else {
        console.log("El triángulo no es equilátero.");
      }

      rl.close();
    });
  });
});