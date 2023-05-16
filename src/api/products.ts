import { instance } from '.'

export async function getProducts() {
  return instance('/products')
}
