import React, { Component } from 'react'

import './App.css'
import { auth } from './base'
import Main from './Main'
import SignIn from './SignIn'

class App extends Component {
  state = {
    uid: null,
  }


  componentDidMount() {
    this.setState({
      uid: (localStorage.getItem('user'))
    })
    auth.onAuthStateChanged(user => {
      if (user) {
        this.handleAuth(user)
      } else {
        this.signOut()
      }
    })
  }

  handleAuth = (user) => {
    localStorage.setItem('user', (user.uid))
    this.setState({ uid: user.uid })
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
    localStorage.setItem('user', (null))
    this.setState({ uid: null })
    auth.signOut()
    
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn()
            ? <Main signOut={this.signOut} uid={this.state.uid}/>
            : <SignIn handleAuth={this.handleAuth} />
        }
      </div>
    )
  }
}

export default App