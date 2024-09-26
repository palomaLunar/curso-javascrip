//Variables de ámbito GLOBAL
let variableGlobal = 5;

console.log(variableGlobal);
function mifuncion() {
  console.log(variableGlobal);
}
mifuncion();

// Variables LOCALES
function otraFuncion() {
  let variableLocal = "Uno";
  console.log(variableLocal);
}
otraFuncion();
//console.log(variableLocal); // -> No se usa fuera de la función donde fue definida

// Prioridad de variables
let miNombre = "David";

function datos() {
  let miNombre = "Juan";
  console.log(miNombre);
}
datos();
console.log(miNombre);

/**
 * Devolver el valor de una función
 */

function suma(a, b) {
  // console.log(a + b);
  return a + b;
}
console.log(suma(3, 4));

function resta(a, b) {
  console.log(a - b);
}
console.log(resta(4, 3));

// Asignar valor de la función a una variable

let resultadoSuma;

resultadoSuma = suma(3, 5);
console.log(resultadoSuma);
resultadoSuma = suma(34, 87);
console.log(resultadoSuma);

// Devolver cadena de caracteres
function saludo(nombre) {
  return "Buenos dias " + nombre;
}

let resultadoSaludo;
resultadoSaludo = saludo("David");
console.log(resultadoSaludo);
/**
Siguiente en la final: tenemos un array fila = [1,2,3,4,5].
Define una función "siguienteEnLaFila" que reciba un array(array) y un número(elemento) como argumentos. Agrega el número al final del array y luego elimina el primer elemento del array. La función "siguienteEnLaFila" debe devolver el elemento eliminado.
 */
let fila = [1, 2, 3, 4, 5];
function siguienteEnLaFila(array, elemento) {
  array.push(elemento);
  return array.shift(); //devuelve el valor eliminado
  // let eliminado = array.shift();
  // return eliminado;
}
console.log(fila);
console.log(siguienteEnLaFila(fila, 89));
console.log(fila);

/**
 * OPERADORES LÓGICOS
 */
// OPERADOR: AND (y)
/**
 * X | Y | X && Y
 * --------------
 * T | T |  T
 * T | F |  F
 * F | T |  F
 * F | F |  F
 */

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
let a = 5;
//(a > 0) && (a < 20) -> true
console.log(a < 0 && a < 20);

// OPERADOR: OR (o)
/**
 * X | Y | X || Y
 * --------------
 * T | T |  T
 * T | F |  T
 * F | T |  T
 * F | F |  F
 */

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
//let a = 5;
console.log(a > 0 || a > 20);

// OPERADOR: NOT (no) -> !
/**
 * X | !X |
 * --------------
 * T | F |
 * F | T |
 */
console.log(!(a > 0));

/**
 * CONDICONAL: IF
 */

if (true) {
  console.log("Es verdadero");
}

let numero = 24;

if (numero > 0) {
  console.log("Verdadero");
}

if (numero < 10 || numero < 40) {
  console.log("Es verdadero");
}

/**
 * CONDICIONAL: IF - ELSE
 */
// Probando cadenas
let estacion = "Invierno";

if (estacion === "Invierno") {
  console.log("Es Invierno");
} else {
  console.log("Es otra estación");
}

numero = 4;
if (numero > 20) {
  console.log("El número " + numero + " es Mayor");
} else {
  console.log("El número " + numero + " es Menor");
}
/**
 * CONDICIONAL: IF - ELSE IF - ELSE
 */
//Comprueba si es fin de semana
function finDeSemana(valor) {
  // if (dia == "Sábado" || dia == "Domingo") {
  if (valor == "Sábado") {
    return "Sí, es " + valor + ". Fin de Semana";
  } else if (valor == "Domingo") {
    return "Sí, es " + valor + ". Fin de Semana";
  } else {
    return "No es fin de Semana.";
  }
}
let dia = "Sábado";
console.log(finDeSemana("Lunes"));
console.log(finDeSemana("Domingo"));

function parImpar(params) {
  if (params % 2 == 0) {
    return "Es par";
  } else {
    return "Es impar";
  }
}
console.log(parImpar());

function anioBisiesto(anio) {
  if ((anio % 4 == 0 && anio % 100 !== 0) || anio % 400 == 0) {
    return "Es bisiesto";
  } else {
    return "No es bisiesto";
  }
}
console.log(anioBisiesto(1945));

let valor = 9;

// if (valor < 10) {
//   console.log(valor);
//   return "Es menor a 10";
// } else if (valor < 15) {
//   console.log(valor);
//   return "Es menor a 15";
// } else if (valor < 20) {
//   console.log(valor);
//   return "Es menor a 20";
// } else {
//   return "Es otro número";
// }

/**
 * SENTENCIA SWITCH ->
 */

function clasifica(valor) {
  let respuesta;
  switch (valor) {
    case 1:
      respuesta = "Uno";
      break;
    case 2:
      respuesta = "Dos";
      break;
    case 3:
      respuesta = "Tres";
      break;
    case 4:
      respuesta = "Cuatro";
      break;
    /* ------------- */
    default:
      respuesta = "El número no esta entre 1 y 4";
      break;
  }
  return respuesta;
}
console.log(clasifica(2));

function pedido(tipoDePedido) {
  let precio;
  switch (tipoDePedido) {
    case "hamburguesa":
      precio = "El precio de la " + tipoDePedido + " es: €15.90";
      break;
    case "pizza":
      precio = "El precio de la " + tipoDePedido + " es: €12.90";
      break;
    case "ensalada":
      precio = "El precio de la " + tipoDePedido + " es: €10.90";
      break;
    default:
      precio = "Tienes que elegir entre hamburguesa, pizza o ensalada";
      break;
  }
  return precio;
}
// Restaurante
let orden = "pan";
// hamburguesa, pizza y ensalada
console.log(pedido(orden));
