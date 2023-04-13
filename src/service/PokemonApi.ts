import axios, {AxiosInstance} from "axios";

class PokemonApi {
  public axiosInstance: AxiosInstance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    timeout: 1000,
  });

  public FETCH_ALL_POKEMON_URL: string = "pokemon?limit=10000&offset=0";
}

const pokemonApi = new PokemonApi();

export default pokemonApi;