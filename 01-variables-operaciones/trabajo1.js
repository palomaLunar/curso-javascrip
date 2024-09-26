// 1. Has hecho una compra y sabes el precio del producto y su IVA. Haz un script que te calcule el precio total que vas a pagar por tu compra. Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicar precio por el IVA y dividir por 100.

let precio= 200;
let iva = 21;
porcentaje= iva * precio/ 100;
console.log(porcentaje);
resultado= porcentaje-precio;
console.log(resultado);


// 2. En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado. El área la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados.

let lado= 40;
area= lado * lado;
console.log(area);
perimetro= lado + lado + lado + lado;
console.log(perimetro);











// 3. Un poco de interactividad. En este ejercicio debes escribir un programa que lea el nombre del usuario y salude con un "Hola" seguido del nombre del usuario. Para leer el nombre usa un prompt con un texto indicativo como: "Escribe tu nombre:"

let nombre= prompt("Escribe tu nombre");
// let saludo= "Hola";
// console.log(saludo + " " + nombre);
console.log("Hola " + nombre);







// 4.Escribe un programa que solicite al usuario ingresar el número de
// kilómetros recorridos por su coche y el número de litros consumidos .
// El script debe mostrar el consumo de combustible por kilómetro.Un problema matemático muy simple numero de litros dividido por número de kilómetros.

let kilometros= parseInt (prompt("¿Cuántos kilómetros has recorrido?"));
let litros= parseInt(prompt("¿Cuántos litros has consumido?"));
consumo= litros / kilometros;
console.log(consumo);