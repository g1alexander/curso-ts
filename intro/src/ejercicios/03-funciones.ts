function sumar(a: number, b?: number, c: number = 2): number {
  return a + c;
}
const sumarFlecha = (a: number, b?: number, c: number = 2): number => {
  return a + c;
};

console.log(sumar(4, 6));
// ----------------------------------
interface Personaje2 {
  nombre: string;
  pv: number;
  mostrar: () => string;
}

function curar(loki: Personaje2, pv: number): void {
  loki.pv += pv;
}

const loki: Personaje2 = {
  nombre: "loki",
  pv: 1,
  mostrar() {
    return `${this.nombre} tiene ${this.pv} puntos de vida`;
  },
};

curar(loki, 10);

console.log(loki.mostrar());
