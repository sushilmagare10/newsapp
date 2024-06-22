import React from 'react'
import { useParams } from 'react-router-dom'

const SingleNewsPage = () => {
  const { id } = useParams()
  const newsItem = JSON.parse(localStorage.getItem('newsItem'))

  return (
    <div className='flex flex-col mt-10 justify-center items-center p-4'>
      {newsItem ? (
        <>
          <h1 className='text-3xl font-bold mb-4 text-center'>
            {newsItem.title ? newsItem.title : 'No title available'}
          </h1>
          {newsItem.urlToImage ? (
            <img
              src={newsItem.urlToImage}
              alt={newsItem.title || 'News Image'}
              className="w-full max-w-3xl mb-4 rounded"
            />
          ) : (
            <div className='w-full max-w-7xl mb-4 h-[45vh] bg-gray-200 flex justify-center items-center rounded'>
              <span className='text-gray-500'>No Image Available</span>
            </div>
          )}
          <p className='text-lg mb-4 text-center'>
            {newsItem.content ? newsItem.content : 'No content available'}
          </p>
          {newsItem.url && (
            <a href={newsItem.url} target="_blank" rel="noopener noreferrer" className="text-teal-500 underline">
              Read more
            </a>
          )}
        </>
      ) : (
        <p>News article not found.</p>
      )}
    </div>
  )
}

export default SingleNewsPage
