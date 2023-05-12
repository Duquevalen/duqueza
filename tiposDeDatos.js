//reglas
var alturaMin = 1.10;
var edadMin = 18;

//datos usuarios
var anioPresente = 2023;
var anioNacimiento = 2002;
var nombre ="valentina";
var altura = 1.70;


var resultado =(anioPresente - anioNacimiento);

//imprime info. general
console.log(nombre + " tiene:" + resultado + "años y mide:" + altura + "metros.");

if(resultado >=100){
    console.log("¿se quiere morir?");
}
if(resultado < edadMin && altura < alturaMin){
    console.log("apreciado" + nombre + "usted no puede acceder a este juego, ya que usted mide:" + altura +". Ademas usted tiene:" + resultado + "años y la edad minima minima es:" + edadMin);

}
if(resultado > edadMin && altura < alturaMin){
    console.log("aunque usted es mayor de edad, no cumple con la altura para poder ingresar a este juego");
    
}
if(resultado < edadMin && altura > alturaMin){
    console.log("aunque usted cumple con la altura necesaria, no cumple con la edad para poder ingresar a este juego");
}
if(resultado > edadMin && altura > alturaMin){
    console.log("usted cumple con ambas condiciones. que se divierta");
}

// las funciones son procedimientos independientes que se puede presentar de 4 formas:
// 1- funcion que recibe y retorna
// 2- funcion que no recibe y retorna
// 3- funcion que recibe y no retorna
// 4- funcion que no recibe y no retorna

function calcularedad(anioMayor, anioMenor){

    return anioMayor-anioMenor
}

console.log(calcularedad(anioPresente, anioNacimiento));