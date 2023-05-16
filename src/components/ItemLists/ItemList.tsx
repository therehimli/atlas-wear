import { memo, useEffect, useState } from 'react'

import Item from './Item'
import { Product } from '@/types/products.interface'
import Skeleton from './Skeleton'
import * as api from '@/api/products'

const ItemList = memo(() => {
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    const getProductsHandler = async () => {
      const { data } = await api.getProducts()
      setItems(data)
    }
    getProductsHandler()
  }, [])
  console.log(items)

  if (!items) {
    return (
      <div className="flex flex-wrap gap-2">
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
        <div>
          <Item product={product} />
        </div>
      ))}
    </div>
  )
})

export default ItemList
