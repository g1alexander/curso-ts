class PersonaReal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaReal {
  constructor(
    public alterEgo: string,
    public nombreReal: string,
    public edad?: number
  ) {
    super(nombreReal, "New york, USA");
  }
}

const ironman = new Heroe("Kang", "ironman");

console.log(ironman);
