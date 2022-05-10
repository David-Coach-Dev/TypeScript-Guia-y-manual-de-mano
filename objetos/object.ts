(()=>{
  let flash: {name: string, age:number, powers: string[], getName?: () => string} = {
    name: 'Barry Allen',
    age: 24,
    powers: ['super Velocidad', 'Viajar en el tiempo']
  }
  let SUPERMAN: {name: string, age:number, powers: string[], getName?: () => string} = {
    name: 'Clark kent',
    age: 60,
    powers: ['Super Fuerza']
  }
  // flash = {
  //   name: 'Clark Kent',
  //   age: 60,
  //   powers: ['Super Fuerza'],
  //   getName(){ return this.name; },
  // }
  // console.log(flash.getName());
})()