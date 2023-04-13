import {isPokemonDTO, PokemonDTO} from './PokemonDTO';
import pokemonApi from "./PokemonApi";

class FetchPokemonService {

    async fetchPokemon(id: number): Promise<PokemonDTO> {
        const url = `pokemon/${id}`;
        const responseData: unknown = (await pokemonApi.axiosInstance.get(url)).data;

        if (isPokemonDTO(responseData)) {
            return responseData
        } else {
            throw new Error('Couldn\'t fetch pokemon')
        }
    }
}

const fetchPokemonService: FetchPokemonService = new FetchPokemonService();

export default fetchPokemonService;
