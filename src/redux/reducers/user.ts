import { userTypes, userAction } from "../types/user.types";
import { IUserState } from "../types/user.interfaces";

const initialState: IUserState = {
  users: [],
  error: '',
  searchField: '',
}


const userReducer = (state: IUserState = initialState, action: userAction) => {
  switch (action.type) {
    case userTypes.SEARCH_USER:
      return {
        ...state,
        searchField: action.payload
      }
    case userTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      }
    case userTypes.UPDATE_USER_FAIL:
    case userTypes.DELETE_USER_FAIL:
    case userTypes.FETCH_USERS_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case userTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload)
      }
    case userTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map(user => {
          if (user._id === action.payload._id) {
            user = action.payload
          }
          return user;
        })
      }
    default:
      return state;

  }
}

export default userReducer