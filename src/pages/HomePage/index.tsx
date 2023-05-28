import ItemList from './ItemLists/ItemList'
import Categories from './categories/Categories'

const HomePage = () => {
  return (
    <>
      <div className="sm:flex 2xl:flex-col gap-3">
        <aside>
          <Categories />
        </aside>
        <main className="px-16 py-10">
          <ItemList />
        </main>
      </div>
    </>
  )
}

export default HomePage
