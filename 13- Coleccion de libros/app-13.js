function print(nroClase_Y_Titulo){
    console.log(`********** Clase ${nroClase_Y_Titulo} *********`)
}

function p2(mensaje){
    console.log(`${mensaje}`)
}

print("Clase 136 - App colección de libros - intro")

print("Clase 137 - App colección de libros - Lite Server")

print("Clase 138 - Importando tema a la app")

print("Clase 139 - Maqueteando la App")

print("Clase 140 - Lógica de Clases")

print("Clase 141 - Definiendo Clases")

class Libro{
    constructor(titulo, autor,isbn){
        this.titulo= titulo;
        this.autor= autor;
        this.isbn = isbn;
    }
}
// esta clase va a servir para hacer la interfaz,
//será una clase estática.
class UI{
    static mostrarLibros(){

        const libros = Datos.traerLibros();

        //al libro lo mando como parámetro de  para la otra función.
        libros.forEach((libro) => UI.agregarLibroAlaLista(libro));
    
        
    }

    static agregarLibroAlaLista(libro){

        const lista = document.querySelector('#libro-list')

        //creo una fila en el cuerpo de la lista.
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td>${libro.titulo}</td>
        <td>${libro.autor}</td>
        <td>${libro.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        lista.appendChild(fila);
    }

    //le mando un elemento el
    static eliminarLibro(el){

        //Acá pregunto si la etiqueta tiene la clase delete, a nosotros nos interesa que sea
        //el botón de la X.
        if(el.classList.contains('delete')){
                //pregunto por el padre del padre y lo elimino.
                //porque el padre del botón es el TD y el padre de este TD es la fila TR.
                el.parentElement.parentElement.remove();
        }

        
    }

    static mostrarAlerta(mensaje, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(mensaje));
        
        const container = document.querySelector('.container');
        const form = document.querySelector('#libro-form');

        //lo que hace es insertar la alerta ANTES del formulario.
        container.insertBefore(div, form);

        //muestra el mensaje por 3 segundos.
        setTimeout(()=> document.querySelector('.alert').remove(), 3000)

    }
    static limpiarCampos(){

        //vacio los campos. 
        document.querySelector('#titulo').value = '';
        document.querySelector('#autor').value = '';
        document.querySelector('#isbn').value = '';

    }

}
class Datos{
    static traerLibros(){
        //consulta si hay libros y trae un arreglo.
        let libros;
        if(localStorage.getItem('libros')=== null)
        {
            libros = [];

        }else{
            libros = JSON.parse(localStorage.getItem('libros'));
        }
        return libros
    }
    static agregarLibro(libro){
        const libros = Datos.traerLibros();
        libros.push(libro);
        localStorage.setItem('libros',JSON.stringify(libros))

    }
    static removerLibro(isbn){
        const libros = Datos.traerLibros();

        //recorro el aarreglo libro con el foreach, la mando el libro y índice, 
        // si coincide con el ISBN que le mandé entonces lo elimino con splice.
        libros.forEach((libro, index) => {
                 if(libro.isbn === isbn){
                    libros.splice(index, 1);
                    console.log(isbn);
                 }
                 
        });
        //almaceno en el localstore el arreglo libros con la modificación hecha.    
        localStorage.setItem('libros', JSON.stringify(libros));
   
        
    }
}

//CLASE 143
document.addEventListener('DOMContentLoaded', UI.mostrarLibros())

print("Clase 142 - Agregar a la colección")

//le agrego el formulario
document.querySelector('#libro-form').addEventListener('submit',(e) => {
    //ya tengo el evento submit.
    e.preventDefault();

    //obtener valores de los campos.
    const titulo = document.querySelector('#titulo').value;
    const autor = document.querySelector('#autor').value;
    const isbn = document.querySelector('#isbn').value;

    if(titulo === '' || autor === '' || isbn === ''){
        //si alguno de los campos está vacío entonces muestra la alerta.
        UI.mostrarAlerta('Por favor ingrese datos.','danger');
    }else{
        const libro = new Libro(titulo,autor,isbn);
        Datos.agregarLibro(libro);
        UI.agregarLibroAlaLista(libro);
        UI.mostrarAlerta('Libro agregado','success');
        UI.limpiarCampos();
    }
})

print('143 - Consultar y mostrar libros');

print('144 - Eliminar libro de la colección');

//escuchamos el evento de click en la lista de libros.
//en cada elemento fila (TR) tengo 4 elementos columna (TD)
//el elemento (e) es simplemente el nombre que nosotros le damos, en este caso
// al botón de la X (para eliminar el libro)
//Target es la etiqueta del botón.
document.querySelector('#libro-list').addEventListener('click', (e) => {
   
    //UI.mostrarAlerta('click registrado','succes');
    UI.eliminarLibro(e.target);
    Datos.removerLibro((e.target.parentElement.previousElementSibling.textContent));
    UI.mostrarAlerta('Libro eliminado', 'danger')
});

//CLASE Objeto DATE()
print('146 - Objeto Date()')

const ahora = new Date();
console.log(ahora.toString())