import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, loginFail } from "../actionCreators/index"
import Notification from "./Notification"

export default function({ submit }) {
  const username = useForm("hello")
  const password = useForm()
  const dispatch = useDispatch()
  const errorMessage = useSelector(state => state.login.loginError)

  return (
    <div className="container">
      <h1>Please Login</h1>
      <Notification message={errorMessage} />
      <form>
        <input type="text" placeholder="Enter Username" {...username} />
        <input type="password" placeholder="Enter Password" {...password} />
        <button
          onClick={e => {
            e.preventDefault()
            console.log(
              `username: ${username.value} || password: ${password.value}`
            )
            // dispatch(login())
            dispatch(loginFail())
          }}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export const useForm = (init = "") => {
  const [value, setValue] = useState(init)
  return {
    value,
    onChange: evt => {
      setValue(evt.target.value)
    }
  }
}
