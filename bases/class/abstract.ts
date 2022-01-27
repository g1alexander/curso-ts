(() => {
  abstract class Mutant {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutant {
    get mision() {
      return `salvar el mundo`;
    }
  }

  class Villian extends Mutant {
    get mision() {
      return `conquistar el mundo`;
    }
  }

  // const wolverine = new Xmen("wolverine", "logan");

  // const magneto = new Villian("magneto", "magnus");

  // console.log(wolverine.mision);
  // console.log(magneto.mision);

  // const printName = (mutant: Mutant) => {
  //   console.log(mutant.realName);
  // };

  // printName(wolverine);
})();
