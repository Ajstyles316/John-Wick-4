import React from 'react'
import Gender from './Gender'
import movie from '../assets/peliculas.json'
import "./MovieMain.css"
const MovieMain = () => {
  return (
    <div className='movie-main-container'>
      
      <img src={movie.imgsrc} alt="" />
      <Gender movie= {movie}/>
      <span>
        {
            movie.resume
        }

      </span>
    </div>
  )
}

export default MovieMain
