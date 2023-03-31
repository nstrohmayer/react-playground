import React, { useEffect, useState } from 'react';
import fetchPokemonService from '../../service/FetchPokemonService';
import { PokemonDTO } from '../../service/PokemonDTO';

const Pokemon: React.FC = () => {
    const [pokemon, setPokemon] = useState<PokemonDTO>(new PokemonDTO('', 0));

    useEffect(() => {
        async function fetchPokemon() {
            const pokemon = await fetchPokemonService.fetchPokemon(1);
            setPokemon(pokemon);
        }

        fetchPokemon();
    }, []);

    return (
        <div>
            <h1>Pokemon</h1>
            <p>{ pokemon.name }</p>
        </div>
    );
};

export default Pokemon;
