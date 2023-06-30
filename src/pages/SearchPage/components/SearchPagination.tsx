import { FC } from 'react'

import { Pagination } from '@mui/material'

interface SearchPaginationProps {
  page: number
  changePageHandler: any
}

const SearchPagination: FC<SearchPaginationProps> = ({
  page,
  changePageHandler,
}) => {
  return (
    <Pagination
      count={10}
      page={page}
      onChange={changePageHandler}
      variant="outlined"
      color="primary"
      size="large"
      className="self-center mt-16"
    />
  )
}

export default SearchPagination
