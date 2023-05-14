import React from 'react'

import ItemList from '../components/ItemLists/ItemList'
import Categories from '../components/categories/Categories'

const HomePage = () => {
  return (
    <>
      <div className="sm:flex 2xl:flex-col gap-3">
        <aside>
          <Categories />
        </aside>
        <main>
          <ItemList />
        </main>
      </div>
    </>
  )
}

export default HomePage
