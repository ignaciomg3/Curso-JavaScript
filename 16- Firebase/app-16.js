function print(nroClase_Y_Titulo){
    console.log(`********** Clase ${nroClase_Y_Titulo} *********`)
}

function p2(mensaje){
    console.log(`${mensaje}`)
}


print('164 - Proyecto');
/* En esta vemos el tema del estilo de la página con la 
página materializecss  */

print('167 - Integrando Firebase ');
/* Firebase es un servicio provisto por google */

const mensaje1 = ("Tengo problemas con la ruta firebase/firestore, no pude integrar la base de datos de FireBase \n "+
"pero dejo el código a disposición. -n\ " +
" Tendré que buscar otra base de datos e implementarla.");

 console.log(mensaje1)

// <li class="collection-item">
//                     <div>  
//                         <span>Tarea 1</span>
                        
//                             <i class="material-icons secondary-content">delete</i>
//                             <a href="#modal1" class="modal-trigger secondary-content ">
//                                 <i class="material-icons">edit</i>
//                         </a>
//                     </div>
//                 </li>


print('169 - Listando la lista de Tareas de la colección')

//creamos una lista y lo traemos desde el index con el id que le pusimos(lista-tareas)
const lista = document.getElementById('lista-tareas');
const form = document.querySelector('#add-tarea-form');
let updateID = null;
const updatebtn = document.getElementById('updateBtn');
let newTitulo = '';

//RENDERRRR
const renderList = (doc) => {
    
    //tengo que cargar la lista de tareas, entonces me guío de ccomo
    //lo hice en html (código justo arriba de este.)

    let li = document.createElement('li');
    li.className = 'collection-item';
    li.setAttribute('data-id', doc.id);

    //los agrupadores van primero.
    let div = document.createElement('div');
    let titulo = document.createElement('div');
    titulo.textContent = doc.data().titulo;

    let enlace = document.createElement('a');
    enlace.href = '#modal1';
    enlace.className = "modal-trigger secondary-content";

    let editBtn = document.createElement('i');
    editBtn.className = "material-icons";
    editBtn.innerText = "edit";

    let delBtn = document.createElement('i');
    delBtn.className = "material-icons secondary-content";
    delBtn.innerText = "delete";

    //el enlace tiene un hijo.(el botón edición)
    enlace.appendChild(editBtn);
    div.appendChild(titulo);
    div.appendChild(delBtn);
    div.appendChild(enlace);
    li.appendChild(div);

    delBtn.addEventListener('click', e => {
        console.log('delete');
        //guardo el id del elemento de la lista para poder eliminarlo después.

        let id = (e.target.parentElement.parentElement.getAttribute("data-id"));

        //delete() es un método
        db.collection('tareas').doc(id).delete();    
        console.log(id);
    })

    lista.append(li);

    editBtn.addEventListener('click', e => {
        updateID = target.parentElement.parentElement.parentElement.getAttribute('data-id');
        console.log(updateID)
    })

}
//veamos que es un arreglo.
console.log(document.getElementsByName('newTitle'))
updatebtn.addEventListener('click', e => {

    //es un arreglo.
    newTitulo = document.getElementsByName('newTitle')[0].value
    db.collection('tareas').doc(updateID).update({
        titulo: newTitulo
    })
    newTitulo = document.getElementsByName('newTitle')[0].value = '';
})

form.addEventListener('submit', e => {
    e.preventDefault();
    db.collection('tareas').add({
        titulo: form.titulo.value
    });
    form.titulo.value = '';

})

//acá está la parte del código que muestra los cambios en las tablas de la
//base de datos de FireBase.

db.collection('lista-tareas-2').orderBy('usuarios').onSnapshot(snapshot => {

    //docchanges devuelve cambios si es que se cambió.
    let cambios = snapshot.docChanges();    
    //console.log(cambios);
    cambios.array.forEach(cambio => {
        if(cambio.type == 'added'){
            //console.log(cambio.doc.data());
            renderList(cambio.doc)


        }else if(cambio.type =='removed'){
            
            //tenemos que eliminar el elemento.
            let li = lista.querySelector(`[data-id=${cambio.doc.id}]`);
            
            lista.removeChild(li);

            console.log('Eliminado');

        }else if(cambio.type == 'modified'){
            console.log('modificado');
            let li = lista.querySelector(`[data-id=${cambio.doc.id}]`);
            li.getElementsByTagName('span')[0].textContent = newTitulo
            newTitulo = '';
        }
        
    });
    
})

pritn('170 -  Agregar una Tarea a la Lista')
// está implementado en el código mas arriba.

pritn('172 -  Actuallizar Tarea de Colección')
