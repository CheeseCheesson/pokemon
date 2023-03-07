/* eslint-disable */
import { useRequestPokemonQuery } from "../../serveces/PokenonAPI"
import Tags from "./../tags/Tags"

interface Props {
  pokemonName: string
  pokemonId: string
  onClose: () => void
}

const PokemonDetailsModal = ({ pokemonId, pokemonName, onClose }: Props) => {
  const { data: pokemon, isLoading, isError } = useRequestPokemonQuery(pokemonId)
  const pokemonTypes = pokemon?.types.map((type) => type.type.name)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>
  }

  return (
    <div className="fixed z-10 inset-0 overflow-hidden">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="min-w-md inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white p-6 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center w-40 bg-red-100 sm:mx-0 sm:h-32 sm:w-32">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                  alt={pokemonName}
                  className="w-full"
                />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {pokemonName}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Weight: {pokemon?.weight}
                  </p>
                  <p className="text-sm text-gray-500">
                    Base Experience: {pokemon?.base_experience}
                  </p>
                  <div className="mt-2">
                    {pokemonTypes &&
                      pokemonTypes.map((type) => <Tags type={type} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-grass hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetailsModal
