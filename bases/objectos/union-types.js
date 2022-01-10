"use strict";
(() => {
    let myCustomvariable = "hola";
    console.log(typeof myCustomvariable);
    myCustomvariable = 24;
    console.log(typeof myCustomvariable);
    myCustomvariable = {
        name: "bruce",
        age: 24,
        powers: ["hola"],
    };
    console.log(typeof myCustomvariable);
})();
