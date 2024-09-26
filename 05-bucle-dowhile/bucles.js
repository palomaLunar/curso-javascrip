/* BUCLE DO WHILE***/

let x = 1;

do {
  console.log(x);
  x++;
} while (x <= 10);

// Utilizando un bucle, mostrar la suma y la media de los números introducidos hasta introducir un número negativo y ahí mostrar el resultado

// !

// let sumar = 0;
// let contadorr = 0;
// while (true) {
//   let numero = prompt(
//     "Introduce un numero o un numero negativo para finalizar"
//   );
//   numero = parsefloat(); //numeros decimales
//   if (numero < 0) {
//     break;
//   }
// }
// suma += numera;
// contador++;

// let media = suma / contador;
// alert("la suma de los numeros introducids es - " + suma);
// alert("la media de los numerosintroducidos es: " + media);

//BUCLE: FOR

for (let i = 0; i < 10; i++) {
  console.log("hola");
}
let miArray = [];
for (let i = 1; i <= 10; i++) {
  miArray.push(i);
}
console.log(miArray);

let impares = [];
for (let i = 1; i < 20; i += 2) {
  impares.push(i);
}
console.log(impares);

let pares = [];
for (let i = 26; i > 0; i -= 2) {
  pares.push(i);
}
console.log(pares);

function muestrapares(numero) {
  let numPares = [];
  for (let i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
      numPares.push(i);
    }
  }
  return numPares;
}
console.log(muestrapares(33));

//! ITERAR UN ARRAY
let arraynumeros = [1, 2, 3, 4, 5, 6, 7, 8];
let suma = 0;
//! ITERAR SOBRE UN ARRAY DE NUMEROS
for (let i = 0; i < arraynumeros.length; i++) {
  console.log(i);
  console.log(arraynumeros[i]);
  console.log((suma += arraynumeros[i]));
}
//! SUMA += ARRAYNUMEROS
// console.log(suma);

// let cadenaarray = ["js", "html", "css", "php", "c++", "c#"];

// for (let i = 0; i < cadenaarray.length; i++) {
//   console.log(i);
//   console.log(cadenaarray[i]);
// }

// for (let i = 0; i < cadenaarray.length; i++) {
//   console.log(i);
//   console.log(cadenaarray[i].toUpperCase);
//   console.log(cadenaarray[i].toLowerCase);
// }
//! Vamos a crear una función que devuelva el total de números pares que hay en un array.

function muestrapares(numero) {
  let numPares = [];
  for (let i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
      numPares.push(i);
    }
  }
  return numPares;
}
console.log(muestrapares(10));

// let array = [];
// function contarPares(array) {
//   let contadorPares = [];

//   for (let i = 0; i <= array; i++) {
//     if ( % 2 === 0) {

//     }
//   }
//   return contadorPares;
// }
// console.log(contadorpares);
// function totalpares(arr) {
//   let contador = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       contador++;
//     }
//   }
//   return contador;
// }
// let listanumero = [3, 45, 65, 23, 4, 2, 8, 34, 987, 4];
// console.log(totalpares(listanumero));
// //! hacer un programa que muestre todos los numeros que hay entre dos numeros sin incluirlos.
// function mostrarNumerosEntre(a, b) {
//   let a = 0;
//   let b = 0;
//   let resultado = [];
//   // Validar que el valor final sea mayor que el inicial
//   if (a < b) {
//     mayor = a;
//     menor = b;
//   } else {
//     mayor = b;
//     menor = a;
//   }
//   for (let i = menor + 1; i < mayor; i++) {
//     resultado.push(i);
//   }
//   return resultado;
// }
// function contarPares(array) {
//   let pares = 0;
//   for (let numero of array) {
//     if (numero % 2 === 0) {
//       pares++;
//     }
//   }
//   return pares;
// }
// console.log(pares);
// //
// function mostrarRango(inicio, fin) {
//   let inicio = 0;
//   let fin = 0;
//   let resultado = [];
//   if (inicio > fin) {
//     console.error("El valor inicial no puede ser mayor que el valor final");
//   }

//   for (let numero = inicio; numero <= fin; numero++) {
//     console.log(numero);
//   }
//   return resultado;
// }

// //
// function numeroDeAes(cadena) {
//   let contador = 0;
//   for (let i = 0; i < cadena.length; i++) {
//     if (cadena === "a") {
//       contador++;
//     }
//   }
//   return contador;
// }
// mifrase = "La función mostrarRango recibe dos parámetros: inicio y fin"
// "Se valida que inicio no sea mayor que fin. Si lo es, se muestra un mensaje de error y se termina la función."
// "Se recorre desde inicio hasta fin usando un bucle for."
// "Dentro del bucle, se imprime cada número en la consola."
// "Al final, se llama a la función mostrarRango con los valores introducidos por el usuario."
// console.log(numeroDeAes("cuantas a hay en un parrafo"));
//! bucles for ANIDADO

let arrayAnidado = [
  [1, 2, 3], //0
  [4, 5, 6], //1
  [7, 8, 9], //2
];
for (let i = 0; i < arrayAnidado.length; i++) {
  console.log(arrayAnidado[i]);
  let array2 = arrayAnidado[i];
  for (let j = 0; j < array2.length; j++) {
    console.log(array2[j]);
  }
}
/* MATH. */
let numAleatorio = Math.random();

console.log(numAleatorio);
numAleatorioEntero = Math.floor(Math.random() * 120);
console.log(numAleatorioEntero);
//math.floor = conseguir enteros
//math.random = un numero aleatorio entrre 0 y 1. pero nunca es uno.
for (let i = 0; i < 10; i++) {
  console.log(numAleatorioEntero);
}
//! vamos a estudiar for, bucles y arrays.
// Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La función debe devolver el número de veces que aparece el caracter en el string.

function numeroDeCaracteres(cadena, caracter) {
  let contador = 0;

  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === caracter) {
      contador++;
    }
  }

  return contador;
}
let cadena =
  "Bucle for: Se recorre la cadena caracter por caracter utilizando un bucle for.!";
let caracter = "o";

let numeroOcurrencias = numeroDeCaracteres(cadena, caracter);
console.log(
  "El caracter '" +
    caracter +
    "' aparece " +
    numeroOcurrencias +
    " veces en la cadena '" +
    cadena +
    "'"
);
//bucles Anidados

function piramide(params) {
  for (let i = 0; i < params; i++) {
    let pisos = " ";
    for (let j = 0; j < i + 1; j++) {
      // console.log (i + ""  + j);
      pisos = pisos + "#";
    }
    console.log(pisos);
  }
}
piramide(8);
