// Do not change any of the function names

function mayuscula(nombre) {
  
  return nombre.charAt(0).toUpperCase()+nombre.slice (1 );


  //..............opcion 2 ...........

  // var nombre2 = "";

// function mayusc ( nombre) {
 
//nombre2 = nombre.charAt(0).toUpperCase()  + nombre.slice (1 );
// return nombre2;}


//return mayusc (nombre) ;

//.......... Otra opcion 3............


// String.prototype.capitalice = function (){ //creo el prototipe para String (poner String con mayúscula)

//  return  this.charAt(0).toUpperCase()  + this.slice (1 );}
  // llamo al prototype String.capitalice pero para nombre 
// return nombre.capitalice (); //poner ()




  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
}

function invocarCallback(cb) {

  return cb();


// .....otra opcion .....
// cb ();

  // Invoca al callback `cb`
  //Tu código:
}

function operacionMatematica(n1, n2, cb) {

  return cb (n1, n2);
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
}

function sumarArray(numeros, cb) {


//function cb (numeros){
  var suma =  numeros.reduce(function (acc , elem ) {
    return acc + elem;

  },0);
  cb(suma);  // Pasa el resultado a `cb`
 
  

  // Suma todos los números enteros (int/integers) de un array ("numeros")
  
  // No es necesario devolver nada
  //Tu código:
}

function forEach(array, cb) {

array.forEach (function (x,indice){
  cb (x);
})

  
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
}

function map(array, cb) {

var nuevo = [];
  for (let i = 0; i < array.length; i++) {

    cb(array[i]) ;
    nuevo.push (cb (array[i]));
  }

  return nuevo;

// .....otr forma ....
  // var nuevo = array.map(function (el){
 // return cb (el);
 // })
// return nuevo;


  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
}

function filter(array) {

  var array2 = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] [0] === "a")  array2.push ( array[i]);
    
  
}
  return array2  ;
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
