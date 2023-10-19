// *************** DECLARACIÓN DE VARIABLES **********************

var PrimerNombre = 'Ignacio2';
console.log(PrimerNombre);
var edadIgnacio = 23;
var edadJuan = 24;
var altura = 1.76;
console.log(edadIgnacio);
console.log("Altura: "+ altura)
console.log("Edad: "+ edadIgnacio)
console.log("Nombre: "+ PrimerNombre)
var Estudia = true;
console.log("Estudia? " + Estudia);

/* COMENTARIOS DE MAS DE 1 LINEA
A CONTINUACIÓN SIGO ESCRIBIENDO */
console.log("linea 17")
var edadMayor = edadIgnacio < edadJuan; //la varieable "edadMayor" será true si se cumple la condición.
console.log("linea 19")
console.log(edadMayor);

//__________________________________________________________________
// CLase 20
//operadores Matemáticos

var edad1,edad2,sumaEdades,resta;

edad1=21;
edad2=22;
sumaEdades= edad1 + edad2;
resta= edad1 - edad2;
console.log("la suma es "+sumaEdades)
console.log("la resta es "+resta)

// operador TypeOf: nos dice de que tipo es la varible.

console.log(typeof edadIgnacio); 
// esto nos va a devolver "number"

//__________________________________________________________________
console.log("******************************");
console.log("Clase 21");
//Operador de incremento y decremento

var edadMaria = 18;
var edadCarmen = 21;

++edadCarmen;
console.log("edad Carmen " +edadCarmen);
// mostrará 22
console.log("edad de Maria " + edadMaria);
//18
edadMaria--; //le resto 1
console.log("edad de Maria " + edadMaria++);
//17 (porq lee el valor viejo de la línea 45)
console.log("edad de Maria " + edadMaria);
//18 porque lee el valor de la línea 55
console.log("edad de Maria " + edadMaria);
//18

//_________________________________
console.log("******************************");
console.log("Clase 24");
//Operador de asignacion

var a = 5;
var b = 6;

console.log("valor de a y b respectivamente: "+a,b);
//si quiero sumar dos variables puedo hacer:

a = a + b;
console.log(a);
//11
a=5;
// o también:
a += b;
console.log(a);
//11

a=5;
a -= b;
console.log(a);
//-1

a=5;
a /= b; //a es igual a dividido b
console.log("división "+a);

var c;

c = b % a; // c es igual al RESTO de dividir b sobre a
console.log("resto de b/a "+c)


//_________________________________
console.log("******************************");
console.log("Clase 25")
console.log("mas operadores en: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators")

//_________________________________
console.log("******************************");
console.log("Clase 26")
console.log("Ejercicio de codificación")
// problemita:

//Calcular el IMC
var pLuis = 72;
var alturaLuis = 1.72;
var IMC_Luis = pLuis / (Math.pow(alturaLuis,2));


var pCarlos = 89;
var aCarlos = 1.75;
var IMC_Carlos = pCarlos /(Math.pow(aCarlos,2));

console.log("IMC Luis: " +IMC_Luis) 
console.log("IMC Carlos: " +IMC_Carlos) 

//_________________________________
console.log("******************************");
console.log("Clase 31 - Introducción a HTML5 y CSS3")

// HTML 5 es un lenguaje etiquetas que permite maquetar una página web
