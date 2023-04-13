import {useQuery} from "@tanstack/react-query";
import {PokemonDTO} from "./PokemonDTO";
import pokemonApi from "./PokemonApi";

export function useFetchAllPokemon() {
  return useQuery({
    queryKey: ["fetchAllPokemon"], // TODO check out how to pass parameters
    queryFn: async (): Promise<Array<PokemonDTO>> => {
      const {data} = await pokemonApi.axiosInstance.get(
          pokemonApi.FETCH_ALL_POKEMON_URL
      )

      return data;
    },
  });
}