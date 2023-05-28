import { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Item from './Item'
import { Product } from '@/types/productTypes'
import Skeleton from './Skeleton'
import useCategoryItem from '@/store/useCategoryItem'
import * as api from '@/api/products'
import useProductsStore from '@/store/useProductsStore'

const ItemList = () => {
  const { products, setProducts } = useProductsStore()

  useEffect(() => {
    const getProductsHandler = async () => {
      const { data } = await api.getProducts()
      setProducts(data)
    }
    getProductsHandler()
  }, [])

  if (!products) {
    return (
      <div className="grid grid-cols-5 gap-5">
        {Array(30)
          .fill(undefined)
          .map((game, id) => (
            <Skeleton key={id} />
          ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-5 gap-[50px]">
      {products.map((product: Product) => (
        <Item product={product} key={product._id} />
      ))}
    </div>
  )
}

export default ItemList
