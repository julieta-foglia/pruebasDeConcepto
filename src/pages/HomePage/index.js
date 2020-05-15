import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './home.css'

function HomePage() {
  return (
    <>
    <Header/>
    <div className="containerStyle">
      <div className="notificationStyle">
        ¡Bienvenidos a Aula Virtual!
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default HomePage;