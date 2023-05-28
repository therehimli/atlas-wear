import { useParams } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

import * as api from '@/api/products'
import { Product } from '@/types/productTypes'
import CategoryTop from './CategoryTop'
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'
import ProductCard from './ProductCard'
import ProductDescription from './ProductDescription'

const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product>()
  const descriptionRef = useRef<HTMLDivElement>()

  useEffect(() => {
    if (!id) return

    const getProductHandler = async () => {
      const { data } = await api.getProduct(id)
      setProduct(data)
    }
    getProductHandler()
  }, [])

  if (!product) return <div>Loading...</div>

  const executeScroll = () => descriptionRef?.current?.scrollIntoView()

  return (
    <div className="flex flex-col gap-5 justify-center">
      <CategoryTop product={product} />
      <div className="flex items-start justify-between gap-5">
        <div className="flex flex-col items-start gap-5">
          <div className="flex items-start gap-10">
            <ProductImages product={product} />
            <ProductInfo executeScroll={executeScroll} product={product} />
          </div>
          <ProductDescription
            descriptionRef={descriptionRef}
            product={product}
          />
        </div>
        <ProductCard product={product} />
      </div>
    </div>
  )
}

export default ProductPage
