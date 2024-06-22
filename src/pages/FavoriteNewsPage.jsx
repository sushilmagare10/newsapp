import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFavorite } from '../store/AddToFavSlice'

const FavoriteNewsPage = () => {
  const favorites = useSelector((state) => state.favorites.items)
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col justify-center max-w-7xl items-center p-4'>
      <h1 className='text-3xl font-bold mb-4'>Favorite News</h1>
      {favorites.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
          {favorites.map((newsItem, index) => (
            <div
              key={index}
              className='flex flex-col bg-neutral-50 justify-center items-center p-3 border border-black/20 rounded shadow-lg h-96 w-full cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105'
            >
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
              <h2 className='text-xl text-left font-semibold leading-tight mb-2'>
                {newsItem.title ? newsItem.title.slice(0, 40) + '...' : 'No title available'}
              </h2>
              <p className='text-sm text-left'>
                {newsItem.description ? newsItem.description.slice(0, 60) + '...' : 'No description available'}
              </p>
              <button
                className='mt-2 text-red-500 underline'
                onClick={() => dispatch(removeFavorite(newsItem.id))}
              >
                Remove from favorites
              </button>
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
