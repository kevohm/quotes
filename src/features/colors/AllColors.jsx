import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getColors, selectAllColors,selectError,selectStatus } from './colorsSlice'
import { states } from '../../utils/data'
import Loader from "../../components/Loader"

const AllColors = ({handleColor, color}) => {
    const dispatch = useDispatch()

    console.log(color)
    const status = useSelector(selectStatus)
    const error = useSelector(selectError)
    const colors = useSelector(selectAllColors)
    const renderedColors = colors.map((color)=><option style={{"background":color}} value={color} key={color}>{color}</option>)

    useEffect(()=>{
        dispatch(getColors())
    }, [dispatch,getColors])

    let content
    if(status === states.SUCCESSFUL){
        content = <>
        <select className={`all-inputs input-form capitalize `} onChange={(e)=>handleColor(e)}>
            <option value={color} disabled={true} >select background color</option>
            {renderedColors}
        </select>
        </> 
            
    }else if (status === states.FAILED){
        content = <Error error={error}/>
    }else{
        content = <Loader/>
    }

  return ( 
    <div className='div-form' >
        {content}
    </div>
  )
}

export default AllColors