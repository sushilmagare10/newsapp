import React from 'react'
import NewsCard from './NewsCard'

const NewsContent = ({ newsArray, newsResults, loadMore, setLoadMore }) => {
  return (
    <div className='p-4'>
      <div className='grid grid-cols-3 gap-4'>
        {newsArray.map((newsItem, index) => (
          <NewsCard key={index} newsItem={newsItem} index={index} />
        ))}
      </div>
      {newsResults > loadMore && (
        <button onClick={() => setLoadMore(loadMore + 10)} className='mt-4 p-2 bg-teal-500 text-white rounded'>
          Load More
        </button>
      )}
    </div>
  )
}

export default NewsContent
