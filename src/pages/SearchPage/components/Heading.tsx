import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Product as ProductType } from '@/types/productTypes'

interface HeadingProps {
  products: ProductType[]
  isLoading: boolean
}

const Heading: FC<HeadingProps> = ({ products, isLoading }) => {
  function sklonenie(number: number, text: string[]) {
    const cases = [2, 0, 1, 1, 1, 2]

    return text[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ]
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="">
      <div className="text-neutral-400 text-[14px] flex items-center gap-2">
        <Link className="text-blue-400 hover:text-blue-700" to="/">
          главная
        </Link>
        <div className="font-[bold] text-[17px] mt-[2.5px]">/</div>
        <div>
          {localStorage.getItem('category') &&
            JSON.parse(localStorage.getItem('category') || '')}
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <h1 className="text-[35px]">
          {localStorage.getItem('search')
            ? `Поиск по запросу ${localStorage.getItem('search')}`
            : localStorage.getItem('category') &&
              JSON.parse(localStorage.getItem('category') || '')}
        </h1>
        <div className="text-md text-neutral-500">
          <span className="mr-1">{products.length}</span>
          {sklonenie(products.length, [
            'результат',
            'результата',
            'результатов',
          ])}
        </div>
      </div>
    </div>
  )
}

export default Heading
