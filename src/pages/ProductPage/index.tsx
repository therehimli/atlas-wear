import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import * as api from '@/api/products'
import { Product } from '@/types/products.interface'
import CategoryTop from './CategoryTop'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'
import ProductSizes from './ProductSizes'
import ProductCartFavorite from './ProductCartFavorite'

const ProductPage = () => {
  const { id } = useParams()

  const [product, setProduct] = useState<Product>()

  return (
    <div className="flex flex-col gap-5 justify-center">
      <CategoryTop product={product} />
      <div className="flex items-start gap-10">
        <ProductImages product={product} />
        <div className="flex flex-col justify-center gap-6">
          <ProductInfo product={product} />
          <ProductSizes />
          <ProductCartFavorite />
        </div>
      </div>
    </div>
  )
}

export default ProductPage
