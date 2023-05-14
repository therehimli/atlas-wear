interface IButtonProps {
  text: string
  bgcolor: string
  textcolor: string
  hoverbgcolor: string
  onSubmit?: () => void
}

const Button: React.FC<IButtonProps> = ({
  text,
  bgcolor,
  hoverbgcolor,
  textcolor,
  onSubmit,
}) => {
  const onSubmitHandler = () => {
    if (onSubmit) {
      onSubmit()
    }
  }

  return (
    <button
      onClick={() => onSubmitHandler()}
      className={`cursor-pointer w-full py-[13px] px-5 rounded-full text-xl font-bold text-center ${textcolor} ${bgcolor} ${hoverbgcolor}`}
    >
      {text}
    </button>
  )
}

export default Button
