import { create } from 'zustand'

interface modalState {
  toggle: number
  toggleButton: (number: number) => void
}

const useToggleModalStore = create<modalState>((set) => ({
  toggle: 0,
  toggleButton: (number) => set({ toggle: number }),
}))

export default useToggleModalStore
