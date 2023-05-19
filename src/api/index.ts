import axios from 'axios'

export const productInstance = axios.create({
  baseURL: 'http://localhost:4000',
})

export const authInstance = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
})
