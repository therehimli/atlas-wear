import { Category } from '@/types/Category.interface'
import useCategoryItem from '@/store/useCategoryItem'

const CategoryItem = (category: Category) => {
  const categoryItem = useCategoryItem()

  return (
    <div
      className="py-3 rounded-2xl hover:bg-neutral-100 cursor-pointer"
      onClick={() => categoryItem.setCategory(category.value)}
    >
      {category.title}
    </div>
  )
}

export default CategoryItem
