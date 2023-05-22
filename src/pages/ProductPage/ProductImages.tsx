import { FC } from 'react'

import { Product } from '@/types/productTypes'
import useChangeIndex from '@/hooks/useChangeIndex'

interface ProductImagesProps {
  product: Product
}

const ProductImages: FC<ProductImagesProps> = ({ product }) => {
  const { imageIndex, setImageIndex } = useChangeIndex()
  return (
    <div className="flex items-center justify-between gap-[10px]">
      <div className="flex flex-col items-center gap-5 w-[100px] h-[450px]  overflow-scroll no-scrollbar">
        {product?.images.map((image, i) => (
          <div className="w-[100px] h-[100px]">
            <img
              src={image}
              alt="product-image"
              onClick={() => setImageIndex(i)}
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
      <div className="w-[500px] h-[500px]">
        <img
          src={product?.images[imageIndex]}
          alt="main-image"
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}

export default ProductImages
