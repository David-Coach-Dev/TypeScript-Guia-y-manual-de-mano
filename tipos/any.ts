(()=>{
  let avenger: any = 123;
  let exist;
  let power;
  avenger = 'Dr Strange';
  console.log((avenger as string).charAt(0))
  avenger = 150.23145;
  console.log((<Number>avenger).toFixed(2))
})()