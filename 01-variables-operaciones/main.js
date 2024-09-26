/*comentarops de varias lineas*/ 
//comentarios en linea
console.log('hello world');

/* VARIABLE; espacio dentro de la memoria que guarda un valor */

//TIPOS DE VARIABLES:
//string: CADENA DE TEXTO "" O ´´
//number: NUMEROS ENTEROS
//float:numeros con decimales
//boolean: true o false
//underfined: variable no definida
//NULL: VARIABLE

//OBJETOS: clave:valor
//arraiys: arreglos

//!DECLARACION DE VARIABLES VAR.
/* */
var nombrevariable = "34";
console.log(nombrevariable);

var nombrevariable = 'juan';
console.log(nombrevariable);



//!usuario variable let

let otronombre= "PEDRO"
console.log(otronombre);

//!reasignar el valor de la variable SE PUEDE


 otronombre= "MARIA";
console.log(otronombre);
/* Como podemos observar arriba no es necesario en una variable volver a repetirla ejemplo: let*/ 

//!USUANDO VARIABLE CONSTANTE "NO SE PUEDE NI CAMBIAR SU VALOR NI SU VARIANTE"

const nuevavariable = "2345";

//!con nueva variable= pedro:

//camelcase
let nombreDeVariable = "pedro";//string

//snake_case
let nombre_De_Variable = "pedro";

//PascalCase: cuando declaramos clases
let PascalCase = "true";//boolean

//!operadores de asignacion:
let valor1 = 56;
let valor2; //undeefined- espacio en blanco
console.log (valor2)
valor2 = valor1; //el valor2 toma el valor de valor 1
console.log(valor2);

//!suma:
suma = valor1 + valor2;
console.log(suma);

//! iniciar una variable:
let iniciovariable = 67;
console.log(iniciovariable);


let mivariable =30;
console.log(mivariable);

//java es muy sencible a mayusculas y minusculas 
//!let  minconMAYUSCULAS =30;
//!console.log(MINconmayusculas) = 30;
//nos marcara que hay un tipo de error

console.log("----operadores aritmeticos-----");

//!operaciones aritmeticas:

let val1 = 10;
let val2 = 20;
let resultado

// suma:
resultado= val1 + val2;
console.log (resultado);
resultado = 30 +33;
console.log(resultado);

//resta: //! EL RESULTADO ES DE LA VARIABLE QUE ESTA ESCRITA DESPUES PUES TIENE PREFERENCIA 
resultado = val1 - val2;
console.log(resultado);
resultado = 35-23;
console.log(resultado);

// !descargamos quokka para ver los resultados EN ESTA MISMA PAGINA. 
//multiplicacion:

resultado = val1 * val2;
console.log(resultado);
resultado = 36*12;
console.log(resultado);


//division:
resultado= val1 / val2;
console.log(resultado);
resultado = 36/0;
console.log(resultado);
 
//!numeros decimales 
let numerodecimal = 23.5;
console.log(numerodecimal);
resultado = numerodecimal / 0;
console.log(resultado);

//!MODULO O RESTO DE UNA DIVICION:

resultado = 25 % 3; 
console.log(resultado);
resultado = 4 % 2;
console.log(resultado);

//!OPERADORES DE INCREMENTO Y DECREMENTO:
//incremento de 1 
let resulincremento =10
resultado = resulincremento + 1;
console.log(resultado);
//incremento de 2;
let resultadoincremento =10
resultado = resultadoincremento + 1;
resultado++;
console.log(resultado);

//INCREMENTO DE OTROS VALORES:
let asignoA =10;
let asignoB = 40;
asignoA = asignoA + 3;

console.log(asignoA);

asignoA += 3;
console.log(asignoA);

asignoA -= 3;
console.log(asignoA);

asignoA /= 3;
console.log(asignoA);

asignoA *= 3;
console.log(asignoA);


//!aqui una cosa muy rara estudiale mija 
 for(let i = 0; i < 10; i++){ 
  console.log(i);
}

//!OPERADORES DE COMPARACION:
//-- asignoA es 10 mientras que asignoB es 40

resultado = asignoA == asignoB;
console.log(resultado);

let comparaA = 30;
let comparaB = "20";

//typeof permite ver el tipo de variable
console.log(typeof comparaA);
console.log(typeof comparaB);

resultado= comparaA == comparaB;// compara el tipo de valor.
console.log(resultado);

resultado = comparaA === comparaB; //compara el valor y el tipo de variable
console.log(resultado);

resultado = comparaA != comparaB; //  (!= pregunta si hay diferencia) o desigualdad entre los valores 
console.log(resultado);

resultado = comparaA < comparaB; // < < menor que... >> mayor que.. 
console.log(resultado);
resultado = comparaA > comparaB;
console.log(resultado);

//  typeof: permite ver el tipo de varible 

console.log(typeof asignoA);
console.log(typeof asignoB);
console.log(typeof comparaA);
console.log(typeof comparaB);
console.log(typeof resultado);

//poner una calculadora:
//!poner un div con un id en html
/*es este caso el div tiene un id llamado  "verresultado"*/



let verResultado = document.getElementById("verResultado");

let valoruno = parseInt (prompt("ingrese un numero"));

let valordos = parseInt (prompt("ingrese otro numero"));

verResultado = valoruno + valordos;

verResultado.innerHTML = resultado;

console.log(verResultado);

/*CADENA DE CARACTERES */

let nombre = "david";
let apellido = "garcia";

let nombrecompleto = nombre + " " + apellido; //dejar espacio entre las comillas 
console.log(nombrecompleto); 
console.log ("buenos dias "+ nombrecompleto)

nombre += apellido;
console.log(nombre);
