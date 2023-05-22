import { StylesConfig } from 'react-select'
import { nanoid } from 'nanoid'

import {
  ICategoryList,
  IColorsList,
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
  { id: nanoid(), label: 'Pants', value: 'pants' },
  { id: nanoid(), value: 'sweaters', label: 'Sweaters' },
  { id: nanoid(), value: 'shirts', label: 'Shirts' },
  { id: nanoid(), value: 'jackets', label: 'Jackets' },
  { id: nanoid(), label: 'Jeans', value: 'jeans' },
  { id: nanoid(), label: 'Underwear', value: 'underwear' },
  { id: nanoid(), label: 'Socks', value: 'socks' },
  { id: nanoid(), label: 'Shorts', value: 'shorts' },
  { id: nanoid(), value: 'suits', label: 'Suits' },
]

export const languagesList: ILanguageList[] = [
  { id: nanoid(), value: 'русский', label: 'Русский язык' },
  { id: nanoid(), value: 'english', label: 'English' },
]

export const colorsList: IColorsList[] = [
  { id: nanoid(), value: 'white', label: 'White', color: 'bg-white' },
  { id: nanoid(), value: 'black', label: 'Black', color: 'bg-black' },
  { id: nanoid(), value: 'orange', label: 'Orange', color: 'bg-orange-500' },
  { id: nanoid(), value: 'blue', label: 'Blue', color: 'bg-blue-600' },
  { id: nanoid(), value: 'red', label: 'Red', color: 'bg-red-600' },
  { id: nanoid(), value: 'yellow', label: 'Yellow', color: 'bg-yellow-400' },
  { id: nanoid(), value: 'lime', label: 'Lime', color: 'bg-lime-400' },
  { id: nanoid(), value: 'grey', label: 'Grey', color: 'bg-neutral-500' },
  { id: nanoid(), value: 'sky', label: 'Sky', color: 'bg-sky-400' },
  { id: nanoid(), value: 'purple', label: 'Purple', color: 'bg-purple-700' },
  { id: nanoid(), value: 'violet', label: 'Violet', color: 'bg-violet-600' },
  { id: nanoid(), value: 'green', label: 'Green', color: 'bg-green-800' },
  { id: nanoid(), value: 'pink', label: 'Pink', color: 'bg-fuchsia-600' },
]
