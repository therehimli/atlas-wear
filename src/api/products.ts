import { productInstance } from '.'

export async function getProducts(category: string) {
  return productInstance(`/products?category=${category}`)
}

export async function getProduct(id: string) {
  return productInstance(`/products/${id}`)
}

export async function postPhotoLink(link: string) {
  return productInstance(`/photo-link`, {
    method: 'POST',
    data: {
      link,
    },
  })
}
