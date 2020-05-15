import React from 'react';
import { Link } from "@reach/router"

function Header() {
  return (
    <>
      <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="./clipart3376383.png" width="30" height="30" />
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          
          <div class="navbar-start">
            <div class="navbar-item">
            <Link to="/">Home</Link>
            </div>

            <div class="navbar-item">
              <Link to="/videollamada">Videollamada</Link>
            </div>

            <div class="navbar-item">
             <Link to="/videollamada">Chat</Link>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Creá tu cuenta</strong>
                </a>
                <a class="button is-light">
                  Ingresá a tu cuenta
                </a>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </>
  )
}

export default Header;