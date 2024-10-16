import React from 'react'
import Header from '../header/index'
import Footer from '../footer/index'
import '../../index.css'
const DefaultComponent = ({children}) => {
  return (
    <div>
      <Header/>
      <main  >
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default DefaultComponent
