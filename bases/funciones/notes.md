# Funciones

### funciones basicas

### argumentos requeridos

### argumentos opcionales

### argumentos por defecto

### argumentos de tipo Rest

### tipos de funciones

una caracteristica de JS es que podemos capturar el retorno de una funcion en una variable, cuando esta varibale en TS le podemos establecer el tipo de dato como **function** y aparte de esto especificarle que parametros va recibir (opcionales y por defecto tambien incluidos) y que tipo de retorno esperamos

```ts
const addNumbers = (a: number, b: number) => a + b;

const greet = (name: string) => `hola ${name}`;

const savetheWorld = () => `El mundo esta salvado!`;

// let myFunction;
// let myFunction: (a:number, b:number)=>number;
// let myFunction: (a: string) => string;
let myFunction: () => void;

// myFunction = 10;
// console.log(myFunction);

// myFunction = addNumbers;
// console.log(myFunction(1, 2));

// myFunction = greet;
// console.log(myFunction("Alex"));

myFunction = savetheWorld;
console.log(myFunction());
```
