import { useState, useMemo } from 'react'
import Image from 'next/image'
import hotelData from '../constants/hotel-data.json'
import HotelCard from '@/components/HotelCard'
import SortButton from '@/components/SortButton'
import sortHotels from '@/utils/sortHotels'
 
export default function Home() {
  const [sortValue, setSortValue] = useState({
    sortName: 'name',
    ascending: true,
  })

  const sortedHotels = useMemo(() => sortHotels(hotelData, sortValue), [sortValue])

  return (
    <main>
      <div className='fixed w-screen h-screen -z-50'>
        <Image 
          src='/background.png' 
          alt='gradient background' 
          fill
        />
      </div>
      <div className='flex flex-col justify-center max-h-screen p-16 sm:space-x-10 sm:flex-row'>
        <div className='flex flex-col mb-5 space-y-1'>
          <SortButton 
            label='sort alphabetically'
            sortName='name'
            sortValue={sortValue}
            setSortValue={setSortValue}
          />
          <SortButton 
            label='sort by price'
            sortName='price'
            sortValue={sortValue}
            setSortValue={setSortValue}
          />
          <SortButton 
            label='sort by star rating'
            sortName='rating'
            sortValue={sortValue}
            setSortValue={setSortValue}
            startAscending={false}
          />
        </div>
       <div className='flex flex-col max-h-full space-y-5 overflow-scroll'>
          {
            sortedHotels.map((hotel)=>(
              <HotelCard key={hotel.id} {...hotel} />
            )
          )}
        </div>
      </div>
     
    </main>
  )
}
