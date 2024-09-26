/* Objetos */
//!como los arrays se les permite guardar varios tipos de datos.

// const objeto = {
//   propiedad: valor,
//   clave: valor,
function notasfinales() {
  return 7;
}
const mificha = {
  nombre: "paloma",
  edad: 26,
  matriculado: "luna",
  codigopostal: 47012,
  1: "valladolid",
  asignaturas: ["html", "css", "javascript", "php"],
  nombrespadres: {
    padre: "JUAN",
    madre: "MARIA",
  },
  notafinal: notasfinales(4),
};
//nombre: es la clave mientras que  "paloma", es el valor.----------------
//llamar al objeto por puntos
console.log(mificha);
console.log(mificha.nombre);
console.log(mificha.edad);
console.log(mificha.matriculado);
console.log(mificha.asignaturas[2]);

//tambien se puese hacer asi: llamando al objeto (mificha) por corchetes:

console.log(mificha["nombre"]);
console.log(mificha["edad"]);
console.log(mificha["matriculado"]);
console.log(mificha["asignaturas"][3]);
console.log(mificha["nombrespadres"]["madre"]);

//pasar una variable para acceder a una propiedad:
let datos = "notafinal";
console.log(mificha[datos]);

// Actualizar propiedad e un objeto:

const clase = {
  capacidad: 30,
  rangodeedad: [20, 24, 43, 18, 37],
  temario: {
    html: "superado",
    css: "superado",
    javascript: "pendiente",
  },
  profesor: "juan",
};
console.log(clase);
console.log(clase.profesor);
clase.profesor = "maria";
//CAMBIO EL VALOR DE PROFESOR
console.log(clase.profesor);
clase.capacidad = 15;
//cambio de valor de capacidad
console.log(clase.capacidad);
//camnio de valor dentro de corchetes:
console.log(clase.rangodeedad[1]);
clase.rangodeedad[1] = 80;
console.log(clase.rangodeedad[1]);
//agregar un valor nuevo a rango de edad:
clase.rangodeedad.push(40);

console.log(clase.rangodeedad);

//Añadir otra propiedad al objeto: clase.
clase.centroeducativo = "luna";
console.log(clase.centroeducativo);

//eliminar una propiedad:
//eliminar un valor de la propiedad rangodeedad:
delete clase.rangodeedad[1];
console.log(clase.rangodeedad);
//eliminar toda la propiedad rangodeedad:
delete clase.rangodeedad;
console.log(clase.rangodeedad);

//!ahora si, para que nos sirven los objetos y como utilizarlos:
function abecedario(letra) {
  let resulta = {
    a: "avion",
    b: "barco",
    c: "caballo",
    d: "delfin",
    e: "elefante",
  };
  // switch (letra) {
  //   case "a":
  //     resulta = "avion";
  //     break;
  //   case "b":
  //     resulta = "barco";
  //     break;
  //   case "c":
  //     resulta = "caballo";
  //     break;
  //   case "d":
  //     resulta = "delfin";
  //     break;
  //   case "e":
  //     resulta = "elefante";
  //     break;
  //   default:
  //     resulta = "no existe la letra";
  //  return resulta; //!importante poner el return para que nos devuelva el resultado de la funcion.
  return resulta[letra]; //!ponerlo asi cuando queremos solo cierto valor de la propiedad.
}
console.log(abecedario("a"));

/* Ejersicio 1: modificar la funcion abecedario para que valide si se introducido una letra entre la a y e. Si no se ha indroducido una letra entre la a y e, se devuelva un mensaje de error
  /*/

function abecedario(letra) {
  let resultadoabecedario;
  switch (letra) {
    case "a":
      resultadoabecedario = "abeja";
      break;
    case "b":
      resultadoabecedario = "burro";
      break;
    case "c":
      resultadoabecedario = "caballo";
      break;
    case "d":
      resultadoabecedario = "delfin";
      break;
    case "e":
      resultadoabecedario = "elefante";
      break;
    default:
      resultadoabecedario = "no existe animal con esa letra";
      break;
  }
  return resultadoabecedario;
}
console.log(abecedario("e"));

//o de otra forma:

function abecedario(numeros) {
  if (numeros >= 1 && numeros <= 5) {
    let resultado = {
      1: "abeja",
      2: "burro",
      3: "caballo",
      4: "delfin",
      5: "elefante",
    };
    return resultado[numeros];
  } else {
    let resultado = "no existe animal con esa numeros";
    return resultado;
  }
}
console.log(abecedario(3));
//! aqui otro ejemplo para que lo veas mejor

function abecedario(loquequiera) {
  if (loquequiera >= 1 && loquequiera <= 5) {
    let resultado = {
      1: "abeja",
      2: "burro",
      3: "caballo",
      4: "delfin",
      5: "elefante",
    };
    return resultado[loquequiera];
  } else {
    let resultado = "no existe animal con esa numeros";
  }
}
console.log(abecedario());
//! si quitamos el segundo return, nos devuelve undefined. no nos dice nada de que tu objeto no existe.
//

const users = [
  {
    id: 1,

    nombre: "paloma",
    edad: 26,

    matriculado: "luna",
    codigopostal: 47012,
    1: "valladolid",
    asignaturas: ["html", "css", "javascript", "php"],
    nombrespadres: {
      padre: "JUAN",
      madre: "MARIA",
    },
    direccion: {
      calle: "calle1",
      numero: 1,
      piso: 1,
      puerta: 1,
    },
  },
];
console.log(users[0]);

//! prueba mmlona
const usuarios = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: " Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: 92998 - 3874,
      geo: {
        lat: -37.3159,
        lng: 81.1496,
      },
    },
    phone: 1 - 770 - 736 - 8031,
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net,",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: " Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: 90566 - 7771,
      geo: {
        lat: -43.9509,
        lng: -34.4618,
      },
    },
  },
];
console.log(usuarios[0]);

//BUCLES : WHILE
//!EVALUA UNA COONDICION MIENTRAS SEA VERDADERA

let numero = 0;
while (numero <= 10) {
  console.log(numero);
  numero++;
  console.log(numero);
  numero++;
  console.log(numero);
}
console.log(numero);
// Se trata de encontrar el mínimo común múltiplo de dos números enteros positivos. ¿Recuerdas que es eso? Es el número entero que es múltiplo de los dos números, o sea, que es divisible entre los dos números. Ejemplo mcm(6,4) es 12 porque es el número más pequeño divisible por 6 (12 /6 es 2) y por 4 (12/4 es 3).
//!------------tarea pendiente -------------

function mcd() {
  let numero = 0;
  while (numero <= 50) {
    console.log(numero);
    numero++;
    if (numero % 3 == 0 && numero % 5 == 0) {
      console.log("fizzbuzz");
    } else if (numero % 3 == 0) console.log("fizz");
    else numero % 5 == 0;
    console.log("buzz");
  }
}

// Crea una función que te devuelva la suma de los primeros 10 números y que devuevla la suma total.
function sumatotal() {
  let numero = 1;
  let resultado = 0;
  while (numero <= 10) {
    console.log(numero);
    resultado = resultado + numero;

    console.log(resultado);
    console.log(numero);
    numero++;
  }

  return resultado;
}
console.log(sumatotal());

// Escribe una función que muestre por consola los números de 1 a 100 (ambos incluidos), sustituyendo los siguientes: X-> Múltiplos de 3 por la palabra "fizz". X-> Múltiplos de 5 por la palabra "buzz". X-> Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz
function multiplos() {
  let numero = 0;
  while (numero <= 100) {
    console.log(numero);
    numero++;
    if (numero % 3 == 0 && numero % 5 == 0) {
      console.log("fizzbuzz");
    } else if (numero % 3 == 0) console.log("fizz");
    else numero % 5 == 0;
    console.log("buzz");
  }

  // }
  // if (multiplos % 3 == numero) {
  //   console.log("fizz");
  // }
  // if (multiplos % 5 == numero) {
  //   console.log("buzz");
  // }
}
console.log(multiplos());
