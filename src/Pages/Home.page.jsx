import React,{useState,useEffect} from 'react'
import axios from "axios"
// Entertainment card slider
import EntertainmentSlider from '../components/Entertainment/EntertainmentCard';
// poster slider
import PosterSlider from '../components/PosterSlider/PosterSlider';
// hero banner
import HeroCarousel from '../components/HeroCarousel/HeroCarousel';


const Home = () => {
const [popular,setPopular] =useState([]);
const [nowplaying,setNowplaying] =useState([]);
const [toprated,setToprated] =useState([]);
const [upcoming,setUpcoming] =useState([]);

useEffect(()=>{
    const requestnowplaying = async ()=>{
        const getnowplaying = await axios.get("/movie/popular")
        setNowplaying(getnowplaying.data.results);
    }
    requestnowplaying()
},[]);

useEffect(()=>{
    const requestPopular = async ()=>{
        const getPopularMovies = await axios.get("/movie/now_playing")
        setPopular(getPopularMovies.data.results);
    }
    requestPopular()
},[]);

useEffect(()=>{
    const requesttoprated = async ()=>{
        const gettopratedMovies = await axios.get("/movie/top_rated")
        setToprated(gettopratedMovies.data.results);
    }
    requesttoprated()
},[]);

useEffect(()=>{
    const requestupcomingMovies = async ()=>{
        const getupcomingMovies = await axios.get("/movie/upcoming")
        setUpcoming(getupcomingMovies.data.results);
    }
    requestupcomingMovies()
},[])

    return (
        <>
        <HeroCarousel/>
            <div className='container my-2 sm:my-8 px-8'>

                    {/* now playing */}
            <div className='mx-auto  sm:py-6 sm:px-4 '>
                <div className='container mx-auto  sm:px-4'>
                    <PosterSlider data={nowplaying} title="Recommended Movies" subtitle="" isDark={false} />
                </div>
            </div>
            
            {/* ads */}
                <div className='hidden lg:block p-8'>
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png" alt="ads" />
                </div>

            {/* categories */}
                <div className='container mx-auto my-5 sm:py-4 sm:px-4 '>
                    <h1 className='text-xl sm:text-2xl font-bold text-bmsprimary-800 m-3'>The Best Of Live Events</h1>
                    <EntertainmentSlider />
                </div>
            </div>
            {/* premieres */}
            <div className='bg-bmsprimary-500 mx-auto  py-3 px-4 sm:py-6 sm:px-10 '>
                <div className='hidden sm:block px-3 sm:h-full sm:w-full '>
                    <img className='w-full h-full object-contain' src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" alt="premiere" />
                </div>
                <div className='container mx-auto px-4'>
                    <PosterSlider data={popular} title="premieres" subtitle="Brand new releases every Friday" isDark />
                </div>
            </div>

            {/* Events Near */}
            <div className='mx-auto py-3 px-4 sm:py-6 sm:px-10 '>
                <div className='container mx-auto  px-4'>
                    <PosterSlider data={toprated} title="Events Happening Near you" subtitle="" isDark={false} />
                </div>
            </div>
            {/* outdoor events */}
            <div className='mx-auto py-3 px-4 sm:py-6 sm:px-10 '>
                <div className='container mx-auto  px-4'>
                    <PosterSlider data={upcoming} title="Outdoor Events" subtitle="" isDark={false} />
                </div>
            </div>
        </>
    )
}

export default Home
