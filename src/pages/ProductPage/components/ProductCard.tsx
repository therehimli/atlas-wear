import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart, AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import 'moment/locale/ru'

import { Product } from '@/types/productTypes'
import useUserLogin from '@/store/useUserLogin'
import useToggleModalStore from '@/store/useModalToggle'
import { deleteFavoriteHandler, addFavoriteHandler } from '@/api/favorites'

interface ProductCardProps {
  product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const client = useQueryClient()
  const { userLogin } = useUserLogin()
  const { toggleButton } = useToggleModalStore()

  const { mutate: addFavorite } = useMutation({
    mutationFn: addFavoriteHandler,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['product'] })
    },
  })

  const { mutate: deleteFavorite } = useMutation({
    mutationFn: deleteFavoriteHandler,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['product'] })
    },
  })

  return (
    <div className="flex flex-col gap-3 sticky top-32 min-w-[350px]">
      <div className="rounded-xl border-2 shadow-lg w-full flex flex-col gap-1 py-3 px-4">
        <div className="flex items-center justify-between ">
          <div className="text-[24px] font-semibold">{product.price} ₽</div>
          {!userLogin.email ? (
            <div className="hover:bg-red-200 rounded-full p-1">
              <AiOutlineHeart
                color="red"
                size={20}
                className="text-center"
                cursor="pointer"
                onClick={() => toggleButton(1)}
              />
            </div>
          ) : product.favorite ? (
            <div className="bg-red-200 rounded-full p-1">
              <AiFillHeart
                color="red"
                size={25}
                className="text-center"
                cursor="pointer"
                onClick={() => deleteFavorite(product._id)}
              />
            </div>
          ) : (
            <div className="hover:bg-red-200 rounded-full p-1">
              <AiOutlineHeart
                color="red"
                size={20}
                className="text-center"
                cursor="pointer"
                onClick={() => addFavorite(product._id)}
              />
            </div>
          )}
        </div>
      </div>
      <div className="rounded-xl border-2 shadow-lg flex flex-col gap-1 py-3 px-4">
        <div className="text-[18px] font-semibold flex flex-col gap-2">
          <div className="p-1 border-2 rounded-full flex gap-2">
            <img
              className="w-[40px] h-[40px] rounded-full border-2"
              src={`http://localhost:4000/uploads/images/${product.owner.avatar}`}
            />
            <div className="flex flex-col">
              <p className="text-[15px] text-sky-400 font-[10px]">
                {product.owner.name}
              </p>
              <p className="text-[12px] text-neutral-600 font-thin">
                {product.owner.email}
              </p>
            </div>
          </div>

          <div>Свяжись с владельцом</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="border-b-[0.1px] border-black border-solid flex gap-2 items-center cursor-pointer">
            <AiOutlineMail />
            <Link
              to={`mailto: ${product.contactEmail}`}
              className="ml-1 font-semibold italic"
            >
              {product.contactEmail}
            </Link>
          </div>
          <Link
            to={`tel: ${product.contactNumber}`}
            className="flex gap-2 items-center border-b-[0.1px] border-black border-solid cursor-pointer"
          >
            <BsTelephone />
            <span className="ml-1 font-semibold italic">
              {product.contactNumber}
            </span>
          </Link>
          <div className="border-b-[0.1px] border-black border-solid ">
            Доставка:
            <span className="ml-1 font-semibold italic">
              {product.delivery}
            </span>
          </div>
          <div className="border-b-[0.1px] border-black border-solid">
            Город:
            <span className="ml-1 font-semibold italic">{product.city}</span>
          </div>
          <div className="flex items-center">
            <div className="text-neutral-500 text-[12px] flex items-center">
              Дата создания:
              <Moment format="LL" parse="YYYY-MM-DD HH:mm" locale="ru">
                {product.createdAt}
              </Moment>
            </div>
            <div className="text-neutral-500 text-[12px] flex items-center">
              Последнее обновление:
              <Moment format="LL" parse="YYYY-MM-DD HH:mm" locale="ru">
                {product.updatedAt}
              </Moment>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default ProductCard
