import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    
  return (
    <main className='flex flex-col text-xs sm:text-sm items-center min-h-screen'>
        <Header/>
        <section className='p-6 md:p-12 h-full w-full max-w-[1440px]'>
            <Outlet/>
        </section>
    </main>
  )
}

export default Layout