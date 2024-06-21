import React from 'react'
import categories from '../data/categories'

const Navbar = ({setCategory}) => {
  return (
    <div className='flex w-full  bg-white px-8 justify-between items-center lg:visible  ' >
  
    <ul className='flex justify-between text-lg capitalize  '>
    {categories.map((text,index)=>( 
    <li key={index} className="mr-6 cursor-pointer px-4 py-2 bg-slate-200 rounded-full font-semibold" onClick= {()=> setCategory(text)}>
      <a key={index} 
      className="text-blue-500 hover:text-blue-800"  >{text}</a>
  </li>

    
    ))}
    </ul>
    </div>
  )
}

export default Navbar