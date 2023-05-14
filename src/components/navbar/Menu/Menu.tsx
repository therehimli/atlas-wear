import { FC, memo } from 'react'
import { FiUser } from 'react-icons/fi'
import { BsCart } from 'react-icons/bs'
import { RxAvatar } from 'react-icons/rx'
import { BiShoppingBag } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import useToggleModalStore from '@/store/useModalToggle'

const Menu: FC = memo(() => {
  const toggleModal = useToggleModalStore()

  return (
    <div className="flex gap-10 items-center">
      {false ? (
        <div className="flex gap-2 items-center p-2 border-solid border-[1px] border-neutral-500 rounded-2xl">
          <RxAvatar size={25} />
          <div className="font-bold">Email</div>
        </div>
      ) : (
        <div
          onClick={() => toggleModal.toggleButton(1)}
          className="flex flex-col items-center cursor-pointer"
        >
          <FiUser size={25} />
          <div className="text-[13px]">Sign in</div>
        </div>
      )}
      {false && (
        <button
          className="font-bold rounded-md text-white cursor-pointer px-2 y
        py-1 bg-red-600"
        >
          Log out
        </button>
      )}
      <Link to="cart">
        <div className="flex flex-col items-center cursor-pointer">
          <BsCart size={25} />
          <div className="text-[13px]">Cart</div>
        </div>
      </Link>

      {false && (
        <Link to="/sell">
          <div className="flex flex-col items-center cursor-pointe w-1">
            <BiShoppingBag size={25} />
            <div className="text-[13px]">Sell something</div>
          </div>
        </Link>
      )}
    </div>
  )
})

export default Menu
