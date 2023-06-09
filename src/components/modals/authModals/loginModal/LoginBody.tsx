import { FC, useRef, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { FieldValues, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import 'react-toastify/dist/ReactToastify.css'

import Input from '@/UI/Input'
import Button from '@/UI/Button'
import SocialButton from '@/UI/SocialButton'
import useToggleModalStore from '@/store/useModalToggle'
import useUserLogin from '@/store/useUserLogin'
import { userLoginHandler } from '@/api/users'

interface LoginBodyProps {
  setError: (error: string) => void
}
const clientId =
  '237958465621-fmrvh2091tbu9tmhjf2ih8th44nob55u.apps.googleusercontent.com'

const LoginBody: FC<LoginBodyProps> = ({ setError }) => {
  const { toggleButton } = useToggleModalStore()
  const { setUserLogin } = useUserLogin()
  const [showPassword, setShowPassword] = useState('password')
  const { t } = useTranslation()

  const buttonRef = useRef<HTMLDivElement | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const loginHandler = async (data: FieldValues) => {
    const { email, password } = data

    try {
      const { data } = await userLoginHandler(email, password)
      setUserLogin(data)
      localStorage.setItem('token', data.email)

      reset()
      toggleButton(0)
      toast.success('Log in successfully')
    } catch (error) {
      if (error instanceof AxiosError) setError(error.response?.data)
    }
  }

  const onToggleButton = () => {
    toggleButton(2)
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="flex flex-col gap-5 items-center w-full"
      >
        <div className="flex flex-col gap-1 w-full">
          <Input
            register={register}
            id="email"
            label={t('email')}
            options={{
              required: 'Please enter your email',
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            }}
            errors={errors}
            disabled={false}
            control={control}
            type="text"
          />
          {errors.email && errors.email.type === 'required' && (
            <p className="text-red-600 self-start text-[14px] ml-4">
              {t('email-required')}
            </p>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <p className="text-red-600 self-start text-[14px] ml-4">
              {t('email-correct')}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Input
            register={register}
            id="password"
            label={t('password')}
            control={control}
            options={{
              required: 'Please enter your password',
            }}
            errors={errors}
            disabled={false}
            type={showPassword}
            setShowPassword={setShowPassword}
            autoComplete="on"
          />
          {errors.password && errors.password.type === 'required' && (
            <p className="text-red-600 self-start text-[14px] ml-4">
              {t('password-required')}
            </p>
          )}
        </div>
        <Button
          textcolor="text-white"
          bgcolor="bg-orange-700"
          hoverbgcolor="hover:bg-orange-600"
          type="submit"
        >
          <div ref={buttonRef}>{t('login-signup')}</div>
        </Button>
      </form>

      <div className="flex items-center flex-col gap-2">
        <div className="text-neutral-500 text-sm">{t('or-continue')}</div>
        <div className="flex items-center gap-3">
          <SocialButton icon={FcGoogle} />
          <SocialButton icon={SlSocialVkontakte} />
          <SocialButton icon={FaFacebookF} />
        </div>
      </div>

      <div className="h-[1px] w-full bg-neutral-300"></div>

      <div className="flex items-center flex-col gap-2">
        <Button
          textcolor="text-black"
          onSubmit={onToggleButton}
          bgcolor="bg-neutral-300"
          hoverbgcolor="hover:bg-neutral-400"
        >
          <div>{t('create-account')}</div>
        </Button>
        <div className="font-bold text-sm border-b-[1px] cursor-pointer border-black line-clamp-1">
          {t('need-help')}
        </div>
      </div>
    </div>
  )
}

export default LoginBody
