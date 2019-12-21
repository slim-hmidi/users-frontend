import axios, { AxiosPromise } from "axios";

export const fetchUsers = (): AxiosPromise => axios({
  method: 'GET',
  url: 'users'
})