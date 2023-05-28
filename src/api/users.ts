import { authInstance } from '.'

export async function userRegister(
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

export async function userLogin(email: string, password: string) {
  return authInstance('/login', {
    method: 'POST',
    data: {
      email,
      password,
    },
  })
}

export async function userProfile() {
  return authInstance('/profile', {
    method: 'GET',
  })
}

export async function userLogOut() {
  return authInstance('/logout', {
    method: 'POST',
  })
}
