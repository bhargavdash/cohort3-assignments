import { useState } from "react";
import startLogo from "../assets/start-logo.jpg";
import PropTypes from 'prop-types';

export const MobileMenuItem = ({hasDropdown, title}) => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="relative mt-2">
        <div className="flex items-center">
            <p className="text-lg ml-10 mr-1">{title}</p>
            {hasDropdown && <svg onClick={() => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${isOpen ? 'rotate-180' : ''} transition-all duration-500 h-6 w-6 hover:cursor-pointer`}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>}
        </div>
        {isOpen && title !== "What's new" && (
            <div className="absolute top-full left-0 mt-2 bg-black border border-gray-800 rounded-lg shadow-lg z-50 min-w-[300px]">
                <div className="p-4">
                    <div className="flex items-center gap-2 mb-4">
                        <img className="w-12 h-11" src={startLogo} alt="start logo" />
                        <p>Start</p>
                    </div>
                    <div className="border-l-2 border-gray-400">
                        <div className="hover:cursor-pointer mt-2 ml-4">
                            <p>Start your business</p>
                            <p className="text-sm">Build your brand</p>
                        </div>
                        <div className="hover:cursor-pointer mt-4 ml-4">
                            <p>Create your website</p>
                            <p className="text-sm">Online store editor</p>
                        </div>
                        <div className="hover:cursor-pointer mt-4 ml-4">
                            <p>Customize your store</p>
                            <p className="text-sm">Store themes</p>
                        </div>
                        <div className="hover:cursor-pointer mt-4 ml-4">
                            <p>Find business apps</p>
                            <p className="text-sm">Shopify app store</p>
                        </div>
                        <div className="hover:cursor-pointer mt-4 ml-4">
                            <p>Own your site domain</p>
                            <p className="text-sm">Domains & hosting</p>
                        </div>
                        <div className="hover:cursor-pointer mt-4 ml-4">
                            <p>Explore free business tools</p>
                            <p className="text-sm">Tools to run your business</p>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
}

MobileMenuItem.propTypes = {
    hasDropdown: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired
};
