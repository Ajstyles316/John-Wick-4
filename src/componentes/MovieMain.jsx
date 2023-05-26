import React from 'react'
import Gender from './Gender'
import movie from '../assets/peliculas.json'
import "./MovieMain.css"
export const MovieMain = ({movie}) => {
  return (
    <div className='movie-main-container'>
      <img src={movie.Poster} alt=""/>
      <Gender movie= {movie}/>
      <span>
        {
            movie.Plot
        }

      </span>
    </div>
  )
}

