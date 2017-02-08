import React, {Component, PropTypes} from 'react'
import Article from './Article'
import AccordionList from '../decorators/accordionList'

class ArticleList extends Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
    openArticleId: PropTypes.any
  }

  render() {
    const {articles, openArticleId, toggleOpenArticle} = this.props
    const articleElements = articles.map((article) => <li key={article.id}>
      <Article
        article={article}
        isOpen={article.id == openArticleId}
        toggleOpen={toggleOpenArticle(article.id)}/>
    </li>)
    return (
      <ul>
        {articleElements}
      </ul>
    )
  }
}


ArticleList.defaultProps = {
  articles: []
}


export default AccordionList(ArticleList);