// @flow
import { createSlice } from '@reduxjs/toolkit';

export const TotalSlide = createSlice({
  name: 'totalReducer',
  initialState: {
    totals: [
    ]
  },
  reducers: {
    updatePlat: (state, action) => {
			if (state.totals.findIndex((p) => p.id === action.payload.id) === -1) {
				if(action.payload.finished === false) {
					state.totals.push({ id: action.payload.id, pieces: action.payload.pieces, name: action.payload.name, });
				}
      } else {
				if(action.payload.finished === false) {
					const orderIndex = (state.totals).findIndex((p) => p.id === action.payload.id);
					state.totals[orderIndex].pieces += action.payload.pieces;
				}
			}
			// console.log(state.totals);
    },
		reseatPlat: (state, action) => {
			state.totals = [];
		}
  },
});

export const { updatePlat, reseatPlat } = TotalSlide.actions;
export const TotalRed = TotalSlide.reducer;
