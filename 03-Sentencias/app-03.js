
//_________________________________
console.log("******************************");
console.log("Clase 36 - Sección 4")
console.log("Sentencias Condicionales Lógicas NOT!, AND &&, OR ||")


var nombre34 = 'Pablo';
var edad34 = 19;

// < 12 es niño
// 12 > edad > 18 es adolescente
// 18 > edad > 60 adulto
// 

if(edad34 < 12){
    console.log('es un niño')
}
else 
    if(12 < edad34 && edad34 < 18){
        console.log('es un adolescente')
    }
    else 
        if(18 < edad34 && edad34 < 60){
            console.log('es un adulto')
        }
        else {
            console.log('es un anciano')
        }


//_________________________________
console.log("******************************");
console.log("Clase 37 - Sección 4")
console.log("Operador Ternario")

var nombre = 'Pablo';
var edad = 19;


//pregunta si es mayor o igual a 18 si es V se ejecuta : si es Falso se ejecuta esta parte.
edad >= 18 ? console.log(nombre + ' es mayor de edad') : console.log(nombre + ' no es mayor');


//_________________________________
console.log("******************************");
console.log("Clase 38 - Sección 4")
console.log("Sentencias Switch")
//Sentencia Switch: compara el valor de una variable con diferentes valores y sino se encuentra
// hay un valor por defecto.

var mes = 10;
switch(mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;
    case 6:
        console.log('Junio');
        break;
    case 7:
        console.log('Julio');
        break;
    case 8:
        console.log('Agosto');
        break;
    case 9:
        console.log('Septiembre');
        break;
    case 10:
        console.log('Octubre');
        break;
    case 11:
        console.log('Noviembre');
        break;
    case 12:
        console.log('Diciembre');
        break;

    //valor por defecto: default
    default:
        console.log('Mes no considerado..');
    }


//_________________________________
console.log("******************************");
console.log("Clase 39 - Sección 4")
console.log("Sentencias For")

// primero la variable i, despues la condición, luego la adición i++
// luego el bloque que se ejecuta {...console.log(i);}
for (var i = 0; i <= 10; i++){
    console.log(i);
} 
// de 0 a 10 sumando de a 1.

for (var j = 0; j <= 20; j+= 2){
    console.log(j);
}
// esste va de 0 a 20 sumando de a 2

for (var k = 30; k >= 0; k-=3){
    console.log(k);
}
// este va desde 30 a 0, restando de a 3


//_________________________________
console.log("******************************");
console.log("Clase 40 - Sección 4")
console.log("Sentencia while")
//Sentencia While: mientras se cumpla una condición se sigue ejecutando lo que está dentro de {..}

var i = 1;
while(i <= 10){
    console.log(i);
    i++;
}
var h = 10;
while(h >= 0){
    console.log(h);
    h--;
}

//____________________________________________
console.log("******************************");
console.log("Clase 41 - Sección 4")
console.log("Sentencia do...while")
//Sentencia do... While:
//hace algo { comandos } hasta que cumpla cierta condición que está en el while ()
var n = 1;
do{
    console.log(n); 
    n+=4;
}
while(n <= 10)

//____________________________________________
console.log("******************************");
console.log("Clase 42 - Sección 4")
console.log("Valores Verdaderos y Falsos")
//Valores Verdaderos y Falsos:

//Si la variable está:
// si solo está declarada entonces está como FALSO
// si vale ''    es FALSO
// si vale 0     es FALSO
// si vale null  es FALSO

var edad;
var edad = '10';

if(edad){
    console.log('la variable está definida');

    if(edad === 10){
        
        // el triple = compara que sean iguales los VALORES y que sean iguales los TIPOS de datos
        console.log('variable comparada con el triple =');
    
    }
    else{
        if(edad == 10){
        // el doble == compara que sean iguales los VALORES no le importa que sean
        // de distintos tipo de datos iguales los tipos de datos
        console.log('variable con coersión, doble =');
        }
        else{
            console.log("la variable no s igual a 10 en ninguna de sus formas")
        }   
    }
}


//____________________________________________
console.log("******************************");
console.log("Clase 43 - Sección 4")
console.log("Ejercicio de dificación 2")
//
//Pablo y Maria tienen tres notas, mostrar promedio, cual es mayor y
// mostrar si aprobaron con 13 o mas.

var n1 = 'Pablo'
var n2 = 'Maria'

var pP = (14 + 8 + 16)/3
var pM = (12 + 18 + 10)/3
console.log('Promedio de '+ n1+' '+ pP)
console.log('Promedio de '+ n2+' '+ pM)


if(pP >= 13){
    console.log('Pablo aprobró')

}
else{
    console.log('Pablo no aprobó')
}
if(pM >= 13){
    console.log('Maria aprobró')
    if(pP < pM){
        console.log(' y su promedio es mayor al de Pablo')
    }
    else{
        console.log(' y su promedio es menor o igual al de Pablo')
    }
}
else{
    console.log('Maria no aprobó')
}

//_________________________________