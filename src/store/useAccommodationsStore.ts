import { Product } from '@/types/productTypes'
import { create } from 'zustand'

interface productsState {
  accommodations: Product[]
  setAccommodations: (accommodations: Product[]) => void
}

const useAccommodationsStore = create<productsState>((set) => ({
  accommodations: [],
  setAccommodations: (accommodations) => set({ accommodations }),
}))

export default useAccommodationsStore
