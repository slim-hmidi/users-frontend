import {
  IFetchUsersSucessAction,
  IFetchUsersFailAction,
  ISearchUser,
} from "../actions/user";

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

export enum userTypes {
  FETCH_USERS_START = "FETCH_USERS_START",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAIL = "FETCH_USERS_FAIL",
  SEARCH_USER = "SEARCH_USER",
}

export type userAction = IFetchUsersSucessAction |
  IFetchUsersFailAction |
  ISearchUser