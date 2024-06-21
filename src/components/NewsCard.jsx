import React from 'react'

const NewsCard = ({ newsItem }) => {
  return (
    <div className='flex flex-col bg-neutral-50 justify-center items-center p-3 border border-black/20 rounded shadow-lg h-96 w-72'>
      <div className='flex flex-col justify-center items-center'>
        {newsItem.urlToImage && (
          <div className='h-60 w-full mb-4'>
            <img
              src={newsItem.urlToImage}
              alt={newsItem.title}
              className="h-full w-full object-cover rounded"
            />
          </div>
        )}
        <h2 className='text-xl text-left font-semibold leading-tight mb-2'>{newsItem.title.slice(0,40) + '...'}</h2>
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
