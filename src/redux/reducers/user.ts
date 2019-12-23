import { userTypes, userAction, IUserState } from "../types/user.types";

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
        users: state.users.concat(action.payload)
      }
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
    default:
      return state;

  }
}

export default userReducer