import { StylesConfig } from 'react-select'
import { nanoid } from 'nanoid'

import {
  ICategoryList,
  IColorsList,
  IDeliveryMethodList,
  ILanguageList,
  ISizeList,
} from '@/types/listTypes'

export const selectStyles: StylesConfig<ISizeList, true> = {
  option: (defaultStyles) => ({
    ...defaultStyles,
    color: 'black',
    cursor: 'pointer',
    borderRadius: '10px',
  }),

  control: (defaultStyles) => ({
    ...defaultStyles,
    backgroundColor: '',
    padding: '16px',
    boxShadow: 'none',
    borderRadius: '999px',
    border: '2px solid rgba(128, 128, 128, 0.2)',
    '&:hover': {
      borderColor: 'black',
    },
  }),

  multiValue: (defaultStyles) => ({
    ...defaultStyles,
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
  }),
}

export const sizeList: ISizeList[] = [
  { id: nanoid(), value: 'xxs', label: 'XXS' },
  { id: nanoid(), value: 'xs', label: 'XS' },
  { id: nanoid(), value: 's', label: 'S' },
  { id: nanoid(), value: 'm', label: 'M' },
  { id: nanoid(), value: 'l', label: 'L' },
  { id: nanoid(), value: 'xl', label: 'XL' },
  { id: nanoid(), value: 'xxl', label: 'XXL' },
  { id: nanoid(), value: 'xxxl', label: 'XXXL' },
]

export const categoryList: ICategoryList[] = [
  { id: nanoid(), value: 'штаны', label: 'Штаны' },
  { id: nanoid(), value: 'свитеры', label: 'Свитеры' },
  { id: nanoid(), value: 'футболки', label: 'Футболки' },
  { id: nanoid(), value: 'жакеты', label: 'Жакеты' },
  { id: nanoid(), value: 'джинсы', label: 'Джинсы' },
  { id: nanoid(), value: 'нижнее бельё', label: 'Нижнее бельё' },
  { id: nanoid(), value: 'носки', label: 'Носки' },
  { id: nanoid(), value: 'шорты', label: 'Шорты' },
  { id: nanoid(), value: 'костюмы', label: 'Костюмы' },
]

export const languagesList: ILanguageList[] = [
  { id: nanoid(), value: 'русский', label: 'Русский язык' },
  { id: nanoid(), value: 'english', label: 'English' },
]

export const deliveryMethodList: IDeliveryMethodList[] = [
  { id: nanoid(), value: 'Бесплатная', label: 'Бесплатная' },
  { id: nanoid(), value: 'Платная', label: 'Платная' },
  { id: nanoid(), value: 'Самовывоз', label: 'Самовывоз' },
]

export const colorsList: IColorsList[] = [
  { id: nanoid(), value: 'bg-white', label: 'Белый', color: 'bg-white' },
  { id: nanoid(), value: 'bg-black', label: 'Чёрный', color: 'bg-black' },
  {
    id: nanoid(),
    value: 'bg-orange-500',
    label: 'Оранжевый',
    color: 'bg-orange-500',
  },
  { id: nanoid(), value: 'bg-blue-600', label: 'Синий', color: 'bg-blue-600' },
  { id: nanoid(), value: 'bg-red-600', label: 'Красный', color: 'bg-red-600' },
  {
    id: nanoid(),
    value: 'bg-yellow-400',
    label: 'Жёлтый',
    color: 'bg-yellow-400',
  },
  {
    id: nanoid(),
    value: 'bg-lime-400',
    label: 'Лаймовый',
    color: 'bg-lime-400',
  },
  {
    id: nanoid(),
    value: 'bg-neutral-500',
    label: 'Серый',
    color: 'bg-neutral-500',
  },
  { id: nanoid(), value: 'bg-sky-400', label: 'Голубой', color: 'bg-sky-400' },
  {
    id: nanoid(),
    value: 'bg-purple-700',
    label: 'Фиолетовый',
    color: 'bg-purple-700',
  },
  {
    id: nanoid(),
    value: 'bg-violet-600',
    label: 'Лиловый',
    color: 'bg-violet-600',
  },
  {
    id: nanoid(),
    value: 'bg-green-800',
    label: 'Зеленый',
    color: 'bg-green-800',
  },
  {
    id: nanoid(),
    value: 'bg-fuchsia-600',
    label: 'Розовый',
    color: 'bg-fuchsia-600',
  },
]
