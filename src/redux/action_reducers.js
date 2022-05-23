import { createSlice } from '@reduxjs/toolkit'

export const CCSlice = createSlice({
  // C'est une tranche de notre etat globale
  name: 'userReducer',
  initialState: {
    number: 0,
    ms: true,
  },
  reducers: {
    setCC: (state, action) => {
      // {type:"userReducer/addTask",payload:"Aller faire les courses"}
      state.number = action.payload;
    },
    setMiddle_Section: (state, action) => {
      state.ms = action.payload;
    }
  }
})

// eslint-disable-next-line camelcase
export const { setCC, setMiddle_Section } = CCSlice.actions;
// Ce sont des fonctions des actions cree automatiquement par tooklist , du coup on a plus besoin de preciser les types
export const CCRed = CCSlice.reducer;
