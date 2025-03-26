import { useState } from 'react';
import logo from '../assets/main-logo.jpg'
import middleImage from '../assets/middle-image.jpg'

export const Header = () => {
    const [open, setOpen] = useState(false);
    
    return <>
    <div className="h-auto pt-2 pl-2">
        <div className="flex">
            <div className={`${open ? "w-46" : "w-0"} transition-all duration-500 rounded-xl bg-black `}>
                <svg xmlns="http://www.w3.org/2000/svg" className="transition-all duration-200 hover:bg-gray-500 hover:rounded cursor-pointer fixed size-6 left-3 top-3" onClick={() => setOpen(!open)} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
                <div className={`pl-2 mt-6 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"} flex flex-col`}>
                    <div className='mr-4 text-gray-400 mt-2 text-sm'>FEATURES</div>
                    <div className='mr-4 text-gray-400 mt-2 text-sm'>DOWNLOAD</div>
                    <div className='mr-4 text-gray-400 mt-2 text-sm'>FAQ</div>
                    <div 
                    className='transition-all duration-500 flex 
                    justify-center items-center h-10 w-18 mt-2 
                     text-white bg-fuchsia-300 hover:bg-fuchsia-500 
                     hover:p-4 rounded-xl'>
                        LOGIN
                        </div>
                 </div>
                </div>
            <div className="flex flex-col flex-1">
                    <div className='flex mx-auto'>
                        <img src={logo} className='w-4 h-6 mr-2'></img>
                        <p className='font-bold'>BOOKMARK</p>
                    </div>

                    <div className='mt-6 mx-auto'>
                        <img src={middleImage} className='rounded'></img>
                    </div>

                    <div className='mt-6 mx-auto'>
                        <h1 className='text-2xl mt-4 font-bold'>A simple bookmark manager app</h1>
                    </div>

                    <div className='mt-6 mx-auto text-center'>
                        <p className='text-gray-400 w-96'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
                    </div>
                    <div className='mt-6 mx-auto flex'>
                        <div className='hover:p-3 hover:cursor-pointer hover:bg-blue-800 transition-all duration-500 p-2 border-2 border-none bg-blue-500 mr-2 rounded font-bold text-sm h-auto w-36 text-center'>Get It On Chrome</div>
                        <div className='hover:p-3 hover:cursor-pointer hover:bg-gray-800 transition-all duration-500 p-2 border-2 border-none bg-gray-500 mr-2 rounded font-bold text-sm h-auto w-36 text-center'>Get It On Firefox</div>
                    </div>
                    <div className='mt-6 mx-auto'>
                        <h1 className='text-3xl mt-4 font-bold '>Features</h1>
                    </div>
                    <div className='mt-6 mx-auto'>
                        <p className='text-gray-400 w-96'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                    </div>
                    <div className='mt-6 mx-auto'>
                        <h1 className='text-2xl mt-4 font-bold '>Frequently asked Questions</h1>
                    </div>
                    <div className='mt-6 mx-auto'>
                        <h4 className='w-90'>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</h4>
                    </div>
                    <div className='mt-6 mx-auto'>
                        <Accordion.Root type="single" collapsible className="w-[300px] rounded-md shadow-[0_2px_10px)] shadow-black/5">
                            <Accordion.Item value="item-1" className="border-b border-gray-200">
                                <Accordion.Header className="flex">
                                    <Accordion.Trigger className="flex justify-between w-full py-4 text-left font-medium hover:text-blue-500">
                                        What is Bookmark?
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className="overflow-hidden text-gray-500">
                                    <div className="py-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                                    </div>
                                </Accordion.Content>
                            </Accordion.Item>
                            <Accordion.Item value="item-2" className="border-b border-gray-200">
                                <Accordion.Header className="flex">
                                    <Accordion.Trigger className="flex justify-between w-full py-4 text-left font-medium hover:text-blue-500">
                                        How can i request a new browser?
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className="overflow-hidden text-gray-500">
                                    <div className="py-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                                    </div>
                                </Accordion.Content>
                            </Accordion.Item>

                        </Accordion.Root>
                    </div>
            </div>
        </div>
    </div>
    </>
}