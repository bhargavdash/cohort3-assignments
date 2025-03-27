import { useState, useEffect } from 'react';
import backgroundVideo from '../assets/background-video.mp4'
import { Navbar } from './Navbar'
import { useWindowSize } from "@uidotdev/usehooks";

export const Header = () => {
    const tagLines = ['one to watch', 'category creator', 'unicorn startup', 'store they line up for', 'household name', 'solo flier']
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const windowSize = useWindowSize();

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Interval started")
            setIsAnimating(true);
            setTimeout(() => {
                console.log("Timeout started")
                setIndex(prevIndex => (prevIndex + 1) % tagLines.length);
                setIsAnimating(false);
            }, 2000); // Half of the transition duration
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return <>

    <Navbar />
    
    <div className='relative w-full h-[90vh]'>
        <video 
        className='absolute top-0 left-0 w-full h-full object-cover'
        autoPlay
        muted
        loop
        playsInline
        >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className='flex flex-col relative z-10'>
            <div className='pt-20 pb-20 pl-6 text-5xl'>
                <h1 className=''>Be the next</h1>
                <div className='h-[60px] overflow-hidden relative'>
                    <h1 className={`transition-all duration-1000 ${
                        isAnimating ? '-translate-y-full' : 'translate-y-0'
                    }`}>
                        {tagLines[index]}
                    </h1>
                    <h1 className={`transition-all duration-1000 ${
                        isAnimating ? 'translate-y-0' : 'translate-y-full'
                    }`}>
                        {tagLines[(index + 1) % tagLines.length]}
                    </h1>
                </div>
            </div>
            <div className='w-60 pl-8 text-l'>
                <p>Dream big, build fast, and grow far on Shopify.</p>
            </div>
            <div className='mx-auto mt-10'>
                <p>Get 3 days free then 3 months for $20/month</p>
            </div>
            <div className={`${windowSize.width <= 768 ? "flex flex-col" : "flex flex-row"}`}>
                <div className='hover:bg-gray-200 hover:cursor-pointer flex justify-center items-center mx-auto md:w-64 w-full h-12 rounded-2xl bg-white text-black '>
                    Start free trial
                </div>
                <div className='hover:bg-white hover:cursor-pointer md:mt-0 mt-2 flex justify-center items-center mx-auto md:w-64 w-full h-12 rounded-2xl bg-gray-200 text-black '>
                    Why we build Shopify
                </div>
            </div>
        </div>
    </div>
    </>
}
