import { FC } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

interface GenderInfoProps {
  register: UseFormRegister<FieldValues>
  errors?: FieldErrors
  setValue: (name: string, value: unknown, config?: Object) => void
  watch: (names?: string | string[]) => unknown
}

const GenderInfo: FC<GenderInfoProps> = ({
  register,
  errors,
  setValue,
  watch,
}) => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center gap-1">
      <h3>Выберите пол</h3>
      <div className="flex justify-between items-center gap-4">
        <label
          className={`flex items-center gap-2 p-2 border-2 rounded-full ${
            watch('gender') === 'Мужская' ? 'bg-blue-300' : 'bg-white'
          }`}
          onClick={() => setValue('gender', 'Мужская')}
        >
          <img
            width="20"
            height="20"
            className="ml-3"
            src="https://img.icons8.com/color/48/standing-man.png"
            alt="standing-woman"
          />
          <div className="text-center text-[18px]">{t('man')}</div>
          <input
            type="radio"
            value="Мужская"
            className="w-5 h-5 invisible"
            {...register('gender', { required: 'Please choose type' })}
          />
        </label>

        <label
          className={`flex items-center gap-2 p-2 border-2 rounded-full ${
            watch('gender') === 'Женская' ? 'bg-blue-300' : 'bg-white'
          }`}
          onClick={() => setValue('gender', 'Женская')}
        >
          <img
            width="20"
            className="ml-3"
            height="20"
            src="https://img.icons8.com/color/48/standing-woman.png"
            alt="standing-man"
          />
          <div className="text-center text-[18px]">{t('woman')}</div>
          <input
            type="radio"
            value="Женская"
            className="w-5 h-5 invisible"
            {...register('gender', { required: 'Выберите пол' })}
          />
        </label>
        <label
          className={`flex items-center gap-2 p-2 border-2 rounded-full ${
            watch('gender') === 'Унисекс' ? 'bg-blue-300' : 'bg-white'
          }`}
          onClick={() => setValue('gender', 'Унисекс')}
        >
          <img
            width="20"
            height="20"
            className="ml-3"
            src="https://img.icons8.com/color/48/unisex--v2.png"
            alt="unisex--v2"
          />
          <div className="text-center text-[18px]">{t('unisex')}</div>
          <input
            type="radio"
            value="Унисекс"
            className="w-5 h-5 invisible"
            {...register('gender', { required: 'Please choose type' })}
          />
        </label>
        <label
          className={`flex items-center gap-2 p-2 border-2 rounded-full ${
            watch('gender') === 'Детская' ? 'bg-blue-300' : 'bg-white'
          }`}
          onClick={() => setValue('gender', 'Детская')}
        >
          <img
            width="20"
            className="ml-3"
            height="20"
            src="https://img.icons8.com/color/48/girl.png"
            alt="child"
          />
          <div className="text-center text-[18px]">{t('kid')}</div>
          <input
            type="radio"
            className="w-5 h-5 invisible"
            value="Детская"
            {...register('gender', { required: 'Please choose type' })}
          />
        </label>
      </div>
      {errors?.gender && errors.gender.type === 'required' && (
        <p className="text-red-600 self-start text-[14px] ml-7">
          {t('gender-required')}
        </p>
      )}
    </div>
  )
}

export default GenderInfo
