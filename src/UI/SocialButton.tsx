import React from 'react'
import { IconType } from 'react-icons'

interface ISocialButtonProps {
  icon: IconType
}

const SocialButton: React.FC<ISocialButtonProps> = ({ icon: Icon }) => {
  return (
    <button className="rounded-full w-14 h-14 bg-neutral-200 hover:bg-neutral-300 relative">
      <Icon size={35} className="absolute top-[10px] right-[10px]" />
    </button>
  )
}

export default SocialButton
