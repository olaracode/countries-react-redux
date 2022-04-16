import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const axios = require("axios");

const API_URL = "https://restcountries.com/v3.1/all";

// Creation of THUNK

export const fetchCountries = createAsyncThunk(
  "countries/countryListLoading",
  async () => {
    let request = await axios.get(API_URL);
    return request.data;
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    searchByName: "",
    searchByRegion: "",
    filteredCountries: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      // Add countries to the state array
      state.countries = action.payload;
    });
  },
});

export default countriesSlice.reducer;
