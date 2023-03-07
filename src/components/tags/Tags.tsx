import { useDispatch } from "react-redux"
import { setFiltredArray } from "../../features/filtredSlice"
import { useGetByTagQuery } from "../../serveces/PokenonAPI"
import { setBgcolorToPokemonTag } from "../../Utils/utils"

type TypesProps = {
  type: string
}

const Tags = ({ type }: TypesProps) => {
  const { data: pokemonsByTags } = useGetByTagQuery(type)

  const dispatch = useDispatch()

  const clickOnSort = () => {
    dispatch(setFiltredArray(pokemonsByTags))
  }

  return (
    <span
      key={type}
      onClick={clickOnSort}
      className={`inline-block ${setBgcolorToPokemonTag(
        type
      )} rounded-sm px-2 py-1 text-md font-semibold mr-2`}
    >
      {type}
    </span>
  )
}

export default Tags
