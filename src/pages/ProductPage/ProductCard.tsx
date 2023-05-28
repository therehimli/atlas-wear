import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart, AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'

import { Product } from '@/types/productTypes'

interface ProductCardProps {
  product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-3 sticky top-32 min-w-[300px]">
      <div className="rounded-xl border-2 shadow-lg w-full flex flex-col gap-1 py-3 px-4">
        <div className="flex items-center justify-between ">
          <div className="text-[24px] font-semibold">{product.price} ₽</div>
          {true ? (
            <AiOutlineHeart color="grey" size={20} cursor="pointer" />
          ) : (
            <AiFillHeart color="grey" size={20} />
          )}
        </div>
      </div>
      <div className="rounded-xl border-2 shadow-lg flex flex-col gap-1 py-3 px-4 ">
        <div className="text-[18px] font-semibold">Свяжись с владельцом</div>
        <div className="flex flex-col gap-1">
          <div className="border-b-[0.1px] border-black border-solid flex gap-2 items-center">
            <AiOutlineMail />
            <span className="ml-1 font-semibold italic">
              {product.contactEmail}
            </span>
          </div>
          <div className=" flex gap-2 items-center border-b-[0.1px] border-black border-solid ">
            <BsTelephone />
            <span className="ml-1 font-semibold italic">
              {product.contactNumber}
            </span>
          </div>
          <div className="border-b-[0.1px] border-black border-solid ">
            Доставка:
            <span className="ml-1 font-semibold italic">
              {product.delivery}
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default ProductCard
