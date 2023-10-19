function print(nroClase_Y_Titulo){
    console.log(`********** Clase ${nroClase_Y_Titulo} *********`)
}
print("119 - Arreglo básico")

function p2(mensaje){
    console.log(`${mensaje}`)
}

p2("declaro un arreglo");
const puchero =['carne','papa','zanahoria','batata'];
console.log(puchero.length);

//CLASE 120
print("120 - Agregar/quitar elemento al inicio/final")

p2('agrego al final.. con PUSH')
puchero.push('espárrago');
p2(puchero);

puchero.push('sal');

puchero.push('mas sal');

p2('quito el último con POP()..')
puchero.pop();
p2(puchero)

p2('agrego al principio con unshift(elemento)')
puchero.unshift('agua')
p2(puchero);

puchero.unshift('mas agua')
p2(puchero);

p2('elimina el del principio con shift()')
puchero.shift();
p2(puchero)

//***************************  CLASE 121****************************
print("121 - Agregar/quitar elemento con Splice")

//splice(desde_donde_quito, hasta_donde)
puchero.splice(1,1)
p2(puchero);

//puedo agregar
puchero.splice(1, 0, 'caldo');
p2(puchero);

//***************************  CLASE 122****************************
print("122 - Bucle sobre matrices")

 puchero.forEach(function(item, index){
    console.log(index);
    console.log(item);
 });

 //***************************  CLASE 123 - recorrer arreglo ********************
print("123 - recorrer arreglo")

for(let i=0; i < puchero.length; i++){
    console.log(`indice: ${i}: ${puchero[i]}`)
}

//***************************  CLASE 124 -buscar ********************
print("124 - buscar")

const pizza = [
    {
        cod: 1,
        ingrediente: 'harina'
    },
    {
        cod: 2,
        ingrediente: 'agua'
    },
    {
        cod: 3,
        ingrediente: 'sal'
    }
]
console.log(pizza);

//buscamos un elemento en particular, cuando la encuentra dejaa de recorrer.
const index = pizza.findIndex(function(ing, index){
    console.log(ing);
    return ing.ingrediente === 'sal';
})
console.log(index);

//***************************  CLASE 125 - Ampliando la busqueda**********

//***************************  CLASE 126 - Filtrado/Filtro**********

print("126 - Filtro")
//filter busca las palabras que le pasamos.
//busco en el arreglo puchero, los elementos seran ingre
// y los mostrará si ingre tienen la letra ele.
console.log(puchero.filter(ingre => ingre.includes('l')));

//***************************  CLASE 127 - Ordenar
print("127 - Ordenación")
puchero.sort();
p2(puchero);


