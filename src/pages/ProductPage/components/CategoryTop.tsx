import { Product } from '@/types/productTypes'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface CategoryTopProps {
  product: Product
}

const CategoryTop: FC<CategoryTopProps> = ({ product }) => {
  return (
    <div className="text-neutral-400 text-[14px] flex items-center gap-2">
      <Link className="text-blue-400 hover:text-blue-700" to="/">
        главная
      </Link>
      <div className="font-[bold] text-[17px] mt-[2.5px]">•</div>
      <Link className="text-blue-400 hover:text-blue-700" to="/search">
        {product.category}
      </Link>
      <div className="font-[bold] text-[17px] mt-[2.5px]">•</div>
      <div>
        {product.gender.charAt(0).toLowerCase() + product.gender.slice(1)}
        одежда
      </div>
    </div>
  )
}

export default CategoryTop
