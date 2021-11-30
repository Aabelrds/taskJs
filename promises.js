/*Una `Promise` (promesa en castellano) es un objeto que representa la terminación o el fallo de una operación asíncrona. 
Surgen en ES6 para mejorar el proceso de callbacks.
Promesas(`then`/`catch`)
*/
const addItem = (item, list) => {
  const promise = new Promise((resolve, reject) => {
    if (!list) {
      reject('No existe el array');
    }

    setTimeout(function () {
      list.push(item);
      resolve(list);
    }, 2000);
  });

  return promise;
};

const list = ['Rojo', 'Azul', 'Verde'];

addItem('Amarillo', list)
  .then((list) => {
    console.log(`El listado final es: ${list.join(', ')}`);
  })
  .catch((err) => {
    throw new Error(err);
  });