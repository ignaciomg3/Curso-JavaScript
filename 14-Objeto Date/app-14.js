function print(nroClase_Y_Titulo){
    console.log(`********** Clase ${nroClase_Y_Titulo} *********`)
}

function p2(mensaje){
    console.log(`${mensaje}`)
}

//CLASE 146 Objeto DATE()
print('146 - Objeto Date()')

const ahora = new Date();
console.log(ahora.toString())

//CLASE 147 
print('147 - Obetener Objeto Date()')

console.log(`año: ${ahora.getFullYear() } `);
console.log(`Mes: ${ahora.getMonth() +1}`);

//CLASE 149
print('149 - TimeStap')

//CLASE 150
print('150 - Ejercicio de comparación de fechas')
/* 
Ejercicio de comparación de fechas.
Crear dos objetos date uno con una fecha cualquiera y el siguiente con
la fecha actual, luego comparar ambos valores,
visualizar cual es la fecha menos a la otra.
*/

const ahora2 = new Date(); 
const fechaCaulquiera = new Date(999999999989);
const fechaCaulquiera2 = new Date(1699900000000);

console.log(fechaCaulquiera2.toString());
console.log(ahora2.toString());

