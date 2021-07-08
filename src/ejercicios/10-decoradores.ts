function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "hello world";
  };
}

@classDecorator
class MisuperClase {
  public miPropiedad: string = "alexa";

  imprimir() {
    return `hola ${this.miPropiedad}`;
  }
}

console.log(MisuperClase);
const miClase = new MisuperClase();

console.log(miClase.imprimir());
