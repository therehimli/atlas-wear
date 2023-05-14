import React from 'react'

interface ISearchModalItemProps {
  text: string
}

const SearchModalItem: React.FC<ISearchModalItemProps> = ({ text }) => {
  return (
    <div
      className={`cursor-pointer hover:bg-neutral-200 text-[16px] w-full  p-2 rounded-3xl`}
    >
      {text}
    </div>
  )
}

export default SearchModalItem
