import { FC, ChangeEvent } from 'react'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import useUserLogin from '@/store/useUserLogin'
import { uploadProductPhotoHandler } from '@/api/accommodations'
import { changeAvatarHandler, userLogOutHandler } from '@/api/users'

const ProfileSettings: FC = ({}) => {
  const { userLogin, setUserLogin } = useUserLogin()
  const { name, email, avatar } = userLogin
  const client = useQueryClient()

  const { mutate: changeAvatar } = useMutation({
    mutationFn: changeAvatarHandler,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['users'] })
    },
  })

  const uploadPhotoHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    const data = new FormData()

    for (let i = 0; i < files!.length; i++) {
      data.append('photos', files![i])
    }

    const { data: filenames } = await uploadProductPhotoHandler(data)

    const newData = {
      password: userLogin.password,
      email: userLogin.email,
      name: userLogin.name,
      avatar: filenames[0],
      _id: userLogin._id,
    }

    changeAvatar(newData)
  }

  const logOut = async () => {
    await userLogOutHandler()
    setUserLogin({ email: '', password: '', name: '', _id: '', avatar: '' })
    localStorage.removeItem('token')
  }

  const avatarUrl = avatar?.includes('google')
    ? avatar
    : `http://localhost:4000/uploads/images/${avatar}`

  return (
    <div className="flex flex-col items-center gap-5 mb-5">
      <div className="relative w-[150px] h-[150px]">
        {avatar ? (
          <img src={avatarUrl} className="w-full h-full rounded-full" />
        ) : (
          <img
            src="http://localhost:4000/uploads/images/defaultuser.jpeg"
            alt=""
            className="w-full h-full rounded-full"
          />
        )}

        <label className="absolute left-[110px] top-[115px] rounded-full bg-neutral-50 p-2">
          <input
            type="file"
            className="hidden"
            multiple
            onChange={uploadPhotoHandler}
          />
          <MdOutlineModeEditOutline size={20} cursor="pointer" />
        </label>
      </div>
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
