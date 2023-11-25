import React from 'react';
import Article from './Article';
import './AllArticles.css';
import { Link } from 'react-router-dom';

const ArticleList = ({ articles }) => {
  return (
    <div className="ArticleList">
      {articles.map((article, index) => (
        <Link to={`/articles/${index}`} key={index} className="ArticleList-item">
          <Article article={article} />
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;