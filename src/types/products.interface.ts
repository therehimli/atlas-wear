type Author = {
  email: string
  id: string
}

export type Product = {
  author: Author
  title: string
  createdAt?: string
  price: string
  description: string
  genre: string
  image: string
  updatedAt?: string
  _v?: number
  _id?: string
}
