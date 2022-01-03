interface Persona {
  nombre: string;
  hijos?: string[];
}

const persona1: Persona = {
  nombre: "antonio",
};
const persona2: Persona = {
  nombre: "Maria",
  hijos: ["nata", "paula"],
};

function imprimirHijos(persona: Persona): void {
  let hijos = persona.hijos?.length || 0;
  console.log(hijos);
}

imprimirHijos(persona1);
