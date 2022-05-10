(()=>{
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }
  let myCustomVariables: (string | number | Hero) = 'DAVID';
  console.log(typeof myCustomVariables);
  console.log(myCustomVariables);
  myCustomVariables = 20;
  console.log(typeof myCustomVariables);
  console.log(myCustomVariables);
  myCustomVariables = {
    name: 'Bruce',
    age: 43,
    powers: ['super fuerza'],
  };
  console.log(typeof myCustomVariables);
  console.log(myCustomVariables);
})()