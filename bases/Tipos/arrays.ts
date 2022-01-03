(() => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const villans: string[] = ["Dormammu", "Duende verde", "Electro"];

  villans.forEach((v) => console.log(v.toLocaleUpperCase()));
  numbers.forEach((v) => console.log(v.toString()));
})();
