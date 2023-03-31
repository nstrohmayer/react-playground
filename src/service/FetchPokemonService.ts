import axios from 'axios';
import { PokemonDTO } from './PokemonDTO';

export class FetchPokemonService {
    private instance = axios.create({
        baseURL: 'https://pokeapi.co/api/v2/',
        timeout: 1000,
    });

    async fetchPokemon(id: number): Promise<PokemonDTO> {
        const url = `pokemon/${ id }`;

        const response = await this.instance.get(url);

        return new PokemonDTO(response.data.name, response.data.id); // TODO add typesafety to axios call
    }
}

const fetchPokemonService: FetchPokemonService = new FetchPokemonService();

export default fetchPokemonService;
