import React, {useState} from 'react'
import { Navigate, useParams, Link, useNavigate } from 'react-router-dom'
import { selectQuotesBySeriesId} from '../quotes/quoteSlice'
import { useSelector,useDispatch } from 'react-redux'
import AllColors from './AllColors'
import ImageCreated from '../images/ImageCreated'
import { getImage } from '../images/imageSlice'

const ImageCreator = () => {
    const {seriesId, quoteId} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const quote = useSelector((store)=>selectQuotesBySeriesId(store, seriesId, Number(quoteId)))
    const [display, setDisplay] = useState(false)
    const [color,setColor] = useState(" ")

    const handleColor = (e)=>{
        e.preventDefault()
        setColor(e.target.value)
    }
    const handleClick = ()=>{
        if(color){
            dispatch(getImage({seriesId,quoteId,colorId:color}))
            setDisplay(true)
        }
    }
    if(!quote){
        return <Navigate to="/"/>
    }
    return (
    <section className='container'>
        <div className='w-full flex justify-between items-center'>
            <h2 className='title-container'>generate Image</h2>
            <button className='bg-black text-white' onClick={() => navigate(-1)}>go back</button>
        </div>
        <form className='container max-w-[500px]'>
        {display && <ImageCreated colorId={color} quoteId={quoteId} seriesId={seriesId}/>}
            <div className='div-form'>
                <p className='all-inputs input-form'>{quote.quote}</p>
            </div>
            <AllColors color={color} handleColor={handleColor}/>
            <div className='div-form flex'>
                <button type="button" className='capitalize all-inputs input-submit' onClick={handleClick}>generate</button>
            </div>
        </form>
    </section>
  )
}

export default ImageCreator