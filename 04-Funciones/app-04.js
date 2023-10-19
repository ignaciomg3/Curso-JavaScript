//____________________________________________
console.log("******************************");
console.log("Clase 47 - Sección 5")
console.log("Creando nuestra primera función")

function bienvenido(){
    //console.log('Hola, bienvenido..');
    return 'Como andas?';
}


var mensaje = bienvenido();
//console.log(mensaje);
console.log(bienvenido());


//____________________________________________
console.log("******************************");
console.log("Clase 48 - Sección 5")
console.log("Funciones: Argumentos")


function cuadrado_de_num(parametro){
    return (parametro * parametro);
}

var par = 3;
console.log(cuadrado_de_num(par));

//____________________________________________
console.log("******************************");
console.log("Clase 49 - Sección 5")
console.log("Función convierte  Fahrenheit a Celsius ")


function convertirFaC(gF){
    
    var gC = (gF - 32) *(5/9);
    return gC;
}

console.log(convertirFaC(90));

//____________________________________________
console.log("******************************");
console.log("Clase 50 - Sección 5")
console.log("Función calcular edad ")
 

function calcularEdad(yearnac){

    return (2022 - yearnac);
}

var edad = calcularEdad(1998);
console.log('La edad es: '+ edad);

//____________________________________________
console.log("******************************");
console.log("Clase 51 - Sección 5")
console.log(" Ejercicio: Cuantos años faltan para llegar a jubilarse a los 65.")

function calcularEdad(yearnac){

    return (2022 - yearnac);
}

var edad = calcularEdad(1998);

function calcularAñosParajub(edad1){

    return (65 - edad1);
}

var añosfaltantes = calcularAñosParajub(calcularEdad(1998));
console.log('Faltan : '+ añosfaltantes);


//____________________________________________
console.log("******************************");
console.log("Clase 53 - Sección 5")
console.log(" Funciones como expresiones.")


var nom1 = 'Ignaa';
var prueba = function(nom1){
    return 'Mensaje de la funcion dentro de la varible prueba. Soy '+nom1;
}
//no olvidar los () con el parámtro dentro.
console.log(prueba(nom1));

//____________________________________________
console.log("******************************");
console.log("Clase 54 - Sección 5")
console.log("Argumentos no definidos")
// Los argumentos por defecto solo apuntan a la dirección de memoria.


var nom2 = 'Igna';
var prueba = function(n){
    return 'le mando a la función una variable que no está definida '+n;
}
console.log(prueba(nom2));

//____________________________________________
console.log("******************************");
console.log("Clase 56 - Sección 5")
console.log("Argumentos por Default")
// Los argumentos nulos apuntan a una dirección de memoria y valen null

var a = 3;
var b = 4;
//cuando yo no le pase valores de 'd' esta variable va a valer 1.
var suma = function(a,b,d=1){
    c = a+b+d;
    return c;
}
//no olvidar los () con el parámtro dentro.
console.log(suma(a,b));
//ahora le voy a pasar un valor para 'd'
console.log(suma(a,b,5));   

//__________________________________________________________________
console.log("*******************************************************");
console.log("Clase 57 - Sección 5")
console.log("Template String")
// Usamos las tildes invertidas `` y el símbolo del peso $ con {} ${variable string}

var nom3 = 'Ignacio Mongi';
var prueba = function(nom){
    return `Mi nombre es: ${nom} `
}
console.log(prueba(nom3));

//__________________________________________________________________
console.log("*******************************************************");
console.log("Clase 58 - Sección 5")
console.log("Ejercicio de Codificación 4")

// Hacer un programa que permita evaluar el % de respuestas correctas e incorrectas
// > La Función debe recibir el nombre, cant de preguntas positivas y negativas.
// > El examen consta de 100 preguntas.
// > Mostrar la letra de cada alumno según corresponda.
// > A(>90%), B(70% - 89%), C(45 -  69), D(<45)

var cantpreg = 100;

function calcularProcentaje(pos, cantpreg = 100){

    // porcentaje de preguntas positivas:
    var porc = ((pos * 100) / cantpreg);

    var letra = '';
    if(porc >= 90){
            letra = 'A';
        }
    else if(70 <= porc && porc <= 89){
        letra = 'B';
        }
    else if(45 <= porc && porc < 70){
        letra = 'C';
        }
    else{
        letra = 'D';
    }
    return letra;        
}

function mostrarNotas(nom,pos){

    var letra = calcularProcentaje(pos);
    return `nombre del alumno: ${nom}, su nota es "${letra}"`

}

var nom4 = 'Ignacio M';
//puedo cambiar la cantidad de respuestas positivas en el segundo parámetro.
console.log(mostrarNotas(nom4, 100));