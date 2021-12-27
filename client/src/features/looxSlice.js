import { createSlice } from '@reduxjs/toolkit';

const looxSlice = createSlice({
  name: 'looxSlice',
  initialState: {
    looxItems: [],
    mainLoox: null,
    looxLoading: true,
    looxError: null,
  },
  reducers: {
    setLooxStart: state => {
      state.looxLoading = true;
      state.looxError = null;
    },
    setLooxSuccess: (state, action) => {
      state.looxLoading = false;
      state.loox = action.payload;
    },
    setLooxItems: (state, action) => {
      return {
        ...state,
        looxItems: action.payload,
      };
    },

    setMainLoox: (state, action) => {
      state.mainLoox = action.payload;
    },
  },
});

export const { setLooxItems, setMainLoox, setLooxStart, setLooxSuccess } = looxSlice.actions;
export default looxSlice.reducer;
