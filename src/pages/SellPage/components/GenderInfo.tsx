import { FC } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface GenderInfoProps {
  register: UseFormRegister<FieldValues>
  errors?: FieldErrors
}

const GenderInfo: FC<GenderInfoProps> = ({ register, errors }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <h3>Выберите пол</h3>
      <div className="flex justify-between items-center gap-4">
        <label className="flex items-center gap-2 p-2 border-2 rounded-full">
          <input
            type="radio"
            value="Мужская"
            className="w-5 h-5"
            {...register('gender', { required: 'Please choose type' })}
          />
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/color/48/standing-man.png"
            alt="standing-woman"
          />
          <div className="text-center text-[18px]">Мужская</div>
        </label>

        <label className="flex items-center gap-2 p-2 border-2 rounded-full">
          <input
            type="radio"
            value="Женская"
            className="w-5 h-5"
            {...register('gender', { required: 'Выберите пол' })}
          />
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/color/48/standing-woman.png"
            alt="standing-man"
          />
          <div className="text-center text-[18px]">Женская</div>
        </label>
        <label className="flex items-center gap-2 p-2 border-2 rounded-full">
          <input
            type="radio"
            value="unisex"
            className="w-5 h-5"
            {...register('gender', { required: 'Please choose type' })}
          />

          <img
            width="20"
            height="20"
            src="https://img.icons8.com/color/48/unisex--v2.png"
            alt="unisex--v2"
          />
          <div className="text-center text-[18px]">Унисекс</div>
        </label>
        <label className="flex items-center gap-2 p-2 border-2 rounded-full">
          <input type="radio" className="w-5 h-5" value="kid" />
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/color/48/girl.png"
            alt="child"
          />
          <div className="text-center text-[18px]">Детская</div>
        </label>
      </div>
      {errors?.gender && errors.gender.type === 'required' && (
        <p className="text-red-600 self-start text-[14px] ml-7">
          Пожалуйста выберите пол.
        </p>
      )}
    </div>
  )
}

export default GenderInfo
