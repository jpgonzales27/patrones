/**
 * Es todo funcion que puede recibir en sus parametros funciones
 */

function sum(a, b) {
  return a + b;
}

const fSUm = sum;
res = fSUm(5, 6);
console.log(res);

/**
 * es una funcion de orden superior porque recibe una fucion que desconoce
 * y dentro usa esta misma funcion para operar con los demas paratros
 */
function operation(fn, a, b) {
  console.log("se hace algo");
  console.log(fn(a, b));
}

operation(sum, 3, 3);
operation(fSUm, 3, 4);
