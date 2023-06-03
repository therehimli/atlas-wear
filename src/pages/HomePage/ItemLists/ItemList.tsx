import { useQuery } from '@tanstack/react-query'

import Item from './Item'
import { Product } from '@/types/productTypes'
import { getProductsHandler } from '@/api/products'
import Skeleton from './Skeleton'

const ItemList = () => {
  const {
    data: products,
    isLoading,
    isSuccess,
  } = useQuery({
    queryFn: getProductsHandler,
    queryKey: ['products'],
  })

  if (isLoading) {
    return (
      <div className="grid grid-cols-5 gap-[75px]">
        {Array(15)
          .fill(undefined)
          .map((_, id) => (
            <Skeleton key={id} />
          ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-5 gap-[75px]">
      {isSuccess &&
        products.map((product: Product) => (
          <Item product={product} key={product._id} />
        ))}
    </div>
  )
}

export default ItemList
