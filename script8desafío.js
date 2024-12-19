/* 8. Crear seis funciones, 
(sumar, restar, multiplicar, dividir, módulo, potencia), 
debe recibir 2 números e imprimir el resultado así: 
Ej entrada: 8, 4 Ej salida: 8 + 4 = 12*/

function suma(number1, numeber2) {
  console.log(`${number1} + ${numeber2} = ${number1 + numeber2}`);
}
suma(8, 4);

function resta(number1, numeber2) {
  console.log(`${number1} - ${numeber2} = ${number1 - numeber2}`);
}
resta(8, 4);

function multiplicacion(number1, numeber2) {
  console.log(`${number1} x ${numeber2} = ${number1 * numeber2}`);
}
multiplicacion(8, 4);

function division(number1, numeber2) {
  console.log(`${number1} / ${numeber2} = ${number1 / numeber2}`);
}
division(8, 4);

function modul(number1, numeber2) {
  console.log(`${number1} % ${numeber2} = ${number1 % numeber2}`);
}

modul(7, 3);
modul(100, 25);

function potenciacion(number1, numeber2) {
  console.log(`${number1} ^ ${numeber2} = ${number1 ** numeber2}`);
}

potenciacion(10, 5);
