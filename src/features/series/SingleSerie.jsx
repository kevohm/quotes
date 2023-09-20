import React from 'react'
import { Link } from 'react-router-dom'
import { useTitle } from '../quotes/useTitle'

const SingleSerie = ({serie}) => {
  return (
    <li>
        <Link to={`/series/${serie}`}>{useTitle(serie)}</Link>
    </li>
  )
}

export default SingleSerie