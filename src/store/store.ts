/* eslint-disable */
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { pokemonAPI } from "../serveces/PokenonAPI"

const rootReducer = combineReducers({
  [pokemonAPI.reducerPath]: pokemonAPI.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(pokemonAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
