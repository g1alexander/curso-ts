(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("constructor avenger");
    }

    protected bio() {
      //la diferencia entre private y protected es que la ultima es accedida a atraves del super
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realname: string, public isMutant: boolean) {
      super(name, realname);
      console.log("constructor Xmen");
      // super nos sirve para acceder a las propiedades y metodos de la clase padre
      // super es crear la instancia de la clase padre
    }

    public bioXmen() {
      console.log(super.bio());
    }

    get fullName() {
      // los getters no reciben parametros y tiene que retornar un valor
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      // los setters solo reciben un parametro y no retorna valor
      if (name.length < 3) {
        throw new Error("FFF");
      }
      this.name = name;
    }
  }

  // const wolverine = new Xmen("wolverine", "logan", true);

  // wolverine.bioXmen();

  // wolverine.fullName = "Alex";
  // console.log(wolverine.fullName);
})();
