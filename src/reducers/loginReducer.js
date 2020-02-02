import { types } from "../constants"

const initState = {
  isLogin: false,
  loginError: ""
}

export default (state = initState, action) => {
  switch (action.type) {
    case types.USER_LOGIN_SUCCESS:
      return { ...state, isLogin: true }
    case types.LOGIN_ERROR:
      return { ...state, loginError: "check username/password" }
    default:
      return state
  }
}
