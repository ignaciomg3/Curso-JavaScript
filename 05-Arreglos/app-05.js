//__________________________________________________________________
console.log("*******************************************************");
console.log("Clase 62 - Sección 6")
console.log("Arreglos - Arrays")

var bebidas = ["café", "té","Limonada"];

// otra forma de definir un array sería:

var bar = new Array("café", "té","Limonada");
var vegetales = new Array('tomate','lechuga','zanahoria','zapallo','berenjena');

//muestro el primer elemento del array
console.log(vegetales[0]);

//cambio el primer elemento.
vegetales[0]= 'tomate perita';
console.log(vegetales[0]);

//__________________________________________________________________
console.log("*******************************************************");
console.log("Clase 63 - Sección 6")
console.log("Declaración de arreglos")

//declaremos un arreglo. 2 formas una con "[..,..,..]" y otro con "new Array (..,..,..)"
var nom = ['Pablo','Matias','Ignacio'];
var vegetales2 = new Array ('Tomates','Lechuga','Berenjena');

//para saber el largo del array hacemos:
console.log("largo del arreglo: "+vegetales2.length);
// vegetales tiene tres elementos.

//__________________________________________________________________
console.log("*******************************************************");
console.log("Clase 64 - Sección 6")
console.log("Operaciones con arreglos - Recorrer un arreglo")


console.log("1era Forma para recorrerlo - ciclo for")
//1era Forma para recorrerlo - ciclo for
for (var i=0; i<= vegetales.length -1; i++){
    console.log(vegetales[i]);
}

console.log("2da forma para recorrerlo- forEach")
//2da forma para recorrerlo- forEach
vegetales.forEach(function(elemento,indice, array){
    console.log(elemento,indice);
});

//Añadir un elemento al final con 'push(...)':
vegetales.push('naranja');
console.log(vegetales);

//Añadir al principio con 'unshift(...)'
vegetales.unshift('frutilla');
console.log(vegetales);

//Sacar el último elemento con pop():
vegetales.pop();

//Sacar el primer elemento con shift():
vegetales.shift();
console.log(vegetales);

//saber la posición de un elemento con indexOf(...):
var indice= vegetales.indexOf('lechuga');
console.log('en indice de lechuga es: '+indice);

//Eliminar el elemento según el índice con array.splice(desde,cuantos):
vegetales.splice(1,1);
//splice(índice desde el cual quiero eliminar, cuantos elimino)
//me paro en el índice de lechuga y elimino lechuga.
console.log(vegetales);


//__________________________________________________________________
console.log("*******************************************************");
console.log("Clase 65 - Sección 6")
console.log("Arreglo con diferentes tipos de datos")

//defino el array
var persona = ['Ignacio','Mongi',23,'40974148', 1.76];
console.log(persona);

//__________________________________________________________________
console.log("*******************************************************");
console.log("Clase 66 - Sección 6")
console.log("Objetos de forma literal")

//creamos un objeto
var per = {

    //adentro de las llaves se ponen las propiedades.
    nombre: 'Ignacio',
    apellido: 'Mongi',
    gustos:['Ajedrez','Películas','Codificación'],
    trabajo:'Estudiante',
    esCasado: false,
};

//muestro el objeto
console.log(per);

//si solo quiero ver el apellido:
console.log(per.apellido);
console.log(per['apellido']);
//cualquiera de las dos formas es válida.

//Puedo cambiar las propiedades de los objetos.
per.esCasado=true;
console.log(per.esCasado);

//__________________________________________________________________
console.log("*******************************************************");
console.log("Clase 67 - Sección 6")
console.log("Creando objetos con Sintaxis Object  ")


var per2 = new Object();
per2.nombre = 'Ana';
per2.apellido = 'Lopez';
per2['trabajo'] = 'Desarrollador';

console.log(per2);


//__________________________________________________________________
console.log("*******************************************************");
console.log("Clase 68 - Sección 6")
console.log("  Métodos de los Objetos ")


var per3 = {

    //adentro de las llaves se ponen las propiedades.

    //PROPIEDADES
    nombre: 'Genaro',
    apellido: 'Mongi',
    gustos:['Ajedrez','Películas','Codificación'],
    trabajo:'Estudiante',
    esCasado: false,
    yearnac: 2004,
    //MÉTODOS:
    calcularEdad:function(){
        //'this' se refiere al atributo DENTRO de este objeto.
        return 2022 - this.yearnac;
    }
};

console.log(per3);
var edadG = per3.calcularEdad();
console.log(edadG);

//'this' es un operador que habla de 'Esto' se refiere dentro de un objeto.


