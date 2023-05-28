import { FC } from 'react'

import { Product } from '@/types/productTypes'
import useChangeIndex from '@/hooks/useChangeIndex'

interface ProductImagesProps {
  product: Product
}

const ProductImages: FC<ProductImagesProps> = ({ product }) => {
  const { imageIndex, setImageIndex } = useChangeIndex()

  return (
    <div className="flex items-start justify-between gap-[10px]">
      <div className="flex flex-col items-center gap-5 h-[400px] overflow-scroll no-scrollbar">
        {product.photos.map((image, i) => (
          <div key={image} className="w-[120px] h-[120px]">
            <img
              src={`http://localhost:4000/uploads/${image}`}
              alt="product-image"
              onClick={() => setImageIndex(i)}
              className="cursor-pointer w-full h-full border-2 rounded-3xl shadow-md"
            />
          </div>
        ))}
      </div>
      <div className="w-[400px] h-[400px]">
        {product.photos.length > 0 ? (
          <img
            src={`http://localhost:4000/uploads/${product.photos[imageIndex]}`}
            alt="main-image"
            className="w-full h-full border-2 rounded-3xl shadow-xl"
          />
        ) : (
          <img
            src={`http://localhost:4000/uploads/defaultProduct.png`}
            alt="main-image"
            className="w-full h-full border-2 rounded-3xl shadow-xl"
          />
        )}
      </div>
    </div>
  )
}

export default ProductImages
