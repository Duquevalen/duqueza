//reglas
//var alturaMin = 1.10;
//var edadMin = 18;

//datos usuarios
//var anioPresente = 2023;
//var anioNacimiento = 2002;
//var nombre ="valentina";
//var altura = 1.70;


//var resultado =(anioPresente - anioNacimiento);

//imprime info. general
//console.log(nombre + " tiene:" + resultado + "años y mide:" + altura + "metros.");

//if(resultado >=100){
   // console.log("¿se quiere morir?");
//}
//if(resultado < edadMin && altura < alturaMin){
  //  console.log("apreciado" + nombre + "usted no puede acceder a este juego, ya que usted mide:" + altura +". Ademas usted tiene:" + resultado + "años y la edad minima minima es:" + edadMin);

//}
//if(resultado > edadMin && altura < alturaMin){
  //  console.log("aunque usted es mayor de edad, no cumple con la altura para poder ingresar a este juego");
    
//}
//if(resultado < edadMin && altura > alturaMin){
  //  console.log("aunque usted cumple con la altura necesaria, no cumple con la edad para poder ingresar a este juego");
//}
//if(resultado > edadMin && altura > alturaMin){
 //   console.log("usted cumple con ambas condiciones. que se divierta");
//}

// las funciones son procedimientos independientes que se puede presentar de 4 formas:
// 1- funcion que recibe y retorna
// 2- funcion que no recibe y retorna
// 3- funcion que recibe y no retorna
// 4- funcion que no recibe y no retorna

//function calcularedad(anioMayor, anioMenor){

 //   return anioMayor-anioMenor
//}

//console.log(calcularedad(anioPresente, anioNacimiento));

//console.log(calcularedad(anioPresente, anioNacimiento));


//**************************clase 2 JS//



//ciclo / bucles / loops


 
//1 - for
//2 - while
//3 - do while

//var numconsignaciones = 10;

//for(let i = 1;    i<=numconsignaciones;   i++ ){
 //   console.log("Esta es la consignacion numero:" + i);
//}

//var i = 1;
//while(i<=numconsignaciones){
   // console.log("Esta es la consignacion numero: " + i);
   // i ++;
//}
//console.log(" aqui se finaliza el programa");


//do{
 //   console.log("Esta es la consignacion numero: " + i);
  //  i++;
//}while(i<=numconsignaciones);


// arreglos/ arrays/


//const listaAseo1 = ["cloro", "traperas", "javon de ropa","javon cuerpo", "cepillo", "fabuloso"];

//for(let i = 0;  i<listaAseo1.length; i++){
  //  console.log(listaAseo1[i]);
//}




//metodos y recoridos de los arreglos


//const listaAseo2 = [" cloro", " escoba", "javon"]

//var producto = ["shampo"];

//listaAseo2.push(producto);

//for(let i = 0;  i<listaAseo2.length; i++){
  //  console.log(listaAseo2[i]);
//}

//console.log(" esta es la forma de imprimir con el ciclo while");

//let j = 0;
//while(i<listaAseo2.length){
 //  console.log(listaAseo2[i]);
 //  i ++;
 //}


  // objetos literales

  let perro = {
    nombre: "coraje",
    tamaño: "pequeño",
    colorpelo: "piel",
    personalidad: "cobarde",
    fechaNacimiento: 1999,
    habilidades: {
        estadoPasivo: "poca materia gris",
        estadoAsustado: "inteligente",
        estadoAlamardo: " creativo"
    }
    
  }
  alert("El nombre de su perro es"+ perro.habilidades.estadoAsustado);