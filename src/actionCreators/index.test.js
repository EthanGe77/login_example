import { login, loginFail } from "./index"
import { types } from "../constants"

describe("action creators", () => {
  it("login should return type", () => {
    expect(login()).toEqual({ type: types.USER_LOGIN_SUCCESS })
  })

  it("loginFail should return type", () => {
    expect(loginFail()).toEqual({ type: types.LOGIN_ERROR })
  })
})
