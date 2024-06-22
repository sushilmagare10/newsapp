import React from 'react'
import NewsCard from './NewsCard'

const NewsContent = ({ newsArray, newsResults, loadMore, setLoadMore }) => {
  return (
    <div className='p-4 mt-10'>
      <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
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
