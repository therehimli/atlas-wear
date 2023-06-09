import { useForm, FieldValues } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookF } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
import { FC, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import useToggleModalStore from '@/store/useModalToggle'
import { userRegisterHandler } from '@/api/users'
import { useKeyDown } from '@/hooks/useKeyDown'
import Input from '@/UI/Input'
import Button from '@/UI/Button'
import SocialButton from '@/UI/SocialButton'

interface LoginBodyProps {
  setError: (error: string) => void
}

const RegisterBody: FC<LoginBodyProps> = ({ setError }) => {
  const toggleModal = useToggleModalStore()
  const buttonRef = useRef<HTMLDivElement | null>(null)
  const [showPassword, setShowPassword] = useState('password')
  const { t } = useTranslation()

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
      name: '',
    },
  })

  const registerHandler = async (data: FieldValues) => {
    const { email, password, name } = data

    try {
      await userRegisterHandler(email, password, name)

      reset()
      toggleModal.toggleButton(0)
      toast.success('Account created successfully')
    } catch (error) {
      if (error instanceof Error) setError('Email already used')
    }
  }

  useKeyDown(() => {
    if (buttonRef.current) {
      buttonRef.current.click()
    }
  }, ['Enter'])

  const onToggleButton = () => {
    toggleModal.toggleButton(1)
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="flex flex-col gap-5 items-center w-full"
      >
        <div className="flex flex-col gap-1 w-full">
          <Input
            register={register}
            id="email"
            label={t('email')}
            control={control}
            options={{
              required: 'Please enter your email',
              minLength: 3,
              maxLength: 20,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            }}
            errors={errors}
            disabled={false}
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
            autoComplete="on"
            setShowPassword={setShowPassword}
            type={showPassword}
            control={control}
            options={{
              required: 'Please enter your password',
              minLength: 6,
              pattern:
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])((?=.*[ -\/:-@\[-\`{-~]{1,})).{6,}$/gm,
            }}
            errors={errors}
            disabled={false}
          />
          {errors.password && errors.password.type === 'required' && (
            <p className="text-red-600 self-start text-[14px] ml-4">
              {t('password-required')}
            </p>
          )}
          {errors.password && errors.password.type === 'pattern' && (
            <p className="text-red-600 self-start text-[14px] ml-4">
              {t('password-validation')}
            </p>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <p className="text-red-600 self-start text-[14px] ml-4">
              {t('password-min')}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1 w-full">
          <Input
            register={register}
            id="name"
            label={t('name')}
            control={control}
            options={{
              required: 'Please enter your name',
              minLength: 3,
              maxLength: 20,
            }}
            errors={errors}
            disabled={false}
            type="text"
          />
          {errors.name && errors.name.type === 'required' && (
            <p className="text-red-600 self-start text-[14px] ml-4">
              {t('name-required')}
            </p>
          )}
          {errors.name && errors.name.type === 'minLength' && (
            <p className="text-red-600 self-start text-[14px] ml-4">
              {t('name-min')}
            </p>
          )}
          {errors.name && errors.name.type === 'maxLength' && (
            <p className="text-red-600 self-start text-[14px] ml-4">
              {t('name-max')}
            </p>
          )}
        </div>
        <Button
          textcolor="text-white"
          bgcolor="bg-orange-700"
          hoverbgcolor="hover:bg-orange-600"
          type="submit"
        >
          <div ref={buttonRef}>{t('create')}</div>
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
          onSubmit={onToggleButton}
          bgcolor="bg-neutral-300"
          textcolor="text-black"
          hoverbgcolor="hover:bg-neutral-400"
        >
          <div>{t('have-account')}</div>
        </Button>
        <Link
          to="/"
          className="font-bold text-sm border-b-[1px] cursor-pointer border-black line-clamp-1"
        >
          {t('need-help')}
        </Link>
      </div>
    </div>
  )
}

export default RegisterBody
