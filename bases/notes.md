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
