"use strict";
var Validations;
(function (Validations) {
    Validations.validateString = (text) => {
        return text.length > 3 ? true : false;
    };
    const validateDate = (date) => {
        return isNaN(date.valueOf()) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateString("ale"));
//# sourceMappingURL=main.js.map