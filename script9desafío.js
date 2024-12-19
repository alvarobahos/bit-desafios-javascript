/* 9.1 Crear seis funciones, (suma, resta, multiplica, divide, módulo, potencia),
cada función debe recibir 2 números y retornar un resultado según corresponda.*/

function suma(number1, numeber2) {
  return `${number1} + ${numeber2} = ${number1 + numeber2}`;
}
let resultadosuma = suma(8, 4);
console.log(resultadosuma);

function sustraer(number1, numeber2) {
  return `${number1} - ${numeber2} = ${number1 - numeber2}`;
}
let resultadoresta = sustraer(8, 4);
console.log(resultadoresta);

function producto(number1, numeber2) {
  return `${number1} x ${numeber2} = ${number1 * numeber2}`;
}
let resultadoproducto = producto(8, 4);
console.log(resultadoproducto);

function divition(number1, numeber2) {
  return `${number1} / ${numeber2} = ${number1 / numeber2}`;
}
let resultadodivition = divition(8, 4);
console.log(resultadodivition);

function modulo(number1, numeber2) {
  return `${number1} % ${numeber2} = ${number1 % numeber2}`;
}
let resultadomodulo = modulo(8, 4);
console.log(resultadomodulo);

function exponencial(number1, numeber2) {
  return `${number1} ^ ${numeber2} = ${number1 ** numeber2}`;
}
let resultadoexponencial = exponencial(8, 4);
console.log(resultadoexponencial);

/* 9.2:Crear otra función que reciba el nombre de la operación y 2 números,
 debe imprimir el resultado. Ej entrada: suma, 8, 4 Ej salida: 8 + 4 = 12*/

function operaciones(operacion, number1, numeber2) {
  let solution;
  if (operacion === "+") {
    solution = suma(number1, numeber2);
  }

  if (operacion === "-") {
    solution = sustraer(number1, numeber2);
  }
  if (operacion === "x") {
    solution = producto(number1, numeber2);
  }
  if (operacion === "/") {
    solution = divition(number1, numeber2);
  }

  if (operacion === "^") {
    solution = exponencial(number1, numeber2);
  }
  console.log(number1 + " " + operacion + " " + numeber2 + " = " + solution);
}

operaciones("+", 8, 4);
operaciones("-", 8, 4);
operaciones("x", 8, 4);
operaciones("/", 8, 4);
operaciones("^", 8, 4);
