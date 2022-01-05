"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const name = fullName("Tony", "stark", "ironman");
    console.log(name);
})();
