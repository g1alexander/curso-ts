(() => {
  let isSuperman: boolean = true;
  let isBatman: boolean = false;

  isSuperman = true && false;
  // isBatman = isSuperman ? true: "Hola";

  console.log({ isSuperman });
})();
