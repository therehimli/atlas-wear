import { create } from 'zustand'

interface ISearch {
  text: string
  setChange: (value: string) => void
}

const useSearchState = create<ISearch>((set) => ({
  text: '',
  setChange: (value) => set({ text: value }),
}))

export default useSearchState
