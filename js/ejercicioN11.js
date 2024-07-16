/**Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210

Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
 */

let numero = parseInt(prompt('Ingrese un número:'))
let divisibles = ""; // Las comillas sueltas son para que el console escriba la variable que coincide (Explicacion)

if (numero % 2 === 0) {
    divisibles += " 2 ";
}
if (numero % 3 === 0) {
    divisibles += " 3 ";
}
if (numero % 5 === 0) {
    divisibles += " 5 ";
}
if (numero % 7 === 0) {
    divisibles += " 7 ";
}

if (divisibles !== "") {
    console.log(numero + " es divisible por: " + divisibles);
} else {
    console.log(numero + " no es divisible por 2, 3, 5 ni 7.");
}
