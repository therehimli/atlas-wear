import { Product } from '@/types/productTypes'
import { create } from 'zustand'

interface productsState {
  products: Product[]
  setProducts: (products: Product[]) => void
}

const useProductsStore = create<productsState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}))

export default useProductsStore
