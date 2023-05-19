import { Product } from '@/types/products.interface'
import React, { FC } from 'react'

interface CategoryTopProps {
  product: Product
}

const CategoryTop: FC<CategoryTopProps> = ({ product }) => {
  return (
    <div className="text-neutral-400 text-[14px] flex items-center gap-2">
      <div>Main</div>
      <div className="font-[bold] text-[17px] mt-[2.5px]">•</div>
      <div> {product?.category}</div>
      <div className="font-[bold] text-[17px]">•</div>
      <div>
        {product?.gender === 'men'
          ? 'men wears'
          : product?.gender === 'women'
          ? 'women wears'
          : 'unisex wears'}
      </div>
    </div>
  )
}

export default CategoryTop
