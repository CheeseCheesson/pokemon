interface IPastDamageRelations {
  generation: {
    name: string
    url: string
  }
  damage_relations: IDamageRelations
}

export interface IType {
  name: string
  id: number
  damage_relations: IDamageRelations
  generation: {
    name: string
    url: string
  }
  move_damage_class: {
    name: string
    url: string
  }
  names: {
    name: string
    language: {
      name: string
      url: string
    }
  }[]
  pokemon: {
    slot: number
    pokemon: {
      name: string
      url: string
    }
  }[]
  moves: {
    name: string
    url: string
  }[]
  past_damage_relations: IPastDamageRelations[]
}

interface IDamageRelations {
  no_damage_to: INamedAPIResource[]
  half_damage_to: INamedAPIResource[]
  double_damage_to: INamedAPIResource[]
  no_damage_from: INamedAPIResource[]
  half_damage_from: INamedAPIResource[]
  double_damage_from: INamedAPIResource[]
}

interface INamedAPIResource {
  name: string
  url: string
}
