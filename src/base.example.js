//Copy this file to base.js and add your app details

import firebase from 'firebase/appS'
import Rebase from 're-base'
import database from 'firebase/database'

  const config = {
    apiKey: "YOUR API KEY",
    authDomain: "YOUR DOMAIN",
    databaseURL: "YOUR DATABASE URL",
    projectId: "YOUR PROJECT ID",
    storageBucket: "YOUR STORAGE BUCKET",
    messagingSenderId: "YOUR MESSAGING SENDER ID"
  }
  const app = firebase.initializeApp(config)
  const db = database(app)

  Rebase.createClass(db)