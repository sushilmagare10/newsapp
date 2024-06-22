import React from 'react'
import { AiFillStar} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row w-4/6 bg-white justify-between items-center p-4'>
      <div className=' text-4xl font-bold'>
        <a href='/'>Home</a>
      </div>
      <div className=' text-4xl  font-bold'>
        <a href='/favorites' className='flex justify-center items-center'>Favorites <AiFillStar className='mt-2 text-red-500'/></a>
      </div>
    </div>
  )
}

export default Navbar
