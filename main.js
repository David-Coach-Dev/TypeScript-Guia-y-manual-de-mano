"use strict";
(() => {
    const msg = 'Hola David';
    console.log(msg);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no lastName'}`;
    };
    const name = fullName('Tony');
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log(name);
})();
(() => {
    const fullName = (firstName, ...restAgrs) => {
        return `${firstName} ${restAgrs.join(' ')}`;
    };
    const superman = fullName('clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const actBatiSeñal = () => {
        return 'BatiSeñal activa!';
    };
    console.log(typeof actBatiSeñal);
    const heroName = returnName();
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado`;
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clara';
    const existe = false;
    const parejaHeroese = ['batman', 'superman'];
    const villanos = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let nivelFuerzas;
    (function (nivelFuerzas) {
        nivelFuerzas[nivelFuerzas["Acuaman"] = 0] = "Acuaman";
        nivelFuerzas[nivelFuerzas["Batman"] = 1] = "Batman";
        nivelFuerzas[nivelFuerzas["Flash"] = 5] = "Flash";
        nivelFuerzas[nivelFuerzas["Superman"] = 100] = "Superman";
    })(nivelFuerzas || (nivelFuerzas = {}));
    const fuerzaFlash = nivelFuerzas.Flash;
    const fuerzaSuperman = nivelFuerzas.Superman;
    const fuerzaBatman = nivelFuerzas.Batman;
    const fuerzaAcuaman = nivelFuerzas.Acuaman;
    function activar_batiSeñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
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
})();
(() => {
    var batiMovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4
    };
    var bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        }
    };
    var villanos = [{
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false
        }, {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true
        }, {
            nombre: "James Logan",
            edad: undefined,
            mutante: true
        }];
    var charles = {
        poder: "psiquico",
        estatura: 1.78
    };
    var apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
    };
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    let avenger = 123;
    let a;
    let exist;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 150.23145;
    console.log(avenger.toFixed(2));
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 78, 8, 9, 10];
    numbers.push(12);
    console.log(numbers);
    const villains = ['Omega Rojo', 'Dormamu', 'Duende Verde'];
    villains.forEach(v => console.log(v.toLowerCase()));
})();
(() => {
    let isSuperman = true;
    let isBatman = true;
    console.log(isSuperman);
    console.log({ isBatman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.min;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error('auxilio');
})();
(() => {
    let isActive = false;
    console.log(isActive);
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villanas = 20;
    if (avengers < villanas) {
        console.log('estamos en problema');
    }
    else {
        console.log('nos salvamos');
    }
    avengers = Number('123a ');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'batman';
    const linternaVerde = "linterna verde";
    const volcanNegro = `Héroe: Volcán negro`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'no esta');
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Iroman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callsuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map