import blueComponentImage from "../assets/blue-component-image.png";

export const BlueSection = () => {
    return <>
        <div className="ml-1">
            <h1 className="text-5xl mb-7">Apps for anything else</h1>
            <p className="text-gray-300 text-lg sm:w-[60%] w-[90%]">Shopify offers all the essentials out of the box, but if your business calls for something extra you have the <u>Shopify App Store</u>&mdash;with 13,000+ commerce apps for whatever specialized features you might need.</p>
        </div>
        <div className="flex justify-center mt-10">
            <img className="rounded-2xl w-[100%]" src={blueComponentImage} alt="blue-component-image" />
        </div>
        <div className="ml-1 mt-10">
            <h1 className="text-5xl mb-7">By developers, for developers</h1>
            <p className="text-gray-300 text-lg sm:w-[60%] w-[90%]"><u>APIs, primitives, and tools empower devs and <u>partners</u> to build the apps, themes, and custom storefronts businesses are looking for.</u></p>
        </div>
    </>
}
