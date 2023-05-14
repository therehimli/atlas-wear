import { FC, createRef } from 'react'

interface InputProps {
  label: string
  value: string
  setValue: (phone: string) => void
}

const Input: FC<InputProps> = ({ label, value, setValue }) => {
  const inputRef = createRef<HTMLInputElement>()

  function focusInput() {
    inputRef.current?.focus()
  }

  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder=""
        ref={inputRef}
        type="text"
        className={`peer w-full p-4 text-[18px] pt-6 font-light bg-white border-2 rounded-full outline-none transition disabled:opacity-70 disabled:cursor-not-allowed hover:border-black focus:border-black`}
      />
      <label
        onClick={focusInput}
        className={`absolute cursor-text text-md duration-150 transform -translate-y-1 top-7 z-10 origin-[0] peer-placeholder-shown:scale-100 left-6 text-[16px] text-neutral-500 peer-placeholder-shown:translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6 ${
          value ? '-translate-y-[24px] scale-75' : ''
        }`}
      >
        {label}
      </label>
    </div>
  )
}

export default Input
