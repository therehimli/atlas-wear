import useQueryParamsStore from '@/store/useQueryParamsStore'
import { useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import useCategoryItem from '@/store/useCategoryItem'
import useSearchState from '@/store/useSearchState'
import { useEffect } from 'react'

const useQueryParams = () => {
  const category = useCategoryItem()
  const search = useSearchState()
  const queryParams = useQueryParamsStore()
  const navigate = useNavigate()

  const searchParam = queryParams.search ? `search=${queryParams.search}` : ''
  const categoryParam = queryParams.category
    ? `filter=${queryParams.category}`
    : ''

  useEffect(() => {
    const query = queryString.stringify({
      search: search.text,
      category: category.category,
    })

    navigate(`?${query}`)
    if (window.location.search) {
      const params = queryString.parse(window.location.search)
      queryParams.setParams(params.category, params.search)
    }
  }, [search.text, category.category])

  return [categoryParam, searchParam]
}
export default useQueryParams
