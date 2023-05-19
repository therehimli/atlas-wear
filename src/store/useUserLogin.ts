import { create } from 'zustand'

type userType = {
  email: string
  password: string
}

interface LoginProps {
  userLogin: userType
  setUserLogin: (newUser: userType) => void
}

const useUserLogin = create<LoginProps>((set) => ({
  userLogin: {
    email: '',
    password: '',
  },
  setUserLogin: (newUser) => set({ userLogin: newUser }),
}))

export default useUserLogin
