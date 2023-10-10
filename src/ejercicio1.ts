//codigo para un examen
interface Respuestas {
    pregunta1: string;
    pregunta2: string;
    pregunta3: string;
    pregunta4: string;
    pregunta5: string;
  }
  
  const respuestas: Respuestas = {
    pregunta1: "falso",
    pregunta2: "verdadero",
    pregunta3: "verdadero",
    pregunta4: "falso",
    pregunta5: "verdadero"
  };
  
  let puntaje = 0;
  if (respuestas.pregunta1 === "falso") {
    puntaje += 10;
  }
  if (respuestas.pregunta2 === "verdadero") {
    puntaje += 10;
  }
  if (respuestas.pregunta3 === "verdadero") {
    puntaje += 10;
  }
  if (respuestas.pregunta4 === "falso") {
    puntaje += 10;
  }
  if (respuestas.pregunta5 === "verdadero") {
    puntaje += 10;
  }
  
  console.log(respuestas);
  console.log("Puntaje:", puntaje);
 

