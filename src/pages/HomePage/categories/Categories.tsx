import { AiOutlineRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import useLocalStorage from '@/hooks/useLocalStorage'
import { IListsType } from '@/types/listTypes'
import { categoryListRu, categoryListEn } from '@/data/listData'
import './categories.css'

const Categories = () => {
  const [_, setStoragedCategory] = useLocalStorage('category', '')
  const { t } = useTranslation()

  const navigate = useNavigate()

  function onClickCategory(category: string) {
    setStoragedCategory(category)
    localStorage.removeItem('search')

    setTimeout(() => {
      navigate('/search')
    }, 1)
  }

  const categoryList =
    localStorage.getItem('i18nextLng') === 'ru'
      ? categoryListRu
      : categoryListEn

  return (
    <div className="flex flex-col justify-center text-[17px] mt-5 sticky top-16 min-w-[130px]">
      <div className="flex items-center gap-2 mb-3">
        <div className="font-bold">{t('home-category')}</div>

        <AiOutlineRight />
      </div>
      <div className="flex flex-col">
        {categoryList.map((category: IListsType) => (
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
