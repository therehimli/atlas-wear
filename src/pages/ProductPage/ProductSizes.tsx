import { FC, useState } from 'react'

import { sizeList } from '@/data/sizeList'

const ProductSizes: FC = () => {
  const [sizeIndex, setSizeIndex] = useState(0)

  return (
    <div className="flex flex-col gap-2">
      <div>Choose the size</div>
      <div className="grid grid-cols-4 gap-2">
        {sizeList.map((size) => (
          <div
            onClick={() => setSizeIndex(size.index)}
            key={size.id}
            className={`py-1 ${
              size.index === sizeIndex
                ? 'border-blue-400'
                : 'border-neutral-200'
            }  border-[2px] border-solid font-semibold rounded-md text-[13px] cursor-pointer text-center`}
          >
            {size.size}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductSizes
