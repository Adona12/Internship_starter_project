import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}:any) {
  return (
    <div className=' font-body text-text mx-10'>
        
      <Header/>
      {children}
      
      <Footer/>
    </div>
  )
}

export default Layout
