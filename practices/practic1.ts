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
  const batman: String = 'Bruce';
  const superman: String = 'Clara';
  const existe:boolean = false;
  //Tuplas
  const parejaHeroese: [string, String] = ['batman', 'superman'];
  const villanos: [string, number, boolean] = ['Lex Lutor', 5, true];
  //arreglos
  const aliados: string[] = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
  //Enumeraciones
  enum nivelFuerzas {
    Acuaman = 0,
    Batman = 1,
    Flash = 5,
    Superman = 100
  }
  const fuerzaFlash: nivelFuerzas = nivelFuerzas.Flash;
  const fuerzaSuperman: nivelFuerzas = nivelFuerzas.Superman;
  const fuerzaBatman: nivelFuerzas = nivelFuerzas.Batman;
  const fuerzaAcuaman: nivelFuerzas = nivelFuerzas.Acuaman;
  //Retorno de función
  function activar_batiSeñal():string
  {
    return 'activada';
  }
  function pedir_ayuda(): void {
    console.log('Auxilio');
  }
  //Aserciones de tipos
  const poder: any = '100';
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})()
