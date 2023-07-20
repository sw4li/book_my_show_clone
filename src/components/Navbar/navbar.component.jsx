import React from 'react'
import { BiChevronRight, BiSearch,BiSolidChevronDown,BiMenu } from "react-icons/bi"
import logo from "../../assets/bms-logo.png"


const NavSm = () => {
    return (
        <div className='text-white flex items-center justify-between'>
            <div>
                <h3 className='text-2xl font-bold'>It All Starts Here!</h3>
                <span className='text-gray-300 text-xs flex items-center'>Kochi <BiChevronRight /> </span>
            </div>
            <div>
                <button className='bg-bmssecondary-300 rounded-md text-xs font-medium p-2'>Use App</button>
            </div>
            <div className='w-6 h-6'>
                <BiSearch className='w-full h-full' />
            </div>
        </div>
    )

}
const NavMd = () => {
    return (
        <div className='w-full flex items-center gap-3 bg-white px-2 py-1 rounded-sm'>
            <BiSearch />
            <input type="search" className='w-full bg-transparent border-none focus:outline-none ' placeholder='Search for Movies,Events,Plays,Sports and Activities' />
        </div>
    )

}
const NavLg = () => {
    return (
        <div className='container mx-auto px-4 py-1 flex items-center justify-between'>
            <div className='flex items-center gap-3 w-3/5'>
                <div className='w-25 h-10'>
                    <img src={logo} alt="logo" className='w-full h-full' />
                </div>
                <div className='w-4/5 flex items-center gap-3 bg-white px-2 py-2 rounded-md'>
                    <BiSearch className='text-bmsprimary' />
                    <input type="search" className='w-full bg-transparent border-none focus:outline-none text-sm' placeholder='Search for Movies,Events,Plays,Sports and Activities' />
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <span className='text-gray-300 text-sm font-normal flex items-center gap-1 hover:text-white cursor-pointer'>Kochi <BiSolidChevronDown /> </span>
                <button className='bg-bmssecondary-300 text-white px-2 py-1 text-xs rounded'>Sign-in</button>
                <div className='w-8 h-8 text-white'>
                    <BiMenu className='w-full h-full'/>
                </div>
            </div>

        </div>

    )
}

const Navbar = () => {
    return (
        <>
            <nav className='bg-bmsprimary-700 px-4 py-2'>
                {/* for mobile */}
                <div className='md:hidden'>
                    <NavSm />
                </div>
                {/* for tab */}
                <div className='hidden md:flex lg:hidden'>
                    <NavMd />
                </div>
                {/* for pc */}
                <div className='hidden lg:block'>
                    <NavLg />
                </div>
            </nav>
        </>
    )
}

export default Navbar;
