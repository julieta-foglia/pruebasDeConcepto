import React from 'react';
import '../App.css';
import Header from './Header'
import Footer from './Footer'

const containerStyle = {
  height: '85vh',
  display: 'flex',
};

const notificationStyle = {
  margin: 'auto',
  width: '100%',
  height: '70%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '3em',
};




function Home() {
  return (
    <>
    <Header/>
    <div class="container" style={ containerStyle }>
      <div class="notification" style={ notificationStyle }>
        ¡Bienvenidx a Aula Virtual!
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home;