import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import NewsContent from './components/NewsContent';
import axios from 'axios';

function App() {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us"); // Default country is US
  const [language, setLanguage] = useState("en"); // Default language is English
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(10);
  
  const newsApi = async () => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines`, {
        params: {
          country: country,
          category: category,
          pageSize: loadMore,
          language: language,
          apiKey: import.meta.env.VITE_NEWS_API
        }
      });
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [category, country, language, loadMore]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <Navbar setCategory={setCategory} setCountry={setCountry} setLanguage={setLanguage} />
      
      <NewsContent
        newsArray={newsArray}
        newsResults={newsResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
    </div>
  )
}

export default App
