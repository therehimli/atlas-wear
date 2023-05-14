import { createRef, memo, FC } from 'react'
import { AiFillStar } from 'react-icons/ai'
import pants from '../../assets/images/pants.jpeg'

import { Product } from '@/types/products.interface'

interface ItemProps {
  product: Product
}

const Item: FC<ItemProps> = memo(({ product }) => {
  const imageRef = createRef<HTMLImageElement>()

  console.log(product)

  return (
    <div className="w-[200px] h-[300px] flex flex-col gap-1 cursor-pointer">
      <div className="flex flex-col items-center gap-1">
        <img
          ref={imageRef}
          className="w-[200px] h-[200px] rounded-3xl"
          src={pants}
          alt="product"
        />
      </div>

      <div className="text-sm truncate text-clip w-42 h-7">Pants</div>
      {/* <div>{[product.author.email]}</div> */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <AiFillStar color="crimson" />
          <div className="text-sm">4.5</div>
        </div>
        <p className="text-sm">3000 sell</p>
      </div>
      <p className="text-xl font-bold">3232 $</p>
    </div>
  )
})

export default Item
