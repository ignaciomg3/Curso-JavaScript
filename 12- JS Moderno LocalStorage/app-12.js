function print(nroClase_Y_Titulo){
    console.log(`********** Clase ${nroClase_Y_Titulo} *********`)
}
print("Clase 130 - LocalStorage")

function p2(mensaje){
    console.log(`${mensaje}`)
}

print("131 - Leer y Guardar datos")

//guardo en el localStorage una clave con un valor. y después la muesto.
localStorage.setItem('nombreUsuario','Igna');
console.log(localStorage.getItem('nombreUsuario'));

localStorage.setItem('localidad','Gigena');

//CLASE 132 - Eliminar datos.
localStorage.removeItem('localidad')

//limpiar el localstorage, lo comento para no borrar todo.
//localStorage.clear();

//CLASE 133 - Notación JSON - 

const usu = {
    nom: 'igna',
    edad: '24'
}

//tengo el objeto usu y lo convierto a tipo JSON
const usuarioJSON = JSON.stringify(usu);
console.log(usuarioJSON);

localStorage.setItem('usuario',usuarioJSON);
//lo vuelvo a convertir a objeto.
const usuario2 = JSON.parse(usuarioJSON);
console.log(usuario2);

//CLASE 134 - Guardar y leer objetos en LS
const userJSON = localStorage.getItem('usuario');
const usuario3 = JSON.parse(userJSON);
console.log(`${usuario3.nom}: ${usuario3.edad}`)