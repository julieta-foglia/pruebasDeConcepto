import React, { useState } from 'react'
import {ProgressBar} from 'react-bootstrap'
import styled from 'styled-components';
import './App.css'

import { Jutsu } from 'react-jutsu'

const Button = styled.button`
font-size: 1.5em;
margin: 1em;
padding: 0.5em 1em;
border: 2px solid rgb(39, 40, 39);
border-radius: 5px;
font-family: 'IndieFlower';
width: 20%;
height: 20%;
`;

const App = () => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return call ? (
      <>
        <section className="section-header">
            <h1 className="header">¡Bienvenidx a aula virtual!</h1>
        </section>
      <Jutsu
        roomName={room}
        userName={name}
        password={password}
        loadingComponent={<ProgressBar now={60}/>}
        containerStyles={{ width: '100%', height: '700px' }}
      />
      </>
  ) : (
    <div className="todo">
      <section className="section-header">
          <h1 className="header">AULA VIRTUAL</h1>
      </section>
      <section className="form">
        <input id='room' type='text' placeholder='Sala' value={room} onChange={(e) => setRoom(e.target.value)} />
        <input id='name' type='text' placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)} />
        <input id='password' type='text' placeholder='Password (opcional)' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleClick} type='submit'>
          Iniciar
        </Button>
      </section>
      <section className="footerSection">
        <img className="footerImage" src='https://image.flaticon.com/icons/png/128/84/84834.png'></img>
        <footer className="footer">acá va un footer</footer>
      </section>
    </div>
  )
}

export default App