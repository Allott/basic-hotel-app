import { useState } from "react";
import Image from "next/image";
import cn from "classnames";

const HotelCard = ({name, image, location, rating, price, description})=>{
    const [showDescription, setShowDescription] = useState(false);
    return(
        <div className='bg-white max-w-[718px]'>
            <div className="flex flex-col md:flex-row">
                <div className="relative">
                    <Image src={image.src} alt={image.alt} width={494} height={277}/>
                    <button 
                        class={cn('absolute bottom-0 bg-white p-1 text-blue-800', {})}
                        onClick={()=>setShowDescription(!showDescription)}
                        type='button'
                    >
                        {`Read ${showDescription? 'less': 'more'} about this hotel`}
                    </button>
                </div>
                <div className="flex flex-col p-2">
                    <h1 className="text-lg font-semibold text-blue-800">{name}</h1>
                    <span className="mb-2 font-light">{location}</span>
                    <div>
                        {[...Array(rating)].map((e, i) => <span key={i}>⭐</span>)}
                    </div>
                    {/* not hooked up, missing type */}
                    <button className="px-2 py-1 mt-2 mt-6 text-blue-800 bg-yellow-300 rounded-md w-52">
                        <span className="text-sm">Book Now</span>
                        <br/>
                        <span className="text-lg">£{price}</span>
                    </button>
                </div>
            </div>
            {showDescription && (
                <div className="m-4">
                    <h1 className="text-lg font-semibold text-blue-800">Overview</h1>
                    <p className="mb-2 font-light">{description}</p>
                </div>
            )}
        </div>
    );
}

export default HotelCard;