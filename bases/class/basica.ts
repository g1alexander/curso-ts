(() => {
  class Avenger {
    // private name: string;
    // private team: string;
    // public realName?: string;
    // static avgAge: number = 35;

    // constructor(name: string, team: string, realName?: string) {
    //   this.name = name;
    //   this.team = team;
    //   this.realName = realName;
    // }

    static avgAge: number = 35;

    static avgAgeBio() {
      return this.name; //devuelve el nombre de la clase
    }

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {}

    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  // const cap = new Avenger("cap", "cap");

  // console.log(cap);
  // console.log(cap.realName);
  // console.log(cap.bio());

  // console.log(Avenger.avgAge);
  // console.log(Avenger.avgAgeBio());
})();
