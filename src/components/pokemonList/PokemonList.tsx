/* eslint-disable */
import { useRequestPokemonsQuery } from "../../serveces/PokenonAPI"
import { IPokemon } from "../../types/pokemonTypes"
import { useState } from "react"
import Pagination from "../pagination/Pagination"
import PokemonDetailsModal from "../pokemonDetailsModal/PokemonDetailsModal"
import { useAppSelector } from "../../hooks/hooks"
import { useEffect } from "react"
import { IType } from "./../../types/ITypeResponse"
interface IPokemonItem {
  slot: number
  pokemon: {
    name: string
    url: string
  }
}
type PokemonList = IPokemonItem[]

const PokemonList = () => {
  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)
  const [pokemonListByTag, setPokemonListByTag] = useState<IPokemonItem[]>([])
  const [selectedPokemon, setSelectedPokemon] = useState<string>("")
  const [pocemonId, setpocemonId] = useState<string>("")
  const pokemonByTag = useAppSelector(
    (state) => state.filtredSlice.filtredArray
  )
  useEffect(() => {
    if (Array.isArray(pokemonByTag) && pokemonByTag.length > 0) {
      const { pokemon } = pokemonByTag[0]
      setPokemonListByTag(pokemon)
    }
  }, [pokemonByTag])
  console.log(pokemonListByTag)
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

  if (pokemonListByTag.length > 0) {
    return (
      <div>
        <div className="flex flex-wrap gap-6 px-2 justify-center">
          {pokemonListByTag?.map((pokemon: IPokemonItem) => (
            <div
              key={pokemon.pokemon.name}
              className="w-1/4 sm:w-1/2 md:w-1/3 "
            >
              <div className="bg-white border rounded-lg overflow-hidden">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    pokemon.pokemon.url.split("/")[6]
                  }.png`}
                  alt={pokemon.pokemon.name}
                  className="w-full"
                />
                <div className="p-2">
                  <div className="font-bold text-lg">
                    {pokemon.pokemon.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-wrap gap-6 px-2 justify-center">
        {pokemonList?.results.map((pokemon: IPokemon) => (
          <div key={pokemon.name} className="w-1/4 sm:w-1/2 md:w-1/3 ">
            <div
              className="bg-white border rounded-lg overflow-hidden"
              onClick={() => handlePokemonClick(pokemon)}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  pokemon.url.split("/")[6]
                }.png` || "https://via.placeholder.com/150"}
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
