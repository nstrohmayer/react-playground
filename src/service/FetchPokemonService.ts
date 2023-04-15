import {isPokemonDTO, PokemonDTO} from './PokemonDTO';
import axios, {AxiosInstance} from "axios/index";

class FetchPokemonService {

    private axiosInstance: AxiosInstance = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/',
        timeout: 1000,
    })

    async fetchPokemon(id: number): Promise<PokemonDTO> {
        const url = `pokemon/${id}`;
        const responseData: unknown = (await this.axiosInstance.get(url)).data;

        if (isPokemonDTO(responseData)) {
            return responseData
        } else {
            throw new Error('Couldn\'t fetch pokemon')
        }
    }
}

const fetchPokemonService: FetchPokemonService = new FetchPokemonService();

export default fetchPokemonService;
