import { productInstance } from '.'

export async function getSearchProductsHandler(
  minPrice: string,
  maxPrice: string,
  gender: string,
  match: string,
  category: string,
  page: number
) {
  const { data } = await productInstance.get(
    `/search-products?minPrice=${minPrice}&maxPrice=${maxPrice}&gender=${gender}&match=${match}&category=${category}&page=${
      page * 8
    }`
  )
  return data
}
