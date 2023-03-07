/* eslint-disable */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { IType } from "./../types/ITypeResponse"

interface FiltredByTag {
  filtredArray?: IType | IType[]
}

const initialState: FiltredByTag = {
  filtredArray: []
}

const filtredSlice = createSlice({
  name: "filtredPokemon",
  initialState,
  reducers: {
    setFiltredArray(state, action: PayloadAction<IType | IType[] | undefined>) {
      if (action.payload === undefined) {
        state.filtredArray = undefined
      } else if (Array.isArray(action.payload)) {
        state.filtredArray = action.payload
      } else {
        state.filtredArray = [action.payload]
      }
    }
  }
})

export const { setFiltredArray } = filtredSlice.actions

export default filtredSlice.reducer
