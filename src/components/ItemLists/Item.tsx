import { createRef, memo, FC } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { Product } from '@/types/products.interface'
import useHandleMouseMove from '@/hooks/useHandleMouseMove'

interface ItemProps {
  product: Product
}

const Item: FC<ItemProps> = memo(({ product }) => {
  const imageRef = createRef<HTMLImageElement>()

  const { imageIndex, setImageIndex } = useHandleMouseMove()

  return (
    <div className="w-[200px] h-[300px] flex flex-col gap-1 ">
      <div className="flex flex-col items-center gap-1">
        <img
          ref={imageRef}
          className="w-[200px] h-[200px] rounded-3xl"
          src={product.images[imageIndex]}
          alt="product"
        />
        <div className="flex items-center gap-2 cursor-pointer mt-2">
          {product.images.map((item, i) => (
            <div
              onClick={() => setImageIndex(i)}
              className={`rounded-full  w-2 h-2 ${
                i === imageIndex ? 'bg-slate-700' : 'bg-slate-300'
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="text-sm truncate text-clip w-42 h-7">{product.title}</div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <AiFillStar color="crimson" />
          <div className="text-sm">{product.rating}</div>
        </div>
        <p className="text-sm">{product.sells} sell</p>
      </div>
      <p className="text-xl font-bold">{product.price} $</p>
    </div>
  )
})

export default Item
