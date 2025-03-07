import axios from 'axios';
import React, { useEffect, useState } from 'react'


export const GeneralContext = React.createContext();

const GeneralContextProvider = ({children}) => {

    const [topNews, setTopNews] = useState([])

    const [businessNews, setBusinessNews] = useState([]);
    const [technologyNews, setTechnologyNews] = useState([]);
    const [politicsNews, setPoliticsNews] = useState([]);

    useEffect(() => { 
        fetchTopNews() 
        fetchBusinessNews()
        fetchPoliticsNews()
        fetchTechnologyNews()
      }, [])
    
      const fetchTopNews = async () => {
        try {
          const response = await axios.get("https://newsapi.org/v2/everything?q=India OR Trending&language=en&apiKey=bcb72fcc0dd74e2d9adc7ce962bf0665");
          setTopNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }

      const fetchBusinessNews = async () => {
        try {
          const response = await axios.get("https://newsapi.org/v2/everything?q=business AND India&language=en&sortBy=popularity&apiKey=bcb72fcc0dd74e2d9adc7ce962bf0665");
          setBusinessNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }
      const fetchPoliticsNews = async () => {
        try {
          const response = await axios.get("https://newsapi.org/v2/everything?q=politics AND India&language=en&sortBy=popularity&apiKey=bcb72fcc0dd74e2d9adc7ce962bf0665");
          setPoliticsNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }
      const fetchTechnologyNews = async () => {
        try {
          const response = await axios.get("https://newsapi.org/v2/everything?q=technology AND India&language=en&sortBy=popularity&apiKey=bcb72fcc0dd74e2d9adc7ce962bf0665");
          setTechnologyNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }

    
  return (
    <GeneralContext.Provider value={{topNews, businessNews, technologyNews, politicsNews}} >{children}</GeneralContext.Provider>
  )
}

export default GeneralContextProvider