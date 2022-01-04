(() => {
  // strictNullChecks

  // const isActive: boolean = undefined
  // const isActive: boolean = null

  // mejor practica aunque es mejor evitar esto
  const isActive: boolean | undefined = undefined;

  console.log(isActive);
})();
