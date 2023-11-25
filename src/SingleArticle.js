import { useParams } from 'react-router-dom';
import mockData from './mockData';
import './SingleArticle.css';

function SingleArticle() {
  let { id } = useParams();
  const articleIndex = parseInt(id, 10);
  const article = mockData.articles[articleIndex];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <article>
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.publishedAt}</p>
      <p>{article.content}</p>
      <p>Source: {article.source.name}</p>
    </article>
  );
}

export default SingleArticle;