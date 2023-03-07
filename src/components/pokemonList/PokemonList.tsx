import { useState, useEffect } from "react"
import { useRequestPokemonsQuery } from "../../serveces/PokenonAPI"
import { IPokemon } from "../../types/pokemonTypes"
import Pagination from "../pagination/Pagination"
import PokemonDetailsModal from "../pokemonDetailsModal/PokemonDetailsModal"
import { useAppSelector } from "../../hooks/hooks"
import PokemonCard from "../pokemonCard/PokemonCard"
import { IPokemonItem } from "./../../types/IPokemon"
import Loader from "../loader/Loader"

const PokemonList = () => {
  const [limit, setLimit] = useState(20)
  const [offset, setOffset] = useState(0)
  const [pokemonListByTag, setPokemonListByTag] = useState<IPokemonItem[]>([])
  const [filteredByTagsPokemons, setFilteredByTagsPokemons] = useState<
    IPokemonItem[]
  >([])
  const [selectedPokemon, setSelectedPokemon] = useState<string>("")
  const [pocemonId, setpocemonId] = useState<string>("")
  const [allPokemons, setAllPokemons] = useState<IPokemon[]>([])
  const [filteredPokemons, setFilteredPokemons] = useState<IPokemon[]>([])
  const [searchQuery, setSearchQuery] = useState<string>("")

  const pokemonByTag = useAppSelector(
    (state) => state.filtredSlice.filtredArray
  )
  useEffect(() => {
    if (Array.isArray(pokemonByTag) && pokemonByTag.length > 0) {
      if (Array.isArray(pokemonByTag) && pokemonByTag.length > 0) {
        const { pokemon } = pokemonByTag[0]
        setPokemonListByTag(pokemon)
      }
    }
  }, [pokemonByTag])

  const {
    data: pokemonList,
    isLoading,
    isError
  } = useRequestPokemonsQuery({ limit, offset })

  useEffect(() => {
    if (pokemonList) {
      setAllPokemons(pokemonList.results)
    }
  }, [pokemonList])

  useEffect(() => {
    if (pokemonListByTag.length > 0) {
      const filtered = pokemonListByTag.filter((pokemon) =>
        pokemon?.pokemon?.name
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
      setFilteredByTagsPokemons(filtered)
    }
    const filtered = allPokemons.filter((pokemon) =>
      pokemon?.name?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredPokemons(filtered)
  }, [allPokemons, pokemonListByTag, searchQuery])

  const handlePokemonClick = (pokemon: IPokemon) => {
    setSelectedPokemon(pokemon?.name)
    setpocemonId(pokemon?.url?.split("/")[6])
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
    return (
      <div className="flex h-28 items-center justify-center">
        <Loader />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="text-fighting">Error occurred while fetching data.</div>
    )
  }
  const handleClose = () => {
    setSelectedPokemon("")
  }
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value)
  }

  const renderPokemonList = () => {
    if (filteredByTagsPokemons.length > 0) {
      return (
        <>
          {filteredByTagsPokemons.map((pokemon) => (
            <PokemonCard
              pokemon={pokemon.pokemon}
              onClick={() => handlePokemonClick(pokemon.pokemon)}
            />
          ))}
        </>
      )
    }
    if (pokemonListByTag.length > 0) {
      return (
        <>
          {pokemonListByTag.map((pokemon) => (
            <PokemonCard
              pokemon={pokemon.pokemon}
              onClick={() => handlePokemonClick(pokemon.pokemon)}
            />
          ))}
        </>
      )
    }

    if (filteredPokemons.length > 0) {
      return (
        <>
          {filteredPokemons.map((pokemon) => (
            <PokemonCard
              pokemon={pokemon}
              onClick={() => handlePokemonClick(pokemon)}
            />
          ))}
        </>
      )
    }
    if (allPokemons.length > 0) {
      return (
        <>
          {allPokemons.map((pokemon) => (
            <PokemonCard
              pokemon={pokemon}
              onClick={() => handlePokemonClick(pokemon)}
            />
          ))}
        </>
      )
    }
    return <div className="text-fighting">No Pokemons found</div>
  }

  return (
    <div>
      <h1 className="text-5xl text-center mb-4 pt-4 text-ice font-bold">
        Pokedex
      </h1>
      <div className="flex-grow md:mr-4 mb-4 md:mb-0 pt-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
        />
      </div>
      <div className="flex flex-wrap gap-6 px-2 justify-center">
        {renderPokemonList()}
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
