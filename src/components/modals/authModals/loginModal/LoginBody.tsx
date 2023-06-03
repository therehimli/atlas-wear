import { FC, useRef } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { MdAlternateEmail } from 'react-icons/md'
import { FaFacebookF } from 'react-icons/fa'
import { SlSocialVkontakte } from 'react-icons/sl'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'
import { FieldValues, useForm } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css'

import Input from '@/UI/Input'
import Button from '@/UI/Button'
import SocialButton from '@/UI/SocialButton'
import useToggleModalStore from '@/store/useModalToggle'
import useUserLogin from '@/store/useUserLogin'
import { userLoginHandler } from '@/api/users'
import { useKeyDown } from '@/hooks/useKeyDown'

interface LoginBodyProps {
  setError: (error: string) => void
}

const LoginBody: FC<LoginBodyProps> = ({ setError }) => {
  const { toggleButton } = useToggleModalStore()
  const { setUserLogin } = useUserLogin()

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

  useKeyDown(() => {
    if (buttonRef.current) {
      buttonRef.current.click()
    }
  }, ['Enter'])

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
            label="Email"
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
              Email is required.
            </p>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <p className="text-red-600 self-start text-[14px] ml-4">
              Please enter a valid email.
            </p>
          )}
        </div>
        <div className="flex flex-col gap-1 w-full">
          <Input
            register={register}
            id="password"
            label="Password"
            control={control}
            options={{
              required: 'Please enter your password',
            }}
            errors={errors}
            disabled={false}
            type="password"
            autoComplete="on"
          />
          {errors.password && errors.password.type === 'required' && (
            <p className="text-red-600 self-start text-[14px] ml-4">
              Password is required.
            </p>
          )}
        </div>
        <Button
          textcolor="text-white"
          bgcolor="bg-orange-700"
          hoverbgcolor="hover:bg-orange-600"
          type="submit"
        >
          <div ref={buttonRef}>Sign up</div>
        </Button>
      </form>

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
          bgcolor="bg-neutral-300"
          hoverbgcolor="hover:bg-neutral-400"
        >
          <div>Create an account</div>
        </Button>
        <div className="font-bold text-sm border-b-[1px] cursor-pointer border-black line-clamp-1">
          Need help?
        </div>
      </div>
    </div>
  )
}

export default LoginBody
