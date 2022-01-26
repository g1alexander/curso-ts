(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {}

    protected bio() {
      //la diferencia entre private y protected es que la ultima es accedida a atraves del super
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realname: string, public isMutant: boolean) {
      super(name, realname);
      // super nos sirve para acceder a las propiedades y metodos de la clase padre
      // super es crear la instancia de la clase padre
    }

    public bioXmen() {
      console.log(super.bio());
    }
  }

  const wolverine = new Xmen("wolverine", "logan", true);

  wolverine.bioXmen();
})();
