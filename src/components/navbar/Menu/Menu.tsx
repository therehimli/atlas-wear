import { FC, memo } from 'react'
import { FiUser } from 'react-icons/fi'
import { BsCart } from 'react-icons/bs'
import { RxAvatar } from 'react-icons/rx'
import { BiShoppingBag } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import useToggleModalStore from '@/store/useModalToggle'
import useUserLogin from '@/store/useUserLogin'

const Menu: FC = memo(() => {
  const toggleModal = useToggleModalStore()
  const { userLogin } = useUserLogin()

  return (
    <div className="flex gap-5 items-center">
      {userLogin.email ? (
        <div className="flex items-center font-semibold p-1 text-[12px] border-solid border-[1px] border-neutral-500 rounded-xl">
          <RxAvatar size={20} />
          <div className="ml-[3px]">{userLogin.email}</div>
        </div>
      ) : (
        <div
          onClick={() => toggleModal.toggleButton(1)}
          className="flex flex-col items-center mr-3 cursor-pointer"
        >
          <FiUser size={25} />
          <div className="text-[13px]">Sign in</div>
        </div>
      )}
      {userLogin.email && (
        <button
          className="rounded-md font-semibold text-white cursor-pointer p-1 text-[13px]
         bg-red-600"
        >
          Log out
        </button>
      )}
      <Link to="cart">
        <div className="flex flex-col items-center text-[12px] cursor-pointer">
          <BsCart size={20} />
          <div className="text-[13px]">Cart</div>
        </div>
      </Link>

      {userLogin.email && (
        <Link to="/sell">
          <div className="flex flex-col items-center text-[13px] cursor-pointer">
            <BiShoppingBag size={20} />
            <div>Sell</div>
          </div>
        </Link>
      )}
    </div>
  )
})

export default Menu
