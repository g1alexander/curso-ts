(() => {
  let avengers: any = 123;

  let exists;
  let power;

  avengers = "Doctor strange";

  console.log((avengers as string).charAt(0));

  avengers = 3.21232;

  console.log((<number>avengers).toFixed(2));

  console.log(exists);
  console.log(power);
})();
