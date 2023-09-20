import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='w-full   bg-secondary'>
      <div className='w-full mx-auto max-w-[1440px] flex items-center justify-between p-6 md:p-12 py-4 md:py-6 '>
      <Logo/>
        <ul className='flex space-x-3'>
            <li><Link to="/">home</Link></li>
            <li><Link to="/series">series</Link></li>
            <li><Link to="/authors">authors</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header