import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'

import Item from './Item'
import { Product } from '@/types/productTypes'
import { getProductsHandler } from '@/api/products'
import Skeleton from './Skeleton'

const ItemList = () => {
  const [limit, setLimit] = useState<number>(10)

  const {
    data: products,
    isLoading,
    isSuccess,
  } = useQuery({
    queryFn: () => getProductsHandler(limit),
    queryKey: ['products', limit],
    keepPreviousData: true,
  })

  const { ref, inView } = useInView({ threshold: 1 })

  useEffect(() => {
    if (inView) {
      if (limit >= 15) return

      setLimit((prev) => prev + 10)
    }
  }, [inView])

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
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-5 gap-[75px]">
        {isSuccess &&
          products.map((product: Product) => (
            <Item product={product} key={product._id} />
          ))}
      </div>
      <div ref={ref}></div>
      {limit >= 20 && (
        <button
          onClick={() => setLimit((prev) => prev + 10)}
          className="flex self-center p-4 text-lg font-bold bg-neutral-300 hover:bg-neutral-400 cursor-pointer rounded-full"
        >
          Загрузить еще
        </button>
      )}
    </div>
  )
}

export default ItemList
