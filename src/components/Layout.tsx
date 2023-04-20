import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout({children}:any) {
  return (
    <div className=' font-body text-text '>
        
      <Header/>
      {children}
      
      <Footer/>
    </div>
  )
}

export default Layout
