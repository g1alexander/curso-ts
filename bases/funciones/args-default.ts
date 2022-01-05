(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    if (upper)
      return `${firstName} ${lastName || "no lastname"}`.toLocaleUpperCase();

    return `${firstName} ${lastName || "no lastname"}`;
  };

  const name: string = fullName("Tony", "stark", true);

  console.log(name);
})();
