import {
  ICreateUserSucessAction,
  ICreateUserFailAction,
  IDeleteUserSuccessAction,
  IDeleteUserFailAction,
  IFetchUsersSucessAction,
  IFetchUsersFailAction,
  ISearchUser,
  IUpdateUserSuccessAction,
  IUpdateUserFailAction,
} from "./user.interfaces";

export enum userTypes {
  CREATE_USER_START = "CREATE_USER_START",
  CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS",
  CREATE_USER_FAIL = "CREATE_USER_FAIL",
  DELETE_USER_START = "DELETE_USER_START",
  DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS",
  DELETE_USER_FAIL = "DELETE_USER_FAIL",
  FETCH_USERS_START = "FETCH_USERS_START",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAIL = "FETCH_USERS_FAIL",
  SEARCH_USER = "SEARCH_USER",
  UPDATE_USER_START = "UPDATE_USER_START",
  UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS",
  UPDATE_USER_FAIL = "UPDATE_USER_FAIL"
}

export type userAction = ICreateUserSucessAction |
  ICreateUserFailAction |
  IFetchUsersSucessAction |
  IFetchUsersFailAction |
  ISearchUser |
  IDeleteUserSuccessAction |
  IDeleteUserFailAction |
  IUpdateUserSuccessAction |
  IUpdateUserFailAction 