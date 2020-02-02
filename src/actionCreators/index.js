import { types } from "../constants"

export const login = () => {
  return {
    type: types.USER_LOGIN_SUCCESS
  }
}

export const loginFail = () => {
  return {
    type: types.LOGIN_ERROR
  }
}
