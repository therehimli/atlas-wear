import { memo } from 'react'
import { GrLanguage } from 'react-icons/gr'

import useToggleModalStore from '@/store/useModalToggle'
import useCurrencyToggle from '@/store/useCurrencyToggle'

const Language = memo(() => {
  const toggleModal = useToggleModalStore()
  const { currency } = useCurrencyToggle()

  return (
    <div
      onClick={() => toggleModal.toggleButton(3)}
      className="flex items-center gap-3 hover:bg-neutral-200 cursor-pointer rounded-full px-3 py-1"
    >
      <GrLanguage className="cursor-pointer" />
      <div className="flex flex-col justify-center">
        <div className="text-[14px] font-bold">
          {localStorage.getItem('i18nextLng') === 'en' ? 'English' : 'Русский'}
        </div>
        <div className="text-[12px]">
          {currency === '' || currency === 'rub' ? 'RUB' : 'USD'}.
        </div>
      </div>
    </div>
  )
})

export default Language
