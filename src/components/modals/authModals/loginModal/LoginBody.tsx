import { FC, FormEvent, KeyboardEvent, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { MdAlternateEmail } from 'react-icons/md'
import { FaFacebookF } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import 'react-toastify/dist/ReactToastify.css'

import Input from '@/UI/Input'
import Button from '@/UI/Button'
import SocialButton from '@/UI/SocialButton'
import useToggleModalStore from '@/store/useModalToggle'
import useUserLogin from '@/store/useUserLogin'
import * as api from '@/api/user'

const LoginBody: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const toggleModal = useToggleModalStore()
  const userLogin = useUserLogin()

  const loginHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const { data } = await api.userLogin(email, password)
      userLogin.setUserLogin(data)

      setEmail('')
      setPassword('')
      toggleModal.toggleButton(0)
      toast.success('Log in successfully')
    } catch (error) {
      if (error instanceof AxiosError) toast.error(error?.response?.data)
    }
  }

  const onEnterDownHandler = async (event: KeyboardEvent<HTMLFormElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      try {
        const { data } = await api.userLogin(email, password)
        userLogin.setUserLogin(data)

        setEmail('')
        setPassword('')
        toggleModal.toggleButton(0)
        toast.success('Log in successfully')
      } catch (error) {
        if (error instanceof AxiosError) toast.error(error?.response?.data)
      }
    }
  }

  const onToggleButton = () => {
    toggleModal.toggleButton(2)
  }

  return (
    <form
      onKeyDown={onEnterDownHandler}
      onSubmit={loginHandler}
      className="flex flex-col items-center gap-5"
    >
      <div className="flex flex-col gap-5 items-center w-full">
        <Input setValue={setEmail} value={email} label="Email" />
        <Input setValue={setPassword} value={password} label="Password" />
        <Button
          textcolor="text-white"
          text="Sign in"
          bgcolor="bg-orange-700"
          hoverbgcolor="hover:bg-orange-600"
          type="submit"
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
    </form>
  )
}

export default LoginBody
