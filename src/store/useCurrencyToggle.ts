import { create } from 'zustand'

interface modalState {
  currency: string
  toggleCurrency: (currency: string) => void
}

const useCurrencyToggle = create<modalState>((set) => ({
  currency: '',
  toggleCurrency: (currency) => set({ currency }),
}))

export default useCurrencyToggle
