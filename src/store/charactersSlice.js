import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ENDPOINT = 'https://star-wars-characters.glitch.me/api/search/';

export const fetchCharactersFromAPI = createAsyncThunk(
  'characters/fetchCharacters',
  async (searchTerm) => {
    const response = await fetch(ENDPOINT + searchTerm.toLowerCase()).then(
      (response) => response.json()
    );
    return response.results;
  }
);

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    isLoading: false,
    data: []
  },
  reducers: {},
  extraReducers: {
    [fetchCharactersFromAPI.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    [fetchCharactersFromAPI.pending]: (state, action) => {
      state.isLoading = true;
    }
  }
});
