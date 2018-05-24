import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn from './SignIn'
import { auth } from './base'

class App extends Component {
  state = {
    uid: null,
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.handleAuth()
      } else { 
        this.signOut()
      }
    })
  }

  handleAuth = () => {
    this.setState({uid: 'ElijahBasile' })
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
    this.setState({ uid: null })
    auth.signOut()
  }
  
  render() {
    return (
      <div className="App">
        {
          this.signedIn() 
            ? <Main signOut={this.signOut}/> 
            : <SignIn handleAuth={this.handleAuth} />
        }

      </div>
    )
  }
}

export default App
