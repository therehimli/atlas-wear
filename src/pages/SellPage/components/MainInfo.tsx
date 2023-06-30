import { FC } from 'react'
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import {
  sizeList,
  selectStyles,
  colorsList,
  deliveryMethodList,
  cityList,
  categoryListRu,
  categoryListEn,
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
  const { t } = useTranslation()

  const categoryList =
    localStorage.getItem('i18nextLng') === 'ru'
      ? categoryListRu
      : categoryListEn

  return (
    <>
      <div className="flex flex-col gap-1">
        <Input
          register={register}
          label={t('title')}
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
            {t('title-required')}
          </p>
        )}
      </div>
      <div>
        <Input
          register={register}
          label={t('price')}
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
            {t('price-required')}
          </p>
        )}
        {errors?.price && errors.price.type === 'pattern' && (
          <p className="text-red-600 self-start text-[14px] ml-4">
            {t('price-validation')}
          </p>
        )}
      </div>
      <div>
        <Input
          register={register}
          label={t('email')}
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
            {t('email-required')}
          </p>
        )}
        {errors?.contactEmail && errors.contactEmail.type === 'pattern' && (
          <p className="text-red-600 self-start text-[14px] ml-4">
            {t('email-correct')}
          </p>
        )}
      </div>
      <div>
        <Input
          register={register}
          label={t('contact-number')}
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
            {t('number-required')}
          </p>
        )}
        {errors?.contactNumber && errors.contactNumber.type === 'pattern' && (
          <p className="text-red-600 self-start text-[14px] ml-4">
            {t('price-validation')}
          </p>
        )}
      </div>

      <Controller
        control={control}
        defaultValue="Please select something"
        name="sizes"
        render={({ field: { onChange, value } }: any) => (
          <CustomSelect
            placeholder={t('choose-size')}
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
            placeholder={t('choose-color')}
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
            placeholder={t('delivery-method')}
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
              placeholder={t('choose-category')}
              options={categoryList}
              styles={selectStyles}
              isMulti={false}
              onChange={onChange}
              value={value}
            />
            {errors?.category && errors.category.type === 'required' && (
              <p className="text-red-600 self-start text-[14px] ml-4">
                {t('category-required')}
              </p>
            )}
          </div>
        )}
      />

      <Controller
        control={control}
        name="city"
        rules={{ required: true }}
        render={({ field: { onChange, value } }: any) => (
          <div className="w-full">
            <CustomSelect
              placeholder={t('choose-city')}
              options={cityList}
              styles={selectStyles}
              isMulti={false}
              onChange={onChange}
              value={value}
            />
            {errors?.city && errors.city.type === 'required' && (
              <p className="text-red-600 self-start text-[14px] ml-4">
                {t('city-required')}
              </p>
            )}
          </div>
        )}
      />
    </>
  )
}

export default MainInfo
