import React from 'react'
import NavigationalBar from '../NavigationalBar'
import articles from './article-content'
import {Link} from 'react-router-dom'

function ArticlesListPage() {
  return (
    <>
    <NavigationalBar/>
    <div className="container">
        <div className="row">
            <div className="col">              
             <h1>Articles</h1>
             {articles.map(article=>(              
                <div className="py-3 text-dark articles-container">
                  <Link  to={`/articles/${article.name}`}>
                <h3>{article.title}</h3>  </Link>
                <p>{article.content[0].substring(0, 150)}...</p>

              
                </div>
                
            
             ))}

            </div>
        </div>
    </div>
    </>
  )
}

export default ArticlesListPage
