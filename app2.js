"use strict";
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
const sumar1 = (a, b) => a + b;
const contar = function (heroes) {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
function llamarBatman(llamar = true) {
    if (llamar) {
        console.log("Bati Señal Activada");
    }
}
const llamarBatman1 = (llamar = true) => {
    if (llamar) {
        console.log("Bati Señal Activa");
    }
};
llamarBatman();
// Rest?
function unirHeroes(...personas) {
    return personas.join(", ");
}
const unirHeroes1 = (...personas) => personas.join(', ');
// Tipo función
function noHaceNada(numero, texto, booleano, arreglo) {
}
const noHacerNada1 = (numero, texto, booleano, arreglo) => { };
// Crear el tipo de función que acepte la función "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
