import { shallow, mount, render } from "enzyme"
import React from "react"
import Notification from "./Notification"

describe("< Notification />", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Notification />)
  })

  it("should render", () => {
    const wrapper = shallow(<Notification message="Test Message" />)
    expect(wrapper.find("div").length).toEqual(1)
    expect(wrapper.text()).toEqual("Test Message")
  })

  it("should render null if no props", () => {
    expect(wrapper.type()).toEqual(null)
  })
})
