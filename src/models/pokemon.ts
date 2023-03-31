import { createModel } from '@rematch/core';
import fetchPokemonService from '../service/FetchPokemonService';
import { mapFromDTO } from '../service/PokemonDTO';
import { RootModel } from './index';

export type Pokemon = { // TODO read upon class vs type
    id: number,
    name: string,
}

interface PokemonState {
    selectedPokemon: Pokemon, // TODO read up on nullability best practise
    currentlySelectedPokemonId: number | null,
    availablePokemon: Array<Pokemon>,
}

export const pokemon = createModel<RootModel>()({
    state: {
        selectedPokemon: { name: '', id: 0 },
        currentlySelectedPokemonId: null,
        availablePokemon: [],
    } as PokemonState,
    reducers: {
        changeSelectedPokemon(state, selectedPokemon: Pokemon) {
            return {
                ...state,
                selectedPokemon: selectedPokemon,
            };
        },
    },
    effects: (dispatch) => ({
        async selectPokemon(id: number) {
            const pokemonDTO = await fetchPokemonService.fetchPokemon(id);
            const pokemon: Pokemon = mapFromDTO(pokemonDTO);

            dispatch.pokemon.changeSelectedPokemon(pokemon);
        },
    }),
});
