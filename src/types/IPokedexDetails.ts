interface IDescription {
    description: string;
    language: NamedAPIResource<any>;
  }
  
  interface IName {
    name: string;
    language: NamedAPIResource<any>;
  }
  
  interface IPokemonEntry {
    entry_number: number;
    pokemon_species: NamedAPIResource<any>;
  }
  
  interface NamedAPIResource<T> {
    name: string;
    url: string;
  }
  
  interface Region {
    id: number;
    name: string;
    locations: NamedAPIResource<Location>[];
    names: IName[];
    main_generation: NamedAPIResource<Generation>;
    pokedexes: NamedAPIResource<any>[];
    version_groups: NamedAPIResource<any>[];
  }
  
  interface Generation {
    id: number;
    name: string;
    main_region: NamedAPIResource<Region>;
  }
  
  export interface IPokedexDetails {
    id: number;
    name: string;
    is_main_series: boolean;
    descriptions: IDescription[];
    names: IName[];
    pokemon_entries: IPokemonEntry[];
    region: NamedAPIResource<Region>;
    version_groups: NamedAPIResource<any>[];
  }