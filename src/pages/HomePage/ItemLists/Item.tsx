import { createRef, FC } from 'react'
import { AiFillHeart, AiOutlineHeart, AiOutlineMail } from 'react-icons/ai'
import { Product } from '@/types/productTypes'
import useChangeIndex from '@/hooks/useChangeIndex'
import { Link } from 'react-router-dom'

interface ItemProps {
  product: Product
}

const Item: FC<ItemProps> = ({ product }) => {
  const imageRef = createRef<HTMLImageElement>()

  const { imageIndex, setImageIndex } = useChangeIndex()

  return (
    <div className="w-[200px] h-[300px] flex flex-col gap-1">
      <div className="flex flex-col items-center gap-1">
        <Link to={`product/${product._id}`}>
          {product.photos.length > 0 ? (
            <img
              ref={imageRef}
              className="w-[200px] h-[200px] rounded-3xl shadow-md"
              src={`http://localhost:4000/uploads/${product.photos[imageIndex]}`}
              alt="product"
            />
          ) : (
            <img
              src={`http://localhost:4000/uploads/defaultProduct.png`}
              alt="main-image"
              className="w-full h-full border-2 rounded-3xl shadow-md"
            />
          )}
        </Link>
        <div className="flex items-center gap-2 cursor-pointer mt-2">
          {product.photos.length > 0 ? (
            product.photos.map((item, i) => (
              <div
                key={item}
                onClick={() => setImageIndex(i)}
                className={`rounded-full  w-2 h-2 ${
                  i === imageIndex ? 'bg-slate-700' : 'bg-slate-300'
                }`}
              ></div>
            ))
          ) : (
            <div className={`rounded-full w-2 h-2 bg-slate-700`}></div>
          )}
        </div>
      </div>

      <Link to={`product/${product._id}`}>
        <div className="truncate text-[15px] font-semibold">
          {product.title}
        </div>
      </Link>
      <div className="flex justify-between items-center">
        <Link to={`product/${product._id}`}>
          <div className="flex flex-col">
            <div className="text-sm text-neutral-400">{product.category}</div>
            <p className="text-xl font-bold">{product.price} ₽</p>
          </div>
        </Link>
        <div>
          {true ? (
            <AiOutlineHeart color="red" size={30} cursor="pointer" />
          ) : (
            <AiFillHeart color="red" size={30} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Item
