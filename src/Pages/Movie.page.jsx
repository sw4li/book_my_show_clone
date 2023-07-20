import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Moviehero from '../components/MovieHero/movieHero.component'
import Cast from '../components/Castcrew/cast.component'
// poster slider
import PosterSlider from '../components/PosterSlider/PosterSlider';
//temp images
import TempImages from "../config/Posters.images";
// custom settings for slider
import customsettings from '../config/Customised.settings';

// context
import { MovieContext } from '../context/movie.context';

const Movie = (props) => {
  const { movie } = useContext(MovieContext);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const { id } = useParams();

  // similar movie
  const [similar,setSimilar] = useState([]);
  // recommended
  const [recommend,setRecommend] = useState([]);

  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`movie/${id}/credits`);
      setCast(getCast.data.cast);
      setCrew(getCast.data.crew)
    }
    requestCast()
  }, [id])

  // for similar movie api request
  useEffect(()=>{
    const requestMovie =async ()=>{
           const getSimilarMovie = await axios.get(`/movie/${id}/similar`)
           setSimilar(getSimilarMovie.data.results)
    }
    requestMovie();
  },[id])

  // for recommended
  useEffect(()=>{
    const requestMovie =async ()=>{
           const getRecommendMovie = await axios.get(`/movie/${id}/recommendations`)
           setRecommend(getRecommendMovie.data.results)
    }
    requestMovie();
  },[id])

  return (
    <>
      <Moviehero />
      <div className='mt-2 translate-y-20 sm:translate-y-0 sm:ml-14 sm:my-10 px-4 sm:w-2/3'>
        {/* about */}
        <div className='flex flex-col items-start gap-3 my-4'>
          <h2 className='text-black font-bold text-2xl'>About the movie</h2>
          <p className='text-bmsprimary-700 text-lg font-normal'>{movie.overview}</p>
        </div>
        {/* line */}
        <div className='my-8 bg-bmsprimary-300'>
          <hr />
        </div>
        {/* offer zone */}
        <div className='my-8'>
          <h1 className='text-black font-bold text-2xl'>Top offers for you</h1>
          {/* coupon */}
          <div>
            <div className='p-4 my-6 flex items-start gap-2 bg-yellow-100 border-dashed border-yellow-400 border-2 rounded-md lg:w-3/5'>
              <div className='h-6 w-6 mt-1'>
                <img src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?26082021190202" alt="bmslogo" className='w-full h-full' />
              </div>
              <div >
                <h3 className='text-bmsprimary-700 text-lg font-medium'>Use Code HORROR</h3>
                <p className='text-bmsprimary-700 text-sm font-normal'> Tap to view details</p>
              </div>
            </div>
          </div>
        </div>

        {/* line */}
        <div className='my-8 bg-bmsprimary-300'>
          <hr />
        </div>

        {/* cast */}
        <div className='my-8'>
          <h1 className='text-black font-bold text-2xl '>Cast</h1>
          <div className='flex flex-wrap gap-8 my-6'>

            {cast.map((castdata,index) => {
             if(index < 6)
              return(
                <Cast image={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`} castName={castdata.name} role={castdata.character} />
              )          
            }
            )}

          </div>
        </div>

        {/* line */}
        <div className='my-8 bg-bmsprimary-300'>
          <hr />
        </div>

        <div className='my-8'>
          <h1 className='text-black font-bold text-2xl '>Crew</h1>
          <div className='flex flex-wrap gap-6 my-6'>
          {crew.map((crewdata,index) => {
             if(index < 3)
              return(
                <Cast image={`https://image.tmdb.org/t/p/original/${crewdata.profile_path}`} castName={crewdata.name} role={crewdata.known_for_department} />
              )
            }
            )}
          </div>
        </div>

        {/* line */}
        <div className='my-8 bg-bmsprimary-300'>
          <hr />
        </div>

        {/* poster sliders */}
        <div className='my-4 lg:my-8'>
          <div className='container '>
            <PosterSlider data={similar} title="You might also like" subtitle="" isDark={false} config={customsettings} />
          </div>
        </div >

        {/* line */}
        <div className='my-6 bg-bmsprimary-300'>
          <hr />
        </div>

        {/* poster sliders */}
        <div className='my-8'>
          <div className='container'>
            <PosterSlider data={recommend} title="BMS XCLUSIV" subtitle="" isDark={false} config={customsettings} />
          </div>
        </div >

      </div>
    </>
  )
}

export default Movie
