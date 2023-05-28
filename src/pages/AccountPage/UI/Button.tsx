import { ReactNode } from 'react'

interface IButtonProps {
  bgcolor?: string
  textcolor?: string
  hoverbgcolor?: string
  onSubmit?: () => void
  children: ReactNode
}

const Button: React.FC<IButtonProps> = ({
  bgcolor,
  hoverbgcolor,
  textcolor,
  children,
}) => {
  return (
    <button
      className={`cursor-pointer w-full py-[13px] px-5 text-xl font-bold text-center rounded-full ${textcolor} ${bgcolor} ${hoverbgcolor}`}
    >
      {children}
    </button>
  )
}

export default Button
