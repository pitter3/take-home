import React from 'react';
import Article from './Article';
import './AllArticles.css';
import { Link } from 'react-router-dom';

const AllArticles = ({ articles }) => {
  return (
    <div className="AllArticles">
      {articles.map((article, index) => (
        <Link to={`/articles/${index}`} key={index} className="SingleArticle">
          <Article article={article} />
        </Link>
      ))}
    </div>
  );
};

export default AllArticles;