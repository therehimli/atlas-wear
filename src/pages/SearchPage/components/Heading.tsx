import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Product as ProductType } from '@/types/productTypes'
import useSearchState from '@/store/useSearchState'

interface HeadingProps {
  products: ProductType[]
  isLoading: boolean
}

const Heading: FC<HeadingProps> = ({ products, isLoading }) => {
  const { text } = useSearchState()
  const { t } = useTranslation()

  function sklonenie(number: number, text: string[]) {
    const cases = [2, 0, 1, 1, 1, 2]

    return text[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ]
  }

  const languageRU =
    localStorage.getItem('i18nextLng') === 'ru' ||
    localStorage.getItem('i18nextLng') === ''

  const categoryRU =
    localStorage.getItem('category') &&
    JSON.parse(localStorage.getItem('category') || '')

  const categoryEN =
    localStorage.getItem('category') &&
    t(JSON.parse(localStorage.getItem('category') || ''))

  const searchRU = `${t('search-query')} ${localStorage.getItem('search')}`

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="">
      <div className="text-neutral-400 text-[14px] flex items-center gap-2">
        <Link className="text-blue-400 hover:text-blue-700" to="/">
          {t('top-main')}
        </Link>
        <div className="font-[bold] text-[17px] mt-[2.5px]">/</div>
        <div>{languageRU ? categoryRU : categoryEN}</div>
      </div>
      <div className="flex gap-2 items-center">
        <h1 className="text-[35px]">
          {localStorage.getItem('search')
            ? searchRU
            : languageRU
            ? categoryRU
            : categoryEN}
        </h1>
        <div className="text-md text-neutral-500">
          <span className="mr-1">
            {text
              ? products.filter((product) =>
                  product.title.toLowerCase().includes(text.toLowerCase())
                ).length
              : products?.length}
          </span>
          {languageRU
            ? sklonenie(products?.length, [
                'результат',
                'результата',
                'результатов',
              ])
            : products.length > 1
            ? 'results'
            : 'result'}
        </div>
      </div>
    </div>
  )
}

export default Heading
