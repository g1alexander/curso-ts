"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `hola ${name}`;
    const savetheWorld = () => `El mundo esta salvado!`;
    // let myFunction;
    // let myFunction: (a:number, b:number)=>number;
    // let myFunction: (a: string) => string;
    let myFunction;
    // myFunction = 10;
    // console.log(myFunction);
    // myFunction = addNumbers;
    // console.log(myFunction(1, 2));
    // myFunction = greet;
    // console.log(myFunction("Alex"));
    myFunction = savetheWorld;
    console.log(myFunction());
})();
