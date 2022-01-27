(() => {
  class Xmen {
    static instant: Xmen;
    private constructor(public name: string) {}

    static callXmen(): Xmen {
      if (!Xmen.instant) {
        Xmen.instant = new Xmen("holaaaa1");
      }

      return Xmen.instant;
    }

    changeName(name: string): void {
      this.name = name;
    }
  }

  const xmen1 = Xmen.callXmen();
  xmen1.changeName("yess"); //los cambia para todos
  const xmen2 = Xmen.callXmen();
  const xmen3 = Xmen.callXmen();
  const xmen4 = Xmen.callXmen();
  // const xmen1 = new Xmen("holaaaa1");
  // const xmen2 = new Xmen("holaaaa2");
  // const xmen3 = new Xmen("holaaaa3");
  // const xmen4 = new Xmen("holaaaa4");

  console.log(xmen1);
  console.log(xmen2);
  console.log(xmen3);
  console.log(xmen4);
})();
