import React from 'react'
import {Routes,Route} from "react-router-dom"
import MovieLayout from '../layouts/Movie.layout'

const MovieHOC = ({ element: Component, ...rest}) => {
    return (
        <Routes>
          <Route {...rest} element={
            <MovieLayout>
              <Component />
            </MovieLayout>
          } />
        </Routes>
      )
}

export default MovieHOC
