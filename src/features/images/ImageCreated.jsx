import React from 'react'
import {  useSelector } from 'react-redux'
import { selectError, selectImage, selectStatus } from './imageSlice'
import { states } from '../../utils/data'
import Loader from '../../components/Loader'
import Error from '../../components/Error'

const ImageCreated = ({colorId, quoteId, seriesId}) => {

    const image = useSelector(selectImage)
    const error = useSelector(selectError)
    const status = useSelector(selectStatus)

    let content
    if(status === states.SUCCESSFUL){
        content = <img className='rounded-lg' src={image} alt="generated quote image"/>
    }else if(status === states.FAILED){
        content = <Error error={error}/>
    }else{
        content = <Loader/>
    }
  return (
    <section className='container max-w-[500px]'>
        {content}
    </section>
  )
}

export default ImageCreated