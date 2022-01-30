function printConsole(constructor: Function) {
  console.log(constructor);
}

// siempre debe retornar una funcion
const printConsoleCondicional = (print: boolean = false): Function => {
  if (print) {
    return printConsole;
  } else {
    return () => {};
  }
};

function bloquearPropotipo(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

function checkValidPokemonId(): Function {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("FFFF");
      } else {
        originMethod();
      }
    };
    console.log({ target, propertyKey, descriptor });
  };
}

function readonly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this, "this");
        return "fernando";
      },

      set(this, val) {
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
        });
      },
    };

    return descriptor;
  };
}

@bloquearPropotipo
@printConsoleCondicional(true)
export class Pokemon {
  @readonly(true)
  public api: string = "https://pokemeno.api/";

  constructor(public name: string) {}

  // decorador de metodos
  @checkValidPokemonId()
  savePokemonToDB(id: number) {
    console.log("pokemos guardado");
  }
}
