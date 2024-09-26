//! longitud de una cadena de texto

let cadena = "hola, estoy aprendiendo javascript";
console.log(cadena.length); //calcula los caracteres y espacios en blanco

//GUARDO EL VALOR DE LA CADENA EN UNA VARIABLE:

let resultadocadena = cadena.length;
console.log(resultadocadena);

//!NOTACION DE CORCHETES:

/*
CADENA: H O L A
INDICE: 0 1 2 3 */

console.log(cadena[0]);
console.log(cadena[1]);
console.log(cadena[13]);
console.log(cadena[3]);
console.log(cadena[33]);

let otracadena = "jola";
console.log(otracadena[0]);
console.log(otracadena[1]);
console.log(otracadena[2]);
console.log(otracadena[3]);
console.log(otracadena[4]);
otracadena[0] = "H"; //reasignamos el valor pero no cambia
otracadena = "hola"; //aqui si que le cambiamos el valor de la cadena.
console.log(otracadena);

console.log(otracadena[otracadena.length - 1]);
console.log(otracadena[otracadena.length - 2]);

//! ARRAYS O ARREGLOS:

let miArrayvacio = []; //array vacio
let miArray = ["hola", 23, "esto es un array", true, 3, 24, 5];

console.log(miArray);
console.log(miArray[0]);
console.log(miArray[3]);
console.log(miArray[2]);
console.log(miArray[1]);
console.log(miArray[6]);

let estudiante = ["david", 23, "avila", 2000];
let listaestudiantes = [
  ["david", 23, "avila", 2000, "false", 6], // indice 0
  ["lili", 25, "sevilla", 1998, "true", 2], // indice 1
  ["juan", 24, "valladolid", 1999, "true", 5], // indice 2
  ["pedro", 22, "la rioja", 2001, "false", 4], // indice 3
];
console.log(listaestudiantes);
console.log(listaestudiantes[1][0]);
console.log(listaestudiantes[2][4]);
console.log(listaestudiantes[3][3]);
console.log(listaestudiantes[0][5]);

//!cambios valor de array:

console.log(miArray);
console.log(miArray[0]);
miArray[0] = "adios"; //aqui cambiamos el valor del indice 0
console.log(miArray[0]);

//! METODO PUSH:
/*NOS PERMITE AÑADIR UN ELEMENTO AL FINAL DE UN ARRAY PUSH (PARAMETRO)*/

estudiante.push("garcia"); //añade el ultimo valor
console.log(estudiante);

//! METODO POP: ELIMINAN EL ULTIMO VALOR DE UN ARRAY Y DEVOLVERA EL VALOR ELIMINADO.

let ultimovaloreliminado = estudiante.pop(); //eliminamos el ultimo valor y lo guardamos
console.log(ultimovaloreliminado);
console.log(estudiante.pop()); //aqui eliminamos el ultimo valor
console.log(estudiante); //aqui vemos ya lo que queda.

//! METODO SHIFT: ELIMINA EL PRIMER VALOR DE UN ARRAY Y DEVOLVERA EL VALOR ELIMINADO.

let primervalorArray = estudiante.shift();
console.log(estudiante); //aqui eliminamos el primer valor
console.log(estudiante); //aqui ya lo que queda.

//! METODO UNSHIFT: AÑADE UN ELEMENTO AL PRINCIPIO DE UN ARRAY Y DEVOLVERA EL VALOR ELIMINADO.
let nuevovalorestudiante = estudiante.unshift("david"); //añadimos un valor al principio del array.
console.log(nuevovalorestudiante);
console.log(estudiante);

//? CREAR UNA LISTRA DE LA COMPRA.
//? IR AÑADIENDO PRODUCTOS A LA LISTA.
//? AL FINAL ME DEVUELVE EL TOTAL DE PRODUCTOS AÑADIDOS  Y LA LISTA DE PRODUCTOS.

//LISTA DE LA COMPRA:

let listaCompra = [
  "manzana",
  "pera",
  "naranja",
  "uva",
  "melon",
  "sandia",
  "platano",
  "kiwi",
  "limon",
];
console.log(listaCompra);
console.log(listaCompra.length);

listaCompra.push("pimienton");
listaCompra.push("cebolla");
listaCompra.push("tomate");
listaCompra.unshift("cilantro"); //principio lista
listaCompra.unshift("limon"); //principio lista

console.log(listaCompra);
console.log(listaCompra.length);

/*Simula una cola de clientes en una tienda donde puedes agregar clientes al final de la cola, atender al primer cliente (eliminarlo de la cola), agregar clientes al inicio de la cola (cliente VIP) y despedir al último cliente (eliminarlo de la cola). */

let colaClientes = [
  "david",
  "juan",
  "pedro",
  "lili",
  "ana",
  "maria",
  "jose",
  "luis",
];
console.log(colaClientes);
colaClientes.push("angela");
colaClientes.push("gustavo");
colaClientes.push("jessica");
colaClientes.push("genesis");
colaClientes.push("luis");

let primerCliente = colaClientes.shift();
console.log(primerCliente);
let primerCliente2 = colaClientes.shift();
console.log(primerCliente2);

let clienteVIP = colaClientes.unshift("MOHAMET");
console.log(colaClientes);
console.log(colaClientes.length);
console.log(
  clienteVIP
); /*aqui no entinedo por que pasa esto (esta bien te devuelve eel valor del total del listado */

let ultimoCliente = colaClientes.pop();
console.log(ultimoCliente);

/*Simula un historial de navegación de un navegador donde puedes agregar nuevas páginas visitadas al final del historial, eliminar la primera página visitada, agregar una página visitada al inicio del historial (por error) y eliminar la última página visitada. */

let historialNavegacion = [
  "pagina1",
  "pagina2",
  "pagina3",
  "pagina4",
  "pagina5",
];
console.log(historialNavegacion);
historialNavegacion.push("pagina6");
historialNavegacion.push("pagina7");
historialNavegacion.push("pagina8");

let primerPagina = historialNavegacion.shift();
console.log(primerPagina);
let primerPagina2 = historialNavegacion.shift();
console.log(primerPagina2);

let paginaViperror = historialNavegacion.unshift("paginaVip");
console.log(historialNavegacion);
console.log(paginaViperror); //!aqui otra vez no entiendo por que pasa eso.(esta bien mija)
console.log(historialNavegacion.length);

historialNavegacion.unshift("camara");
console.log(historialNavegacion);

//!FUNCIONES
//NOS PERMITEN CREAR CODIGOS REUTILIZABLES.

let resultado;

//suma de dos valores:

resultado = 2 + 4;
console.log(resultado);

resultado = 34 + 56;
console.log(resultado);

//DECLARAR UNA FUNCION:

function nombredefuncion() {
  console.log("Buenos dias a todas y todos");
}
nombredefuncion();
nombredefuncion();
nombredefuncion();
nombredefuncion();
nombredefuncion();
nombredefuncion();
nombredefuncion();

function sumar(a, b) {
  console.log(a + b);
}
sumar(23, 54);
sumar(30, 4);
sumar(13, 44);
sumar(26, 98);
sumar(33, 14);

function datospersonales(nombre, apellido, edad) {
  console.log(
    "Me llamo " +
      nombre +
      " y mi apellido es " +
      apellido +
      " y tengo " +
      edad +
      " años"
  );
}
datospersonales("maria", "martin", 23);
datospersonales("david", "avila", 23);

// Ejericio 1: Crear una función que calcule el área de un rectángulo. Que tome dos números (largo y ancho) y devuelva el área.

function areaRectangulo(largo, ancho) {
  console.log(largo * ancho);
}
areaRectangulo(9, 26);
areaRectangulo(12, 28);
areaRectangulo(10, 20);

// Ejercicio 2: Convertir Grados Celsius a Fahrenheit.Crea una función que tome una temperatura en grados Celsius y la convierta a grados Fahrenheit

function gradosCelsius(grados) {
  console.log(grados * 1.8 + 32);
}
gradosCelsius(25);
gradosCelsius(34);

// Ejercicio 3: Crear una función que calcule el número de caracteres de una cadena.

function numeroCaracteres(cadena) {
  console.log(cadena.length);
}
numeroCaracteres("aqui hay 22 caracteres");
numeroCaracteres("mas el o agregado");

// Ejericio 4: Crea una función que reciba como parámetros un nombre y que almacene el valor en un array. Luego muestra el array con los datos almacenados

function nombre(nombre) {
  let nombresalmacenados = []; //!array vacio para almacenar los nombres.
  nombresalmacenados.push(nombre);
  console.log(nombresalmacenados);
}

nombre("david");
nombre("maria");
nombre("juan");
nombre("luis");

//Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. Escribe una función que dado el número de comensales calcule las cantidades de ingredientes necesarias

// function invitados (comensales) {
//   let patatas = comensales * 200;
//   let huevos = patatas /5;
//   let huevos = comensales * 5;
//   let cebolla = comensales * 300;
//   console.log(patatas, huevos, cebolla);
// }

invitados(15);
function invitados(comensales) {
  let patatas = comensales * 200;
  let patatakilo = patatas / 1000;
  let huevos = patatakilo * 5;
  let cebolla = patatakilo * 300;
  console.log(patatas, huevos, cebolla);

  // invitados( 15);
  // function invitados (comensales) {
  //  let comensales = parseInt(prompt("¿cuantos comensales asistiran?"));
  // patatas=  comensales * 200 /1000;
  // huevos = patatas *5;
  // cebolla = patatas *300;
  // console.log(patatas);
}
//! receta(comensales);
//CAMBIO VALOR VARIABLES:
let datouno = 3;
let datodos = 4;

function cambiovariables(valora, valorb) {
  console.log(valora);
  console.log(valorb);
  let variableaux;
  variableaux = valora;
  console.log(variableaux);
  valora = valorb;
  console.log(valora);
  valorb = variableaux;
  console.log(valorb);

  cambiovariables(datouno, datodos);
  console.log(cambiovariables(datouno, datodos));
}

//!funcion donde fue definida:

//prioridad de variables:

let minombre = "david";

function datos() {
  let minombre = "juan";
  console.log(minombre);
}

datos();
console.log(minombre);

/*devolver el valor de una funcion:*/

function suma(a, b) {
  return a + b;
}
console.log(suma(3, 6));

function resta(a, b) {
  console.log(a - b);
}
console.log(resta(4, 3));

//asignar valor de la funcion a una variable:
let elresultado = suma(3, 5);
console.log(elresultado);
elresultado = suma(47, 87);
console.log(elresultado);

//Devolver cadena de caracteres:
function saludo(nombre) {
  return "Buenos dias " + nombre;
}
resultado = saludo("david");
console.log(resultado);

// Ejercicio: Siguiente en la final: tenemos un array fila = [1,2,3,4,5]Define una función "siguienteEnLaFila" que reciba un array(array) y un número(elemento) como argumentos. Agrega el número al final del array y luego elimina el primer elemento del array. La función "siguienteEnLaFila" debe devolver el elemento eliminado.

let fila = [1, 2, 3, 4, 5];

function siguienteEnLaFila(array, numero) {
  array.push();
  let eliminado = array.shift();
  return eliminado;
}
console.log(siguienteEnLaFila(fila, 5));
console.log(fila);

//OPERADORES LOGICOS;

//OPERADOR AN:(Y)
// X / Y / X / && Y
/* T / T / T
 T / F / F
 F / T / F
 F / F / F */

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
let a = 5;
console.log(a > 0 && a < 20);

//OPERADOR OR:(O)
/*
 X / Y / X / && Y
 T / T / T
 T / F / T
 F / T / T
 F / F / F 
 */
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
let b = 5;
console.log(b < 0 || a > 20);

//OPERADOR NOT:(NO) (!)
/*
 X / X
 T / F
 F / T / 
*/
console.log(!(a < 0));
//para mostar el if siempre la condicion tiene que ser verdadera
if (true) {
  console.log("Es verdadero ");
}
let numero = 24;
if (numero > 0) {
  console.log(" vedadero ");
}

if (numero < 10 || numero < 40) {
  console.log("para que estose vea lo de arriba tiene que ser verdadero");
}
//!condicional if -else:
//probando cadenas :

let estacion = "verano";

if (estacion == "invierno") {
  console.log("es invierno");
} else {
  console.log("es otra estacion");
}
numero = 4;
if (numero > 20) {
  console.log("El numero " + numero + " es mayor");
} else {
  console.log("El numero " + numero + " es menor ");
}

/* Condicional IF | ELSE | IF | ELSE */

let dia = "lunes";

if (dia == "sabado") {
  console.log("Si, es" + dia + " fin de semana");
} else if (dia == "domingo") {
  console.log("Si, es" + dia + " fin de semana");
} else {
  console.log("no es fin de semana");
}

// el la siguiente puede coger a cualquiera de los dos sbado o domingo:
//! let dias = "domingo";

// !if (dias == "sabado" || dias == "domingo")   {
//  ! console.log ("Si, es " + dias + " fin de semana");}

//   !function findesemana(valor) {
//    ! if (valor== "domingo")  {
//     !  return "Si, es" + valor + " fin de semana";}

//    ! else if valor == "domingo" {
//     ! return "Si, es" + valor + " fin de semana";

//    ! }
//    ! else{
//     ! return "no es fin de semana";
//   !  }}
//    ! console.log(findesemana("lunes"));
//    ! console.log(findesemana("domingo"));

//     If - else if - else:
// Crea una función que tome una edad como parámetro y devuelva si la persona es tiene edad para votar.

function votar(edad) {
  if (edad > 17) {
    console.log("Si tienes " + edad + " años de edad, puedes votar");
  } else {
    console.log("Si tienes  " + edad + " años de edad, no puedes votar");
  }
}
votar(30);
votar(18);
votar(15);

// Crea una función que tome un puntaje (número entre 0 y 10) y devuelva una calificación (Suspenso, Aprobado,Sobresaliente,Matrícula).

function calificacion(puntuacion) {
  if (puntuacion >= 10) {
    console.log("matricula");
  } else if (puntuacion >= 9) {
    console.log("sobresaliente");
  } else if (puntuacion >= 5) {
    console.log("Aprobado");
  } else if (puntuacion <= 4) {
    console.log("Suspenso");
  }
}
calificacion(10);
calificacion(9);
calificacion(7);
calificacion(2);

// Crea una función que tome dos números como parámetros y devuelva el mayor de ellos.

function mayor(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(numero1);
  } else {
    console.log(numero2);
  }
}
mayor(10, 20);
mayor(33, 42);
mayor(200, 45);

//Crea una función que tome un número(entero) como parámetro y devuelva si el número es par o impar.

function parimpar(numer) {
  if (numer % 2 == 0) {
    console.log("El numero " + numer + " es par");
  } else {
    console.log("El numero " + numer + " es impar");
  }
}

parimpar(2);

parimpar(3);

function parompar(numeri) {
  if (numeri % 2 == 0) {
    console.log("El numero " + numeri + " es par");
    return "el nuemero es par";
  } else {
    console.log("El numero " + numeri + " es impar");
    return "el numero es impar";
  }
}
console.log(parompar(5));

// Crea una función que tome un año como parámetro y devuelva si es un año bisiesto o no. Partiendo de estos datos:
//  - Todos los años bisiestos son divisibles entre 4.
//  - Aquellos años que son divisibles entre 4, pero no entre 100, son bisiestos.
//  - Los años que son divisibles entre 100, pero no entre 400, no son bisiestos.
// - Sin embargo, los años divisibles entre 100 y entre 400 sí que son bisiestos.

function bisiesto(anio) {
  if ((anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0) {
    //!estudiar esta operacion
    return "El año " + anio + " es bisiesto";
  } else {
    return "El año " + anio + " no es bisiesto";
  }
}
console.log(bisiesto(2024));

/*SENTENCIA SWITCH:*/
function clasifica(valor) {
  let respuesta;
  switch (valor) {
    case 1:
      respuesta = "uno";
      break;
    case 2:
      respuesta = "dos";
      break;
    case 3:
      respuesta = "tres";
      break;
    case 4:
      respuesta = "cuatro";
      break;
    default:
      respuesta = "el numero no esta entre 1 y 4";
      break;
  }
  return respuesta;
}
console.log(clasifica(7));

// RESTAURANTE:

function pedidos(tipodepedido) {
  let precio;

  switch (tipodepedido) {
    case "hamburguesa":
      precio = "El precio de " + tipodepedido + " es de 15 euros";
      break;
    case "pizza":
      precio = "El precio de " + tipodepedido + " es de 20 euros";
      break;
    case "ensalada":
      precio = "El precio de " + tipodepedido + " es de 10 euros";
      break;
    case "bebida":
      precio = "El precio de " + tipodepedido + " es de 5 euros";
      break;
    default:
      precio = "El pedido no esta disponible";
      break;
  }
  return precio;
}
console.log(pedidos("pizza"));

// switch
// Crea una función que reciba una temperatura y la unidad de medida (Celsius o Fahrenheit) y convierta la temperatura a la otra unidad. Utiliza una sentencia switch para determinar la conversión a realizar.

// function gradosCelsius(celsius, Fahrenheit) {
//   let celsius;
//   let Fahrenheit;
//   Fahrenheit = celsius * 1.8 + 32;
// }
// console.log(Fahrenheit);

// function celsius (a - 32) * 5 / 9) {
//   let convercion;

//   switch (temperatura) {
//     case "Celsius":
//       convercion =  (temperatura - 32) * 5 / 9;
//       break;
//     case "Fahrenheit":
//       convercion = (temperatura * 9) / 5 + 32;
//       break;
//   } return convercion;
// }   console.log(temperatura("celsius"));

//  Crea una función que reciba las horas trabajadas y la tarifa por hora, y calcule el salario semanal. Las horas extras (más de 40 horas) se pagan al 50% extra de la tarifa por hora.
