import React, { useState } from "react"
import "./App.css"
import HomePage from "./components/HomePage"
import Notification from "./components/Notification"
import LoginModule from "./components/LoginModule"
import { useSelector } from "react-redux"

function App() {
  // const [isLogin, setIsLogin] = useState(false)
  const isLogin = useSelector(state => state.login.isLogin)
  return (
    <div className="App" id="testApp">
      {/*  */}
      {/* <Notification message="Something went wrong" /> */}
      {isLogin ? <HomePage /> : <LoginModule />}
      {/* <LoginModule /> */}
    </div>
  )
}

export default App
