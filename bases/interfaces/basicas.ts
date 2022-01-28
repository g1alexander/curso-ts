(() => {
  interface Hero {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: "barry",
    age: 24,
    powers: ["veloz", "viaja en el tiempo"],
  };

  const superman: Hero = {
    name: "Superman",
    age: 60,
    powers: ["fuerza"],
    getName() {
      return this.name;
    },
  };
})();
