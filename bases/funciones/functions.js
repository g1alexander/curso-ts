"use strict";
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activeSignalBatman = () => {
        return "bati activado";
    };
    console.log(typeof activeSignalBatman);
    const heroName = returnName();
})();
