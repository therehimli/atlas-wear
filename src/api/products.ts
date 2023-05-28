import { productInstance } from '.'

export async function getProducts() {
  return productInstance.get(`/products`)
}

export async function getProduct(id: string) {
  return productInstance.get(`/products/${id}`)
}
