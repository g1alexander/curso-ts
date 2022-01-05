"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    // typecript no nos hace infalibles a errores 🙂
    // let hola: any;
    // const name: string = fullName(hola, "Stark");
    const name = fullName("Tony", "Stark");
    console.log(name);
})();
