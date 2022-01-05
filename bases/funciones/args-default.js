"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName || "no lastname"}`.toLocaleUpperCase();
        return `${firstName} ${lastName || "no lastname"}`;
    };
    const name = fullName("Tony", "stark", true);
    console.log(name);
})();
