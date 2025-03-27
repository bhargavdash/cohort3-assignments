import { useState, useEffect } from "react";
import gridItem1 from "../assets/grid-item-1.jpg";
import gridItem2 from "../assets/grid-item-2.jpg";
import gridItem3 from "../assets/grid-item-3.jpg";
import gridItem1Hover from "../assets/grid-item-1-hover.png";
import gridItem2Hover from "../assets/grid-item-2-hover.png";
import gridItem3Hover from "../assets/grid-item-3-hover.png";
import Card from "./Card";
import cardImage1 from "../assets/card-image-1.png";
import cardImage2 from "../assets/card-image-2.png";
import cardImage3 from "../assets/card-image-3.png";
import cardImage1Hover from "../assets/card-image-1-hover.png";
import cardImage2Hover from "../assets/card-image-2-hover.png";
import cardImage3Hover from "../assets/card-image-3-hover.png"; 
import { BlueSection } from "./BlueSection";
import { GreenComponent } from "./GreenComponent";
import { BlackComponent } from "./BlackComponent";
import Footer from "./Footer";


export const MiddleSection = () => {
    const [index, setIndex] = useState(0);
    useEffect(()=> {
        const interval = setInterval(()=>{
            setIndex((prevIndex)=> (prevIndex + 1) % 4);
        }, 2000);
        return ()=> clearInterval(interval);
    }, []);

    console.log(index);
    return <>
    <div className="bg-black rounded-3xl flex flex-col items-center justify-center p-10">
        <div className="w-[90%] ">
            <h1 className="text-4xl sm:text-6xl mt-10">The one commerce platform behind it all
            </h1>
        </div>
        <div className="w-[90%] mt-10 ml-0 flex flex-wrap gap-1">
            <p className={`hover:text-cyan-400 hover:cursor-pointer text-2xl ${index === 0 ? 'text-white' : 'text-gray-400'}`}>Sell online and in person.</p>
            <p className={`hover:text-cyan-400 hover:cursor-pointer text-2xl ${index === 1 ? 'text-white' : 'text-gray-400'}`}>Sell locally and globally.</p>
            <p className={`hover:text-cyan-400 hover:cursor-pointer text-2xl ${index === 2 ? 'text-white' : 'text-gray-400'}`}>Sell direct and wholesale.</p>
            <p className={`hover:text-cyan-400 hover:cursor-pointer text-2xl ${index === 3 ? 'text-white' : 'text-gray-400'}`}>Sell on desktop and mobile.</p>
        </div>
        <div className="mt-10 w-[90%] grid grid-cols-5 gap-3">
            <div className="col-span-1 relative">
                <img className="hover:cursor-pointer opacity-100 hover:opacity-50 transition-opacity duration-300" src={gridItem1}></img>
                <img className="hover:cursor-pointer absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" src={gridItem1Hover}></img>
            </div>
            <div className="col-span-2 relative">
                <img className="hover:cursor-pointer opacity-100 hover:opacity-50 transition-opacity duration-300" src={gridItem2}></img>
                <img className="hover:cursor-pointer absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" src={gridItem2Hover}></img>
            </div>
            <div className="col-span-2 relative">
                <img className="hover:cursor-pointer opacity-100 hover:opacity-50 transition-opacity duration-300" src={gridItem3}></img>
                <img className="hover:cursor-pointer absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" src={gridItem3Hover}></img>
            </div>
        </div>
        <div className="sm:flex w-[90%] mt-10">
            <h1 className="text-5xl mt-2">For everyone from entrepreneurs to enterprise</h1>
            <p className="text-gray-400 sm:mt-20 mt-6">Millions of merchants of every size have collectively made over $1,000,000,000,000 in sales on Shopify.</p>
        </div>
    </div>
    <div className="w-[85%] grid grid-cols-3 ml-20 gap-4">
        <div className="sm:col-span-1 col-span-3">
            <Card 
            image={cardImage1} 
            hoverImage={cardImage1Hover}
            title={"Get started fast"}
            description={<p>Solo seller Megan Bre Camp started <b>Summer Solace Tallow</b> to sell here organic candles and skincare online and at local farmers markets.</p>} />
        </div>
        <div className="sm:col-span-1 col-span-3">
            <Card image={cardImage2} 
            hoverImage={cardImage2Hover}
            title={"Grow as big as you want"} 
            description={<p>Athleisure brand <b>Gymshark</b> grew from working out of a garage to the global juggernaut it is today, with $500M+ sales annually.</p>} />
        </div>
        <div className="sm:col-span-1 col-span-3">
            <Card image={cardImage3} 
            hoverImage={cardImage3Hover}
            title={"Raise the bar"} 
            description={<p>With the help of Shopify for enterprise, <b>Mattel</b> sells their iconic toys direct to customers around the world.</p>} />
        </div>  
    </div>
    <div className="flex justify-center items-center gap-2 mt-4">
        <div className="rounded-full w-4 h-4 bg-white"></div>
        <div className="rounded-full w-4 h-4 bg-gray-700 border-2 border-white"></div>
        <div className="rounded-full w-4 h-4 bg-gray-700 border-2 border-white"></div>
    </div>
    <div className="w-[90%] flex justify-center mx-auto mt-10">
        <div className="hover:cursor-pointer hover:bg-white hover:text-black flex justify-center items-center font-bold text-xl rounded-3xl w-[90%] h-12 border-2 border-white" >Pick a plan that fits</div>
    </div>
    <div className="bg-slate-900 p-20 rounded-t-3xl mt-10">
        <BlueSection />
    </div>
    <div className="bg-emerald-950 p-20 rounded-t-3xl mt-10 -translate-y-20">
        <GreenComponent />
    </div>
    <div className="bg-black p-20 rounded-t-3xl mt-10 mb-0 pb-0 -translate-y-40">
        <BlackComponent />
    </div>
    <div className="flex justify-center">
        <Footer />
    </div>
    </>
}
