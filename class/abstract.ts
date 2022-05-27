(()=>{
  abstract class Mutante {
    constructor(
      public name: string,
      public realName: string,
    ) {}
  }

  class Xmen extends Mutante {
    saveWorld():string {
      return 'Mundo Salvado';
    }
  }
  class Villian extends Mutante {
    conquerWorld():string {
      return 'Mundo conquistado';
    }
  }
  const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
  const magneto: Villian = new Villian('Magneto', 'Magnus');
  // console.log(wolverine.saveWorld());
  // console.log(magneto.conquerWorld());
  const printName = (character: Mutante) => {
    console.log(character.realName);
  }
  // printName(wolverine);
  // printName(magneto);
})()