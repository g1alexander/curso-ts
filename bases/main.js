"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        get mision() {
            return `salvar el mundo`;
        }
    }
    class Villian extends Mutant {
        get mision() {
            return `conquistar el mundo`;
        }
    }
})();
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static avgAgeBio() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("constructor avenger");
        }
        bio() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realname, isMutant) {
            super(name, realname);
            this.isMutant = isMutant;
            console.log("constructor Xmen");
        }
        bioXmen() {
            console.log(super.bio());
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error("FFF");
            }
            this.name = name;
        }
    }
})();
(() => {
    class Xmen {
        constructor(name) {
            this.name = name;
        }
        static callXmen() {
            if (!Xmen.instant) {
                Xmen.instant = new Xmen("holaaaa1");
            }
            return Xmen.instant;
        }
        changeName(name) {
            this.name = name;
        }
    }
    const xmen1 = Xmen.callXmen();
    xmen1.changeName("yess");
    const xmen2 = Xmen.callXmen();
    const xmen3 = Xmen.callXmen();
    const xmen4 = Xmen.callXmen();
    console.log(xmen1);
    console.log(xmen2);
    console.log(xmen3);
    console.log(xmen4);
})();
//# sourceMappingURL=main.js.map