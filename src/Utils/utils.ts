export const setBgcolorToPokemonTag = (type: string): string => {
  switch (type) {
    case "normal":
      return "bg-normal text-black"
    case "fire":
      return "bg-fire text-white"
    case "water":
      return "bg-water text-white"
    case "electric":
      return "bg-electric text-black"
    case "grass":
      return "bg-grass text-white"
    case "ice":
      return "bg-ice text-black"
    case "fighting":
      return "bg-fighting text-white"
    case "poison":
      return "bg-poison text-white"
    case "ground":
      return "bg-ground text-white"
    case "flying":
      return "bg-flying text-black"
    case "psychic":
      return "bg-psychic text-white"
    case "bug":
      return "bg-bug text-white"
    case "rock":
      return "bg-rock text-white"
    case "ghost":
      return "bg-ghost text-white"
    case "dragon":
      return "bg-dragon text-white"
    case "dark":
      return "bg-dark text-white"
    case "steel":
      return "bg-steel text-black"
    case "fairy":
      return "bg-fairy text-black"
    default:
      return ""
  }
}
