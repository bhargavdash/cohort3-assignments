export default function Card({image, hoverImage, title, description}) {

    return <>
        <div>
            <div className='relative'>
                <img className={`hover:opacity-0 transition-all duration-500 w-96 h-80`} src={image}></img>
                <img className={`absolute top-0 left-0 hover:opacity-100 opacity-0 object-cover transition-all duration-500 w-96 h-80`} src={hoverImage}></img>
            </div>
            <div className='ml-2'>
                <h1 className='text-xl mb-2 mt-1'>{title}</h1>
                <div className='text-gray-400'>{description}</div>
            </div>
        </div>
    </>
}
