import React from 'react';
import AllArticles from './AllArticles';
import SingleArticle from './SingleArticle';
import './App.css';
import mockData from './mockData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
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