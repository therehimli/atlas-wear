import { create } from 'zustand'

interface CategoryState {
  category: string
  setCategory: (text: string) => void
}

const useCategoryItem = create<CategoryState>((set) => ({
  category: '',
  setCategory: (text) => set({ category: text }),
}))

export default useCategoryItem
