# Introduccion typescript

### tsconfig.json

Este archivo es muy especial a la hora de trabajar con ts, debido a que con el le especificamos la manera en la que deseamos trabajar con typescript

- podemos establecer el tarjet (version de js queremos trabspilar)
- que tan escricto queremos que se comporte
- configuracion de los modulos (path del proyecto, entre otros)

### modo observable

Cuando trabajamos con ts debemos tener en cuenta de que este no se ejecuta directamente en el navegador, para hacer que se ejecute debemos transpilar el codigo a JS y este proceso siempre lo hacemos con el comando en consola `tsc`, pero esto es algo molesto mientras desarrollamos.

La solucion para esto es un modo que tiene ts el cual es observable `tsc -watch` o `tsc -w` y con esto cada vez que hagamos un cambio este se vera reflejado en el archivo o archivos JS tranpilados

---

### inferir tipos y modo escricto

En el archivo tsconfig.json hay una propiedad llamada **"noImplicitAny": true** la cual nos permite validar que siempre los parametros de las funciones tengan un tipo de dato establecido, esto los es de mucha ayuda, debido a que nos permite entender mejor el codigo tanto para uno como para alguien mas y para TS tambien es de mucha ayuda, ya que nos ayudara con el autocompletado dependiendo de que tipo de dato es

### Boolean

### numbers

### strings

### any y casteo

Los tipos de any son tipos de datos muy conocidos en TS, este tipo seria el equivalente a como si estuvieramos trabajando con JS (lo cual no es la idea), una recomendacion importante es evitar a toda costa usar este tipo de dato (ya sabemos como es JS 🙂)

En casos es los que necesitemos usar algun tipo any existe en TS algo llamado casteo, esto nos permite "transformar" el tipo de dato (aunque en realidad no lo es asi) para facilitar el uso de las propiedades y metodos del tipo de dato

```ts
let avengers: any = 123;

avengers = "Doctor strange";

console.log((avengers as string).charAt(0));

avengers = 3.21232;

console.log((<number>avengers).toFixed(2));
```

### arrays

### tuplas

En TS existe un tipo de dato el cual es propio de el y el cual no existe en JS, estos son las tuplas (en realidad pueden ser mas de 2 datos los que puedes insertar), este tipo de dato nos permite validar los tipos de datos que queramos agregar a nuestra tupla, ej:

```ts
const tuple1: [string, number] = ["Hola", 10];
```

### enum

los enum o enumeraciones es una caracteristica propia de TS la cual aparte de funcionar muy bien nos permite tambien manejar los valores enumericos de una manera en la que tengamos control de esto ej:

- queremos tener propiedades min, medium y max, si bien lo podriamos hacer declarando un objecto o variables individuales con **enum** podemos tener estos valores tipo "constante"

los enum funcionando como un incrementador entre propiedad ej:

```ts
enum AudioLevel {
  min = 1,
  medium,
  max,
}
```

- esto quiere decir que la propiedad min empezará en 1 y irá aumentando las demas, medium valdrá 2 y max 3

- para declarar un enum se utiliza UpperCamelCase lo cual quiere decir que empieza con mayuscula

NOTA: Dada la siguiente enumeración, ¿Qué valor tiene "d"?

```ts
enum enumeracion {
  a = 10,
  b,
  c = 9,
  d,
}
```

Como "c" se iguala a 9, el siguiente valor es 10, no importa que se repita el valor de la enumeración.

NOTA: cuando una variable es de tipo enum se puede reasignar con un valor numerico, si bien esto se puede hacer no es recomendable, debido a que por eso declaramos un enum 😅

### void

los tipos de dato void nos permite decirle a las funciones que no queremos retornar algun valor en especifico, esto nos ayuda principalmente a la lectura del codigo

NOTA: cuando le especificamos que retornamos void TS nos marcará error si intentamos retornar algun valor, si no le decimos que vamos a retornar TS permitirá que retorne cualquier cosa

```ts
function callBatman(): void {
  return;
}

const callSuperman = (): void => {
  return;
};
```

### never

Los tipos de datos **never** son especiales, debido a su retorno es cual es parar la ejecucion del codigo mediante un error (muy util para los helpers)

```ts
const error = (message: string): never => {
  throw new Error(message);
};

error("Auxilio!");
```

### null y undefined

cuando configuramos el tsconfig.json lo mas escrito posible hace que el null y undefined "desaparezca"

- a traves del **strictNullChecks** podemos configurar si queremos permitir el uso del null y undefined en cierto tipos (no recomendable)

### ejercicio practico 1

### examen teorico 1
