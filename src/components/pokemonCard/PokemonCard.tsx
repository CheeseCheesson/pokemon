/* eslint-disable */
import React from "react"
import { IPokemon } from "../../types/pokemonTypes"

interface Props {
    pokemon: IPokemon;
    onClick: () => void;
  }

const PokemonCard: React.FC<Props> = ({ pokemon, onClick }) => {
  return (
    <div className="w-1/4 sm:w-1/2 md:w-1/3">
      <div
        className="bg-white border rounded-lg overflow-hidden cursor-pointer"
        onClick={onClick}
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.url.split("/")[6]
          }.png`}
          alt={pokemon.name}
          className="w-full"
        />
        <div className="p-2">
          <div className="font-bold text-lg">{pokemon.name}</div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
