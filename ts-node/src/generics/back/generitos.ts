import {
  printObject,
  genericFunction,
  genericFunctionArrow,
} from "../../generics/generics";
import { Villain, Hero } from "../../interfaces";

printObject(123);
printObject(new Date());
printObject("hola mundo");
printObject([1, 2, 3, 4, 5, 6, 7, 8, 9]);
printObject({ a: 1, b: 2 });

// -------

console.log(genericFunction(3.1416).toFixed(2));
console.log(genericFunctionArrow("hola mundo").toUpperCase());
console.log(genericFunction(new Date()).getDate());

console.log("-----------------");

const deadpool = {
  name: "deadpool",
  realName: "wilson",
  power: 12,
};

console.log(genericFunctionArrow<Villain>(deadpool).name);
