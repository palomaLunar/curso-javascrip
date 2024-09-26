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
console.log(suma(3, 4));

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
     
  } return precio;
}
console.log(pedidos("pizza"));

// switch
// Crea una función que reciba una temperatura y la unidad de medida (Celsius o Fahrenheit) y convierta la temperatura a la otra unidad. Utiliza una sentencia switch para determinar la conversión a realizar.


function gradosCelsius(celsius, Fahrenheit) {
  let celsius;
  let Fahrenheit;
 Fahrenheit = (celsius * 1.8 + 32);

}
 console.log(Fahrenheit);   

 function celsius (temperatura, unidadmedida) {
   let resultado;

  switch (unidadmedida) {
  case "Celsius":
  resultado =  (temperatura - 32) * 5 / 9;
  break;
  case "Fahrenheit":
  resultado = temperatura * 1.8  + 32;
  break;
  default:
  resultado = "La unidad de medida no esta disponible";
  break;
}} return: resultado;

console.log(celsius(unidadmedida,temperatura));














//  Crea una función que reciba las horas trabajadas y la tarifa por hora, y calcule el salario semanal. Las horas extras (más de 40 horas) se pagan al 50% extra de la tarifa por hora.

