import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { MdAlternateEmail } from 'react-icons/md'
import { FaFacebookF } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
import { toast } from 'react-toastify'

import Input from '../../UI/Input'
import Button from '../../UI/Button'
import SocialButton from '../../UI/SocialButton'
import useToggleModalStore from '@/store/useModalToggle'

const RegisterBody = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const toggleModal = useToggleModalStore()

  const onToggleButton = () => {
    toggleModal.toggleButton(1)
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col gap-5 items-center w-full">
        <Input label="Почта" value={email} setValue={setEmail} />
        <Input label="Пароль" value={password} setValue={setPassword} />
        <Button
          textcolor="text-white"
          text="Create"
          bgcolor="bg-orange-700"
          hoverbgcolor="hover:bg-orange-600"
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
          onSubmit={onToggleButton}
          text="Already have an account?"
          bgcolor="bg-neutral-300"
          textcolor="text-black"
          hoverbgcolor="hover:bg-neutral-400"
        />
        <div className="font-bold text-sm border-b-[1px] cursor-pointer border-black line-clamp-1">
          Need help?
        </div>
      </div>
    </div>
  )
}

export default RegisterBody
