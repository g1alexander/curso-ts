import { getPokemon } from "./getPokemon";

getPokemon(1)
  .then((pokemon) => console.log(pokemon.sprites.front_default))
  .catch((error) => console.error(error))
  .finally(() => console.log("hola"));
