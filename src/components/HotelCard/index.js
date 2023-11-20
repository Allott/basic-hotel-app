import Image from "next/image";

const HotelCard = ({name, image, location, rating})=>{
    return(
        <div className="flex flex-col justify-between bg-white md:flex-row">
            <div className="relative">
                <Image src={image.src} alt={image.alt} width={494} height={277}/>
            </div>
            <div className="flex flex-col p-2">
                <h1>{name}</h1>
                <p>{location}</p>
                <p>{rating}</p>
            </div>
        </div>
    );
}

export default HotelCard;