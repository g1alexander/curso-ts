(() => {
  const error = (message: string): number | never => {
    if (false) {
      throw new Error(message);
    }

    return 1;
  };

  error("Auxilio!");
})();
