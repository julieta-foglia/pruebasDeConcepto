import React, { useState } from 'react'
import {ProgressBar} from 'react-bootstrap'
import styled from 'styled-components';
import Header from '../components/Header'
import Footer from '../components/Footer';
import VideoCall from '../components/VideoCall';

import '../App.css'

const Input = styled.input`
margin: 0.5em 0.5em 0.5em;
padding: 1em 1em 2em;
border: 2px solid #73dabf;
border-radius: 5px;
width: 40%;
height: 5px;
`;

function VideoCallPage() {
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
      <Header text={'¡Bienvenidx a Aula Virtual!'}></Header>
      <VideoCall
        roomName={room}
        userName={name}
        password={password}
        loadingComponent={<ProgressBar striped variant="success" now={40}/>}
        containerStyles={{ width: '100%', height: '700px' }}
      />
      <Footer></Footer>
      </>
  ) : (
    <>
    <Header text={'Aula Virtual'}></Header>
      <section className="form">
        <Input id='room' type="text" placeholder="Sala" value={room} onChange={(e) => setRoom(e.target.value)}/>
        <Input id='name' class="input" type='text' placeholder='Nombre' value={name} onChange={(e) => setName(e.target.value)} />
        <Input id='password' class="input" type='text' placeholder='Password (opcional)' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button class="button is-medium is-dark" onClick={handleClick} type='submit'>Iniciar</button>
      </section>
      <Footer/>
    </>
  )
}

export default VideoCallPage;