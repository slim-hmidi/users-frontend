import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { userTypes, IUser } from "../types/user.types";
import { fetchUsers } from "../../apis/users";
import { IAppState } from "../reducers/index";
import { AxiosResponse } from "axios";

// fetch interfaces

export interface IFetchUsersStartAction {
  type: userTypes.FETCH_USERS_START
}

export interface IFetchUsersSucessAction {
  type: userTypes.FETCH_USERS_SUCCESS,
  payload: IUser[]
}

export interface IFetchUsersFailAction {
  type: userTypes.FETCH_USERS_FAIL,
  payload: string
}

// search interfaces

export interface ISearchUser {
  type: userTypes.SEARCH_USER,
  payload: string
}


// fetch actions
const startFetchUsers = (): IFetchUsersStartAction => ({
  type: userTypes.FETCH_USERS_START
})

const fetchUsersSuccess = (users: IUser[]): IFetchUsersSucessAction => ({
  type: userTypes.FETCH_USERS_SUCCESS,
  payload: users
})


const fetchUsersFail = (error: string): IFetchUsersFailAction => ({
  type: userTypes.FETCH_USERS_FAIL,
  payload: error
})

export const fetchUsersRequest = (): ThunkAction<void, IAppState, null, Action<string>> => {
  return (dispatch: Dispatch) => {
    dispatch(startFetchUsers());
    fetchUsers()
      .then((response: AxiosResponse) => {
        const { data } = response;
        dispatch(fetchUsersSuccess(data));
      })
      .catch(error => {
        dispatch(fetchUsersFail(error));
      })
  }
}


// search actions
export const searchUser = (value: string): ISearchUser => ({
  type: userTypes.SEARCH_USER,
  payload: value
})
