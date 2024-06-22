import React from 'react'
import { categories, countries } from '../data/data'

const Navbar = ({ setCategory, setCountry, category }) => {
  return (
    <div className='flex flex-col md:flex-row w-full bg-white justify-between items-center p-4 shadow-md'>
      <div className='flex justify-center items-center mb-4 md:mb-0 text-lg capitalize'>
        <span className="mr-6 cursor-pointer">
          <select 
            onChange={(e) => setCountry(e.target.value)} 
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            {countries.map((country, index) => (
              <option key={index} value={country.code}>{country.name}</option>
            ))}
          </select>
        </span>
      </div>
      <div className='flex justify-center items-center gap-4 flex-wrap'>
        {categories.map((text, index) => (
          <span
            key={index}
            className={`group capitalize cursor-pointer mt-2 px-5 py-2 border rounded-full font-semibold transition duration-300 ease-in-out 
              ${category === text ? 'bg-teal-500 text-white' : 'border-gray-300 hover:bg-teal-500 hover:text-white'}`}
            onClick={() => setCategory(text)}
          >
            <a className="block">{text}</a>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Navbar
