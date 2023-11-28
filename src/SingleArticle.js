import { useParams } from 'react-router-dom';
import mockData from './mockData';
import './SingleArticle.css';

function SingleArticle({articles}) {
  let { id } = useParams();
  const articleIndex = parseInt(id, 10);
  const article = articles[articleIndex];

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <article>
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} style={{ width: "480px", height: "270px" }}/>
      <p>{article.publishedAt}</p>
      <p>{article.content}</p>
      <p>Source: {article.source.name}</p>
    </article>
  );
}

export default SingleArticle;