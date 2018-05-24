import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

  const config = {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR DOMAIN",
    databaseURL: "YOUR DATABASE URL",
    projectId: "YOUR PROJECT ID",
    storageBucket: "YOUR STORAGE BUCKET",
    messagingSenderId: "YOUR MESSAGING SENDER ID"
  }
  const app = firebase.initializeApp(config)
  const db = firebase.database(app)
  
  export const githubProvider = new firebase.auth.GithubAuthProvider()
  export const googleProvider = new firebase.auth.GoogleAuthProvider()
  export const auth = app.auth()
  
  export default Rebase.createClass(db)
  