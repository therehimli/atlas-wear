import { create } from 'zustand'

type userType = {
  email: string
  password: string
  name: ''
}

interface LoginProps {
  userLogin: userType
  ready: boolean
  setUserLogin: (newUser: userType) => void
  setReady: (ready: boolean) => void
}

const useUserLogin = create<LoginProps>((set) => ({
  userLogin: {
    email: '',
    password: '',
    name: '',
  },
  ready: false,
  setUserLogin: (newUser) => set({ userLogin: newUser }),
  setReady: (ready) => set({ ready }),
}))

export default useUserLogin
