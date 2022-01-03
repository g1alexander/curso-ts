// --------------

let arreglo: string[] = ["bahs", "hola", "jojo"];

arreglo.push("hola1");

interface Personaje {
  nombre: string;
  edad: number;
  habilidades: string[];
  origen?: string;
}

const persona: Personaje = {
  nombre: "Alexander",
  edad: 20,
  habilidades: ["bash", "jojo", "hola"],
};

persona.origen = "Mocoa";

console.log(persona, arreglo);
