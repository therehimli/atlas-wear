import { create } from 'zustand'

type userType = {
  email: string
  password: string
  name: string
  _id: string
  avatar: string
}

interface LoginProps {
  userLogin: userType
  setUserLogin: (newUser: userType) => void
}

const useUserLogin = create<LoginProps>((set) => ({
  userLogin: {
    email: '',
    password: '',
    name: '',
    _id: '',
    avatar: '',
  },
  setUserLogin: (newUser) => set({ userLogin: newUser }),
}))

export default useUserLogin
