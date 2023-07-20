import { Disclosure } from '@headlessui/react'

import { BiChevronUp } from "react-icons/bi"

export default function EventFilter(props) {
    return (
        <div className="w-full pt-6">
            <div className="mx-auto w-full max-w-md rounded-2xl bg-white ">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={`flex w-full bg-white  px-4 py-4 text-left text-sm font-normal ${open ? "text-bmssecondary-500" : "text-bmsprimary-800"}  `}>

                                <BiChevronUp
                                    className={`${open ? 'rotate-180 transform' : ''
                                        } h-5 w-5 text-bmsprimary-500`}
                                />
                                <span className='ml-2'>{props.title}</span>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 bg-white pb-5  text-sm ">
                                <div className='flex flex-wrap gap-2 px-2'>
                                    {props.tags.map((tag) => (
                                        <span className='text-bmssecondary-500 outline outline-1 outline-bmsprimary-100 py-1 px-3'>{tag}</span>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    )
}
