/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const mathApiSlice = createSlice({
  name: 'mathApi',
  initialState: {
    pending: true,
    result: null,
    hasError: false,
    errorMessage: null,
  },
  reducers: {
    getResult: (state) => {
      state.pending = true;
      state.errorMessage = null;
    },
    getResultSuccess: (state, { payload }) => {
      state.result = payload;
      state.pending = false;
      state.hasError = false;
      state.errorMessage = null;
    },
    getResultFailure: (state, { payload }) => {
      state.result = null;
      state.pending = false;
      state.hasError = true;
      state.errorMessage = payload;
    },
  },
});

export const {
  getResult,
  getResultSuccess,
  getResultFailure,
} = mathApiSlice.actions;

export const mathApiSelector = (state) => state.mathApi;

export default mathApiSlice.reducer;
