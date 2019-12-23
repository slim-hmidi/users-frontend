import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form";
import userReducer from "./user";



export const reducer = combineReducers({
  user: userReducer,
  form: formReducer,
})

export type IAppState = ReturnType<typeof reducer>;