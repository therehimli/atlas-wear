import { FieldValues } from 'react-hook-form'
import { authInstance } from '.'

export async function getAccommodationsHandler() {
  const { data } = await authInstance.get(`/user-products`)
  return data
}

export async function getAccommodationIdHandler(id: string) {
  return await authInstance.get(`/user-products/${id}`)
}

export async function editAccommodationHandler(
  fieldsData: FieldValues & { id: string }
) {
  const { data } = await authInstance.put(`/user-products`, fieldsData)
  return data
}

export async function createAccommodationHandler(fieldsData: FieldValues) {
  const { data } = await authInstance.post(`/user-products`, fieldsData)
  return data
}

export async function deleteAccommodationHandler(id: string) {
  const { data } = await authInstance.delete(`/user-products/${id}`)
  return data
}

export async function postProductPhotoLinkHandler(link: string) {
  return await authInstance(`/product-photo-link`, {
    method: 'POST',
    data: {
      link,
    },
  })
}

export async function uploadProductPhotoHandler(formData: FormData) {
  return await authInstance.post(`/upload-product-image`, formData, {
    headers: {
      'Content-type': 'multipart/form-data',
    },
  })
}
