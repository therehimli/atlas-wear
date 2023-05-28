import { authInstance } from '.'

export async function getAccommodations() {
  return authInstance.get(`/user-products`)
}

export async function getAccommodationId(id: string) {
  return authInstance.get(`/user-products/${id}`)
}

export async function editAccommodation<T>(data: T) {
  return authInstance.put(`/user-products`, data)
}

export async function createAccommodation<T>(data: T) {
  return authInstance.post(`/user-products`, data)
}

export async function postPhotoLink(link: string) {
  return authInstance(`/photo-link`, {
    method: 'POST',
    data: {
      link,
    },
  })
}

export async function uploadPhoto(data: FormData) {
  return authInstance.post(`/upload`, data, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  })
}
