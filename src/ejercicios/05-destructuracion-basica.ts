interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 25,
  segundo: 30,
  cancion: "Perfect",
  detalles: {
    autor: "Ed",
    anio: 2015,
  },
};

const { cancion, volumen, segundo, detalles } = reproductor,
  { autor } = detalles;

// console.log(`La cancion es ${cancion}`);
// console.log(`el autor es ${autor}`);
// console.log(`el volumen es ${volumen}`);
// console.log(`el segundo es ${segundo}`);

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];

// forma clasica
// console.log(`personaje 1: ${dbz[0]}`);
// console.log(`personaje 2: ${dbz[1]}`);
// console.log(`personaje 3: ${dbz[2]}`);

// const [p1, p2, p3] = dbz;
// console.log(`personaje 1: ${p1}`);
// console.log(`personaje 2: ${p2}`);
// console.log(`personaje 3: ${p3}`);

const [, , p3] = dbz;
console.log(`personaje 1: ${dbz[0]}`);
console.log(`personaje 2: ${dbz[1]}`);
console.log(`personaje 3: ${p3}`);
