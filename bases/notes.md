# Depuracion de errores y el archivo tsconfig.json

### archivo tsconfig.json

### depuracion del codigo en typescript

para hacer depuraciones de codigo de archivos .ts en el navegador nos ayudamos atraves del source map, el cual nos crea un archivo adiccional de js en cual el navegador mostrara el codigo js

config en tsconfig.json:

```ts
{
   "sourceMap": true,
}
```

### Remover los comentarios de los archivos de JavaScript

```ts
{
   "removeComments": true,
}
```

### Incluir y excluir carpetas y/o archivos

por defecto ts ya excluye la carpeta node_modules ✌🏼

```ts
{
  "exclude": [],
  "include": []
}

```

### outFile - Archivo de salida

cuando trabajamos en un proyecto por lo general queremos manejar un orden y que principalmente no esten archivos innesarios en el proyecto, por esto a traves de tsconfig.json podemos configurar un archivo de salida el cual tendra todo el codigo tranpilado de los archivos de ts

```ts
{
  "module": "amd"
  "outFile": "./main.js"
}
```

cuando configuramos un archivo de salida hay que cambiar el module por amd o system
