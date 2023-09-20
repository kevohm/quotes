import React from 'react'
import { useSelector } from 'react-redux'
import { selectQuoteByAuthor } from './quoteSlice'
import { useParams } from 'react-router-dom'
import SingleQuote from './SingleQuote'

const AuthorQuotes = () => {
    const {authorId} = useParams()
    const quotes = useSelector((store)=>selectQuoteByAuthor(store, authorId))
    
    const renderedQuotes = quotes.map((quote, index)=><SingleQuote key={`${quote.series}-${index}`} {...quote}/>)
  return (
    <section className='container'>
        <h2>quotes by {authorId}</h2>
        <div className='grid-column'>
            {renderedQuotes}
        </div>
    </section>
  )
}

export default AuthorQuotes