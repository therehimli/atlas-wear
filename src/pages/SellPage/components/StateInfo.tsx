import { FC } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface StateInfoProps {
  register: UseFormRegister<FieldValues>
}

const StateInfo: FC<StateInfoProps> = ({ register }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <h3>Выберите состояние</h3>
      <div className="flex justify-between items-center gap-4">
        <label className="flex items-center gap-2 p-2 border-2 rounded-full">
          <input
            type="radio"
            value="Новое"
            className="w-5 h-5"
            {...register('state')}
          />
          <div className="text-center text-[18px]">Новое</div>
        </label>

        <label className="flex items-center gap-2 p-2 border-2 rounded-full">
          <input
            type="radio"
            value="Ношенное"
            className="w-5 h-5"
            {...register('state')}
          />
          <div className="text-center text-[18px]">Ношенное</div>
        </label>
      </div>
    </div>
  )
}

export default StateInfo
