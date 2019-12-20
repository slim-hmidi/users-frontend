import axios, { AxiosPromise } from "axios";

export const fetchUsers = (): AxiosPromise => axios({
  method: 'GET',
  url: 'users'
})

export const search = (value: string): AxiosPromise => axios({
  method: 'GET',
  url: `/search?filter=${value}`
})