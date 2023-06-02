import { authInstance } from '.'

export async function addFavoriteHandler(productId: string) {
  const { data } = await authInstance.post(`/favorites`, { productId })
  return data
}

export async function getFavoritesHandler() {
  const { data } = await authInstance.get(`/favorites`)
  return data
}

export async function deleteFavoriteHandler(id: string) {
  const { data } = await authInstance.delete(`/favorites/${id}`)
  return data
}
