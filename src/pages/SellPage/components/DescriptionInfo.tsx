import { FC } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

interface DescriptionInfoProps {
  id: string
  register: UseFormRegister<FieldValues>
}

const DescriptionInfo: FC<DescriptionInfoProps> = ({ register, id }) => {
  const { t } = useTranslation()

  return (
    <div className="w-full flex flex-col gap-1">
      <textarea
        {...register(id)}
        className={`peer w-full rounded-xl p-4 text-[18px] pt-6 font-light bg-white border-2 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed hover:border-black focus:border-black`}
        cols={30}
        rows={10}
        placeholder={`${t('description')}...`}
      />
    </div>
  )
}

export default DescriptionInfo
