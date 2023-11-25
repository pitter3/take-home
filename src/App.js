import React, { useState, useEffect } from 'react';
import AllArticles from './AllArticles';
import SingleArticle from './SingleArticle';
import './App.css';
import mockData from './mockData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getArticles } from './apiCalls';


function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  
  const fetchArticles = async () => {
    try {
      const data = await getArticles();
      setArticles(data.articles);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllArticles articles={mockData.articles} />} />
        <Route path="/articles/:id" element={<SingleArticle />} />
      </Routes>
    </Router>
  );
}

export default App;