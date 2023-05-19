import { FC } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { MdAlternateEmail } from 'react-icons/md'
import { FaFacebookF } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
import 'react-toastify/dist/ReactToastify.css'

import Input from '@/UI/Input'
import Button from '@/UI/Button'
import SocialButton from '@/UI/SocialButton'
import useToggleModalStore from '@/store/useModalToggle'

interface loginBodyProps {
  loginHandler: () => void
  email: string
  password: string
  setEmail: (email: string) => void
  setPassword: (password: string) => void
}

const LoginBody: FC<loginBodyProps> = ({
  loginHandler,
  email,
  password,
  setEmail,
  setPassword,
}) => {
  const toggleModal = useToggleModalStore()

  const onToggleButton = () => {
    toggleModal.toggleButton(2)
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col gap-5 items-center w-full">
        <Input setValue={setEmail} value={email} label="Email" />
        <Input setValue={setPassword} value={password} label="Password" />
        <Button
          textcolor="text-white"
          text="Sign in"
          bgcolor="bg-orange-700"
          hoverbgcolor="hover:bg-orange-600"
          onSubmit={loginHandler}
        />
      </div>

      <div className="flex items-center flex-col gap-2">
        <div className="text-neutral-500 text-sm">Or continue through</div>
        <div className="flex items-center gap-3">
          <SocialButton icon={FcGoogle} />
          <SocialButton icon={SlSocialVkontakte} />
          <SocialButton icon={FaFacebookF} />
          <SocialButton icon={MdAlternateEmail} />
        </div>
      </div>

      <div className="h-[1px] w-full bg-neutral-300"></div>

      <div className="flex items-center flex-col gap-2">
        <Button
          textcolor="text-black"
          onSubmit={onToggleButton}
          text="Create an account"
          bgcolor="bg-neutral-300"
          hoverbgcolor="hover:bg-neutral-400"
        />
        <div className="font-bold text-sm border-b-[1px] cursor-pointer border-black line-clamp-1">
          Need help?
        </div>
      </div>
    </div>
  )
}

export default LoginBody
