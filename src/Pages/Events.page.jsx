import React from 'react'
import Poster from '../components/Poster/poster'
import EventFilter from '../components/FilteresUI/event.filteres'

const Events = () => {
    return (
        <div className='container mx-auto px-2 lg:px-4 py-4 lg:py-12' style={{backgroundColor:"#F5F5F5"}}>
            <div className='w-full lg:flex lg:flex-row-reverse mx-2 px-2'>

                <div className='lg:w-3/4'>
                    <h1 className='text-2xl font-bold p-3'>Events In Kochi</h1>
                    <div className='flex flex-wrap items-center px-3 lg:gap-4 '>
                        <div className='w-28 my-3 sm:w-48 '>
                            <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyOCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358308-xpplzlqhts-portrait.jpg" title="Sunburn Goa 2023" subtitle="Concerts ₹4000 onwards" />
                        </div>

                        <div className='w-28 sm:w-48'>
                            <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyOCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358308-xpplzlqhts-portrait.jpg" title="Sunburn Goa 2023" subtitle="Concerts ₹4000 onwards" />
                        </div>

                        <div className='w-28 sm:w-48'>
                            <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyOCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358308-xpplzlqhts-portrait.jpg" title="Sunburn Goa 2023" subtitle="Concerts ₹4000 onwards" />
                        </div>

                        <div className='w-28 sm:w-48'>
                            <Poster src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyOCBEZWM%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00358308-xpplzlqhts-portrait.jpg" title="Sunburn Goa 2023" subtitle="Concerts ₹4000 onwards" />
                        </div>
                    </div>
                </div>

                <div className='hidden lg:block w-1/3'>
                    <h1 className='text-2xl font-bold p-3'>Filteres</h1>
                    <div className='px-4' >
                        <EventFilter title="Date" tags={["Today","Tomorrow","This weekend"]} />
                        <EventFilter title="Language" tags={["English","Hindi","Malayalam"]} />
                        <EventFilter title="Categories" tags={["Online Streaming Events","Workshops","Kids"]} />
                        <EventFilter title="Price" tags={["Free","0-500","501-4000"]} />
                    </div>
                   
                </div>

            </div>
        </div>
    )
}

export default Events
