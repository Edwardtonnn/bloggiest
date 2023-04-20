import React from 'react'
import NavigationalBar from '../NavigationalBar'
import {useParams} from 'react-router-dom'
import articles from './article-content';


function ArticlePage() {

    const {articleId} = useParams();
    const article = articles.find(article => article.name === articleId);
  

  return (
   <>
   <NavigationalBar/>
   <div className="container">
    <div className="row">
        <div className="col">
  <h1>{article.title}</h1>
  {article.content.map(paragraph =>(
    <p>{paragraph}</p>
  ))}


        </div>
    </div>
   </div>
   </>
  )
}

export default ArticlePage
