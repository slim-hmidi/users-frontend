import { createSelector } from "reselect";
import { IAppState } from "../reducers/index";


const fetchedUsers = (state: IAppState) => state.user.users;

export const filteredUsers = (value: string) => createSelector(
  [fetchedUsers],
  users => value ? users.filter(user => user.name.includes(value)) : users
)

export const selectedUser = (id: string) => createSelector(
  [fetchedUsers],
  users => users.find(user => user._id === id)
)