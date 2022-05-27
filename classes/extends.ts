(()=>{
  class Avengers {
    constructor(
      public name: string,
      public realName: string,
    ){
      //console.log('Constructor Avenger llamado');
    }
    protected getFullName():string {
      return `${this.name} ${this.realName}`;
    }
  }
  class Xmen extends Avengers {
    constructor(
      name: string,
      realName: string,
      public isMutan: boolean,
    ) {
      super(name, realName);
      //console.log('Constructor Xmen llamado');
    }
    public getFullNameXmen():void {
      //return `${this.name} ${this.realName} ${this.isMutan}`;
      console.log(super.getFullName());
    }
    get fullName():string {
      return `${this.name} ${this.realName}`;
    }
    set fullName(name:string) {
      this.name=name;
    }

  }
  const wolverine: Xmen = new Xmen("Wolverine", "Logan", true);
  //console.log(wolverine);
  wolverine.fullName = "david";
  //console.log(wolverine.fullName);
  //wolverine.getFullNameXmen();
})()