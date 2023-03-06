/* eslint-disable */
import { useRequestPokemonsQuery } from "../../serveces/PokenonAPI"
import { IPokemon } from "../../types/pokemonTypes"
import { useState } from "react"
import Pagination from "../pagination/Pagination"
import PokemonDetailsModal from "../pokemonDetailsModal/PokemonDetailsModal"

const PokemonList = () => {
  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)
  const [selectedPokemon, setSelectedPokemon] = useState<string>("")
  const [pocemonId, setpocemonId] = useState<string>("")
  const {
    data: pokemonList,
    isLoading,
    isError
  } = useRequestPokemonsQuery({ limit, offset })

  const handlePokemonClick = (pokemon: IPokemon) => {
    setSelectedPokemon(pokemon.name)
    setpocemonId(pokemon.url.split("/")[6])
  }

  const handlePrevClick = () => {
    setOffset((prevOffset) => prevOffset - limit)
  }

  const handleNextClick = () => {
    setOffset((prevOffset) => prevOffset + limit)
  }
  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(event.target.value))
    setOffset(0)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>
  }
  const handleClose = () => {
    setSelectedPokemon("")
  }

  return (
    <div>
      <div className="flex flex-wrap">
        {pokemonList?.results.map((pokemon: IPokemon) => (
          <div
            key={pokemon.name}
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-2"
          >
            <div
              className="bg-white border rounded-lg overflow-hidden"
              onClick={() => handlePokemonClick(pokemon)}
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
        ))}
      </div>
      {selectedPokemon && (
        <PokemonDetailsModal
          pokemonName={selectedPokemon}
          onClose={handleClose}
          pokemonId={pocemonId}
        />
      )}
      <div className="flex justify-center items-center my-4">
        <Pagination
          previous={pokemonList?.previous}
          next={pokemonList?.next}
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
          onLimitChange={handleLimitChange}
          limit={limit}
        />
      </div>
    </div>
  )
}

export default PokemonList
