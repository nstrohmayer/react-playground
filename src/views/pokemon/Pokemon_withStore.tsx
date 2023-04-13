import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, RootState} from '../../store';
import {PokemonDTO} from "../../service/PokemonDTO";
import {useFetchAllPokemon} from "../../service/UseFetchAllPokemon";

const PokemonWithStore: React.FC = () => {
  const selectedPokemon = useSelector((state: RootState) => state.pokemon.selectedPokemon);
  const dispatch = useDispatch<Dispatch>();

  const {status, data, isFetching} = useFetchAllPokemon()

  async function handleInputChanged(event: ChangeEvent<HTMLInputElement>) {
    // TODO debouncing
    const id = parseInt(event.target.value);

    if (Number.isNaN(id)) {
      dispatch.pokemon.changeSelectedPokemon(undefined)
      return;
    }

    await dispatch.pokemon.selectPokemon(id);
  }

  console.log(data);
  console.log(data !== undefined)
  data !== undefined && data?.map((item) => {
    console.log(item.name)
  })

  return (
      <div>
        <div>
          <h1>Pokemon Lookup</h1>
          <input onChange={handleInputChanged}/>
          <p>{selectedPokemon?.name}</p>
        </div>
        <div>
          <h1>Pokemon List</h1>
          <p> {isFetching ? "loading" : undefined}</p>
          TODO list all pokemon
          {typeof data}
          <p>{status}</p>
          {
              data !== undefined && data?.map((pokemon, index) => {
              return <p key={index}>{pokemon.name}</p>
            })
          }
        </div>
        <a href="/">Back</a>
      </div>
  );
};

export default PokemonWithStore;
