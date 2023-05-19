import { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Item from './Item'
import { Product } from '@/types/products.interface'
import Skeleton from './Skeleton'
import useCategoryItem from '@/store/useCategoryItem'
import * as api from '@/api/products'

const ItemList = () => {
  const [items, setItems] = useState<Product[]>([])
  const categoryItem = useCategoryItem()

  // useEffect(() => {
  //   const getProductsHandler = async () => {
  //     const { data } = await api.getProducts(categoryItem.category)
  //     if (categoryItem.category) {
  //       setItems(data)
  //     }
  //   }
  //   getProductsHandler()
  // }, [categoryItem.category])

  if (!items) {
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
    <div className="grid grid-cols-5 gap-5">
      {items.map((product: Product) => (
        <Link to={`product/${product.id}`}>
          <Item product={product} key={product.id} />
        </Link>
      ))}
    </div>
  )
}

export default ItemList