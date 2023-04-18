/**
 * Es todo funcion que puede ser tratada como una variable
 *
 * - esta variable puede guardar una funcion
 * - puede ejecutar esta funcion
 * - y puede ser enviada como parametro a otras funciones
 */

function sum(a, b) {
  return a + b;
}

let res = sum(1, 2);
console.log(res);

/**
 * fSum es una funcion de primer orden porque esta almacenando la funcionalidad
 * de otro funcion y cuando le colocamos los parentecis esta ejecutandose como si
 * fuera esa misma funcion
 */
const fSUm = sum;
res = fSUm(5, 6);
console.log(res);
