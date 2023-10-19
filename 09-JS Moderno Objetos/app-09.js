console.log("******** JS Moderno********")


function print(nroClase_Y_Titulo){
    console.log(`********** Clase ${nroClase_Y_Titulo} *********`)
}
print("100 - Objetos")
//creamos un objeto

let miLibro = {
    //se definen las carac del objeto.
    titulo: 'El libro de JS', // coma para separar.
    autor: 'Igna',
    paginas: 300,
    estadoPublicado: false
}

console.log(miLibro); 

//puedo mostrar sus atributos
console.log(miLibro.autor)

//modificar atributos
miLibro.estadoPublicado = true;
console.log(miLibro.estadoPublicado)

print("101 - ejercicio de cod de objeto");
//**************************** Clase 101

let persona1 = {
    nombre: "Isaac Newton",
    edad: 56,
    ciudad: 'Valle Escondido'
}
persona1.edad = 24;

function mostrarPersona(Objetpersona){
    console.log(Objetpersona)
}
mostrarPersona(persona1);

print("102 - Objetos con Funciones")

let miLibroB = {
    titulo: 'Libro de JS avanzado', // coma para separar.
    autor: 'Igna',
    paginas: 700,
    estadoPublicado: false
}

let getResumen = (libro) => {
    
    //acá puedo hacer que el método devuelva 2 cosas distintas.
    return {
       resumenTitulo: `${libro.titulo} creado por ${libro.autor}`,
       resumenPaginas: `${libro.titulo} tiene ${libro.paginas} páginas`
    } 
}

let resumenLibroA = getResumen(miLibro);
let resumenLibroB = getResumen(miLibroB);

//acá le podemos pedir una de las dos retornos.
console.log(resumenLibroA.resumenTitulo);

//o los dos. Pero queda raro en la consola.
console.log(resumenLibroB);

//**************************** CLASE 103 - Referencia a Objetos
print("103 - Referencia a Objetos")

let persona2 = {
    nombre: "Don Quijote",
    edad: 34,
    sueldo: 250000  
}

let cambiarSueldo = (person, monto) => {
    person.sueldo = person.sueldo + monto;
    console.log(person);
}

cambiarSueldo(persona2,500);

//**************************** CLASE 104
print("104 - Métodos")

//puedo poner métodos dentro de los objetos.
let persona3 = {
    nombre: "Albert Einstein",
    edad: 56,
    metodoPrueba: function(){
        return "resultado de prueba";
    }  
}

console.log(persona3.metodoPrueba());

//****************************  CLASE 105 -this
print("105 - this");

let persona4 = {
    nombre: "Albert Camus",
    edad: 45,
    cambiarEdad: function(edad){
        //con "this" señalo la edad del objeto, y luego le sumo edad parametro.
        this.edad = this.edad + edad;
    }  
}

console.log(persona4.edad)
//le sumo 3 años a la edad.
persona4.cambiarEdad(3)
console.log(persona4.edad)

//**************************** CLASE 106 - objeto String
print("106 - Objeto String")

let nombre = "Ignacio Mongi"
console.log("largo del nombre: " + nombre +" "+  nombre.length);

//todo en MAYUS
console.log(nombre.toUpperCase());

//Todo en minus.
console.log(nombre.toLowerCase());

//Eliminar espacios a los lados..
console.log(nombre.trim())

//buscar una palabra adentro de otra. 
//includes('cadena', desde_donde_empiezo)
console.log(nombre.includes('nacio',2));

//************************** CLASE 107 - Destructuración de objetos
print("107 - Destructuración de objetos")

//Vamos a hacer un objeto con otros objetos adentro.
const respuesta = {
    código: 200,
    data: {
        persona:{
            nombre: "Tadeo",
            dirección: {
                calle: "Roque Ferreyra",
                nroCalle: 1466
            }   
        } 
    }
}

console.log(respuesta);
//quiero que a código lo obtenga de la respuesta. 
//complicado pero...
//status toma el valor que tiene, o sea 200
let { código : status, 
        data : {persona :   
                    {nombre:nom }
                }
    } = respuesta; 

//muestro el nombre de la persona.
console.log(nom);

//CLASE 108 - Destructuración de objetos parte 2
print("CLASE 108 - Destructuración de objetos parte 2");

//hagamos un arreglo de 3 objetos.

const getPersonasDatos = () => {
const respuesta2 = [
    {
        código: 201,
        data: {
            persona:{
                nombre: "Kloster",
                dirección: {
                    calle: "Avellaneda",
                    nroCalle: 108
                }   
            } 
        }
    },
    {
        código: 202,
        data: {
            persona:{
                nombre: "Esteban Rey",
                dirección: {
                    calle: "Lanús",
                    nroCalle: 306
                }   
            } 
        }
    },
    {
        código: 203,
        data: {
            persona:{
                nombre: "Luciana Blanco",
                dirección: {
                    calle: "Temperley",
                    nroCalle: 556
                }   
            } 
        }
    }

]
 return respuesta2
}

//hago una variable que tenga el nombre de la persona en la posición 0 del arreglo.
let {código : status2, data : {persona : {nombre : nom2}}} = getPersonasDatos()[0]

console.log(nom2); 

//recorro el arreglo de getPersonasDatos()
for (
    const {código : status2, 
            data : 
                {persona : 
                        {nombre : nom2}
                }
         } 
of getPersonasDatos()
    )
    {
    console.log(nom2)
    }

