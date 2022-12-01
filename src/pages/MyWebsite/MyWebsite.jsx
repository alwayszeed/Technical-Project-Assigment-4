import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './MyWebsite.css'

function MyWebsite() {
  return (
    <>
      <Navbar />

            <div className="description">
              <h4>Hello, my name is</h4>
              <h1>Yazid Nur Yaqin</h1>
              <h3>Welcome to My WebZeed</h3>
            </div>
         

      <Footer />
    </>

  )
}

export default MyWebsite