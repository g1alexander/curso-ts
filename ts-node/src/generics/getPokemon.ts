import axios from "axios";
import { Pokemon } from "../interfaces";

export async function getPokemon(pokeId: number): Promise<Pokemon> {
  const { data } = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokeId}`
  );

  return data;
}
