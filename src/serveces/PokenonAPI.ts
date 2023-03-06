/* eslint-disable */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IAbility } from "../types/IAbility";
import { IPokemonListResponse } from "../types/pokemonTypes"
import { IPokedexDetails } from './../types/IPokedexDetails';

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
    requestAbility: build.query<IAbility, string>({
      query: (id) => ({
        url: `ability/${id}`,
      }),
    }),
  })
})

export const { useRequestPokemonsQuery, useRequestPokedexQuery, useRequestAbilityQuery } = pokemonAPI
