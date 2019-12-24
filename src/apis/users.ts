import axios, { AxiosPromise } from "axios";
import { ICreatedUser, IUpdatedUser } from "../redux/types/user.interfaces";

export const fetchUsers = (): AxiosPromise => axios({
  method: 'GET',
  url: 'users'
})

export const deleteUser = (id: string): AxiosPromise => axios({
  method: 'DELETE',
  url: `users/${id}`
})

export const createUser = (user: ICreatedUser): AxiosPromise => {
  return axios({
    method: 'POST',
    url: 'users',
    data: {
      address: user.address,
      email: user.email,
      name: user.name
    }
  })
}

export const updateUser = (user: IUpdatedUser): AxiosPromise => {
  return axios({
    method: 'PATCH',
    url: `/users/${user._id}`,
    data: {
      address: user.address,
      email: user.email,
      name: user.name
    }
  })
}