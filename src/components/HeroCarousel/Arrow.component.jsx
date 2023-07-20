import React from "react";

export const NextArrow = (props) => {
    return (
        <>
        <div className={props.className} style={{...props.style,backgroundColor:"#1d2030",paddingTop:"1px",borderRadius:"30%"}} onClick={props.onClick}/>
        </>
    )
};

export const PrevArrow = (props) => {
    return (
        <>
         <div className={props.className} style={{...props.style,backgroundColor:"#1d2030",paddingTop:"1px",borderRadius:"30%"}} onClick={props.onClick}/>
        </>
    )
}