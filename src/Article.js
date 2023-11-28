import React from 'react';
import './Article.css';

const Article = ({ article }) => {
  return (
    <div className="article">
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <p>{article.publishedAt}</p>
      <img src={article.urlToImage} alt="Article Image" style={{ width: "480px", height: "270px" }}/>
    </div>
  );
};

export default Article;