import { Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { AxiosResponse, AxiosError } from "axios";
import { userTypes } from "../types/user.types";
import { createUser, deleteUser, fetchUsers, updateUser } from "../../apis/users";
import { IAppState } from "../reducers/index";
import history from "../../history";
import {
  IFetchUsersFailAction,
  IFetchUsersStartAction,
  IFetchUsersSucessAction,
  ICreateUserFailAction,
  ICreateUserSucessAction,
  ICreateUserStartAction,
  IDeleteUserFailAction,
  IDeleteUserStartAction,
  IDeleteUserSuccessAction,
  IUpdateUserStartAction,
  IUpdateUserFailAction,
  IUpdateUserSuccessAction,
  ICreatedUser,
  ISearchUser,
  IUser,
  IUpdatedUser,

} from "../types/user.interfaces"


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
      .catch((error: AxiosError) => {
        dispatch(fetchUsersFail(error.message));
      })
  }
}


// search actions
export const searchUser = (value: string): ISearchUser => ({
  type: userTypes.SEARCH_USER,
  payload: value
})

// delete actions

const deleteStart = (): IDeleteUserStartAction => ({
  type: userTypes.DELETE_USER_START,
})

const deleteSuccess = (id: string): IDeleteUserSuccessAction => ({
  type: userTypes.DELETE_USER_SUCCESS,
  payload: id
})

const deleteFail = (error: string): IDeleteUserFailAction => ({
  type: userTypes.DELETE_USER_FAIL,
  payload: error
})

export const deleteRequest = (id: string): ThunkAction<void, IAppState, null, Action<string>> => {
  return (dispatch: Dispatch) => {
    dispatch(deleteStart());
    deleteUser(id)
      .then((response: AxiosResponse) => {
        const { _id } = response.data
        dispatch(deleteSuccess(_id));
      })
      .catch((error: AxiosError) => {
        dispatch(deleteFail(error.message))
      })
  }
}


// Create action

const createStart = (): ICreateUserStartAction => ({
  type: userTypes.CREATE_USER_START,
})

const createSuccess = (user: ICreatedUser): ICreateUserSucessAction => ({
  type: userTypes.CREATE_USER_SUCCESS,
  payload: user
})

const createFail = (error: string): ICreateUserFailAction => ({
  type: userTypes.CREATE_USER_FAIL,
  payload: error
})

export const createRequest = (user: ICreatedUser): ThunkAction<void, IAppState, null, Action<string>> => {
  return (dispatch: Dispatch) => {
    dispatch(createStart());
    createUser(user)
      .then((response: AxiosResponse) => {
        const { data } = response
        dispatch(createSuccess(data[0]));
        history.push('/');

      })
      .catch((error: AxiosError) => {
        dispatch(createFail(error.message))
      })
  }
}

const updateStart = (): IUpdateUserStartAction => ({
  type: userTypes.UPDATE_USER_START,
})

const updateSuccess = (user: IUser): IUpdateUserSuccessAction => ({
  type: userTypes.UPDATE_USER_SUCCESS,
  payload: user
})

const updateFail = (error: string): IUpdateUserFailAction => ({
  type: userTypes.UPDATE_USER_FAIL,
  payload: error
})

export const updateRequest = (user: IUpdatedUser): ThunkAction<void, IAppState, null, Action<string>> => {
  return (dispatch: Dispatch) => {
    dispatch(updateStart());
    updateUser(user)
      .then((response: AxiosResponse) => {
        const { data } = response
        dispatch(updateSuccess(data));
        history.push('/');

      })
      .catch((error: AxiosError) => {
        dispatch(updateFail(error.message))
      })
  }
}







