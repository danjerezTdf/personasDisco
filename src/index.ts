/* Ejercicio – Personas en una Disco

• Para tener control de la gente que hay en una disco el gerente quiere
saber cuantas personas de diferentes edades han entrado.
• No se han permitido la entrada a menores de 18 ni mayores de 40.
Para la carga de los datos se usa la función aleatorio (use la función
aleatorio(menorValor,mayorValor), es decir aleatorio(19,40))
• Se sabe que la cantidad total de personas dentro del local es de 270
• Se quiere saber:
• Cuántas personas son menores de 21 años
• Cuántas personas mayores o igual a 21 años
• Cuántas personas en total
 */

// Declaro Variables

let edadesAcceso: number[] = new Array(270);
let edadMinima: number = 18;
let edadMaxima: number = 40;
let menorDe21: number = 0;
let mayorDe21: number = 0;
//let totalPersonas: number =0;

// Declaro Funciones

function aleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// carga de datos
for (let i: number = 0; i < edadesAcceso.length; i++) {
  edadesAcceso[i] = aleatorio(edadMinima, edadMaxima);
}
// recorro y calculo rangos

for (let i: number = 0; i < edadesAcceso.length; i++) {
  if (edadesAcceso[i] < 21) {
    menorDe21 += 1;
  } else {
    mayorDe21 += 1;
  }
}
// Muestro datos por consola
console.log(
  `Las personas son menores de 21 años: ${menorDe21}, las personas mayores o igual a 21 años son:${mayorDe21} y las personas en total son: ${edadesAcceso.length}`
);
