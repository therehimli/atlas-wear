import { FC } from 'react'
import { RxAvatar } from 'react-icons/rx'
import { MdOutlineModeEditOutline } from 'react-icons/md'

import Button from '@/UI/Button'
import useUserLogin from '@/store/useUserLogin'

interface ProfileSettingsProps {
  logOut: () => void
}

const ProfileSettings: FC<ProfileSettingsProps> = ({ logOut }) => {
  const { userLogin } = useUserLogin()
  const { name, email } = userLogin

  return (
    <div className="flex flex-col items-center gap-5 mb-5">
      <RxAvatar size={150} className="" />

      <div className="grid grid-cols-2 gap-5">
        {[name, email].map((info) => (
          <div className="flex items-center justify-between gap-3  border-[0.3px] border-solid border-neutral-400 rounded-full  p-3">
            <div className="flex items-center gap-1">
              <div>Your name: </div>
              <span className="font-semibold">{info}</span>
            </div>

            <MdOutlineModeEditOutline size={20} cursor="pointer" />
          </div>
        ))}
      </div>
      <div className="w-[300px]">
        <Button
          bgcolor="bg-[#e12649]"
          hoverbgcolor="hover:bg-[#ef3356]"
          textcolor="text-white"
          onSubmit={logOut}
        >
          <div>Log out</div>
        </Button>
      </div>
      <div className="flex items-center gap-5">
        <div className="underline font-bold cursor-pointer text-[15px]">
          Change password
        </div>
        <div className="underline font-bold cursor-pointer text-[15px]">
          Delete account
        </div>
      </div>
    </div>
  )
}

export default ProfileSettings
