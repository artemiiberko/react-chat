import React, { useContext } from "react"
import { Context } from "././index"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import AppRouter from "./components/AppRouter"
import Loader from "./components/Loader"
import Navbar from "./components/navbar"
import { useAuthState } from "react-firebase-hooks/auth"

const App = () => {
  const { auth } = useContext(Context)
  const [, loading] = useAuthState(auth)

  if (loading) {
    return <Loader />
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
