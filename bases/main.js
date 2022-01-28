"use strict";
(() => {
    let flash = {
        name: "barry",
        age: 24,
        powers: ["veloz", "viaja en el tiempo"],
    };
    const superman = {
        name: "Superman",
        age: 60,
        powers: ["fuerza"],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return this.name;
        }
    }
})();
(() => {
    const client = {
        name: "Alexa",
        age: 25,
        address: {
            id: 12,
            zip: "inve",
            city: "otawa",
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
(() => {
    const sum = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map