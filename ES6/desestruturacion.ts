(() => {
  type Avenger = {
    nick: string;
    ironman: string;
    vision: string;
    activos: boolean;
    poder: number;
  }
  const avengers: Avenger = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activos: true,
    poder: 1500.1333
  }
  const printAvenger = ({ ironman, ...resto}:Avenger) =>{
    const { poder, vision } = avengers;
    //console.log(avengers.ironman, resto);
  }
  printAvenger(avengers);
  const avengersArr:[string, boolean, number ] = ['Cap. America', true, 150.15];
  const [capitan ,ironman, seriaUnNumero] = avengersArr;
  //console.log({ ironman, capitan });
})()