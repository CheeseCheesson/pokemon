/* eslint-disable */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IPokemon } from "../types/IPokemon";
import { IPokemonListResponse } from "../types/pokemonTypes"
import { IPokedexDetails } from './../types/IPokedexDetails';
import { IType } from './../types/ITypeResponse';

export const pokemonAPI = createApi({
  reducerPath: "pokemonAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2"
  }),
  tagTypes: ["pokemon"],
  endpoints: (build) => ({
    requestPokemons: build.query<
      IPokemonListResponse,
      { limit?: number; offset?: number }
    >({
      query: ({ limit = 20, offset = 0 }) => ({
        url: "/pokemon",
        params: { limit, offset }
      }),
      providesTags: () => ["pokemon"]
    }),
    requestPokedex: build.query<IPokedexDetails, string>({
      query: (id) => ({
        url: `/pokedex/${id}`,
      }),
    }),
    requestPokemon: build.query<IPokemon, string>({
      query: (id) => ({
        url: `/pokemon/${id}`,
      }),
    }),
    getByTag: build.query<IType, string>({
      query: (id) => ({
        url: `/type/${id}`,
      }),
    }),
  })
})

export const { useRequestPokemonsQuery, useRequestPokedexQuery, useRequestPokemonQuery, useGetByTagQuery } = pokemonAPI
