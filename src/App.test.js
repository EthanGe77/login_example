import { shallow, mount, render } from "enzyme"
import React from "react"
import App from "./App"

describe("< APP />", () => {
  let wrapper

  beforeEach(() => {
    // wrapper = shallow(<App />)
  })

  it("should work", () => {
    expect(2 + 1).toEqual(3)
  })

  // it("should render", () => {
  //   expect(wrapper.find("#testApp").length).toEqual(1)
  // })

  // it("should render Hello World", () => {
  //   expect(wrapper.text()).toEqual("Hello World")
  // })
})
