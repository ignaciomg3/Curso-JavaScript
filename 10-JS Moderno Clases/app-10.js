//CLASE 112 - POO
function print(nroClase_Y_Titulo){
    console.log(`********** Clase ${nroClase_Y_Titulo} *********`)
}
print("112 - Paradigma Orientado a Objetos")

function p2(mensaje){
    console.log(`${mensaje}`)
}
class Persona {

    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

    }

    getBiografia(){
        let bio = `${nombre} ${apellido} tiene ${edad} años`;
        
    }

}


const persona1 = new Persona('Superman', 'Lopez',34, ['a, b'])
const persona2 = new Persona('Batman', 'Lusero',45, ['c, d']);

console.log(persona1, persona2);


//voy a crear una función que cree personas según un parámetro.

function crearPersonas(cantidad) {
    var personas = [];
  
    //for ( var i = inicio; condición de corte; en_cuanto_incrementa){ cuerpo }
    for (var i = 1; i <= cantidad; i++) {
      var nombre = "nombre" + i;
      var apellido = "apellido" + i;
      var edad = i * 3; // Por ejemplo, asignar una edad basada en el índice
  
      var persona = new Persona(nombre, apellido, edad);

      //agrego a la persona al final del arreglo.
      personas.push(persona);
      console.log(persona);
    }
  
    return personas;
  }
  
  // Ejemplo de uso: Crear 5 personas
  var personasCreadas = crearPersonas(5);

  for (var i = 0; i <= personasCreadas.length; i++) {
  console.log( personasCreadas[i]);
 }

 //CLASE 113 - Clases, sintaxis y contructores.
 print("103 - Clases, sintaxis y constructores")

 class Persona113 {

    constructor(nombre, apellido, edad, trabajos =[]){
        this.nombre   = nombre;
        this.apellido = apellido;
        this.edad     = edad;
        this.trabajos  = trabajos;
        console.log('hola')
    }

    getBiografia(){
        console.log('h2')
        let bio = `${this.nombre} ${this.apellido} tiene ${this.edad} años y trabaja en  `;
        
        // recorro el arreglo trabajos" y cada variable será UN "trabajo"
        this.trabajos.forEach((trabajo) => {
            bio += `${trabajo}, `;
            
        });
        return bio
    }

}

const persona4 = new Persona113('Flash', 'Gutierrez',34, ['a, b'])
const persona5 = new Persona113('Linterna', 'Verde',45, ['c, d']);

//Muestro la persona usando su método.
console.log(persona4.getBiografia())


// ************ ************ CLASE 114 - Subclase y herencia *******************************
print('114 - Subclases y herencia')

//vamos a hacer que una clase Empleado hereda de clase Persona


class Persona114 {

    constructor(nombre, apellido, edad, trabajos =[]){
        this.nombre   = nombre;
        this.apellido = apellido;
        this.edad     = edad;
        this.trabajos  = trabajos;
        
    }

    getBiografia(){
        
        let bio = `${this.nombre} ${this.apellido} tiene ${this.edad} años y trabaja en  `;
        
        // recorro el arreglo trabajos" y cada variable será UN "trabajo"
        this.trabajos.forEach((trabajo) => {
            bio += `${trabajo}, `;
            
        });
        return bio
    }

}
class Empleado extends Persona114{

    //debe tener los atributos de Persona y además sueldo y puesto.
    constructor(nombre,apellido, edad,trabajos =[],sueldo,puesto ){
        // al super constructor le tenemos que mandar estos atributos, porque ya los tiene Persona.
        super(nombre, apellido,edad, trabajos);
        this.sueldo = sueldo; 
        this.puesto = puesto; 
    }

    get puesto(){
        //usamos el ._atributo para usarlo como método y atributo.
        return this._puesto;
    }
    set puesto(posición){
        this._puesto = posición;
    }
    getBiografia(){

        //podemos usar el/los métodos de la super clase con "SUPER"
        return super.getBiografia() + ` Puesto: ${this.puesto}, sueldo: ${this.sueldo}`
    }
    
    set sueldo(monto){
        this._sueldo = monto;
    }
    get sueldo(){
            return this._sueldo;
    }
}

const e1 = new Empleado('Fidel', 'Castro',34, ['a, b'],400, 'Encargado');
p2("muestro el empleado: ")
console.log(e1);
p2("muestro el puesto")
console.log(e1.puesto);
p2("muestro el sueldo..")
console.log(e1.sueldo);


// ************ ************ CLASE 115 - Subclase y herencia Parte 2**********************
print('115 - Subclases y herencia')

//usamos los métodos de la super clase, los cambios están en la clase 114.


// ************ ************ CLASE 116 - Subclase y herencia Parte 2**********************
print('116 - Getter y Setter')

const datos = {
   
    get ubicacion(){
        //usamos el ._atributo para usarlo como método y atributo.
        return this._ubicacion;
    },
    set ubicacion(valor){
        this._ubicacion = valor;
    }
}
datos.ubicacion = 'BS AS'
console.log(datos.ubicacion)