"use strict";
(() => {
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    pedir_ayuda();
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    let avengers = 123;
    let exists;
    let power;
    avengers = "Doctor strange";
    console.log(avengers.charAt(0));
    avengers = 3.21232;
    console.log(avengers.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const villans = ["Dormammu", "Duende verde", "Electro"];
    villans.forEach((v) => console.log(v.toLocaleUpperCase()));
    numbers.forEach((v) => console.log(v.toString()));
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error("Auxilio!");
})();
(() => {
    const isActive = undefined;
    console.log(isActive);
})();
(() => {
    let avengers = 10;
    let villans = 20;
    if (avengers < villans) {
        console.log("f");
    }
    else {
        console.log(":b");
    }
})();
(() => {
    var _a;
    const batman = "Batman";
    const linternaVerde = "Linterna verde";
    const volcanNegro = `héroe: Volcan negro`;
    console.log(`i'm ${batman}`);
    console.log(linternaVerde.toLocaleUpperCase());
    console.log(((_a = volcanNegro[20]) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) || "no existe");
})();
(() => {
    const tuple1 = ["Hola", 10];
    tuple1[0] = "mundo";
    tuple1[1] = 100;
    console.log(tuple1);
})();
function callBatman() {
    return;
}
const callSuperman = () => {
    return;
};
const a = callBatman();
console.log(a);
(() => {
    const batman = "Bruce";
    const superman = "Clark";
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ["Lex Lutor", 5, true];
    const aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
    let Fuerza;
    (function (Fuerza) {
        Fuerza[Fuerza["acuaman"] = 0] = "acuaman";
        Fuerza[Fuerza["batman"] = 1] = "batman";
        Fuerza[Fuerza["flash"] = 5] = "flash";
        Fuerza[Fuerza["superman"] = 100] = "superman";
    })(Fuerza || (Fuerza = {}));
    const fuerzaFlash = Fuerza.flash;
    const fuerzaSuperman = Fuerza.superman;
    const fuerzaBatman = Fuerza.batman;
    const fuerzaAcuaman = Fuerza.acuaman;
    function activar_batiseñal() {
        return "activada";
    }
    function pedir_ayuda() {
        console.log("Auxilio!!!");
    }
    const poder = "100";
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    },
};
const villanos = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true,
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true,
    },
];
const charles = {
    poder: "psiquico",
    estatura: 1.78,
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};
let mystique;
mystique = charles;
mystique = apocalipsis;
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName || "no lastname"}`.toLocaleUpperCase();
        return `${firstName} ${lastName || "no lastname"}`;
    };
    const name = fullName("Tony", "stark", true);
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "no lastname"}`;
    };
    const name = fullName("Tony");
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log(name);
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const name = fullName("Tony", "stark", "ironman");
    console.log(name);
})();
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
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `hola ${name}`;
    const savetheWorld = () => `El mundo esta salvado!`;
    let myFunction;
    myFunction = savetheWorld;
    console.log(myFunction());
})();
(() => {
    let flash = {
        name: "barry",
        age: 24,
        powers: ["veloz", "viaja en el tiempo"],
    };
    flash = {
        name: "Superman",
        age: 60,
        powers: ["fuera"],
        getName() {
            return this.name;
        },
    };
    console.log(flash);
})();
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
//# sourceMappingURL=main.js.map