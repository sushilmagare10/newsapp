import React from 'react'
import categories, { countries, languages } from '../data/categories'

const Navbar = ({setCategory ,setCountry, setLanguage}) => {
  return (
    <div className='flex w-full bg-white justify-between items-center'>
      <ul className='flex justify-center items-center flex-wrap text-lg capitalize'>
        <li className="mr-6 cursor-pointer">
          <select onChange={(e) => setCountry(e.target.value)} className="px-3 py-2 border border-gray-300 rounded">
            {countries.map((country, index) => (
              <option key={index} value={country.code}>{country.name}</option>
            ))}
          </select>
        </li>
        <li className="mr-6 cursor-pointer">
          <select onChange={(e) => setLanguage(e.target.value)} className="px-3 py-2 border border-gray-300 rounded">
            {languages.map((language, index) => (
              <option key={index} value={language.code}>{language.name}</option>
            ))}
          </select>
        </li>
        {categories.map((text, index) => (
          <li
            key={index}
            className="group mr-6 cursor-pointer px-5 py-2 border border-black/20 rounded-full font-semibold"
            onClick={() => setCategory(text)}
          >
            <a className="group-hover:text-teal-500 block">{text}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar