import { createRef, FC } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import { Product } from '@/types/productTypes'
import { deleteFavoriteHandler, addFavoriteHandler } from '@/api/favorites'
import useChangeIndex from '@/hooks/useChangeIndex'
import useUserLogin from '@/store/useUserLogin'
import useToggleModalStore from '@/store/useModalToggle'

interface ItemProps {
  product: Product
}

const Item: FC<ItemProps> = ({ product }) => {
  const imageRef = createRef<HTMLImageElement>()
  const { imageIndex, setImageIndex } = useChangeIndex()
  const client = useQueryClient()
  const { userLogin } = useUserLogin()
  const { toggleButton } = useToggleModalStore()

  const { mutate: addFavorite } = useMutation({
    mutationFn: addFavoriteHandler,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['products'] })
    },
  })

  const { mutate: deleteFavorite } = useMutation({
    mutationFn: deleteFavoriteHandler,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['products'] })
    },
  })

  return (
    <div className="w-[200px] h-[300px] flex flex-col gap-1">
      <div className="flex flex-col items-center gap-1">
        <Link to={`product/${product._id}`}>
          {product.photos.length > 0 ? (
            <img
              ref={imageRef}
              className="w-[200px] h-[200px] rounded-3xl shadow-md"
              src={`http://localhost:4000/uploads/images/${product.photos[imageIndex]}`}
              alt="product"
            />
          ) : (
            <img
              src={`http://localhost:4000/uploads/images/defaultProduct.png`}
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
          {!userLogin.email ? (
            <AiOutlineHeart
              color="red"
              size={30}
              cursor="pointer"
              onClick={() => toggleButton(1)}
            />
          ) : product.favorite ? (
            <AiFillHeart
              color="red"
              size={30}
              cursor="pointer"
              onClick={() => deleteFavorite(product._id)}
            />
          ) : (
            <AiOutlineHeart
              color="red"
              size={30}
              cursor="pointer"
              onClick={() => addFavorite(product._id)}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Item
