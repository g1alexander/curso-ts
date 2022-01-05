(() => {
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(" ")}`;
  };

  const name: string = fullName("Tony", "stark", "ironman");

  console.log(name);
})();
