"use strict";
function sumar(a, b) {
    return a + b;
}
const sumar1 = (a, b) => a + b;
const contar = function (heroes) {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
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
function unirHeroes(...personas) {
    return personas.join(", ");
}
const unirHeroes1 = (...personas) => personas.join(', ');
function noHaceNada(numero, texto, booleano, arreglo) {
}
const noHacerNada1 = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
//# sourceMappingURL=app2.js.map