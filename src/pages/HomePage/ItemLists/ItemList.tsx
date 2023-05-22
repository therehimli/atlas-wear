import { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Item from './Item'
import { Product } from '@/types/productTypes'
import Skeleton from './Skeleton'
import useCategoryItem from '@/store/useCategoryItem'
import * as api from '@/api/products'

const ItemList = () => {
  const [items, setItems] = useState<Product[]>([])
  const categoryItem = useCategoryItem()

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
