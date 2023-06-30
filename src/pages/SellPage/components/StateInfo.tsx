import { FC } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

interface StateInfoProps {
  register: UseFormRegister<FieldValues>
  setValue: (name: string, value: unknown, config?: Object) => void
  watch: (names?: string | string[]) => unknown
}

const StateInfo: FC<StateInfoProps> = ({ register, setValue, watch }) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center gap-1">
      <h3>Выберите состояние</h3>
      <div className="flex justify-between items-center gap-4">
        <label
          className={`flex items-center gap-2 p-2 border-2 rounded-full ${
            watch('state') === 'Новое' ? 'bg-blue-300' : 'bg-white'
          }`}
          onClick={() => setValue('state', 'Новое')}
        >
          <input
            type="radio"
            value="Новое"
            className="w-5 h-5 invisible"
            {...register('state')}
          />
          <div className="text-center text-[18px] mr-6">{t('new')}</div>
        </label>

        <label
          className={`flex items-center gap-2 p-2 border-2 rounded-full ${
            watch('state') === 'Б/у' ? 'bg-blue-300' : 'bg-white'
          }`}
          onClick={() => setValue('state', 'Б/у')}
        >
          <input
            type="radio"
            value="Б/у"
            className="w-5 h-5 invisible"
            {...register('state')}
          />
          <div className="text-center text-[18px] mr-6">{t('old')}</div>
        </label>
      </div>
    </div>
  )
}

export default StateInfo
