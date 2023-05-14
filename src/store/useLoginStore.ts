import { create } from 'zustand'

type Login = {
  iat: number | null
  email: string
  id: string
}

interface paramsProps {
  userActive: Login
  setUserActive: (login: Login) => void
}

const useLoginStore = create<paramsProps>((set) => ({
  userActive: {
    iat: null,
    email: '',
    id: '',
  },
  setUserActive: (login) => set({ userActive: login }),
}))

export default useLoginStore
