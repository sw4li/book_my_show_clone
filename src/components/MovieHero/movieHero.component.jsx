import React, { useContext } from 'react'
import MovieInfo from './movieInfo.component';

// context
import { MovieContext } from '../../context/movie.context'

const Moviehero = () => {
    const {movie} = useContext(MovieContext)
    return (
        <div>
            {/* mobile */}
            <div className='relative md:hidden w-full h-full' >
                <div className='absolute bottom-0 translate-y-16 sm:translate-y-0 left-3  z-20'>
                    <MovieInfo />
                </div>
                <div className='w-full h-52 translate-y-20 sm:translate-y-0 bg-opacity-95 absolute bg-black bottom-0 z-10' />
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" className='w-full h-full' />
            </div>
            {/* medium */}
            <div className='hidden relative md:flex lg:hidden' style={{ height: "100vh" }}>
                <div className='absolute bottom-12 left-8 px-8 z-20'>
                    <MovieInfo />
                </div>
                <div className='w-full h-64 bg-opacity-95 absolute bg-black bottom-0 z-10' />
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" className='w-full h-full' />
            </div>
            {/* large */}
            <div className='relative hidden w-full lg:block' style={{ height: '30rem' }}>
                {/* gradient */}
                <div className='absolute h-full w-full z-10 ' style={{ backgroundImage: "linear-gradient(90deg,rgb(34,34,34)24.97%, rgb(34,34,34)38.3%, rgba(34,34,34,0.04)97.47%, rgb(34,34,34)100%)" }} />

                <div className='absolute z-20 left-14 top-12 flex items-center gap-10'>
                    <div className=' h-96 w-64' >
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" className='w-full h-full rounded-2xl' />
                    </div>
                    <div>
                        <MovieInfo />
                    </div>
                </div>
                {/* background */}
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="poster" className='w-full h-full object-cover brightness-100' />
            </div>
        </div>
    )
}

export default Moviehero
