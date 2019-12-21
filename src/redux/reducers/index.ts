import { combineReducers, Reducer } from "redux"
import userReducer from "./user";
import { IUserState, userAction } from "../types/user.types";

export interface IAppState {
  user: IUserState,
}

export const reducer: Reducer<IAppState, userAction> = combineReducers<IAppState, userAction>({
  user: userReducer
})