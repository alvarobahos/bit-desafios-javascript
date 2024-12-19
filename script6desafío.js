/* 6.Crear una función que reciba cuatro párametros, 
un nombre, una prenda, un color y una cantidad y retorne:
 ____ tiene __ ____ de color ____. Ej entrada: pepita,
camisas, azul, 2 Ej salida: Pepita tiene 2 camisas de color azul.*/

function fourparametros(nombre, prenda, color, cantidad) {
  return `${nombre} tiene ${cantidad} ${prenda} de color ${color}.`;
}

let historia = fourparametros("pepita", "2", "camisas", "azul");
let othehistoria = fourparametros("julio", "6", " pantalon", "azul");
console.log(historia);
console.log(othehistoria);
