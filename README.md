# Notas sobre Typescript

#### Tipos de datos y conceptos generales

- En **JS** tenemos la particularidad de que podemos sobreescribir una variable, pero ademas de eso tambien podemos sobreescribir el **tipo de dato**.

  - esto puede tener grandes problemas a la hora de trabajar en una aplicacion muy grande por la cantidad de codigo
  - otra razon es que como no tipado esto haria que tengamos un codigo que no sea muy interpretativo (**"que tipos de datos recibe esta funcion?, etc..."**)

- en typescript el tipado se hace de la siguiente manera:
  ```ts
  const PI = 3.1416;
  let nombre: string = "Alexander";
  let punt: number = 123;
  let vida: boolean | string = true;
  ```
  - Esto indicara que el valor ingresado no pueda ser diferente que el tipo de dato declarado (las variables **let** si se puede sobreescribir como se hace en **JS**)
  - las constantes no tienen tipo de dato, la razon es porque como su valor nunca va a cambiar
  - Se pueden declarar una variable con varios tipos de datos y esto se hace con el **operador de corto circuito "|"** (si vienen se puede no es muy recomendable hacer esta practica)

---

#### Objetos, Arreglos e Interfaces

- Los arreglos en JS podemos poner los tipos que deseamos (**number, string, boolean, etc..**), en typescript viene por defecto con un tipo de dato **"any"** que es lo mencionado anteriormente
- restringuir los tipos de datos que vamos ocupar en un arreglo es muy similar a con lo hace en los **tipos de datos primitivos** solo que despues de especificar el tipo ya sea **string, number ...** ponemos **[]** para decirle que se trata de un arreglo **JS**
- Los objetos es un poco mas complejo, debido a que hay que validar multiples tipos de datos. \
  Para validar un **objeto** creamos las **interfaces** (esto es propio de **typescript**). las **intefaces** funcionan como un objeto normal (clave valor) en el ponemos que propiedades (**claves**) vamos a ocupar en un objeto y el **valor** ponemos que tipo de dato vamos a ponder a cada propiedad

  - hay veces veces que necesitamos que las propiedades sea opcionales, si no especificamos esto, **typescript** marcara error (para hacerlo ponemos antes de los **":" un "?"**)

  ```ts
  let arreglo: string[] = ["bahs", "hola", "jojo"];
  arreglo.push("hola1");

  interface Personaje {
    nombre: string;
    edad: number;
    habilidades: string[];
    origen?: string;
  }
  const persona: Personaje = {
    nombre: "Alexander",
    edad: 20,
    habilidades: ["bash", "jojo", "hola"],
  };
  persona.origen = "Mocoa";
  ```

---

#### Funciones basicas

- Las funciones en **typescript** funcionan de la misma forma que en **javascript**
- Ya sean funciones normales o de flecha
- El tipado de las funciones se declara de la siguiente manera:
  - si la funcion recibe parametros, despues del argumento va el tipo de dato que espera recibir
  - si el parametro es opcional se coloca un signo **"?"** antes de los **":"**
  - Despues de los parentesis de la funcion se especifica el tipo de dato que va a retornar
- el ordenen para declarar argumentos en las funciones se las coloca de la siguiente manera:
  - argumento con el tipo de dato, argumento opcional, argumento por defecto (en dado caso que no se pase)

```ts
function sumar(a: number, b?: number, c: number = 2): number {
  return a + c;
}
const sumarFlecha = (a: number, b?: number, c: number = 2): number => {
  return a + c;
};
```

---

#### Funciones con objetos

- Cuando queremos pasar un objeto como parametro de una funcion, primero debemos de haber definido una interfaz para el objeto (como vimos anteriormente)
- en las **interfaces** podemos definir que **tipos de datos** van a ir en las **propiedades** y que **parametros y/o return** van a ir en los **metodos** van a ir dentro del objeto

---

#### Destructuracion de objectos

- Este concepto ya lo he mirado y en typescript funciona de la misma manera, aunque hay una nuevas cosas importantes para tener en cuenta:
  - para hacer una destructuracion de la destructuracion ej (extraer el autor):
    ```ts
    const reproductor: Reproductor = {
      detalles: {
        autor: "Ed",
        anio: 2015,
      },
    };
    ```
    La forma mas recomendada el primero extraer el objeto y luego hacer el mismo proceso para la propiedad (aunque tambien se puede en la primera destructuracion)
  - El segundo concepto es que puedes renombrar las variables destructuradas, estas se hacen con los **":"** ej:
    ```ts
    const { detalles } = reproductor,
      { autor: reAutor } = detalles;
    ```

---

#### Destructuracion de arreglos

- Funciona de la misma manera que los objetos, la unica diferencia es que la posicion en que se destructura es importante, ya que en cada posicion corresponde al valor
- el nombre de la variable en la destructuracion no es importante, lo importante es la posicion
- si en llegado caso en que queramos destructurar un valor en especifico, lo hacemos de la siguiente manera:
  ```ts
  const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
  const [, , p3] = dbz;
  console.log(`personaje 3: ${p3}`);
  ```

---

#### Destructuracion en Funciones

- Cuando queremos recibir una propiedad podemos poner una **interface** para definir que tipo de dato va tener (hasta todo en order)

  - Podemos aprate de lo anterior poner que eso sera un arreglo, agregando **"[]"** asi, como cuando declaras un arreglo

- cuando recorremos un arreglo, podemos hacer tambien la destructuracion, esto nos sirve para evitar colocar los **".propiedad"**

- en las funciones podemos especificar que tipo de dato esperamos retornar, pero ademas de esto tambien podemos decirle que devolveremos un arreglo y dentro de ello retornaremos muchos valores
  - luego de retornar varios valores (en este caso un arreglo), podemos hacer destructuracion de arreglos y solo quedarnos con los valores individualmente

```ts
interface Producto {
  marca: string;
  precio: number;
}

const telefono: Producto = {
  marca: "Nokia A1",
  precio: 150,
};

const tableta: Producto = {
  marca: "Airpad",
  precio: 350,
};

function impuesto(productos: Producto[]): [number, number] {
  let total = 0;

  productos.forEach(({ precio }) => {
    total += precio;
  });

  return [total, total * 0.15];
}

const productos = [telefono, tableta];

const [total, isv] = impuesto(productos);

console.log("total", total);
console.log("isv", isv);
```

---

#### Import y exports

- En las importaciones e exportaciones funciona de la misma manera que en **JS**, pero hay algunas consideraciones a tener en cuenta:
  - No es necesario poner la extencion **.ts** al final del **path**, **typescript** ya sabe que lo que se va a importar es un archivo de esa extencion, eso no pasa en **vanilla js**

---

#### Clases

- Las **clases** en typescript son similares a las **interfaces** pero no iguales, de hecho son muy direfentes

  - las **interfaces** no estan en **JS**, las clases si, por lo cual cuando transpila el codigo **ts** a **js** las **clases** estan y las **interfaces** no
  - las **interfaces** no tienen metodos y las **clases** si, lo maximo que pueden hacer las **interfaces** es declarar que tipo de dato va a retornar una funcion
  - Las **clases** se manejan atraves de instancias, las **interfaces** solo se declaran

- Cuando declaramos los paremetros en las **clases** podemos tener estos parametros en 3 formas distintas

  - **public:** se puede acceder al valor cuando se crea una instancia
  - **private:** solo tiene acceso al valor en la clase
  - **static:** se puede acceder al valor publicamente, pero ademas acceder a el sin necesidad de instanciar la clase

- El **constructor** de la clase no es mas que una funcion en la cual asignamos una **clave-valor**

  - la funcion del **constructor** tiene la caracteristica de que se ejecuta una vez que se declara una instancia de la clase
  - en la instancia de la **clase** pasamos los valor que queremos asignar a las propiedades
  - Hay dos maneras de manejar el **constructor** en las **clases**

  ```ts
  //opcion 1
  class Heroe {
    alterEgo: string;
    constructor(alterEgo: string) {
      this.alterEgo = alterEgo;
    }
  }
  const ironman = new Heroe("verde");

  //opcion 2
  class Heroe {
    constructor(public alterEgo: string) {}
  }
  const ironman = new Heroe("verde");
  ```

  - La diferecia radica en que la segunda opcion escribes menos lineas de codigo, debido a que en los parametros de la funcion constructora se especifica:

    - Crea una llave y que al mismo tiempo el valor que me pase en la instancia lo asigne a esa llave

  - Nota: Tambien los parametros de la funcion contructora poder valores opcionales

- para extender una clase ocupamos primero crear la clase como vimos anteriormente, y luego cuando vayamos a extender la clase, debemos poner en el contructor el metodo **super()** el cual se encarga se llamar al **contructor** de la clase que extendimos

```ts
class PersonaReal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaReal {
  constructor(
    public alterEgo: string,
    public nombreReal: string,
    public edad?: number
  ) {
    super(nombreReal, "New york, USA");
  }
}

const ironman = new Heroe("Kang", "ironman");
```

---

#### Genericos

- Es un tipo de expresion que se usa para definir un tipo de dato sobre la marcha
- Hay veces que necesitamos cambiar el tipo de dato (principalmente en peticiones HTTP) en donde al hacer ciertos tipos de operaciones el tipo de dato cambia totalmente
- Es hay donde los generadores ocupan una importante, otros casos tambien es la comparacion de **keys** de un objectos
- Estos genericos pueden ser desde cosas muy simples como : **<T>** hasta expresiones muy complejas

---

#### Decoradores

- Los decoradores es una caracteristica propiedad de **typescript**
- Un decorador no es mas que una funcion que expande las clases agregando funcionalidades especiales
- Hay muchos tipos de **decoradores**

  - [doc oficial](https://www.typescriptlang.org/docs/handbook/decorators.html#introduction)

- Los decoradores en **Angular** sirve principalmente para identificar en que estamos trabajando ej
  - En **Angular** casi todo se maneja atraves de clases
  - Para identificar esas clases utilizamos decoradores
  - Si en lo que estemos trabajando queremos que sean componentes, atraves de los **decoradores** **Angular** identificara que eso es un componente
  - y asi con **pipes**, **services**, etc...

---

#### encadenamiento opcional

- Esta es una forma de trabajar con condiciones, el igual que trabajar con **if** o **operador ternario** ej:

```ts
interface Persona {
  nombre: string;
  hijos?: string[];
}

const persona1: Persona = {
  nombre: "antonio",
};
const persona2: Persona = {
  nombre: "Maria",
  hijos: ["nata", "paula"],
};

function imprimirHijos(persona: Persona): void {
  let hijos = persona.hijos?.length || 0; //ENCADENAMIENTO OPCIONAL
  console.log(hijos);
}

imprimirHijos(persona1); //0
```
