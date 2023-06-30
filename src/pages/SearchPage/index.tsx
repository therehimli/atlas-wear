import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getSearchProductsHandler } from '@/api/searchProducts'
import Filters from './components/Filters'
import Heading from './components/Heading'
import Products from './components/Products'
import SearchPagination from './components/SearchPagination'
import { useSearchParams } from 'react-router-dom'

const SearchPage = () => {
  const [lowerPrice, setLowerPrice] = useSearchParams()
  const [highPrice, setHighPrice] = useSearchParams()
  const [gender, setGender] = useState('')
  const [match, setMatch] = useState('')
  const [page, setPage] = useState(1)

  const handleChangePage = (value: number) => {
    setPage(value)
  }

  const storedCategory =
    localStorage.getItem('category') &&
    JSON.parse(localStorage.getItem('category') || '')

  const lowerPriceQuery = lowerPrice.get('min') || ''
  const highPriceQuery = highPrice.get('max') || ''

  const {
    data: products,
    isLoading,
    isSuccess,
  } = useQuery({
    queryFn: () =>
      getSearchProductsHandler(
        lowerPriceQuery,
        highPriceQuery,
        gender,
        match,
        storedCategory,
        page
      ),
    queryKey: [
      'products',
      lowerPrice.get('min'),
      highPrice.get('max'),
      gender,
      page,
      match,
      storedCategory,
    ],
  })

  return (
    <div className="flex flex-col gap-5">
      <Heading products={products} isLoading={isLoading} />
      <div className="flex gap-16">
        <aside>
          <Filters
            setLowerPrice={setLowerPrice}
            setGender={setGender}
            gender={gender}
            setMatch={setMatch}
            match={match}
            setHighPrice={setHighPrice}
            lowerPrice={lowerPriceQuery}
            highPrice={highPriceQuery}
          />
        </aside>
        <main>
          <Products
            isLoading={isLoading}
            products={products}
            isSuccess={isSuccess}
            gender={gender}
            match={match}
            lowerPrice={lowerPriceQuery}
            highPrice={highPriceQuery}
          />
        </main>
      </div>
      <SearchPagination page={page} changePageHandler={handleChangePage} />
    </div>
  )
}

export default SearchPage
