import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import NewsContent from './components/NewsContent';
import axios from 'axios';

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsresults] = useState();
  const [loadMore, setLoadMore] = useState(10);
  
  const newsApi = async () =>{
    try{
        const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_NEWS_API}&category=${category}&pageSize=${loadMore}`);
      setNewsArray(news.data.articles);
      setNewsresults(news.data.totalResults)
        console.log("API", import.meta.env.VITE_NEWS_API)

    } catch(error){
      console.log(error);
    }
  };

  useEffect(() =>{
    newsApi();
  }, [category,newsResults,loadMore]);

  return (
    <div className=' flex flex-col justify-center items-center'>
      <Navbar setCategory={setCategory} />
      
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
