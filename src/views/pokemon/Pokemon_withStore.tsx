import React, { type ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { type Dispatch, type RootState } from "../../store"

const PokemonWithStore: React.FC = () => {
  const selectedPokemon = useSelector((state: RootState) => state.pokemon.selectedPokemon)
  const dispatch = useDispatch<Dispatch>()

  async function handleInputChanged(event: ChangeEvent<HTMLInputElement>): Promise<void> {
    // TODO debouncing
    const id = parseInt(event.target.value)

    if (Number.isNaN(id)) {
      dispatch.pokemon.changeSelectedPokemon(undefined)
      return
    }

    await dispatch.pokemon.selectPokemon(id)
  }

  return (
    <div>
      <div>
        <h1>Pokemon Lookup</h1>
        <input onChange={handleInputChanged} />
        <p>{selectedPokemon?.name}</p>
      </div>
      <a href="/">Back</a>
    </div>
  )
}

export default PokemonWithStore
