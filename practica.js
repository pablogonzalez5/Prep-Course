
function matriz (n,m) {
    for (let i = 0; i< n; i++) {
        for (let j = 0; j < m; j++) {
          console.log (i, " " , j);
            
        }        
    }



}



natriz (2,2)


npm test JSVI.test.js

var i = 0;

while (i<=200) {
    console.log (i);
    i++; 
}


function obtenerMayor(x, y) {

  if (x>=y) {
    return x;
  }
  else return y;
    // "x" e "y" son números enteros (int).
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
  }


  function mayoriaDeEdad(edad) {

if (edad>= 18) {
    return "Allowed";
}
else return "Not allowed"; 
  
    //Determinar si la persona según su edad puede ingresar a un evento.
    //Si tiene 18 años ó más, devolver --> "Allowed"
    //Si es menor, devolver --> "Not allowed"
  }



function conection(status) {

    if (status ===1 ) {
       return "Online" ;
    }
    else if (status ===2) {
        return "Away";
    }
    else return "Offline";
  
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.
  }


  function saludo(idioma) {
    if (idioma = "aleman") {
        return "Guten Tag!";
    }
    else if (idioma ="mandarin") {
        return "Ni Hao!";
    }
    else if (idioma ="ingles") {
        return  "Hello!";
        
    }
    else return "Hola!";
    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "Ni Hao!"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
    // Tu código:
  }
  
  var num=numero;
  var retorno = [];
  for (let i =0; i <10 ; i++) {
   num =num+2;
   if (i==5) { continue } else {retorno.push(num); }
 
  
  

  }

  return retorno; 
