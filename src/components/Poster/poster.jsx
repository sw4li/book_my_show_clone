import React from 'react'
import { Link } from 'react-router-dom';

const Poster = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
      <div className='flex flex-col items-start '>
        <div className='h-44 me-2 sm:h-80'>
          <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`} alt={props.title} className='w-full h-full rounded-lg' />
        </div>
        <h3 className={`text-base sm:text-xl font-medium ${props.isDark ? "text-white " : "text-bmsprimary-800"}`}>{props.original_title}</h3>
        <p className={`text-xs sm:text-base sm:font-normal ${props.isDark ? "text-white" : "text-bmsprimary-800"}`}>{props.original_language}</p>
      </div>
    </Link>
  )
}

export default Poster
