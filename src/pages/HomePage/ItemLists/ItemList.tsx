import { useQuery } from '@tanstack/react-query'

import Item from './Item'
import { Product } from '@/types/productTypes'
import { getProductsHandler } from '@/api/products'

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
      <div className="grid grid-cols-5 gap-5">
        {Array(30)
          .fill(undefined)
          .map((game, id) => (
            <div key={id}>Loading...</div>
          ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-5 gap-[50px]">
      {isSuccess &&
        products.map((product: Product) => (
          <Item product={product} key={product._id} />
        ))}
    </div>
  )
}

export default ItemList
