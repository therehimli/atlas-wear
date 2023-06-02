import { FC } from 'react'
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'

import {
  sizeList,
  selectStyles,
  categoryList,
  colorsList,
  deliveryMethodList,
} from '@/data/listData'
import CustomSelect from './CustomSelect'
import Input from '@/UI/Input'
import { IColorsList } from '@/types/listTypes'

interface MainInfoProps {
  register: UseFormRegister<FieldValues>
  errors?: FieldErrors
  control: Control<FieldValues>
}

const MainInfo: FC<MainInfoProps> = ({ register, errors, control }) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <Input
          register={register}
          label="Название"
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
            Введите название одежды
          </p>
        )}
      </div>
      <div>
        <Input
          register={register}
          label="Цена"
          formatPrice={true}
          id="price"
          control={control}
          options={{
            required: true,
            pattern: /^[0-9]*\.?[0-9]*$/,
          }}
          errors={errors}
        />
        {errors?.price && errors.price.type === 'required' && (
          <p className="text-red-600 self-start text-[14px] ml-4">
            Введите цену одежды.
          </p>
        )}
        {errors?.price && errors.price.type === 'pattern' && (
          <p className="text-red-600 self-start text-[14px] ml-4">
            Введите правильные значения
          </p>
        )}
      </div>
      <div>
        <Input
          register={register}
          label="Почта"
          formatPrice={false}
          id="contactEmail"
          control={control}
          options={{
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
          }}
          errors={errors}
        />
        {errors?.contactEmail && errors.contactEmail.type === 'required' && (
          <p className="text-red-600 self-start text-[14px] ml-4">
            Пожалуйства заполните поле
          </p>
        )}
        {errors?.contactEmail && errors.contactEmail.type === 'pattern' && (
          <p className="text-red-600 self-start text-[14px] ml-4">
            Введите правильный email
          </p>
        )}
      </div>
      <div>
        <Input
          register={register}
          label="Номер телефона"
          formatPrice={false}
          id="contactNumber"
          control={control}
          options={{
            required: true,
            pattern: /^[0-9]*\.?[0-9]*$/,
          }}
          errors={errors}
        />
        {errors?.contactNumber && errors.contactNumber.type === 'required' && (
          <p className="text-red-600 self-start text-[14px] ml-4">
            Введите номер для связи.
          </p>
        )}
        {errors?.contactNumber && errors.contactNumber.type === 'pattern' && (
          <p className="text-red-600 self-start text-[14px] ml-4">
            Введите правильные значения
          </p>
        )}
      </div>

      <Controller
        control={control}
        defaultValue="Please select something"
        name="sizes"
        render={({ field: { onChange, value } }: any) => (
          <CustomSelect
            placeholder="Выберите размеры"
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
            placeholder="Выберите цвета"
            options={colorsList}
            onChange={onChange}
            value={value}
            isMulti={true}
            formatOptionLabel={(option: IColorsList) => (
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
        name="delivery"
        render={({ field: { onChange, value } }: any) => (
          <CustomSelect
            placeholder="Способ доставки"
            options={deliveryMethodList}
            onChange={onChange}
            value={value}
            isMulti={false}
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
              placeholder="Выберите категорию"
              options={categoryList}
              styles={selectStyles}
              isMulti={false}
              onChange={onChange}
              value={value}
            />
            {errors?.category && errors.category.type === 'required' && (
              <p className="text-red-600 self-start text-[14px] ml-4">
                Пожалуйста выберите категорию
              </p>
            )}
          </div>
        )}
      />
    </>
  )
}

export default MainInfo
