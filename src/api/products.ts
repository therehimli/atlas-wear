import { productInstance } from '.'

export async function getProductsHandler(limit: number) {
  const { data } = await productInstance.get(`/products?limit=${limit}`)
  return data
}

export async function getProductHandler(id: string) {
  const { data } = await productInstance.get(`/products/${id}`)
  return data
}

export async function getSimilarProductsHandler(category: string) {
  const { data } = await productInstance.get(`/similar-products/${category}`)
  return data
}
