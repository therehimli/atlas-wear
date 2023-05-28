import { FC } from 'react'
import { RxAvatar } from 'react-icons/rx'
import { MdOutlineModeEditOutline } from 'react-icons/md'

import useUserLogin from '@/store/useUserLogin'

interface ProfileSettingsProps {
  logOut: () => void
}

const ProfileSettings: FC<ProfileSettingsProps> = ({ logOut }) => {
  const { userLogin } = useUserLogin()
  const { name, email } = userLogin

  return (
    <div className="flex flex-col items-center gap-5 mb-5">
      <RxAvatar size={150} />

      <div className="grid grid-cols-2 gap-5">
        <div className="flex items-center justify-between gap-3 border-[0.3px] border-solid border-neutral-400 p-3 rounded-full">
          <div className="flex items-center gap-1">
            <div>Имя: </div>
            <span className="font-semibold">{name}</span>
          </div>
          <MdOutlineModeEditOutline size={20} cursor="pointer" />
        </div>
        <div className="flex items-center justify-between gap-3 border-[0.3px] border-solid border-neutral-400 p-3 rounded-full">
          <div className="flex items-center gap-1">
            <div>Почта: </div>
            <span className="font-semibold">{email}</span>
          </div>
          <MdOutlineModeEditOutline size={20} cursor="pointer" />
        </div>
      </div>
      <button
        onClick={logOut}
        className="relative inline-flex w-[300px] items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-500 rounded-full shadow-md group "
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-rdd duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
          Выйти
        </span>
        <span className="relative invisible">Выйти</span>
      </button>
      <div className="flex items-center gap-5">
        <div className="underline font-bold cursor-pointer text-[15px]">
          Поменять пароль
        </div>
        <div className="underline font-bold cursor-pointer text-[15px]">
          Удалить аккаунт
        </div>
      </div>
    </div>
  )
}

export default ProfileSettings
