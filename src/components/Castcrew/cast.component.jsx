import React from 'react'

const Cast = (props) => {
    return (
        <div>
            <div className='flex flex-col items-center w-28 text-center'>
                <div className='w-28 h-28'>
                    <img src={props.image} alt="cast" className='w-full h-full rounded-full' />
                </div>
                <h2 className='mt-1 text-lg font-medium text-black'>{props.castName}</h2>
                <h4 className='m-0 text-base font-medium text-bmsprimary-600'>{props.crew? "" : "as"} {props.role}</h4>
            </div>
        </div>
    )
}

export default Cast
