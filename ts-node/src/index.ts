import { Pokemon } from "./decorators/pokemon-class";

const pikachu = new Pokemon("picaku");

// (Pokemon as any).prototype.Otra = "hola"; //no se puede expandir prpiedades gracias al constructor

// pikachu.savePokemonToDB(5000);

pikachu.api = "hol.com";

console.log(pikachu);
