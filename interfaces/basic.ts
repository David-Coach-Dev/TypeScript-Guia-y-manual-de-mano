(() => {
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["super Velocidad", "Viajar en el tiempo"],
  };
  let superman: Hero = {
    name: "Clark kent",
    age: 60,
    powers: ["Super Fuerza"],
    getName() {
      return this.name;
    },
  };
})();
