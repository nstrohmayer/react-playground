import { createModel } from "@rematch/core"
import fetchPokemonService from "../service/FetchPokemonService"
import { mapFromDTO } from "../service/PokemonDTO"
import { type RootModel } from "./index"

export type Pokemon = {
  id: number
  name: string
}

interface PokemonState {
  selectedPokemon?: Pokemon // TODO read up on nullability best practise
  currentlySelectedPokemonId?: number
  availablePokemon: Pokemon[]
}

export const pokemon = createModel<RootModel>()({
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  state: {
    selectedPokemon: undefined,
    currentlySelectedPokemonId: undefined,
    availablePokemon: [],
  } as PokemonState,
  reducers: {
    changeSelectedPokemon(state, selectedPokemon?: Pokemon) {
      return {
        ...state,
        selectedPokemon,
      }
    },
  },
  effects: (dispatch) => ({
    async selectPokemon(id: number) {
      const pokemonDTO = await fetchPokemonService.fetchPokemon(id)
      const pokemon: Pokemon = mapFromDTO(pokemonDTO)

      dispatch.pokemon.changeSelectedPokemon(pokemon)
    },
  }),
})
