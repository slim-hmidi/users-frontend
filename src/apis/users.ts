import axios, { AxiosPromise } from "axios";
import { ICreatedUser } from "../redux/types/user.types";

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