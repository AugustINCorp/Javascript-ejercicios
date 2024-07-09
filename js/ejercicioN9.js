/*Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

Ejemplo:

input: Hola mundo
Output: oauo
 */
let frase = prompt("Ingrese una frase:");
let vocales = ""; // Las comillas sueltas son para que el console escriba la variable que coincide (Explicacion)

for (let i = 0; i < frase.length; i++) {
  let caracter = frase.charAt(i).toLowerCase();

  if (
    caracter === "a" ||
    caracter === "e" ||
    caracter === "i" ||
    caracter === "o" ||
    caracter === "u"
  ) {
    if (!vocales.includes(caracter)) {
      vocales += caracter + " ";
    }
  }
}

console.log("Las vocales que aparecen en la frase son: " + vocales.trim());
