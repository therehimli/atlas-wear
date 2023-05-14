import { create } from 'zustand'

interface paramsProps<T> {
  category: string
  search: string
  setParams: (category: T, search: T) => void
}

const useQueryParamsStore = create<paramsProps<string>>((set) => ({
  category: '',
  search: '',
  setParams: (category, search) => set({ category: category, search: search }),
}))

export default useQueryParamsStore
