import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getQuote, selectQuote,selectError,selectStatus} from "../quote/quoteSlice"
import { useParams } from 'react-router-dom'
import SingleQuoteFull from './SingleQuoteFull'
import { useEffect } from 'react'
import Error from '../../components/Error'
import Loader from '../../components/Loader'
import { states } from '../../utils/data'

const QuoteSeriesId = () => {
    const {seriesId, quoteId} = useParams()
    const dispatch = useDispatch()

    const quote = useSelector(selectQuote)
    const status = useSelector(selectStatus)
    const error = useSelector(selectError)


    useEffect(()=>{
      dispatch(getQuote({seriesId, quoteId}))
    },[dispatch])
    const renderedQuotes = <SingleQuoteFull {...quote}/>
    
    let content
    if (status === states.SUCCESSFUL ){
            content = <section className='container'>
                {renderedQuotes}
            </section>
    }else if(status ===  states.FAILED){

        content = <Error error={error}/>
    }
    else{
        content = <Loader/>
    }

  return (
    <>
        {content}
    </>
  )
}

export default QuoteSeriesId