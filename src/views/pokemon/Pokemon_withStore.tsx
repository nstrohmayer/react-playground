import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, RootState} from '../../store';

const PokemonWithStore: React.FC = () => {
    const selectedPokemon = useSelector((state: RootState) => state.pokemon.selectedPokemon);
    const dispatch = useDispatch<Dispatch>();

    async function handleInputChanged(event: ChangeEvent<HTMLInputElement>) {
        // TODO debouncing
        const id = parseInt(event.target.value);

        if (Number.isNaN(id)) {
            dispatch.pokemon.changeSelectedPokemon(undefined)
            return;
        }

        await dispatch.pokemon.selectPokemon(id);
    }

    return (
        <div>
            <h1>Pokemon</h1>
            <input onChange={handleInputChanged}/>
            <p>{selectedPokemon?.name}</p>
            <a href="/">Back</a>
        </div>
    );
};

export default PokemonWithStore;
