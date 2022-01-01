import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {APIKey} from '../../common/api/MovieApiKey';
import movieApi from '../../common/api/movieApi';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {

  const response = await movieApi
  .get(`?apiKey=${APIKey}&s=${term}&type=movie`);
  return response.data

});

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async (term) => {

  const response = await movieApi
  .get(`?apiKey=${APIKey}&s=${term}&type=series`);
  return response.data

});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail'
, async (id) => {

  const response = await movieApi
  .get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
  return response.data

});

const initialState = {
  movies: {},
  shows: {},
  selectedOrShow: {},
}

export const movieSlice = createSlice({

  name: "movies",
  initialState,
  reducers: {
      removeSelectedMovieOrShow: (state) => {
        state.selectedOrShow = {}
      },

  },
  extraReducers: {
    [fetchAsyncMovies.pending] : () => {
      console.log("Pending");

    },
    [fetchAsyncMovies.fulfilled] : (state, {payload}) => {
      console.log("Fetched Successfully");
      return {...state, movies: payload}
    },
    [fetchAsyncMovies.rejected] : () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled] : (state, {payload}) => {
      console.log("Fetched Successfully");
      return {...state, shows: payload}
    },
    [fetchAsyncMovieOrShowDetail.fulfilled] : (state, {payload}) => {
      console.log("Fetched Successfully");
      return {...state, selectedOrShow: payload}
    },
  }

});


export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrDetail = (state) => state.movies.selectedOrShow;
export default movieSlice.reducer;