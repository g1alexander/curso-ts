(() => {
  interface Function {
    (a: number, b: number): number;
  }

  const sum: Function = (a: number, b: number) => {
    return a + b;
  };
})();
