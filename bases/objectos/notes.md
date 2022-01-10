# Objectos y tipos personalizados de Typescript

### objectos basicos

este es el problema con declarar objectos asi en TS, si queremos agregar propiedades o metodos nos marcara
error

```ts
let flash = {
  name: "barry",
  age: 24,
  powers: ["veloz", "viaja en el tiempo"],
};

flash = {
  name: "Superman",
  age: 60,
  powers: ["fuera"],
  getNombre() {
    return this.name;
  },
};
```

### ¿como crear objectos con tipos especificos?

se lo hace como se tiparia cualquier otro tipo de dato

```ts
let flash: {
  name: string;
  age: number;
  powers: string[];
} = {
  name: "barry",
  age: 24,
  powers: ["veloz", "viaja en el tiempo"],
};
```

existen dos maneras de tipar los objectos, una es la que acabamos de ver y la otra es atraves de **interfaces**

### metodos dentro de los objectos

### problema con la definicion de objectos en la linea de creacion

definir un objecto de la siguiente manera

```ts
let flash: {
  name: string;
  age: number;
  powers: string[];
  getName?: () => string;
} = {
  name: "barry",
  age: 24,
  powers: ["veloz", "viaja en el tiempo"],
};
```

crea un enorme problema, debido a que pasaria si necesitara crear otro objecto con el mismo tipado y luego necesitamos refactorizar ambos o mas objectos?

### tipos personalizados

para resolver el problema anterior TS nos provee un tipo llamado "type" el cualquier es propio de TS lo que significa que el codigo que escribamos en type no se va a transpilar a JS

```ts
type Hero = {
  name: string;
  age: number;
  powers: string[];
  getName?: () => string;
};
```

los types son muy similares a las interface

### multiples tipos permitidos
