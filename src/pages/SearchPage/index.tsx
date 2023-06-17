import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { getSearchProductsHandler } from '@/api/searchProducts'
import Filters from './components/Filters'
import Heading from './components/Heading'
import Products from './components/Products'
import useSearchState from '@/store/useSearchState'

const SearchPage = () => {
  const [lowerPrice, setLowerPrice] = useState('')
  const [highPrice, setHighPrice] = useState('')
  const [gender, setGender] = useState('')
  const [match, setMatch] = useState('')

  const storedCategory =
    localStorage.getItem('category') &&
    JSON.parse(localStorage.getItem('category') || '')
  const { text: search } = useSearchState()

  const {
    data: products,
    isLoading,
    isSuccess,
  } = useQuery({
    queryFn: () =>
      getSearchProductsHandler(
        lowerPrice,
        highPrice,
        gender,
        match,
        storedCategory,
        search
      ),
    queryKey: [
      'products',
      lowerPrice,
      highPrice,
      gender,
      match,
      storedCategory,
      search,
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
            lowerPrice={lowerPrice}
            highPrice={highPrice}
          />
        </aside>
        <main>
          <Products
            isLoading={isLoading}
            products={products}
            isSuccess={isSuccess}
            gender={gender}
            match={match}
            lowerPrice={lowerPrice}
            highPrice={highPrice}
          />
        </main>
      </div>
    </div>
  )
}

export default SearchPage
