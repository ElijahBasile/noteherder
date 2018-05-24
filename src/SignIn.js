import React from 'react'

import './SignIn.css'
import googleLogo from './google.svg'
import {auth, githubProvider} from './base'

const SignIn = ({handleAuth}) => {
  const authenticate = () => {
    auth.signInWithPopup()
  }
  return (
    <div className="App">
      <div className="SignIn">
        <header className="Header">
          <img src="media/quill.svg" alt="" />
          <span className="title">Noteherder</span>
        </header>
        <main>
          <h3>Hey, Nerd! You Like Notes?</h3>
          <p>You never know when you'll need to write crap down. In fact, you should probably be taking notes right now.</p>
          <button className="github" onClick={() => authenticate(githubProvider)}>
            <i className="fab fa-github"></i>
            Sign in with GitHub
          </button>
          <button className="google">
            <img src={googleLogo} alt="" />
            Sign in with Google
          </button>
        </main>
      </div>
    </div>
  )
}

export default SignIn