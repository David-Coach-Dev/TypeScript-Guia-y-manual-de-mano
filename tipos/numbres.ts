(()=>{
  let avengers: number= 10;
  console.log(avengers)

  /* Declaring a constant variable. */
  /* Declaring a constant variable. */
  const villanas: number = 20;
  if (avengers < villanas) {
    console.log('estamos en problema')
  } else {
    console.log('nos salvamos')
  }
  avengers = Number('123a ');
  console.log({avengers})
})()