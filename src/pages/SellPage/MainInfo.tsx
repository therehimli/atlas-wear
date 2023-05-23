import { FC } from 'react'
import {
  Controller,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  useWatch,
} from 'react-hook-form'

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
  watch: any
  control: any
}

const MainInfo: FC<MainInfoProps> = ({ register, errors, watch, control }) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <Input
          register={register}
          label="Title"
          formatPrice={false}
          id="title"
          control={control}
          options={{
            required: true,
          }}
          errors={errors}
        />
        {errors?.title && errors.title.type === 'required' && (
          <p className="text-red-600 self-start text-[14px] ml-4">
            Please enter product title.
          </p>
        )}
      </div>
      <div>
        <Input
          register={register}
          label="Price"
          formatPrice={true}
          id="price"
          control={control}
          options={{
            required: true,
            pattern: /^[0-9]+$/,
          }}
          errors={errors}
        />
        {errors?.price && errors.price.type === 'required' && (
          <p className="text-red-600 self-start text-[14px] ml-4">
            Please enter product price.
          </p>
        )}
        {errors?.price && errors.price.type === 'pattern' && (
          <p className="text-red-600 self-start text-[14px] ml-4">
            Please enter number
          </p>
        )}
      </div>

      <Controller
        control={control}
        defaultValue="Please select something"
        name="sizes"
        render={({ field: { onChange, value } }: any) => (
          <CustomSelect
            placeholder="Select sizes"
            options={sizeList}
            styles={selectStyles}
            isMulti={true}
            onChange={onChange}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="colors"
        render={({ field: { onChange, value } }: any) => (
          <CustomSelect
            placeholder="Select colors"
            options={colorsList}
            onChange={onChange}
            value={value}
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
        )}
      />

      <Controller
        control={control}
        name="category"
        rules={{ required: true }}
        render={({ field: { onChange, value } }: any) => (
          <div className="w-full">
            <CustomSelect
              placeholder="Select category"
              options={categoryList}
              styles={selectStyles}
              isMulti={false}
              onChange={onChange}
              value={value}
            />
            {errors?.category && errors.category.type === 'required' && (
              <p className="text-red-600 self-start text-[14px] ml-4">
                Please choose category
              </p>
            )}
          </div>
        )}
      />
    </>
  )
}

export default MainInfo
