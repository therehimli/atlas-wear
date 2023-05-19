import { create } from 'zustand'

type userType = {
  email: string
  password: string
}

interface LoginProps {
  userInfo: userType
  setUserInfo: (newUser: userType) => void
}

const useUserInfo = create<LoginProps>((set) => ({
  userInfo: {
    email: '',
    password: '',
  },
  setUserInfo: (newUser) => set({ userInfo: newUser }),
}))

export default useUserInfo
