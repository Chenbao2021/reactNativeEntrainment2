// @flow
import { createSlice } from '@reduxjs/toolkit';

export const SettingSlice = createSlice({
  name: 'settingReducer',
  initialState: {
    backgroundColor: '#2f4f4f',
  },
  reducers: {
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
  },
});

export const { setBackgroundColor } = SettingSlice.actions;
export const SettingRed = SettingSlice.reducer;
