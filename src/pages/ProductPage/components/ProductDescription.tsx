import { Product } from '@/types/productTypes'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface ProductCardProps {
  product: Product
  descriptionRef: any
}

const ProductDescription: FC<ProductCardProps> = ({
  product,
  descriptionRef,
}) => {
  const { t } = useTranslation()

  return (
    <div ref={descriptionRef} className="flex flex-col gap-1">
      <h2 className="font-bold text-[25px]">{t('product-description')}:</h2>
      <div>{product.description}</div>
    </div>
  )
}

export default ProductDescription
