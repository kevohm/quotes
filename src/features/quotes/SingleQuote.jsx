import React from 'react'
import { useNavigate } from 'react-router-dom'

const SingleQuote = ({quote,series,id}) => {
    const navigate = useNavigate()
    const handleClick = ()=>{
        navigate(`/series/${series}/${id}`)
    }

  return (
    <article className="box-shadow">
        <h3 className='text-start'>{quote}</h3>
        
        <div className='flex items-center space-x-2'>
        <div className='flex items-center space-x-2'>
            <h4>from</h4>
            <p onClick={()=>navigate(`/series/${series}`)} className='hover-clickable'>{series}</p>
        </div>
            <button onClick={handleClick}  className='hover-clickable'>View Quote</button>
        </div>
    </article>
  )
}

export default SingleQuote