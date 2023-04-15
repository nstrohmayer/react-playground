import { type Pokemon } from "../models/pokemon"

export class PokemonDTO {
  id: number
  name: string

  constructor(name: string, id: number) {
    this.id = id
    this.name = name
  }
}

export function mapFromDTO(pokemon: PokemonDTO): Pokemon {
  return {
    id: pokemon.id,
    name: pokemon.name,
  }
}

export function isPokemonDTO(object: unknown): object is PokemonDTO {
  return object !== null && typeof object === "object" && "id" in object && "name" in object
}
