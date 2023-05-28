import { AiOutlineRight } from 'react-icons/ai'
import { useEffect } from 'react'

import useCategoryItem from '@/store/useCategoryItem'
import useLocalStorage from '@/hooks/useLocalStorage'
import { categoryList } from '@/data/listData'

const Categories = () => {
  const [storagedCategory, setStoragedCategory] = useLocalStorage(
    'category',
    ''
  )

  const categoryItem = useCategoryItem()

  useEffect(() => {
    categoryItem.setCategory(storagedCategory)
  }, [storagedCategory])

  return (
    <div className="flex flex-col justify-center text-[17px] mt-5 sticky top-16 min-w-[130px]">
      <div className="flex items-center gap-2 mb-3">
        <div className="font-bold">Категории</div>
        <AiOutlineRight />
      </div>
      <div>
        {categoryList.map((category) => (
          <div
            key={category.id}
            className="py-3 rounded-2xl hover:text-red-900 hover:font-bold cursor-pointer"
            onClick={() => setStoragedCategory(category.value)}
          >
            {category.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
