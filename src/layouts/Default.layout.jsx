import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import Footer from "../components/Footer/Footer";

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar/>
            {props.children} 
            <Footer/>     
        </>
    )
}
export default DefaultLayout