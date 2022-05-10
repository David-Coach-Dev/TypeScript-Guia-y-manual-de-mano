"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super Velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super Fuerza'],
        getName() { return this.name; },
    };
})();
