import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, removeFavorite } from '../store/AddToFavSlice'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const NewsCard = ({ newsItem, index }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites.items)

  const [isFavorite, setIsFavorite] = useState(favorites.some(item => item.id === index))

  const handleClick = () => {
    localStorage.setItem('newsItem', JSON.stringify(newsItem))
    navigate(`/news/${index}`)
  }

  const handleAddToFav = (e) => {
    e.stopPropagation()
    if (!isFavorite) {
      dispatch(addFavorite({ ...newsItem, id: index }))
    } else {
      dispatch(removeFavorite(index))
    }
    setIsFavorite(!isFavorite)
  }

  return (
    <div
      onClick={handleClick}
      className='relative flex flex-col bg-neutral-50 justify-center items-center p-3 border border-black/20 rounded shadow-lg h-96 w-72 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105'
    >
      {isFavorite ? (
        <div className='absolute top-2 right-2'>
          <AiFillStar className='text-red-500 text-2xl cursor-pointer' onClick={handleAddToFav} />
        </div>
      ) : (
        <div className='absolute top-2 right-2'>
          <AiOutlineStar className='text-gray-500 text-2xl cursor-pointer' onClick={handleAddToFav} />
        </div>
      )}
      <div className='flex flex-col justify-center items-center'>
        {newsItem.urlToImage ? (
          <div className='h-60 w-full mb-4'>
            <img
              src={newsItem.urlToImage}
              alt={newsItem.title || 'News Image'}
              className='h-full w-full object-cover rounded'
            />
          </div>
        ) : (
          <div className='h-60 w-full -mt-3 mb-5 bg-gray-200 flex justify-center items-center rounded'>
            <span className='text-gray-600 font-medium'>No Image Available</span>
          </div>
        )}
        <h2 className='text-xl text-left font-semibold leading-tight mb-2'>
          {newsItem.title ? newsItem.title.slice(0, 40) + '...' : 'No title available'}
        </h2>
        <p className='text-sm text-left'>
          {newsItem.description
            ? newsItem.description.slice(0, 60) + '...'
            : 'No description available'}
        </p>
      </div>
    </div>
  )
}

export default NewsCard
