import { productInstance } from '.'

export async function getProductsHandler() {
  const { data } = await productInstance.get(`/products`)
  return data
}

export async function getProductHandler(id: string) {
  const { data } = await productInstance.get(`/products/${id}`)
  return data
}
