//CLASE 88

//ES5 - VARIABLES
console.log('Hola Mundo ');
var nombre5 = 'Carlos';
var edad5= 32;
var nombre5= 'Pablo';

//ES6

//variable de solo lectura 'const', no se puede cambiar.
const nombre6 = 'Pedro';

//esta edad si se puede cambiar
let edad6 = 23;

// *********************************************************
//CLASE 89 - Bloques y alcances de las variables.

// nada importante
var test;
function prueba() {

    test = 15;

}

prueba();
console.log(test);
//esto muestra 15

var test2;
test2= 10; 
function prueba2() {

    let test2;
    //con let hago que la variable no pueda cambiar.
    test2 = 15;

}

prueba2();

console.log(test2);
//muestra resultado 10 

//*********************************************************
console.log('CLASE 90   - Plantilla de cadenas avanzada.')

let nombre88 = 'Ignacio';
let edad88 = 23;
const nacimiento = 1998;
const ciudad = 'Alcira';
console.log(ciudad);

//no puedo cambiar el valor de una variable tipo const
//solo puedo cambiar las de tipo let

function calcularEdad(year){

    return 2023 - year;
}

console.log(nombre88 + 'Edad: '+ edad88 +', Nació en '+ciudad) ;

//ES6
console.log(`${nombre88} ${edad88} nació en ${ciudad} y su edad es ${calcularEdad(nacimiento)}`);


//CLASE 89 - Bloques y alcances de las variables
// console.log('Clase 89******)')
// let test;
// test = 10;
// function prueba (){

//     test = 15; 
// }
// prueba();
// console.log(test);

//CLASE 90 - Template String 

console.log( 'CLASE 90*****');

let nombre90 ='Ignacio';
let apellido90 = 'Mongi';
const pais90 = 'Lima';
const nacimiento90 =1998; 
function calcularEdad(nacimiento90) {
    return 2022 - nacimiento90;
}

//ES5
console.log(nombre90 + ' ' + apellido90+ ', nació en  '+pais90 + ', el '+ nacimiento90) ;



//ES6

console.log(`El nombre es: ${nombre90} ${apellido90}`);

//CLASEE 91 - Nuevo metodo de cadenas  

let nombre91 ='Mateo 91';
let apellido91 = 'Mongi';
let nombreCompleto91 = `${nombre91} ${apellido91}`;
console.log(nombreCompleto91)

//si queremos repetir algo y mostrarlo varias veces usamos "repeat"
console.log(`${nombre91} `.repeat(5));

//si queremos ver si lo que mando por parámetro está en el texto 
// uso "includes"
// esto devolverá verdadero o Falso.

console.log(nombreCompleto91.includes('Mat'));

// "starWith" para saber si comienza con un parámetro.

console.log(nombreCompleto91.startsWith('Ma'));

// "endWith" igual al anterior pero para ver si termina.

console.log(nombreCompleto91.endsWith('gi'));

//CLASE 92 ************************
// Funciones flechas - Parte 1

//creo un arreglo
const year92 = [2000, 2005, 2010, 2015];

//ES5 

// "map" permite reecorrer el arreglo.
// "el" es cada valor que tiene el arreglo.
//lo que hace esta función es mostrar cuantos años hay desde cada elemento del arreglo al 2023.

var edad92 = year92.map(function(el){
    return 2023 - el
});
console.log(edad92);

//ES6

console.log("ahora muestro las edades con ES6")
let edad92_6 = year92.map(el => 2023 - el);
console.log(edad92_6);

//¿que pasa si tengo 2 elementos ?

// el "index" (empieza en cero por eso le sumo 1) 
// es el indice del valor de "el"
edad6 = year92.map((el, index)=> `Edad ${index + 1}: ${2019 - el }` )
console.log(edad6)

/*
Esta salida nos muestra:

'Edad 1: 19', 'Edad 2: 14', 'Edad 3: 9', 'Edad 4: 4'
*/

edad6 = year92.map(
    (el, index )=> {
        //no sé que hace new Date()
        const yearA =new Date().getFullYear();
    // getFullYear(); me devuelve el año actual.

        const edadNueva = yearA - el;
        //le sumo uno porque el primer índice es cero.
        return `Edad ${index + 1}: ${edadNueva}`;  
    }
)
console.log(edad6); 

// CLASE 93 - Funciones Flechas - Parte 2
console.log("********** Clase 93 - Funciones Flecha *************")
console.log(edad6);

//obtengo el cuadrado de un numero
const cuadrado = (num)=> {return num * num}

var1 = 5;
console.log(`Cuadrado de ${var1} = ${cuadrado(var1)}`)

// voy a recorrer el arreglo de estos objetos y mostrar los < 20
const personas = [
    {
         nombre: 'Igna',
        edad: 23
    },
    {
        nombre: 'Ana',
       edad: 16
   },
   {
    nombre: 'Pablo',
    edad: 19
    },
    {
        nombre: 'Lucas',
       edad: 26
   },
   {
    nombre: 'Judas',
    edad: 30
    },
   
];

const menores20 = personas.filter(function(persona){
    return persona.edad < 20;   
});

console.log(menores20);

//voy a hacer lo mismso que recién pero con Funcion Flecha

const menores20FF = personas.filter((persona) => persona.edad < 20);
console.log('Usando Función Flecha: ')
console.log(menores20FF);

//CLASE 94 - Destructuración o Destrucción
console.log("*********** Clase 94 - Destructuración *********")
//puedo cambiar a variables independientes y hacer otras operaciones,
//a eso lo llamamos destructuración.
//ES5

//hago un arreglo con 2 elementos
var datos94_5 = ['Judas Iscariote',30];

//le asigno a cada variable un índice del arreglo.
var nombre94_5 = datos94_5[0];      
var edad94_5 = datos94_5[1];

console.log( 'Destructuración con ES5')
console.log(datos94_5);


//ES6
console.log( 'Destructuración con ES6')
var [nombre94_6, edad94_6] = ['Judas Tadeo',31]
console.log(nombre94_6, edad94_6 );

const persona94 = {
    nombre: 'Simón',
    edad: 24
}
const {nombre, edad}= persona94

console.log(nombre, edad)

//otra forma de destructuración definiendo los atributos con nombres
// mas cortos.
console.log('otra forma de destructuración..')
const persona94_2 = {
    Nombre: 'Matías',
    Edad: 24
}
const {Nombre: e, Edad: n} = persona94_2;
console.log(n, e);

//CLASE 95 - Ejemplo Destructuración
console.log("*********** Clase 95 - Ej Destructuración *********")

const calMayoriaEdad = (year) => {
    const edad95 = new Date().getFullYear() - year;
    const mayoria = edad95 >= 18 ? true : false;
    // si es mayor o igual que devuelva True sino Falso.
    return [edad95, mayoria];
} 
const [edad95_2, mayoria] = calMayoriaEdad(2010);

console.log(`La Persona tiene: ${edad95_2}`);
console.log(`Es mayor de edad? : ${mayoria}`);

//CLASE 96 - Maps
console.log("*********** Clase 96 - Mapas **********")
//Son similares a los arreglos pero en vez de índices tienen claves
// lo mapas pueden ser númericos o texto u otros.

//creamos un mapa

const datos96 = new Map();

//seteo (le pongo valor) a los atributos del mapa
// el primer parámetro será la clave para luego llamar al dato.
//datos.set(clave,dato)

datos96.set('nombre', 'Santiago');
datos96.set('edad', 29);
datos96.set(1, 'ignaciomg3@gmail.com');
datos96.set(2, 'Estudiante');
datos96.set('movil', 3584011277);

//obtengo los datos con .get
console.log("muetro el nro celu: " + datos96.get('movil'));

//obtengo el tamaño del mapa con "size"
function mostrardatos96(mapa){

    return console.log( 'Este es el tamaño del mapa: '+ mapa.size);
}


//para eliminar un atributo uso "delete"
datos96.delete('edad');
mostrardatos96(datos96);

//para eliminar el mapa uso "clear"

//datos96.clear();

console.log('****************************************')
//vamos a recorrer el mapa con "forEach"
console.log('Vamos a recorrer el mapa con forEach');
datos96.forEach((value, key)=> {
    console.log(`${key}  : ${value}`);
})

//CLASE 97 - Operador de Propagacion - Spread Operator
console.log("*********** Clase 97 - Spread Operator *****")
//console.clear();
console.log('Limpio la consola');

var suma = function(a, b, c, d){
    return a + b + c + d;
}

var op1 = suma(12, 14, 3, 4);
console.log(`La suma de los valores: ${op1}`);

//veamos como funciona este operador de propagación
// colocamos "..." antes de la variable que contiene los valores
// que le vamos a pasar a función.

//hacemos una matriz.
var valores = [10, 20, 12, 30];
const op2 = suma (...valores);

console.log(op2)

const rrhh = ['Pedro', 'Bartolomé', 'Felipe'];
const contab = ['Andrés', 'Tomás', 'Mateos'];

//vamos a unir los dos arreglos

const empresa = [...rrhh, ...contab];

console.log(empresa);