import React,{useEffect,useContext} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// movie navbar
import Movienavbar from '../components/Navbar/movie.navbar'
// footer
import Footer from '../components/Footer/Footer'

// context
import { MovieContext } from '../context/movie.context'


const MovieLayout = (props) => {
  // setting api call movie id in movielayout, because layout is calling once;
  const {id} =useParams();
  const {movie,setMovie} =useContext(MovieContext)

  useEffect(()=>{
    const requestMovie =async ()=>{
           const getMovieData = await axios.get(`/movie/${id}`)
          setMovie(getMovieData.data)
    }
    requestMovie()
  },[id])

  return (
    <>
      <Movienavbar />
      {props.children}
      <Footer />
    </>
  )
}

export default MovieLayout
