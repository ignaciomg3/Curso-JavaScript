function print(nroClase_Y_Titulo){
    console.log(`********** Clase ${nroClase_Y_Titulo} *********`)
}

function p2(mensaje){
    console.log(`${mensaje}`)
}

//CLASE 152  función SetTimeOut
print('152 - función SetTimeOut')

//una función que se ejecuta a los 3000 milisegundos.
// setTimeout(function(){
//     //console.log('esto aparece en 3 segundos..')
// },3000)

//CLASE 153 Asíncrono
print('153 - Asíncrono')

//hago que la función segundo sea una función asíncrona.
// const segundo = () => {

//     setTimeout(() => {
//         console.log('Llamada a 2do')
//     }, 50);
    
// }

const primero = () => {
    console.log('inicio');
    //segundo();
    console.log('fin');
       
}

primero();

//CLASE 155 Asíncrono
print('155 - Asíncrono')

const getUsuario = () => {
    //se usará background
    setTimeout(() => {
        const userIDs = [101,102,103,105];
        
        console.log('muestro los userIDs: '+ userIDs);

        setTimeout((iden) => {
            const usuario = {
                id: iden,
                email:'ignacio@gmail.com',
                nombre: 'igna'
            }
            console.log(`id: ${iden} -\n${usuario.email} -\n${usuario.nombre}`)

            setTimeout(() => {
                const permisos = ['adm','empleado'];
                console.log(permisos)

            }, 100, userIDs[1]);
        }, 200, userIDs[1]);
    }, 300 );
}

//getUsuario();





//CLASE 156 - Promesas
print('156 - Promesas')

//una promesa es un objeto,
//representa el éxito o fracaso de un resultado.
//ejemplo:

let promesa = new Promise((resolve, reject) =>{
    if(true){
        resolve('éxito 80');
    }else{
        reject('fracaso');
    }
});


promesa.then(response => {
  
    console.log('response: '+ response);

}).catch(error =>{

    //el catch actua cuando hay algún error en el código anterior.
    console.log('error:'+error)
})

//ejemplo2

var miPromesa = Promise.resolve('Comida');
//miPromesa.then(resp => console.log(resp))

//CLASE 157
print('157 - De Callback a una promesa')

const getUsuariosIDs = new Promise((response, reject) => {

    //seteamos el tiempo que tardará la promesa.
    setTimeout(() => {
        response([101,102,103, 105]);

    },40)
})

//si todo funciona bien, voy a recibir los IDs
// getUsuariosIDs
// .then(IDs => {
//     console.log(IDs);
//     return getUSuario(IDs[3])
// })
// .then(usuario => {
//     console.log(usuario);
//     return getPermisos(usuario.id)
// })
// .then(permisos => {
//     console.log(permisos)
// })
// .catch(() => {

//     //ponemos un catch por si tira un error
//     console.log('Error')
// })

const getUsuario1 = userID => {
    return new Promise((resolve, reject) => {
        console.log('Llega a getUsuario1 \n .');
        setTimeout(id => {
            const usuario = {
                email: 'igna@',
                nombre: 'Rulo'
            }
            resolve(`id: ${id} -\n${usuario.email} -\n${usuario.nombre}`)
            console.log('función GetUsuarios1')
        },20, userID)
    });
}


const getPermisos = id => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const permisos = ['adm','creador']
            resolve(permisos)
            console.log('función GetPermisos')
        },40, id);
    });     
}

//falta corregir un error que entra en el catch.
// mirar clasee 156 de nuevo al final (5 min) 

// EStoy probando que onda la función inventada por mi GetUsuario2

const getUsuario2 = (iden) => {
    const userIDs2 = [101,102,103,105];
    console.log('muestro los userIDs2: '+ userIDs2);
    const usuario = {
        
        email:'Raulito@gmail.com',
        nombre: 'Raul'
    }
    console.log(`id: ${iden} -\n${usuario.email} -\n${usuario.nombre}`)
    
    const permisos = ['adm','empleado','limpiador','cajero'];
    console.log(permisos);
}
//CLASE 158
print('158 - De Promesa a Async/Await')

async function getUsuariosAW(){
    
    //le digo que espere el resultado de la función getUsuariosIDs
    //y la agregue a la variables IDs
    //SOLO se puede usar AWAIT dentro de un ASYNC
    

    
    const IDs2 = await getUsuariosIDs;
    //esto funciona
    console.log('IDs: ',IDs2);
    
    
    console.log('muestro el IDs[3]', IDs2[3]);
    console.log('Esto funciona 1 \n .');

    
    
    const usuario2 = await getUsuario1(IDs2[3]);
    console.log(`muestro el usuario2: -\n${usuario2}`);
    console.log('Esto funciona 2 \n .');

    const permisos = await getPermisos(usuario2.id);
    console.log(permisos, ' estos son los permisos.');
    console.log('Esto funciona 3 \n .');


    return usuario2;
} 

const usu = getUsuariosAW();
console.log('llamo a la función GetUsuariosAW')
console.log(usu);

//CLASE 159
print('159 - Ampliando  Async/Await')

//CLASE 160
print('160 - Qué es AJAX?')

//Sirve del lado del servidor, combina tecnologías.
//Sirve para hacer lamadas asíncronas al servidor.

//CLASE 161
print('161 - Qué es APIrest?')

//CLASE 161
print('162 - Llamada AJAX con HTTP Request ')

//ejemplo de llamada AJAX

const request = new XMLHttpRequest();

//le agrego un evento
request.addEventListener('readystatechange',(e) => {
    if(e.target.readyState === 4){
        //veo los estados por los que pasa. 
        //podemos ver los estados acá: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
        
        //cuando llega  al estado 4 quiere decir que ya terminó.
        const datos = JSON.parse(e.target.responseText);

        console.log(datos);
    }
});
//hago traer un montón de usuarios de una página random.
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.send(); 

//

