(() => {
  const batman: string = "Batman";
  const linternaVerde: string = "Linterna verde";

  const volcanNegro: string = `héroe: Volcan negro`;

  console.log(`i'm ${batman}`);

  console.log(linternaVerde.toLocaleUpperCase());

  console.log(volcanNegro[20]?.toLocaleUpperCase() || "no existe");
})();
