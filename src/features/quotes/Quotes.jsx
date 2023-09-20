import React from 'react'
import { useSelector} from 'react-redux'
import { selectAllQuotes, selectError, selectStatus } from './quoteSlice'
import { states } from '../../utils/data'
import Loader from '../../components/Loader'
import SingleQuote from './SingleQuote'
import Error from '../../components/Error'

const Quotes = () => {
    const quotes = useSelector(selectAllQuotes)
    const status = useSelector(selectStatus)
    const error = useSelector(selectError)


    const renderedQuotes = quotes.slice(0,10).map((quote, index)=><SingleQuote key={`${quote.id}-${index}`} {...quote}/>)

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
    <div className='container w-full'>
        <h2>quotes</h2>
        {content}
    </div>
  )
}

export default Quotes