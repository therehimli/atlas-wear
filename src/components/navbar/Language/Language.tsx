import { memo } from 'react'
import { GrLanguage } from 'react-icons/gr'

import useToggleModalStore from '@/store/useModalToggle'

const Language = memo(() => {
  const toggleModal = useToggleModalStore()

  return (
    <div
      onClick={() => toggleModal.toggleButton(3)}
      className="flex items-center gap-3 hover:bg-neutral-200 cursor-pointer rounded-full px-3 py-1"
    >
      <GrLanguage className="cursor-pointer" />
      <div className="flex flex-col justify-center">
        <div className="text-[14px] font-bold">England</div>
        <div className="text-[12px]">english, euro.</div>
      </div>
    </div>
  )
})

export default Language
