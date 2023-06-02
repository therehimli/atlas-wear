import { Product } from './productTypes'

export interface FavoriteType {
  owner: string
  product: Product
  __v: number
  _id: string
  updatedAt: string
  createdAt: string
}
