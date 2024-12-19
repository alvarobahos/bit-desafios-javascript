/* 5.Crear una función que reciba dos párametros, un nombre y un apellido 
y retorne el nombre completo, primero el apellido y luego el nombre.*/

function retorno(nombre, apellido) {
  return `${apellido} ${nombre}`;
}

namecomplete = retorno("bahos", "alvaro");
let otherfirend = retorno("web", "desarrollo");
console.log(namecomplete, otherfirend);
