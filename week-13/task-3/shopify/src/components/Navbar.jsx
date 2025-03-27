import { useState } from 'react';
import logo from '../assets/logo.jpg';
import { MobileMenu } from './MobileMenu';
import { useWindowSize } from "@uidotdev/usehooks";
import { MobileMenuItem } from './MobileMenuItem';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const windowSize = useWindowSize();
  
    return <>
    <div className={`flex ${windowSize.width <= 768 ? "justify-between" : "justify-start"} p-5 bg-transparent text-white border-b-2 border-gray-800 items-center`}>
        <div className='flex items-center'>
            <img className='hover:cursor-pointer h-8 w-8' src={logo}></img>
            <p className='hover:cursor-pointer italic font-bold'>Shopify</p>
        </div>
        {windowSize.width <= 768 && <div className='flex items-center gap-4'>
            <p className='hover:cursor-pointer underline'>Start free trial</p>
            <svg onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>}
        {windowSize.width > 768 && 
        <div className='flex justify-between w-full items-center'>
            <div className='flex gap-4 items-center'>
                <MobileMenuItem title={"Solutions"} hasDropdown={true} />
                <MobileMenuItem title={"Pricing"} hasDropdown={false} />
                <MobileMenuItem title={"Resources"} hasDropdown={true} />
                <MobileMenuItem title={"Enterprise"} hasDropdown={false} />
                <MobileMenuItem title={"What's new"} hasDropdown={true} />
            </div>
            <div className='flex gap-4 ml-auto mr-3 items-center'>
                <div className='hover:cursor-pointer mr-4'>Login</div>
                <div className='bg-white text-black px-4 py-2 rounded-xl hover:cursor-pointer'>Start free trial</div>
            </div>
        </div>}
    </div>

    <div className='bg-black text-white border-b-2 border-gray-800'>
        {isMobileMenuOpen && <MobileMenu />}
    </div>
    </>
}
