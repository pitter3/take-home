import React from 'react';
import './Article.css';

const Article = ({ article }) => {
  return (
    <div className="article">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
    </div>
  );
};

export default Article;