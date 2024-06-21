import React from 'react'
import NewsCard from './NewsCard'

const NewsContent = ({newsArray, newsResults, loadMore, setLoadMore}) => {
  return (
    <div className=' grid  grid-cols-4 gap-10 mt-10 row-auto'>
      {newsArray.map((newsItem)=>(
            <NewsCard
                newsItem={newsItem}
                key={newsItem.title}
            />
        ))}
    </div>
  )
}

export default NewsContent