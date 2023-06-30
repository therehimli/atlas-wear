import { FC, MouseEventHandler, useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

import { Product } from '@/types/productTypes'
import { commentType } from '@/types/commentType'

interface ProductInfoProps {
  product: Product
  scrollToReviews: MouseEventHandler<HTMLParagraphElement>
  scrollToDescription: MouseEventHandler<HTMLParagraphElement>
  comments: commentType[]
}

const ProductInfo: FC<ProductInfoProps> = ({
  product,
  scrollToReviews,
  scrollToDescription,
  comments,
}) => {
  const [activeSize, setActiveSize] = useState('')
  const [activeColor, setActiveColor] = useState('')
  const { t } = useTranslation()

  return (
    <div className="flex items-start justify-center flex-col gap-4 min-w-[400px]">
      <div className="flex flex-col border-b-[1px] pb-1">
        <div className="font-semibold text-[20px]">{product.title}</div>
        <div className="flex gap-5 items-center">
          <div className="text-neutral-400 text-[14px]">
            {localStorage.getItem('i18nextLng') === 'ru' ||
            localStorage.getItem('i18nextLng') === '' ? (
              <>
                {product.gender.charAt(0).toLowerCase() +
                  product.gender.slice(1)}
                <span className="ml-1">одежда</span>
              </>
            ) : product.gender === 'Мужская' ? (
              <div>man wear</div>
            ) : (
              <div>woman wear</div>
            )}
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineEye size={15} color="grey" />
            <span className="text-[12px] text-neutral-500">
              {product.viewsCount}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <p onClick={scrollToDescription} className="underline cursor-pointer">
            {t('description')}
          </p>
          <p onClick={scrollToReviews} className="underline cursor-pointer">
            {t('review')} ({comments.length})
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        {!!product.colors.length && (
          <div className="flex flex-col gap-2 border-b-[1px] pb-1">
            <div>
              <span>{t('color')}: </span>
              {activeColor.includes('0')
                ? activeColor.slice(3, -4)
                : activeColor.slice(3)}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.colors.map((color, i) => (
                <div
                  onClick={() => setActiveColor(color)}
                  key={color}
                  className={`py-1 ${
                    color === color ? 'border-blue-400' : 'border-neutral-200'
                  }  border-[2px] border-solid font-semibold rounded-full w-[40px] h-[40px] cursor-pointer text-center ${color}`}
                ></div>
              ))}
            </div>
          </div>
        )}
        {!!product.sizes.length && (
          <>
            <div>
              {t('size')}: {activeSize.toUpperCase()}
            </div>
            <div className="grid grid-cols-4 gap-2 border-b-[1px] pb-1">
              {product.sizes.map((size, i) => (
                <div
                  onClick={() => setActiveSize(size)}
                  key={size}
                  className={`p-1 ${
                    size === activeSize
                      ? 'border-blue-400'
                      : 'border-neutral-200'
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
            <div>{t('condition')}: </div>
            <div className="font-semibold text-[15px] italic">
              {localStorage.getItem('i18nextLng') === 'ru' ||
              localStorage.getItem('i18nextLng') === ''
                ? product.state
                : product.state === 'Б/у'
                ? 'Used'
                : 'New'}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductInfo
