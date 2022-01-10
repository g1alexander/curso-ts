(() => {
  let flash: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "barry",
    age: 24,
    powers: ["veloz", "viaja en el tiempo"],
  };

  flash = {
    name: "Superman",
    age: 60,
    powers: ["fuera"],
    getName() {
      return this.name;
    },
  };

  console.log(flash);

  /* 
    este es el problema con declarar objectos asi en TS, si queremos agregar propiedades o metodos nos marcara 
    error
  */
})();
