import { FC, useState } from 'react'

import { Product } from '@/types/productTypes'

interface ProductInfoProps {
  product: Product
  executeScroll: any
}

const ProductInfo: FC<ProductInfoProps> = ({ product, executeScroll }) => {
  const [sizeIndex, setSizeIndex] = useState(0)
  const [colorIndex, setColorIndex] = useState(0)

  return (
    <div className="flex items-start justify-center flex-col gap-4 min-w-[400px]">
      <div className="flex flex-col border-b-[1px] pb-1">
        <div className="font-semibold text-[20px]">{product.title}</div>
        <div className="text-neutral-400 text-[14px]">
          {product.gender.charAt(0).toLowerCase() + product.gender.slice(1)}{' '}
          одежда
        </div>
        <div className="flex items-center gap-5 te">
          <p onClick={executeScroll} className="underline cursor-pointer">
            Описание
          </p>
          <p className="underline cursor-pointer">Отзывы</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {!!product.colors.length && (
          <div className="flex flex-col gap-2 border-b-[1px] pb-1">
            <div>Цвет:</div>
            <div className="grid grid-cols-4">
              {product.colors.map((color, i) => (
                <div
                  onClick={() => setColorIndex(i)}
                  key={color}
                  className={`py-1 ${
                    i === colorIndex ? 'border-blue-400' : 'border-neutral-200'
                  }  border-[2px] border-solid font-semibold rounded-full w-[40px] h-[40px] cursor-pointer text-center ${color}`}
                ></div>
              ))}
            </div>
          </div>
        )}
        {!!product.colors.length && (
          <>
            <div>Размер:</div>
            <div className="grid grid-cols-4 gap-2 border-b-[1px] pb-1">
              {product.sizes.map((size, i) => (
                <div
                  onClick={() => setSizeIndex(i)}
                  key={size}
                  className={`p-1 ${
                    i === sizeIndex ? 'border-blue-400' : 'border-neutral-200'
                  }  border-[2px] border-solid font-semibold rounded-md text-[15px] cursor-pointer text-center`}
                >
                  {size.toUpperCase()}
                </div>
              ))}
            </div>
          </>
        )}

        {product.state && (
          <div className="flex items-center gap-2 border-b-[1px] pb-1">
            <div>Состояние: </div>
            <div className="font-semibold text-[15px] italic">
              {product.state}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductInfo
