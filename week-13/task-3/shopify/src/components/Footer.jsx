import footerImage2 from "../assets/footer-image-2.png"

export default function Footer() {
    return <>
    <div className="w-[90%] border-t-[1px] border-white flex flex-col sm:flex-row p-4 sm:justify-between justify-center items-center">
        <div className='flex flex-col sm:flex-row  gap-6'>
            <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <h1>India | English </h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <div className="">
                Terms of Servies
            </div>
            <div className="">
                Privacy Policy
            </div>
            <div className="">
                Sitemap
            </div>
            <div className="">
                Privacy Choices
            </div>
        </div>
        <div>
            <img className="w-42 h-10 mt-2 sm:mt-0" src={footerImage2} alt="footer-image-2" />
        </div>
    </div>
    </>
}
