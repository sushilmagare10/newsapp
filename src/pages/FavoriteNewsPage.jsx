import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFavorite } from '../store/AddToFavSlice'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const FavoriteNewsPage = () => {
  const favorites = useSelector(state => state.favorites.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRemoveFromFav = (id) => {
    dispatch(removeFavorite(id))
  }

  const handleClick = (index) => {
    const newsItem = favorites[index]
    localStorage.setItem('newsItem', JSON.stringify(newsItem))
    navigate(`/news/${index}`)
  }

  return (
    <div className='flex flex-col max-w-7xl mt-10 items-center p-4'>
      <h1 className='text-3xl font-bold mb-4'>Favorite News</h1>
      {favorites.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
          {favorites.map((newsItem, index) => (
            <div
              key={index}
              className='relative flex flex-col bg-neutral-50 justify-center items-center p-3 border border-black/20 rounded shadow-lg h-96 w-full cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105'
              onClick={() => handleClick(index)}
            >
              <div className='absolute top-2 right-2'>
                <AiFillStar
                  className='text-red-500 text-2xl cursor-pointer'
                  onClick={(e) => { e.stopPropagation(); handleRemoveFromFav(index) }}
                />
              </div>
              {newsItem.urlToImage ? (
                <div className='h-60 w-full mb-4'>
                  <img
                    src={newsItem.urlToImage}
                    alt={newsItem.title}
                    className='h-full w-full object-cover rounded'
                  />
                </div>
              ) : (
                <div className='h-60 w-full -mt-3 mb-5 bg-gray-200 flex justify-center items-center rounded'>
                  <span className='text-gray-600 font-medium'>No Image Available</span>
                </div>
              )}
              <h2 className='text-xl font-semibold mb-2'>{newsItem.title ? newsItem.title.slice(0, 40) + '...' : 'No title available'}</h2>
              <p className='text-sm mb-2'>{newsItem.description
            ? newsItem.description.slice(0, 60) + '...'
            : 'No description available'}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorite news items found.</p>
      )}
    </div>
  )
}

export default FavoriteNewsPage
