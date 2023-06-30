import { FC, memo } from 'react'
import { FiUser } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineSell } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import useToggleModalStore from '@/store/useModalToggle'
import useUserLogin from '@/store/useUserLogin'

const Menu: FC = memo(() => {
  const { toggleButton } = useToggleModalStore()
  const { userLogin } = useUserLogin()
  const { avatar, email } = userLogin
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onSellHandler = () => {
    if (userLogin.email) {
      navigate('/sell')
    } else {
      toggleButton(1)
    }
  }

  const avatarUrl = avatar?.includes('google')
    ? avatar
    : `http://localhost:4000/uploads/images/${avatar}`

  return (
    <div className="flex gap-5 items-center">
      <div
        className="flex gap-1 items-center mr-3 cursor-pointer text-[15px] 
        "
        onClick={onSellHandler}
      >
        <MdOutlineSell cursor="pointer" size={20} />
        {t('menu-sell')}
      </div>

      {email ? (
        <Link
          to="/account"
          className="flex gap-2 items-center mr-3 cursor-pointer text-[15px] 
            "
        >
          {email ? (
            <div className="w-[30px] h-[30px]">
              <img
                src={avatarUrl}
                alt="avatar"
                className="rounded-full w-full h-full"
              />
            </div>
          ) : (
            <AiOutlineUser size={20} />
          )}
          {t('menu-profile')}
        </Link>
      ) : (
        <div
          onClick={() => toggleButton(1)}
          className="flex gap-1 items-center mr-3 cursor-pointer 
          "
        >
          <FiUser size={20} />
          <div className="text-[15px]">{t('menu-signin')}</div>
        </div>
      )}

      {email && <div></div>}
    </div>
  )
})

export default Menu
