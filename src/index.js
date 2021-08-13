import React, { createContext } from "react"
import ReactDOM from "react-dom"
import App from "./App"
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

firebase.initializeApp({
  apiKey: "AIzaSyANs7sxdOLaw-nxuB75SaxymumYI8ZFzvM",
  authDomain: "reactchat-6f2ee.firebaseapp.com",
  projectId: "reactchat-6f2ee",
  storageBucket: "reactchat-6f2ee.appspot.com",
  messagingSenderId: "183819522684",
  appId: "1:183819522684:web:e86763fe207358f56feff9",
  measurementId: "G-ETHGFZ2KTV",
})

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
)
