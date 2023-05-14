import { categoryList } from '@/data/categoryList'
import { AiOutlineRight } from 'react-icons/ai'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div className="flex flex-col justify-center text-[17px]">
      <div className="flex cursor-pointer items-center gap-2 mb-3">
        <div className="font-bold">Categories</div>
        <AiOutlineRight />
      </div>
      <div>
        {categoryList.map((category) => (
          <CategoryItem {...category} key={category.id} />
        ))}
      </div>
    </div>
  )
}

export default Categories
