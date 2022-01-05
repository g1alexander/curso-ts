(() => {
  const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  };
  // typecript no nos hace infalibles a errores 🙂
  // let hola: any;
  // const name: string = fullName(hola, "Stark");

  const name: string = fullName("Tony", "Stark");

  console.log(name);
})();
