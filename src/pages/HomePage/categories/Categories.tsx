import { AiOutlineRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import useLocalStorage from '@/hooks/useLocalStorage'
import { categoryList } from '@/data/listData'
import './categories.css'
import useSearchState from '@/store/useSearchState'

const Categories = () => {
  const [_, setStoragedCategory] = useLocalStorage('category', '')
  const { setChange } = useSearchState()

  const navigate = useNavigate()

  function onClickCategory(category: string) {
    setStoragedCategory(category)
    localStorage.removeItem('search')

    setTimeout(() => {
      navigate('/search')
    }, 1)
  }

  return (
    <div className="flex flex-col justify-center text-[17px] mt-5 sticky top-16 min-w-[130px]">
      <div className="flex items-center gap-2 mb-3">
        <div className="font-bold">Категории</div>

        <AiOutlineRight />
      </div>
      <div className="flex flex-col">
        {categoryList.map((category) => (
          <div
            key={category.id}
            className="py-3 rounded-2x cursor-pointer hover-underline-animation"
            onClick={() => onClickCategory(category.value)}
          >
            {category.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
