import React, { useContext } from 'react'
import { BiChevronLeft, BiShareAlt, BiSearch, BiSolidChevronDown, BiMenu } from "react-icons/bi"
import logo from "../../assets/bms-logo.png"

//global context
import { MovieContext } from '../../context/movie.context'
import { Link } from 'react-router-dom'


const NavSm = () => {

    const { movie } = useContext(MovieContext)

    return (
        <div className='text-white flex items-center justify-between'>
            <div >
                <h3 className='text-xl sm:text-2xl font-bold flex items-center'><BiChevronLeft className='w-8 sm:w-14 h-full' />{movie.title}</h3>
            </div>
            <div className='w-6 sm:w-10 h-10'>
                <BiShareAlt className='w-full h-full' />
            </div>
        </div>
    )

}

const NavLg = () => {
    return (
        <div className='container mx-auto px-4 py-2 flex items-center justify-between'>
            <div className='flex items-center gap-3 w-3/5'>
                <Link to={"/"}>
                    <div className='w-25 h-10'>
                        <img src={logo} alt="logo" className='w-full h-full' />
                    </div>
                </Link>
                <div className='w-4/5 flex items-center gap-3 bg-white px-2 py-2 rounded-md'>
                    <BiSearch className='text-bmsprimary' />
                    <input type="search" className='w-full bg-transparent border-none focus:outline-none text-sm' placeholder='Search for Movies,Events,Plays,Sports and Activities' />
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <span className='text-gray-300 text-sm font-normal flex items-center gap-1 hover:text-white cursor-pointer'>Kochi <BiSolidChevronDown /> </span>
                <button className='bg-bmssecondary-300 text-white px-2 py-1 text-xs rounded'>Sign-in</button>
                <div className='w-8 h-8 text-white'>
                    <BiMenu className='w-full h-full' />
                </div>
            </div>

        </div>

    )
}

const Movienavbar = () => {
    return (
        <>
            <nav className='lg:relative lg:bg-bmsprimary-700 lg:px-4 lg:py-2'>
                {/* for mobile and tab */}
                <div className=' fixed inset-x-0 z-30 bg-opacity-40 backdrop-filter backdrop-blur-sm  bg-bmsprimary-700 px-4 py-5 lg:hidden'>
                    <NavSm />
                </div>
                {/* for tab */}
                {/* <div className='hidden md:block lg:hidden'>
                    <NavSm />
                </div> */}

                {/* for pc */}
                <div className='hidden lg:block'>
                    <NavLg />
                </div>
            </nav>
        </>
    )
}

export default Movienavbar
