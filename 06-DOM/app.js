//CLASE 70
//Solo Explica un poco como crear el index.html
//__________________________________________________________________
console.log("*******************************************************");
console.log("Clase 71 - Sección 7")
console.log("Crear proyecto ")
//Muestra como es el index.html
//vamos a boostrapcdn y ahí tendremos todo los códigos.

console.log("*******************************************************");
console.log("Clase 72 - Sección 7")
console.log("Examinando el Documento ")

console.dir(document);
//nos va a mostrar el código del documento.

console.log("la ruta del documento es: "+document.URL);
//nos va mostrar la ruta donde está guardado el documento.

console.log("El título del documento es: "+document.title);
//muestro el título

document.title = 'Prueba';
//cambio el título.

console.log(document.head);
console.log('all:')
console.log(document.all[10]);
console.log('forms:')

console.log(document.forms[0]);

//CLASE 71 - Obtener elementos por id, tag, y clase.
console.log("*******************************************************");
console.log("Clase 73 - Sección 7")
console.log("Obtener elementos por id, tag, y clase.")

//getElementById
console.log(document.getElementById('header-title'));
//devuelve la referencia que tiene este id en el doc.

//pongo el resultado en una variable llamada "headerTitle" y otra "header"
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

//podemos hacerle un cambio al elemento con textContent
headerTitle.textContent = 'Bienvenidos a mi página';

//puedo cambiar el nombre con innerContent

//puedo meter un poco de HTML dentrO:
//headerTitle.innerHTML = '<h3>Prueba2<h3>';

//getElementByClassName : obtiene varios elementos. Trae el primero que coincida con el
//nombre de la clase.
var items = document.getElementsByClassName('list-group-item');
console.log(items[0]);
items[0].textContent =('Cambio el primero de los items');

//getElementByTagName  : Tag:etiqueta, puede haber varias etiquetas con el mismo nombre.
//por ejemplo si tengo una lista de elementos puedo meterlos a todos en una varible como
// si fuera un array, y seleccionar el que yo quiera.

var items = document.getElementsByTagName('li');
items[2].textContent = 'Item 2.0'

//____________________________________________________
//CLASE 72
// Consulta por Selectores:

var header = document.querySelector('#main-header');
header.style.border = 'solid 4px #000';
header.style.borderBottom = 'solid 4px #ccc';

// vamos a seleccionar el input.
//el query selector toma lo primero que encuentra con ese nombre.

// acá busca y encuentra el primer input:
//
var input = document.querySelector('input');
input.value = 'Hola mundo';

//acá busca un input pero esta vez le decimos que es de tipo 'submit',(un botón);
var sumbit = document.querySelector('input[type="submit"]');
//cambio la etiqueta del botón
sumbit.value = 'Enviar';

//cambiamos de color un item del grupo lista. (a la letra)
var item = document.querySelector('.list-group-item');
item.style.color ='red';

//querySelectorAll

var item2 = document.querySelectorAll('.list-group-item');
//no nos olvidemos que ahora nuestra variable items es un arreglo y tengo que indicar el 
//numero de elemento que voy a modificar.
items[0].style.color = 'red';

var titulos = document.querySelectorAll('.title');
console.log(titulos);
titulos[0].textContent = 'Prueba';

//si quiero modificar los estilos de los títulos (no de las letras)
//de la lista (por ej los impares (odd en inglés)):
var impar = document.querySelectorAll('li:nth-child(odd');
// color de fondo = background
for (var i=0; i< impar.length; i++){

    impar[i].style.backgroundColor = '#ccc';
}

//si quiero modificar los estilos de los títulos (no de las letras)
//de la lista, este vez los PARES ( en inglés)):
var par = document.querySelectorAll('li:nth-child(even');

// color de fondo = background
for (var i=0; i < par.length; i++){

    par[i].style.backgroundColor = '#008000';
}


//CLASE 73 - Elementos y Nodos padres

//parent nodes
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);

//acá estamos seleccionando al padre de la lista de items.
var main = itemList.parentNode;

main.style.backgroundColor = '#f4f4f4';

//CLASE 74 - childNodes 

var itemList2 = document.querySelector('#items');

console.log('Probando ChildNodes...');
console.log(itemList2.childNodes);
//nos devuelve un arreglo que tiene todos los elementos de la lista.

console.log('Probando Children...');
console.log(itemList2.children);
//ahora me devuelve un html collection


//firstElementChild sirve para hacer cambios sobre el primer elemento hijo de una lista de items
console.log('Probando firstElementChild...');
console.log(itemList2.firstElementChild);
itemList2.firstElementChild.textContent='Prueba';


//CLASE 75 - Elementos y nodos hermanos

var itemList75 = document.querySelector('#items');

//previusElementSibling = hermano
console.log('Probando el PreviusElementSibling');
console.log(itemList75.previousElementSibling);

//nextElementSibling
console.log('Probando el nextElementSibling, puede ser nulo.');
console.log(itemList75.nextElementSibling)
//me trae el siguiente elemento hermano, puede no haber alguno.

//_________________________________________________________________________
//CLASE 76 - Crear Elementos y Nodos.

var nuevoDiv = document.createElement('div');

//le doy una clase al elemento nuevo.
nuevoDiv.className = 'hola';

//el div es un elemento contenedor.
nuevoDiv.id = 'div-hola';

//acá le decimos que al titulo  lo setee con 'Hola mundo'.
nuevoDiv.setAttribute('title','Hola mundo');

console.log(nuevoDiv);

//createTextNode
//creo un nodo
var nuevoNodoText = document.createTextNode('Hola Mundo');
//esta variable será hija de la nuevoDiv.
//¿Como hacemos? fácil.

nuevoDiv.appendChild(nuevoNodoText);

var contenedor = document.querySelector('header .container');
console.log(contenedor);

var h1 = document.querySelector('h1');
console.log('mostramos el h1');
console.log(h1);

//vamos a poner el nuevodiv antes del h1
//contenedor.insertBefore(nuevoDiv,h1);

//CLASE 77 - Eventos

//vamos a crear una "escucha", cuando escuche el evento0 'click' va a llamar a 
// la funcion  

//ESTA PARTE NO LA PUEDO HACER FUNCIONAR.
// document.getElementById('boton').addEventListener('click',function(){
//     console.log('click 2');
// });

// function hacerClick(){
//     //console.log('Usted hizo click');
//     document.getElementById('header-title').textContent= 'Texto cambiado';
// }


//CLASE 78 - Cambiando el Diseño de nuestra página
