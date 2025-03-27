import greenComponentImage from "../assets/green-component-image.png"

export const GreenComponent = () => {
    return <>
    <div className="flex justify-center">
        <h1 className='text-5xl sm:text-6xl w-[80%] text-center'>There&apos;s no better place for you to build</h1>
    </div>
    <div className="flex flex-col sm:flex-row justify-center mt-14 gap-6">
        <div className="w-[50%]">
            <div className="w-96">
                <h1 className="mb-6 text-4xl ">The world&apos;s best-converting checkout</h1>
            </div>
            <div className="border-t border-gray-300 flex gap-8">
                <div>
                    <div className="mt-2 flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                        </svg>
                        <h1 className="text-lg text-green-500">HIGHER CONVERSIONS</h1>
                    </div>
                    <div className="mt-6 flex gap-2">
                        <h1 className="text-7xl">15</h1>
                        <h1 className="text-4xl">%</h1>
                    </div>
                </div>
                <div>
                    <div className="mt-2 flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                        <h1 className="text-lg text-green-500">HIGH INTENT SHOPPERS</h1>
                    </div>
                    <div className="mt-6 flex gap-2">
                        <h1 className="text-7xl">150M</h1>
                        <h1 className="text-5xl">+</h1>
                    </div>
                </div>
            </div>
            <div className="mt-10 border-l border-green-500 pl-6 sm:w-[80%] w-96">
                <h1><u>Shopify Checkout</u> converts 15% higher on average than other commerce platforms and exposes your brand to 150 million buy-ready shoppers.</h1>
            </div>
            <div className="mt-10 w-96">
                <p>Based on external study with a Big Three global consulting firm in April, 2023.</p>
            </div>
        </div>
        <div>
            <img className="rounded-2xl" src={greenComponentImage} alt="green-component-image" />
        </div>
    </div>
    </>
}
