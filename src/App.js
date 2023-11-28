import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllArticles from './AllArticles';
import SingleArticle from './SingleArticle';
import Header from './Header';
import { getArticles } from './apiCalls';

function App() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await getArticles(searchTerm);
        setArticles(data.articles);
      } catch (e) {
        setError(e.message);
      }
    };

    // Trigger fetchArticles when searchTerm changes
    fetchArticles();
  }, [searchTerm]);

  return (
    <Router>
      <div>
        <Header />
        <input
          style={{ marginTop: '100px'}}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for news..."
        />
        {error && <p>Error fetching: {error}</p>}
      </div>
      <Routes>
        <Route path="/" element={<AllArticles articles={articles} />} />
        <Route path="/articles/:id" element={<SingleArticle articles={articles} />} />
      </Routes>
    </Router>
  );
}

export default App;
