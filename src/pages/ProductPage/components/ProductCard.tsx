import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart, AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify'
import 'moment/locale/ru'
import 'react-toastify/dist/ReactToastify.css'

import { Product } from '@/types/productTypes'
import useUserLogin from '@/store/useUserLogin'
import useToggleModalStore from '@/store/useModalToggle'
import {
  deleteFavoriteHandler,
  addFavoriteHandler,
  getFavoritesHandler,
} from '@/api/favorites'
import { FavoriteType } from '@/types/favoriteTypes'
import useCurrencyToggle from '@/store/useCurrencyToggle'

interface ProductCardProps {
  product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const client = useQueryClient()
  const { userLogin } = useUserLogin()
  const { toggleButton } = useToggleModalStore()
  const { t } = useTranslation()
  const { currency } = useCurrencyToggle()

  const { data: favorites } = useQuery({
    queryFn: getFavoritesHandler,
    queryKey: ['favorites', 'product'],
  })

  const { mutate: addFavorite } = useMutation({
    mutationFn: addFavoriteHandler,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['favorites', 'product'] })
    },
  })

  const { mutate: deleteFavorite } = useMutation({
    mutationFn: deleteFavoriteHandler,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['favorites', 'product'] })
    },
  })

  const hasInFavorites =
    favorites &&
    favorites.filter(
      (favorite: FavoriteType) => favorite.product._id === product._id
    )

  return (
    <div className="flex flex-col gap-3 sticky top-32 min-w-[350px]">
      <div className="rounded-xl border-2 shadow-lg w-full flex flex-col gap-1 py-3 px-4">
        <div className="flex items-center justify-between ">
          {currency === 'rub' ? (
            <p className="text-[24px] font-semibold">{product.price} ₽</p>
          ) : (
            <p className="text-[24px] font-semibold">
              {Math.trunc(product.price / 86)} $
            </p>
          )}
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
          ) : hasInFavorites?.length > 0 ? (
            <div className="bg-red-200 rounded-full p-1">
              <AiFillHeart
                color="red"
                size={25}
                className="text-center"
                cursor="pointer"
                onClick={() => {
                  deleteFavorite(product._id)
                  toast.info(t('favorite-delete'))
                }}
              />
            </div>
          ) : (
            <div className="hover:bg-red-200 rounded-full p-1">
              <AiOutlineHeart
                color="red"
                size={20}
                className="text-center"
                cursor="pointer"
                onClick={() => {
                  addFavorite(product._id)
                  toast.info(t('favorite-add'))
                }}
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

          <div>{t('contact-owner')}</div>
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
          <div className="border-b-[0.1px] border-black border-solid flex">
            {t('delivery')}:
            <span className="ml-1 font-semibold italic">
              {localStorage.getItem('i18nextLng') === 'ru' ||
              localStorage.getItem('i18nextLng') === '' ? (
                product.delivery
              ) : product.delivery === 'Самовызов' ? (
                <div>Pickup</div>
              ) : product.delivery === 'Платная' ? (
                <div>Paid</div>
              ) : (
                <div>Free</div>
              )}
            </span>
          </div>
          <div className="border-b-[0.1px] border-black border-solid">
            {t('city')}:
            <span className="ml-1 font-semibold italic">{product.city}</span>
          </div>
          <div className="flex items-center">
            <div className="text-neutral-500 text-[12px] flex items-center">
              {t('created-date')}:
              <Moment format="LL" parse="YYYY-MM-DD HH:mm" locale="ru">
                {product.createdAt}
              </Moment>
            </div>
            <div className="text-neutral-500 text-[12px] flex items-center">
              {t('last-update')}:
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
