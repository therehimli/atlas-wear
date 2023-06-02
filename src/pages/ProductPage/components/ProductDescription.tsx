import { Product } from '@/types/productTypes'
import { FC } from 'react'

interface ProductCardProps {
  product: Product
  descriptionRef: any
}

const ProductDescription: FC<ProductCardProps> = ({
  product,
  descriptionRef,
}) => {
  return (
    <div ref={descriptionRef} className="flex flex-col gap-1">
      <h2 className="font-bold text-[25px]">Описание продукта:</h2>
      <div>{product.description}</div>
    </div>
  )
}

export default ProductDescription
