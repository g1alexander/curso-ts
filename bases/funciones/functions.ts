(() => {
  const hero: string = "Flash";

  function returnName(): string {
    return hero;
  }

  const activeSignalBatman = (): string => {
    return "bati activado";
  };

  console.log(typeof activeSignalBatman);

  const heroName: string = returnName();
})();
