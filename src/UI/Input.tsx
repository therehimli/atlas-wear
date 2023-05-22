import { FC, createRef } from 'react'
import { BiDollar } from 'react-icons/bi'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
  id: string
  label: string
  type?: string
  disabled?: boolean
  formatPrice?: boolean
  options: any
  watch: any
  register: UseFormRegister<FieldValues>
  errors?: FieldErrors
}

const Input: FC<InputProps> = ({
  id,
  label,
  type = 'text',
  disabled,
  formatPrice,
  register,
  options,
  errors,
  watch,
}) => {
  const inputRef = createRef<HTMLInputElement>()

  return (
    <div className="relative w-full">
      <input
        {...register(id, options)}
        type={type}
        disabled={disabled}
        className={`peer w-full p-4 text-[18px] pt-6 font-light bg-white border-2 rounded-full outline-none transition disabled:opacity-70 disabled:cursor-not-allowed hover:border-black focus:border-black ${
          formatPrice ? 'pl-9' : 'pl-4'
        }
          ${errors && errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${
            errors && errors[id]
              ? 'focus:border-rose-500'
              : 'focus:border-black'
          }`}
      />
      <label
        className={`absolute cursor-text text-md duration-150 transform -translate-y-1 top-7 z-10 origin-[0] peer-placeholder-shown:scale-100 left-6 text-[16px] text-neutral-500 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 ml-2 peer-focus:-translate-y-6
        ${errors && errors[id] ? 'text-rose-500' : 'text-zinc-400'}
 ${watch(id) ? '-translate-y-[24px] scale-75' : ''}`}
      >
        {label}
      </label>
      {formatPrice && (
        <BiDollar
          size={22}
          className="
            text-neutral-700
            absolute
            top-5
            left-2
            mt-1
          "
        />
      )}
    </div>
  )
}

export default Input
