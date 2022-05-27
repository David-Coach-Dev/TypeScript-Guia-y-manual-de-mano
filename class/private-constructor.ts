(() => {
  class Apocalipsis {
    static instance: Apocalipsis;
    private constructor(public name: string) { }
    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Soy apocalipsis el único');
      }
      return Apocalipsis.instance;
    }
  }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
  // const apocalipsis1: Apocalipsis = new Apocalipsis('Soy Apocalipsis 1...el único');
  // const apocalipsis2: Apocalipsis = new Apocalipsis('Soy Apocalipsis 2...el único');
  // const apocalipsis3: Apocalipsis = new Apocalipsis('Soy Apocalipsis 3...el único');
  console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})()