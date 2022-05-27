"use strict";
(() => {
    ;
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["super Velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark kent",
        age: 60,
        powers: ["Super Fuerza"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor() {
            this.age = 0;
            this.name = '';
            this.realName = '';
        }
        mutantPower(id) {
            return `${this.name} has power ${id}`;
        }
    }
})();
(() => {
    const client = {
        name: 'David',
        age: 40,
        address: {
            id: 125,
            zip: 'ky2 sud',
            city: 'Ottawa'
        },
        getFullAddress(id) {
            return `${this.address.city}, ${this.address.zip}`;
        }
    };
    const client2 = {
        name: 'Maria',
        age: 30,
        address: {
            id: 120,
            city: 'Toronto',
            zip: 'K2S U2A',
        },
        getFullAddress(id) {
            return `${this.address.city}, ${this.address.zip}`;
        }
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map