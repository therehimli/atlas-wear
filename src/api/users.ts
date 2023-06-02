import { ownerType } from '@/types/ownerType'
import { authInstance } from '.'

export async function userRegisterHandler(
  email: string,
  password: string,
  name: string
) {
  return authInstance('/register', {
    method: 'POST',
    data: {
      email,
      password,
      name,
    },
  })
}

export async function userLoginHandler(email: string, password: string) {
  return authInstance('/login', {
    method: 'POST',
    data: {
      email,
      password,
    },
  })
}

export async function userProfileHandler() {
  const { data } = await authInstance('/profile', {
    method: 'GET',
  })
  return data
}

export async function userLogOutHandler() {
  return authInstance('/logout', {
    method: 'POST',
  })
}

export async function changeAvatarHandler(dataFile: Partial<ownerType>) {
  const { data } = await authInstance.post('/change-avatar', dataFile)
  return data
}
