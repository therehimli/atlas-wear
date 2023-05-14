import { memo, useEffect, useState } from 'react'

import Item from './Item'
import useSearchState from '@/store/useSearchState'
import { Product } from '@/types/products.interface'
import Skeleton from './Skeleton'
import useLocalStorage from '@/hooks/useLocalStorage'

const ItemList = memo(() => {
  const [items, setItems] = useState<Product[]>([])

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
      {Array(30)
        .fill(undefined)
        .map((product: Product) => (
          <div>
            <Item product={product} />
          </div>
        ))}
    </div>
  )
})

export default ItemList
