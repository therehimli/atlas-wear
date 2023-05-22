import { FC } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface DescriptionInfoProps {
  id: string
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors?: FieldErrors
}

const DescriptionInfo: FC<DescriptionInfoProps> = ({
  register,
  id,
  required,
  errors,
}) => {
  return (
    <div className="w-full">
      <textarea
        {...register(id, { required })}
        className={`peer w-full rounded-xl p-4 text-[18px] pt-6 font-light bg-white border-2 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed hover:border-black focus:border-black 
          ${errors && errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${
            errors && errors[id]
              ? 'focus:border-rose-500'
              : 'focus:border-black'
          }`}
        cols={30}
        rows={10}
        placeholder="Description..."
      ></textarea>
    </div>
  )
}

export default DescriptionInfo
