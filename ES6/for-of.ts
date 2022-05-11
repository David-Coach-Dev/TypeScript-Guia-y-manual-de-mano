(() => {
  type Avenger = {
    name: string;
    weapon: string;
  }
  const ironman: Avenger = {
    name: 'Ironman',
    weapon: 'Armorsuit',
  }
  const capitanAmerica: Avenger = {
    name: 'Capitan America',
    weapon: 'Shield',
  }
  const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir',
  }
  const hulk: Avenger = {
    name: 'Hulk',
    weapon: 'Super Fuerza',
  }
  const averngers:Avenger[] = [ironman, thor, capitanAmerica, hulk]
  for (const avenger of averngers){
    console.log(avenger.name, avenger.weapon );
  }
})()