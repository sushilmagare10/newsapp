import React from 'react'
import categories from '../data/categories'

const Navbar = ({setCategory}) => {
  return (
    <div className='flex w-full h-[90px] top-0 bg-white fixed px-8 justify-between items-center lg:visible  ' >
    <div className=' px-4'>
         Logo
         </div>
    <ul className='flex justify-between text-lg capitalize  '>
    {categories.map((text,index)=>( 
    <li key={index} className="mr-6 cursor-pointer font-semibold" onClick= {()=> setCategory(text)}>
      <a key={index} 
      className="text-blue-500 hover:text-blue-800"  >{text}</a>
  </li>

    
    ))}
    </ul>
    </div>
  )
}

export default Navbar