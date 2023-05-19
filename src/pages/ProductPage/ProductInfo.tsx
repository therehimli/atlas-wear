import { FC } from 'react'
import { RiStarSFill } from 'react-icons/ri'

import { Product } from '@/types/products.interface'

interface ProductInfoProps {
  product: Product
}

const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className="flex items-start justify-center flex-col">
      <div className="text-neutral-400 text-[17px]">
        {product?.gender === 'men'
          ? 'men wears'
          : product?.gender === 'women'
          ? 'women wears'
          : 'Unisex wears'}
      </div>
      <div className="font-semibold text-[30px]">{product?.title}</div>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-1">
          {[23, 23, 23, 23, 2].map(() => (
            <RiStarSFill color="FFD230" cursor="pointer" />
          ))}
        </div>
        <div className="text-[14px] text-neutral-500">3000 продаж</div>
      </div>
      <div className="text-[32px] font-bold">{product?.price} $</div>
    </div>
  )
}

export default ProductInfo
