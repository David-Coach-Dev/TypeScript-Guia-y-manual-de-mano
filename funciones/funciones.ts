(()=>{
  const hero: string = 'Flash';
  function returnName():string {
    return hero;
  }
  const actBatiSeñal = ():string => {
    return 'BatiSeñal activa!';
  }
  console.log(typeof actBatiSeñal);

  const heroName = returnName();
})()