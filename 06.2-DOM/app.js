//CLASE 77 - Eventos

//es un botón con un evento.
// document.getElementById('boton').addEventListener('click',function(){
//     console.log('Click 2');
// });

//___________________________________________________________
//CLASE 80 - Identifica elementos a la lista, agrega botón de eliminar en cada item.
//  hace todo en el HTML


//___________________________________________________________
//CLASE 81 - Agregar elementos a una lista

//Agregar un elemento a la lista


//1) identificamos nuestro formulario
// nuestro formulario se llamaba 'formAgregar'
//2) lo metemos en una variable form y los items en una variable 'lista'
var form = document.getElementById('formAgregar');
var lista = document.getElementById('items');

console.log("Clase 81")
console.log(form);
console.log(lista);

//agregar un elemento a la lista.
form.addEventListener('submit',agregarItem)

//creo la función agregarItem que va a recibir un evento por parámetro.
function agregarItem(e){
    
    //permito cancelar el evetno si es cancelable.
    e.preventDefault(); 
    
    // obtengo el valor del elemento 
    var newItem = document.getElementById('item').value;

    console.log('muestro el nuevo item')
    console.log(newItem);
    
    //creo un elemento de la lista tipo 'li'
    var li= document.createElement('li');

    // le damos clase a nuestra variable.
    li.className= 'list-group-item';

    //le agrego un nodo a la lista.
    li.appendChild(document.createTextNode(newItem));
   
    //muestro el li:
    console.log('Muestro el li:');
    console.log(li);

    //creo el botón delete.(X)
    var botonDel = document.createElement('button');

    //le agrego una clase el botón
    botonDel.className = 'btn btn-danger btn-sm float-rigth eliminar';

    
    botonDel.appendChild(document.createTextNode('X'));

    //mostramos el botón
    console.log('Mostramos el botón');
    console.log(botonDel);

    //agrego el botón  que acabo de crear a la lista 'li'. (se muestra por consola )
    li.appendChild(botonDel);
    console.log('Muestro la lista li');
    console.log(li);

    //agrego li a la lista. Se muestra en la página.
    lista.appendChild(li);


};
console.log(lista);


//CLASE 82 - Eliminar Elemento de la lista.

//le agrego la función click al botón delete.
// en otras palabras: a la Lista, le agrego un evento de escucha tipo "click" que 
//ejecutará la función "eliminarItem"

lista.addEventListener('click', eliminarItem);
console.log('linea 90');

function eliminarItem(e){

    console.log('click');
    //console.log('click');
    // voy a preguntar si dentro de la lista existe la clase "eliminar"
    // o sea, estamos preguntando si en la lista 
    // (EL ITEM ES UNA LISTA) hay una clase "eliminar" (buscamos el botón X)
    
    if(e.target.classList.contains('eliminar')){

        //pregunto si quiero eliminarlo realmente.
        if(confirm('Seguro que quiere eliminar el item?')){
            
            //capturo al padre del elemento e
            var li = e.target.parentElement;
            
            console.log("muestro el li")
            console.log(li);
            lista.removeChild(li);
        }
        
    }
}

//CLASE 83 - Buscar elementos en una lista.

//al buscador le dimos el 
var filtro = document.getElementById('filtro');

//le agrego al filtro un evento de escucha: keyup (es la entrada por teclado)
filtro.addEventListener('keyup',filtrarItem);

function filtrarItem(e){
    var texto = e.target.value.toLowerCase();
    //toLowerCase lo hace en minúscula.

    //capturo los items por la etiqueta.
    var items = lista.getElementsByTagName('li');

    //en este momento tengo un collection, necesito un arreglo.
    Array.from(items).forEach(function(item){
        var itemNombre = item.firstChild.textContent;
        if(itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display= 'block';
            //block es para mantenerlo.
        }
        else{
            //ponemos el display en "none", o sea dejamos de mostrarlo.
            item.style.display ='none';
            

        }
    });

}


