import { ownerType } from './ownerType'

export type Product = {
  _id: string
  photos: string[]
  description: string
  title: string
  price: number
  category: string
  gender: string
  contactNumber: number
  contactEmail: string
  owner: ownerType
  colors: string[]
  sizes: string[]
  state: string
  viewsCount: number
  delivery: string
  city: string
  createdAt: string
  updatedAt: string
}
