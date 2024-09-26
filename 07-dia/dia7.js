//! OPERADORES REST y SPREAD

//REST:...argumento | permite crear funciones más versátiles

const funcionFija = (a, b, c) => {
  return a + b + c;
};
console.log(funcionFija(3, 4, 5));

const miFuncion = (...args) => {
  console.log(args);
  console.log(args.length);
  for (let i = 0; i < args.length; i++) {
    console.log(i);
    console.log(args[i]);
  }
};

miFuncion(1, true, 2, 3, "a", 4);

//SPREAD -> | Descompone en sus elementos individuales

const numeros = [5, 2, 3];
const suma = (a, b, c) => {
  console.log(a);
  console.log(b);
  console.log(c);
  return a + b * c;
};

console.log("El resultado es " + suma(...numeros));

//Ejemplo:
const miObjeto = { a: "uno", b: "dos", c: "tres" };
const miNuevoObj2 = { miObjeto, d: "cuatro" };
const miNuevoObj = { ...miObjeto, d: "cuatro" };

console.log(miNuevoObj2); //no combina
console.log(miNuevoObj);

const otroObjeto = { d: "cuatro", e: "cinco", f: "seis" };

//combinamos objetos:
const objetoComun = {
  ...miObjeto,
  ...otroObjeto,
};

console.log(objetoComun);

//Ejemplo:
const datos = {
  nombre: "Juan",
  edad: 23,
  ciudad: "Valladolid",
};

const datosNuevos = { ...datos, apellidos: "Martín" };
console.log(datosNuevos);

//Ejemplo Arrays
const ArrUno = [1, 2, 3, 4];
const ArrDos = [6, 7, 8, 9];

const ArrCombinado = [...ArrUno, 5, ...ArrDos];
console.log(ArrCombinado);

//!sintaxis de desconstruccio

//ejemplo:

const libreria = {
  nombrelibro: "cien años de soledad",
  autor: "gabriel garcia marquez",
  anio: 1967,
};
const { nombrelibro, autor, anio } = libreria;

console.log(nombrelibro);
console.log(anio);
console.log(autor);

//desconstruccin objetos aninados:

const datosUsuarios = {
  Davidf: {
    edad: 26,
    correo: "davidf@hotmail.com",
    ciudad: "palencia",
  },
  Juang: {
    edad: 23,
    correo: "juang@hotmail.com",
    ciudad: "valladolid",
  },
};
const {
  Davidf: { correo, ciudad },
} = datosUsuarios;
console.log(correo);
console.log(ciudad);

const {
  Juang: { edad: edaddeJuang, ciudad: ciudaddeJuang },
} = datosUsuarios;
console.log(edaddeJuang);
console.log(ciudaddeJuang);

//funcion
const registro = {
  nombre: "maria",
  pais: "españa",
  ciudad: "sevilla",
};
const nuevoregistro = ({ nombre, pais }) => {
  console.log(nombre);
  console.log(pais);
};
nuevoregistro(registro);

//!sintaxis desestructurar un arrays

let uno, dos, tres;
const array = [1, 2, 3, 4, 5, 6, 7];
uno = array[0];
console.log(uno);
console.log(dos);
console.log(tres);

[uno, dos, , , tres] = array;
console.log(uno);
console.log(dos);
console.log(tres);

// cambiar el orden  de los arrays
let a, b;
a = 5;
b = 6;
[a, b] = [b, a];
console.log("a:" + a);

console.log("b:" + b);

//! PLANILLAS LITERALES
//se define con ```
// $ (variable)
//sensible a los espacios

let num = 6;
console.log("El numero es " + num);
console.log(`el numero es ${num}`);

let cadenanombre = "david";
let cadenaciudad = "valladolid";

console.log("!hola¡ " + cadenanombre);
console.log(
  `hola mi nombre es ${cadenanombre} y tengo ${num} años. vivo en ${cadenaciudad}`
);

let usuario = "carlos";

let nombre = "carlos";
let edad = 23;

console.log(usuario);
console.log(`soy ${nombre} y tengo ${edad} años`);
