import { AiOutlineRight } from 'react-icons/ai'
import { useEffect } from 'react'

import { categoryList } from '@/data/categoryList'
import useCategoryItem from '@/store/useCategoryItem'
import useUserInfo from '@/store/useUserInfo'
import useLocalStorage from '@/hooks/useLocalStorage'

const Categories = () => {
  const [storagedCategory, setStoragedCategory] = useLocalStorage(
    'category',
    ''
  )

  const categoryItem = useCategoryItem()
  const { userInfo } = useUserInfo()

  useEffect(() => {
    categoryItem.setCategory(storagedCategory)
  }, [storagedCategory])

  return (
    <div className="flex flex-col justify-center text-[17px]">
      <div className="flex items-center gap-2 mb-3">
        <div className="font-bold">Categories {userInfo.email}</div>
        <AiOutlineRight />
      </div>
      <div>
        {categoryList.map((category) => (
          <div
            key={category.id}
            className="py-3 rounded-2xl hover:text-red-900 hover:font-bold cursor-pointer"
            onClick={() => setStoragedCategory(category.category)}
          >
            {category.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
