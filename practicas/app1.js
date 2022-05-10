"use strict";
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
//# sourceMappingURL=app1.js.map