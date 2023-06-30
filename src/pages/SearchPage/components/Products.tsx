import { FC } from 'react'

import { Product as ProductType } from '@/types/productTypes'
import Product from './Product'
import Skeleton from '@/pages/HomePage/ItemLists/Skeleton'
import useSearchState from '@/store/useSearchState'

interface ProductsProps {
  highPrice: string
  lowerPrice: string
  gender: string
  match: string
  products: ProductType[]
  isSuccess: boolean
  isLoading: boolean
}

const Products: FC<ProductsProps> = ({ products, isSuccess, isLoading }) => {
  const { text } = useSearchState()

  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-[20px]">
        {Array(8)
          .fill(undefined)
          .map((_, id) => (
            <Skeleton key={id} />
          ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 gap-[20px]">
      {isSuccess &&
        products
          .filter((product) =>
            product.title.toLowerCase().includes(text.toLowerCase())
          )
          .map((product: ProductType) => (
            <Product product={product} key={product._id} />
          ))}
    </div>
  )
}

export default Products
