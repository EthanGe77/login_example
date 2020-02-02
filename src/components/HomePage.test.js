import { shallow, mount, render } from "enzyme"
import React from "react"
import HomePage, { welcome } from "./HomePage"

describe("< HomePage />", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<HomePage />)
  })

  it("should render", () => {
    expect(wrapper.find("div").length).toEqual(1)
  })

  it("should render correct text", () => {
    expect(wrapper.text()).toEqual(welcome)
  })
})
