import Image from "next/image";

const HotelCard = ({name, image, location, rating, price})=>{
    return(
        <div className="flex flex-col bg-white md:flex-row">
            <div className="relative">
                <Image src={image.src} alt={image.alt} width={494} height={277}/>
            </div>
            <div className="flex flex-col p-2">
                <h1 className="text-lg font-semibold">{name}</h1>
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
    );
}

export default HotelCard;