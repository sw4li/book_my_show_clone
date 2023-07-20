import React from 'react';
import axios from "axios"
// HOC
import DefaultHOC from './HOC/Default.HOC'
import MovieHOC from './HOC/Movie.HOC';
// global slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// homepage
import Home from './Pages/Home.page';
// movie page
import Movie from './Pages/Movie.page';
// events page
import Events from './Pages/Events.page';

// axios settings
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {};
axios.defaults.params["api_key"] = import.meta.env.VITE_API_KEY;


function App() {

  return (
     <>
      <DefaultHOC path="/"  element={Home} />
      <MovieHOC path="/movie/:id"  element={Movie} />
      <DefaultHOC path="/events" element={Events} />
     </>
  )
}

export default App
