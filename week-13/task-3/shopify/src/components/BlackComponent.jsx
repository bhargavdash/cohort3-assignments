import blackComponentImage1 from "../assets/black-component-image-1.png"
import blackComponentImage2 from "../assets/black-component-image-2.png"
import footerImage from "../assets/footer-image.png"
import { useWindowSize } from "@uidotdev/usehooks"

export const BlackComponent = () => {
    const windowSize = useWindowSize()
    return <>
    <div className="flex justify-center">
        <h1 className="text-6xl">It's easy to start selling</h1>
    </div>
    <div className="mt-28 mb-32 flex justify-center gap-2">
        {windowSize.width > 768 && <div className="flex"> 
            <div>
                <img className="-translate-y-20" src={blackComponentImage1} alt="black-component-image-1" />
            </div>
            <div>
                <img className="rounded-2xl" src={blackComponentImage2}></img>
            </div> 
        </div>}
        <div className="ml-10">
            <div className="flex gap-6">
                <div>
                    <h1 className="sm:text-3xl text-2xl text-green-500">01</h1>
                </div>
                <div className="border-b border-gray-300">
                    <h1 className="sm:text-4xl text-3xl pb-2 ml-1">Add your first product</h1>
                </div>
            </div>
            <div className="mt-10 flex gap-6">
                <div>
                    <h1 className="sm:text-3xl text-2xl text-green-500">02</h1>
                </div>
                <div className="border-b border-gray-300">
                    <h1 className="sm:text-4xl text-3xl pb-2">Customize your store</h1>
                </div>
            </div>
            <div className="mt-10 flex gap-6">
                <div>
                    <h1 className="sm:text-3xl text-2xl text-green-500">03</h1>
                </div>
                <div className="border-b border-gray-300">
                    <h1 className="sm:text-4xl text-3xl pb-2 ml-1">Set up payments</h1>
                </div>
            </div>
            <div className="m-10 mt-20">
                <div className="sm:w-40 w-full h-16 flex justify-center items-center hover:cursor-pointer hover:bg-gray-300 hover:text-white font-bold rounded-3xl px-4 py-2 bg-white text-black">Take your shot</div>
            </div>
        </div>
    </div>
    {windowSize.width <= 768 && <div>
        <img className='w-12 h-12 mb-10' src={footerImage}></img>
        </div>}
    <div className="sm:grid sm:grid-cols-11 grid grid-cols-2 text-xl">
        {windowSize.width > 768 && <div className="sm:col-span-3">
            <img className='w-12 h-12' src={footerImage}></img>
        </div>}
        <div className="sm:col-span-2">
            <div className="font-bold mb-8">Shopify</div>
            <div className='flex flex-col gap-2'>
                <p className="hover:cursor-pointer hover:underline">About</p>
                <p className="hover:cursor-pointer hover:underline">Investors</p>
                <p className="hover:cursor-pointer hover:underline">Partners</p>
                <p className="hover:cursor-pointer hover:underline">Affiliates</p>
                <p className="hover:cursor-pointer hover:underline">Legal</p>
                <p className="hover:cursor-pointer hover:underline">Service Status</p>
            </div>
            <div className="font-bold mb-8 mt-8">Global Impact</div>
            <div className='flex flex-col gap-2'>
                <p className="hover:cursor-pointer hover:underline">Sustainability</p>
                <p className="hover:cursor-pointer hover:underline">Build Black</p>
            </div>
        </div>
        <div className="sm:col-span-2">
            <div className="font-bold mb-8">Support</div>
            <div className='flex flex-col gap-2'>
                <p className="hover:cursor-pointer hover:underline">Merchant Support</p>
                <p className="hover:cursor-pointer hover:underline">Help Center</p>
                <p className="hover:cursor-pointer hover:underline">Hire a partner</p>
                <p className="hover:cursor-pointer hover:underline">Shopify Academy</p>
                <p className="hover:cursor-pointer hover:underline">Shopify Academy</p>
            </div>
            <div className="font-bold mb-8 mt-8">Solutions</div>
            <div className='flex flex-col gap-2'>
                <p className="hover:cursor-pointer hover:underline">Online Store Builder</p>
                <p className="hover:cursor-pointer hover:underline">Website Builder</p>
                <p className="hover:cursor-pointer hover:underline">Ecommerce Website</p>
            </div>
        </div>
        <div className="sm:col-span-2">
        <div className="font-bold mb-8">Developers</div>
            <div className='flex flex-col gap-2'>
                <p>Shopify.dev</p>
                <p className="hover:cursor-pointer hover:underline">API Documentation</p>
                <p className="hover:cursor-pointer hover:underline">Dev Degree</p>
            </div>
        </div>
        <div className="sm:col-span-2 ml-4">
        <div className="font-bold mb-8">Products</div>
            <div className='flex flex-col gap-2'>
                <p>Shopify Plus</p>
                <p>Linkpop</p>
                <p>Shopify for Enterprise</p>
            </div>
        </div>
    </div>
    </>
}
