import React from 'react'
import { AiFillStar} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex flex-row w-11/12 md:w-4/6 bg-white justify-between items-center p-4'>
      <div className='text-xl md:text-4xl font-bold'>
        <a href='/'>Home</a>
      </div>
      <div className='text-xl md:text-4xl  font-bold'>
        <a href='/favorites' className='flex justify-center items-center'>Favorites <AiFillStar className='mt-2 text-red-500'/></a>
      </div>
    </div>
  )
}

export default Navbar
