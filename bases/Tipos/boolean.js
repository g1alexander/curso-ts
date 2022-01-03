"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    // isBatman = isSuperman ? true: "Hola";
    console.log({ isSuperman });
})();
