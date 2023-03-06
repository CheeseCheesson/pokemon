interface IPokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: IPokemon[];
  }
  
  interface IPokemonDetailsResponse {
    id: number;
    name: string;
    types: { type: { name: string } }[];
    stats: { base_stat: number; stat: { name: string } }[];
    sprites: { front_default: string };
  }
  
  export interface IPokemon {
    id: number;
    name: string;
    url: string;
    image?: string;
    types?: string[];
    height?: number;
    weight?: number; // добавляем свойство weight в интерфейс IPokemon
  }
  export interface IPokemonDetails extends Omit<IPokemonDetailsResponse, "id" | "name"> {
    id: string;
  }
  
  export type {  IPokemonDetailsResponse, IPokemonListResponse };