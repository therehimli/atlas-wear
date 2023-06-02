import { ownerType } from './ownerType'

export interface commentType {
  _id: string
  owner: ownerType
  product: string
  content: string | number
  createdAt: string
  updatedAt: string
  __v: number
}
