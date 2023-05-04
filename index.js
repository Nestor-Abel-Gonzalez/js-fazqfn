// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Un Gran Comienzo en JS</h1>`;

// Funcion corta para imprimir algo en conssola
/* esto no es lo mismo eta mal

    function print(){
    console.log()
}
*/

function p(message) {
  console.log(message);
}

let a = '10';

p('hola');
p('HOLA MUNDO como estan');
p(5 + 8);
p(a);
p(a + 5);
