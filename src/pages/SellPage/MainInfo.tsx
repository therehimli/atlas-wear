import { FC } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

import {
  sizeList,
  selectStyles,
  categoryList,
  colorsList,
} from '@/data/listData'
import CustomSelect from './CustomSelect'
import Input from '@/UI/Input'

interface MainInfoProps {
  register: UseFormRegister<FieldValues>
  errors?: FieldErrors
}

const MainInfo: FC<MainInfoProps> = ({ register, errors }) => {
  return (
    <>
      <Input
        register={register}
        label="Title"
        formatPrice={false}
        id="title"
        required={true}
        errors={errors}
      />
      <Input
        register={register}
        label="Price"
        formatPrice={true}
        id="price"
        required={true}
        errors={errors}
      />

      <CustomSelect
        placeholder="Select sizes"
        options={sizeList}
        styles={selectStyles}
        isMulti={true}
      />
      <CustomSelect
        placeholder="Select colors"
        options={colorsList}
        isMulti={true}
        formatOptionLabel={(option: any) => (
          <div
            className="
          flex justify-between items-center cursor-pointer gap-1"
          >
            <div>{option.label}</div>
            <div
              className={`text-xl border-[0.5px] border-solid border-black rounded-full w-4 h-4 ${option.color}`}
            ></div>
          </div>
        )}
        styles={selectStyles}
      />
      <CustomSelect
        placeholder="Select category"
        options={categoryList}
        styles={selectStyles}
        isMulti={false}
      />
    </>
  )
}

export default MainInfo
