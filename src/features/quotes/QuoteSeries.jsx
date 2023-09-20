import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectQuotesBySeries, selectError, selectStatus} from './quoteSlice'
import SingleQuote from './SingleQuote'
import Error from '../../components/Error'
import Loader from '../../components/Loader'
import { states } from '../../utils/data'

const QuoteSeries = () => {
    const {seriesId} = useParams()
    const quotes = useSelector(store=>selectQuotesBySeries(store,seriesId))
    const renderedQuotes = quotes.map((quote, index)=><SingleQuote key={`${quote.id}-${index}`} {...quote}/>)
    const status = useSelector(selectStatus)
    const error = useSelector(selectError)
    let content
    if (status === states.SUCCESSFUL ){
            content = <section className='grid-column'>
            {renderedQuotes}
        </section>
    }else if(status ===  states.FAILED){

        content = <Error error={error}/>
    }
    else{
        content = <Loader/>
    }
  return (
    <div className='container'>
        <h2>{seriesId} Quotes </h2>
        {content}
    </div>
  )
}

export default QuoteSeries