import Image from 'next/image'
import hotelData from '../constants/hotel-data.json'
import HotelCard from '@/components/HotelCard'
 
export default function Home() {
  return (
    <main>
      <div className='fixed w-screen h-screen -z-50'>
        <Image 
          src='/background.png' 
          alt='gradient background' 
          fill
        />
      </div>
      <div className='flex flex-col justify-between max-h-screen p-16 md:space-x-10 md:flex-row'>
        <div className='flex flex-col'>
          <h1>
            filters
          </h1>
        </div>
       <div className='flex flex-col max-h-full space-y-5 overflow-scroll'>
          {
            hotelData.map((hotel)=>(
              <HotelCard key={hotel.id} {...hotel} />
            )
          )}
        </div>
      </div>
     
    </main>
  )
}
