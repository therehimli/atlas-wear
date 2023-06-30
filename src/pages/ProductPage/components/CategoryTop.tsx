import { Product } from '@/types/productTypes'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface CategoryTopProps {
  product: Product
}

const CategoryTop: FC<CategoryTopProps> = ({ product }) => {
  const { t } = useTranslation()

  return (
    <div className="text-neutral-400 text-[14px] flex items-center gap-2">
      <Link className="text-blue-400 hover:text-blue-700" to="/">
        {t('top-main')}
      </Link>
      <div className="font-[bold] text-[17px] mt-[2.5px]">/</div>
      <Link
        onClick={() =>
          localStorage.setItem('category', JSON.stringify(product.category))
        }
        className="text-blue-400 hover:text-blue-700"
        to="/search"
      >
        {t(product.category)}
      </Link>
      <div className="font-[bold] text-[17px] mt-[2.5px]">/</div>
      <div>
        {localStorage.getItem('i18nextLng') === 'ru' ||
        localStorage.getItem('i18nextLng') === '' ? (
          <>
            {product.gender.charAt(0).toLowerCase() + product.gender.slice(1)}
            <span className="ml-1">одежда</span>
          </>
        ) : product.gender === 'Мужская' ? (
          <div>man wear</div>
        ) : (
          <div>woman wear</div>
        )}
      </div>
    </div>
  )
}

export default CategoryTop
