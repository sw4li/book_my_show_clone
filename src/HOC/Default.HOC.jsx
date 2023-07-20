import React from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ element: Component, ...rest }) => {

  return (
    <Routes>
      <Route {...rest} element={
        <DefaultLayout>
          <Component />
        </DefaultLayout>
      } />
    </Routes>
  )
}

export default DefaultHOC;