import news from './News.module.css';


export const News = () => {
  return ( 
    <section className={news.wrapper}>
      <div className={news.content}>
        <h3>News</h3>
        <ul className="news list">
          <li className="news item">News-1</li>
          <li className="news item">News-2</li>
          <li className="news item">News-3</li>
          <li className="news item">News-4</li>
          <li className="news item">News-5</li>
        </ul>
      </div>
    </section>
  )
}
