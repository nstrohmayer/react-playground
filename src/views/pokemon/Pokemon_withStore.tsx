import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pokemon } from '../../models/pokemon';
import { Dispatch, RootState } from '../../store';

const PokemonWithStore: React.FC = () => {
    const selectedPokemon: Pokemon = useSelector((state: RootState) => state.pokemon.selectedPokemon);
    const dispatch = useDispatch<Dispatch>();

    async function handleInputChanged(event: any) {
        // TODO debouncing
        if (event.target.value == null) {
            return;
        }

        const id = parseInt(event.target.value);
        await dispatch.pokemon.selectPokemon(id);
    }

    return (
        <div>
            <h1>Pokemon</h1>
            <input onChange={ handleInputChanged } />
            <p>{ selectedPokemon.name }</p>
            <a href="/">Back</a>
        </div>
    );
};

export default PokemonWithStore;
