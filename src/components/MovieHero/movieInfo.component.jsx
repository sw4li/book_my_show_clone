import React, { useContext } from 'react'

// context
import { MovieContext } from '../../context/movie.context'

const MovieInfo = () => {
  const {movie} = useContext(MovieContext)

//   for genres and converts to string
const genres = movie.genres?.map((item)=> item.name).join(", ")
const ln = movie.spoken_languages?.map((item)=> item.name).join(", ")

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-3'>
                <div className='w-28 h-6'>
                    <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premiere" className='w-full h-full' />
                </div>
                <span className='bg-bmsprimary-700 px-2 py-0 font-normal text-sm text-white rounded-lg'>Streaming Now</span>
            </div>
            <h1 className='hidden lg:block text-white text-4xl font-bold'>{movie.original_title}</h1>

            <div className='flex flex-col-reverse lg:flex-col gap-5'>
                <div className='text-white font-normal flex flex-col gap-4'>
                    <h4>4k &bull; {movie.original_language} &bull; Languages: {ln} </h4>
                    <h4>{(movie.runtime/60).toFixed(2)} hr &bull; {genres} &bull; 13+  </h4>
                </div>
                <div className='flex items-center gap-3'>
                    <button className='bg-bmssecondary-300 px-14 py-3 text-white font-semibold rounded-lg'>Rent ₹89</button>
                    <button className='bg-bmssecondary-300 px-14 py-3 text-white font-semibold rounded-lg'>Buy ₹449</button>
                </div>
            </div>

        </div>
    )
}

export default MovieInfo
