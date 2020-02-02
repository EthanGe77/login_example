import { shallow, mount, render } from "enzyme"
import React from "react"
import { act } from "react-dom/test-utils"
import { createStore } from "redux"
import { Provider } from "react-redux"

import LoginModule, { useForm } from "./LoginModule"
import rootReducer from "../reducers/index"

const HookWrapper = props => {
  const hook = props.hook ? props.hook(props.init) : undefined
  return <div hook={hook} />
}

describe("useForm Hook", () => {
  let hook
  beforeEach(() => {
    const wrapper = mount(<HookWrapper hook={useForm} init="hello" />)
    hook = wrapper.find("div").props().hook
  })

  it("should store initial state", () => {
    console.log(hook)
    expect(hook.value).toEqual("hello")
  })

  // it("should show changed state", () => {
  //   const testEvt = { target: { value: "after change" } }
  //   act(() => {
  //     hook.onChange(testEvt)
  //   })
  //   expect(hook.value).toEqual("")
  // })
})

describe("< LoginModule />", () => {
  let getWrapper

  beforeEach(() => {
    const mockStore = createStore(rootReducer, { login: { isLogin: false } })
    getWrapper = () =>
      mount(
        <Provider store={mockStore}>
          <LoginModule />
        </Provider>
      )
  })

  it("should render username input field", () => {
    const wrapper = getWrapper()
    expect(wrapper.find("input[type='text']").length).toEqual(1)
  })

  it("should render with simulate input", () => {
    // const wrapper = mount(<LoginModule />)
    const wrapper = getWrapper()
    const input = wrapper.find("input[type='text']")
    expect(input.instance().value).toEqual("hello")
    input.simulate("change", { target: { value: "nope!" } })
    expect(input.instance().value).toEqual("nope!")
  })

  it("should render password input field", () => {
    const wrapper = getWrapper()
    expect(wrapper.find("input[type='password']").length).toEqual(1)
  })

  it("should render correct text", () => {
    // expect(wrapper.text()).toEqual("You've Successfully Loged In. Congrats!")
  })
})
