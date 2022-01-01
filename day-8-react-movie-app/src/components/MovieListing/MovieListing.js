import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import { settings } from '../../common/settings'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieListing.scss"



const MovieListing = () => {

  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)
  const loading = useSelector(state => console.log(state))
  let renderMovies = "";
  let renderShows = ""


  renderMovies = movies.Response === 
    "True" 
      ? (
        movies.Search.map((movie, index) => {
         return  <MovieCard key={index} data={movie} />
        })
      ) 
      : (<div className="movies-error"><h3>{movies.Error}</h3></div>);

      renderShows = shows.Response === 
    "True" 
      ? (
        shows.Search.map((show, index) => {
         return  <MovieCard key={index} data={show} />
        })
      ) 
      : (<div className="movies-error"><h3>{shows.Error}</h3></div>);


  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movies-container">
        <Slider {...settings}>
          {renderMovies}
        </Slider>  
        </div>
      </div>
      <div className="show-list">
        <h2>Show</h2>
        <div className="movies-container">
        <Slider {...settings}>
          {renderShows}
        </Slider>  
        </div>
      </div>
    </div>
  )
}

export default MovieListing
