import { ReactNode } from 'react'

interface IButtonProps {
  bgcolor: string
  textcolor: string
  hoverbgcolor?: string
  onSubmit?: () => void
  disabled?: boolean
  children: ReactNode
  type?: 'button' | 'submit' | 'reset'
}

const Button: React.FC<IButtonProps> = ({
  bgcolor,
  hoverbgcolor,
  textcolor,
  onSubmit,
  type,
  disabled,
  children,
}) => {
  const onSubmitHandler = () => {
    if (onSubmit) {
      onSubmit()
    }
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={() => onSubmitHandler()}
      className={`cursor-pointer w-full py-[13px] px-5 rounded-full text-xl font-bold text-center ${textcolor} ${bgcolor} ${hoverbgcolor}`}
    >
      {children}
    </button>
  )
}

export default Button
