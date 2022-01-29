import powers from "../data/powers";

export class Hero {
  constructor(
    public name: string,
    public age: number,
    public powerId: number
  ) {}

  get power(): string {
    // const power = powers.find((power) => power.id === this.powerId);

    // return power ? power.desc : "F";

    // forma corta

    return powers.find((power) => power.id === this.powerId)?.desc || "F";
  }
}

export class Hola {}
