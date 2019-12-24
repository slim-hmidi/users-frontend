import { userTypes } from "./user.types";

export interface IUserState {
  users: IUser[];
  error: string;
  searchField: string;
}

export interface IUser {
  _id: string;
  name: string;
  address: string;
  email: string;
}

export interface ICreatedUser {
  name: string;
  address: string;
  email: string;
}

export interface IUpdatedUser {
  _id: string;
  name?: string;
  address?: string;
  email?: string;
}

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

// Create interface

export interface ICreateUserStartAction {
  type: userTypes.CREATE_USER_START
}

export interface ICreateUserSucessAction {
  type: userTypes.CREATE_USER_SUCCESS,
  payload: ICreatedUser
}

export interface ICreateUserFailAction {
  type: userTypes.CREATE_USER_FAIL,
  payload: string
}

// Delete interface

export interface IDeleteUserStartAction {
  type: userTypes.DELETE_USER_START
}

export interface IDeleteUserSuccessAction {
  type: userTypes.DELETE_USER_SUCCESS;
  payload: string
}

export interface IDeleteUserFailAction {
  type: userTypes.DELETE_USER_FAIL;
  payload: string
}

// update interfaces

export interface IUpdateUserStartAction {
  type: userTypes.UPDATE_USER_START
}

export interface IUpdateUserSuccessAction {
  type: userTypes.UPDATE_USER_SUCCESS;
  payload: IUser
}

export interface IUpdateUserFailAction {
  type: userTypes.UPDATE_USER_FAIL;
  payload: string
}
