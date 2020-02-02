import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import RootReducer from "../reducers/index"
import reduxThunk from "redux-thunk"
export const middleware = [reduxThunk]

export const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)
