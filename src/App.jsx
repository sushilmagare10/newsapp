import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import NewsContent from './components/NewsContent'
import axios from 'axios'
import SingleNewsPage from './pages/SingleNewsPage'
import FavoriteNewsPage from './pages/FavoriteNewsPage'
import Header from './components/Header'

function App() {
  const [category, setCategory] = useState("general")
  const [country, setCountry] = useState(""); 
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()
  const [loadMore, setLoadMore] = useState(10)
  const [loading, setLoading] = useState(false)

  const newsApi = async () => {
    setLoading(true)
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines/`, {
        params: {
          country: country,
          category: category,
          pageSize: loadMore,
          apiKey: import.meta.env.VITE_NEWS_API
        },
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        }
      })
      setNewsArray(news.data.articles)
      setNewsResults(news.data.totalResults)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    newsApi()
  }, [category, loadMore, country])

  return (
    <Router>
      <div className='flex flex-col justify-center items-center'>
        <Navbar  />
        <Header setCategory={setCategory} category={category} setCountry={setCountry}/>
        {loading ? (
          <div className='flex justify-center items-center h-screen'>
            <div className='spinner'></div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<NewsContent
              newsArray={newsArray}
              newsResults={newsResults}
              loadMore={loadMore}
              setLoadMore={setLoadMore}
            />} />
              <Route path="/news/:id" element={<SingleNewsPage />} />
                          <Route path="/favorites" element={<FavoriteNewsPage />} />

          </Routes>
        )}
      </div>
    </Router>
  )
}

export default App
