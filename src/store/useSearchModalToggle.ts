import { create } from 'zustand'

interface modalState {
  toggle: boolean
  setClose: () => void
  setOpen: () => void
}

const useSearchModalToggle = create<modalState>((set) => ({
  toggle: false,
  setClose: () => set({ toggle: false }),
  setOpen: () => set({ toggle: true }),
}))

export default useSearchModalToggle
