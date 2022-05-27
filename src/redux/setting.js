// @flow
import { createSlice } from '@reduxjs/toolkit';

export const SettingSlice = createSlice({
  name: 'settingReducer',
  initialState: {
    backgroundColor: '#2f4f4f',
    form: 2,
    ip: '8.8.8.8',
  },
  reducers: {
    setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
    },
    setForm: (state, action) => {
      state.form = action.payload;
    },
    setIp: (state, action) => {
      state.ip = action.payload;
    }
  },
});

export const { setBackgroundColor, setForm, setIp } = SettingSlice.actions;
export const SettingRed = SettingSlice.reducer;
