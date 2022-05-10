"use strict";
// (() => {
//   const a: number = 10;
//   console.log(a)
// })()
// const msg: string = "Hola David"
// console.log(msg)
// const hero = {
//   name: "David",
//   age: "40"
// }
// console.log(hero)
(() => {
    //Tipos
    const batman = 'Bruce';
    const superman = 'Clara';
    const existe = false;
    //Tuplas
    const parejaHeroese = ['batman', 'superman'];
    const villanos = ['Lex Lutor', 5, true];
    //arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
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
    //Retorno de función
    function activar_batiSeñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio');
    }
    //Aserciones de tipos
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
