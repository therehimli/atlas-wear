import SearchModalItem from './SearchModalItem'

const SearchModal = () => {
  const searchItems = [
    { id: 1, text: 'Велосипед' },
    { id: 1, text: 'Телефон' },
    { id: 1, text: 'Ножницы' },
    { id: 1, text: 'Футболка' },
  ]

  return (
    <div className="flex flex-col rounded-2xl shadow-2xl transition transform bg-white items-center border-2 border-black px-2 py-4 w-[500px]">
      <div className="flex w-full items-center justify-between mb-4">
        <p className="text-xl font-bold">Больше интересного</p>
        <span className="underline font-bold text-[14px] cursor-pointer">
          Еще больше
        </span>
      </div>
      <SearchModalItem text="бутылка" />
      {searchItems.map(({ text }) => (
        <SearchModalItem key={text} text={text} />
      ))}
    </div>
  )
}

export default SearchModal
