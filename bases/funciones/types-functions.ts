(() => {
  const addNumbers = (a: number, b: number) => a + b;

  const greet = (name: string) => `hola ${name}`;

  const savetheWorld = () => `El mundo esta salvado!`;

  // let myFunction;
  // let myFunction: (a:number, b:number)=>number;
  // let myFunction: (a: string) => string;
  let myFunction: () => void;

  // myFunction = 10;
  // console.log(myFunction);

  // myFunction = addNumbers;
  // console.log(myFunction(1, 2));

  // myFunction = greet;
  // console.log(myFunction("Alex"));

  myFunction = savetheWorld;
  console.log(myFunction());
})();
