 /*Math*/
 let numAleatorio = Math.random();

 console.log(numAleatorio);
 console.log(numAleatorio);

 function numaleatorio() {
   let numRandom = Math.random();

   console.log(numRandom(1));
 }
// //numero entero aleatorio
// function numerorandomparametro(valor) {
//   let numaleatorioentero = Math.floor(Math.random() * 10);

//   return numaleatorioentero;
// }
// console.log(numaleatorioentero());

//! Redondear a un número de decimales: Se puede utilizar la combinación de las funciones Math.pow() y Math.floor() para redondear un número a un número específico de decimales

function redondearDecimales(numero, decimales) {
  const factor = Math.pow(10, decimales);
  return Math.floor(numero * factor) / factor;
}

const numeroConDecimales = 12.3456789;
const numeroRedondeadoDosDecimales = redondearDecimales(numeroConDecimales, 2);
console.log(numeroRedondeadoDosDecimales);

//!Numeros Aleatorios con rango superior e inferior

function randomSupInf(ranInferior, ranSuperior) {
  let formula = ranSuperior - ranInferior + 1;
  let numAleatorio = Math.floor(Math.random() * formula) + ranInferior;
  return numAleatorio;
}
for (let i = 0; i < 5; i++) {
  console.log(randomSupInf(12, 150));
}

//!Crea una función que simule un dado. valores de 1 -
function tirarDado() {
  // Genera un número aleatorio entre 1 y 6
  const numeroAleatorio = Math.floor(Math.random() * 6) + 1;

  // Devuelve el número del lado del dado
  return numeroAleatorio;
}

const resultadoTirada = tirarDado();
console.log("Ha salido el número:", resultadoTirada);

function dado() {
  return Math.floor(Math.random() * 6) + 1;
}
for (let i = 0; i < 10; i++) {
  console.log(dado());
}

//!Crea una función que genere una contraseña aleatorio: dependiendo del parámetro que le pasemos. listaCaracteres ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

function generarContraseña(longitud, listaCaracteres) {
  // Inicializar la contraseña vacía
  let contraseña = "";

  // Generar la contraseña aleatoria
  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * listaCaracteres.length);
    const caracterAleatorio = listaCaracteres[indiceAleatorio];
    contraseña += caracterAleatorio;
  }

  // Devolver la contraseña generada
  return contraseña;
}
const contraseña10Caracteres = generarContraseña(
  10,
  "abcdefghijklmnopqrstuvwxyz"
);
console.log("Contraseña:", contraseña10Caracteres);

const contraseña15CaracteresConSimbolos = generarContraseña(
  8,
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"
);
console.log(
  "Contraseña de 8 caracteres con símbolos:",
  contraseña15CaracteresConSimbolos
);

//!Crea una función que genere colores hexadecimales aleatorios. valores = "0123456789ABCDEF"

function generarColorHexadecimalAleatorio() {
  let valores = "0123456789ABCDEF";
  // Inicializar el color hex
  let colorHex = "#";
  // Generar 6 caracteres aleatorios
  for (let i = 0; i < 6; i++) {
    const indiceAleatorio = Math.floor(Math.random() * valores.length);
    const caracterAleatorio = valores[indiceAleatorio];
    colorHex += caracterAleatorio;
  }

  // Devolver el color hexadecimal generado
  return colorHex;
}
const colorAleatorio1 = generarColorHexadecimalAleatorio();
console.log("Color hexadecimal aleatorio:", colorAleatorio1);

//!profe

// function passAleatorio(valor) {
//   let valor = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//   let pass = "";
//   for (let i = 0; i < valor.length; i++) {
//     const indiceAleatorio = Math.floor(Math.random() * valor.length);
//     const caracterAleatorio = valor[indiceAleatorio];
//     pass += caracterAleatorio;
//   }
//   return pass;
// }
// console.log ( " la contraseña es " caracterAleatorio);

//! Operador ternario
// se puede hacer de esta manera
const y = 5;
const x = 3;

if (x > y) {
  console.log("x es mayor que y");
} else {
  console.log(" y es menor que x");
}
// o se puede hacer de esta otra manera.
//!operador ternario
const valor = x < y ? x : y;
console.log(valor);

//!otra forma de revisar

function valorminimo(a, b) {
  return a > b ? " el valor minimo es  " + b : " el valor minimo es " + a;
}
console.log(valorminimo(3, 4));

let num1 = 5;
let num2 = 7;

const resul = num1 > num2 ? num1 + 5 : num2 + 6;
console.log(resul);

/* */

// function esMayor (a,b) {
//   if (a > b ) {
//     return "El mayor es " + a;}
//     else {
//       return "El mayor es " + b;
//     }
//    else {
//       return "Los numeros son iguales";
//     }
// }
function esMayor(a, b) {
  let resultado =
    a > b
      ? " el mayor es a; " + a
      : a < b
      ? "el mayor es b: " + b
      : "son iguales";
  return resultado;
}

console.log(esMayor(3, 6));

//! funciones flecha

function saludo() {
  return "hola";
}
const funcionanonima = () => {
  return " soy anonimo ";
};
const fecha = () => new Date();
console.log(fecha().getHours());
console.log(fecha().getMinutes());

//! ejemplo de como hacer el problema de los dados

const dados = () => {
  return Math.floor(Math.random() * 6) + 1;
};

for (let i = 0; i < 5; i++) {
  console.log(dados());
}

//EJEMPLO: para unir arrays

const concatarray = (arr1, arrr2) => {
  return arr1.concat(arrr2);
};
console.log(concatarray([1, 2, 3, 4], ["a", true, 2]));



/*! loteria
Realiza un programa que sea un simulador de sorteo de lotería.

Crea un programa que genere un número de 5 dígitos de forma aleatoria siendo cada uno de los dígitos un número del 0 al 9.

Crea un programa que pida por parámetros el número premiado y el número jugado. En ese orden.
Ambos números tendrán 5 dígitos en los que cada uno de ellos será un número del 0 al 9. Mostrará el resultado según los siguientes supuestos:

·Premio 1€: si termina y/o empieza por la misma cifra.

·Premio 5€: si termina por las 2 últimas cifras.

·Premio 50€: si termina por las 3 últimas cifras.

·Premio 500€: si termina por las 4 últimas cifras.

·Premio 5000€: si es el número premiado.

·No premiado: en los casos restantes.

Para realizar el ejercicio es conveniente organizar el código en funciones. */

// Función para generar un número aleatorio de 5 dígitos
function generarNumeroAleatorio() {
  let numero = "";
  for (let i = 0; i < 5; i++) {
    numero += Math.floor(Math.random() * 10).toString();
  }
  return numero;
}

// Función para comprobar si un número es premio
function comprobarPremio(numeroJugado, numeroPremiado) {
  let premio = "No premiado";

  // Comprobar si termina y/o empieza por la misma cifra
  if (numeroJugado.charAt(0) === numeroPremiado.charAt(0) || numeroJugado.charAt(4) === numeroPremiado.charAt(4)) {
    premio = "Premio 1€";
  }

  // Comprobar si termina por las 2 últimas cifras
  if (numeroJugado.substr(3) === numeroPremiado.substr(3)) {
    premio = "Premio 5€";
  }

  // Comprobar si termina por las 3 últimas cifras
  if (numeroJugado.substr(2) === numeroPremiado.substr(2)) {
    premio = "Premio 50€";
  }

  // Comprobar si termina por las 4 últimas cifras
  if (numeroJugado.substr(1) === numeroPremiado.substr(1)) {
    premio = "Premio 500€";
  }

  // Comprobar si es el número premiado
  if (numeroJugado === numeroPremiado) {
    premio = "Premio 5000€";
  }

  return premio;
}

// Solicitar el número premiado
let numeroPremiado = prompt("Ingrese el número premiado (5 dígitos): ");
while (numeroPremiado.length !== 5 || !/^[0-9]{5}$/.test(numeroPremiado)) {
  numeroPremiado = prompt("Error. Ingrese el número premiado (5 dígitos): ");
}

// Solicitar el número jugado
let numeroJugado = prompt("Ingrese el número jugado (5 dígitos): ");
while (numeroJugado.length !== 5 || !/^[0-9]{5}$/.test(numeroJugado)) {
  numeroJugado = prompt("Error. Ingrese el número jugado (5 dígitos): ");
}

// Mostrar el resultado
let resultado = comprobarPremio(numeroJugado, numeroPremiado);
alert(resultado);





//! O bien
//funcion para generar un numero aleatorio de 5 digito
function generarnumeroaleatorio (){
  let numero = "";
  for (let i = 0; i < 5; i++) {
    numero +=  Math.floor(Math.random()*10).toString;
  } return numero;}
  console.log(generarnumeroaleatorio());
  let numeroaleatorio = generarnumeroaleatorio();
function comprobarelpremio () {
  let numerojugador = prompt ("ingrese su numero ")

}