import { FC, memo, useState } from 'react'
import { FiUser } from 'react-icons/fi'
import { BsCart } from 'react-icons/bs'
import { RxAvatar } from 'react-icons/rx'
import { AiOutlineUser } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineSell } from 'react-icons/md'

import useToggleModalStore from '@/store/useModalToggle'
import useUserLogin from '@/store/useUserLogin'

const Menu: FC = memo(() => {
  const [toggleProfile, setToggleProfile] = useState(true)
  const navigate = useNavigate()
  const toggleModal = useToggleModalStore()
  const { userLogin, setUserLogin } = useUserLogin()

  const logOut = () => {
    setUserLogin({ email: '', password: '' })
    setToggleProfile(true)
  }

  const onSellHandler = () => {
    if (userLogin.email) {
      navigate('/sell')
    } else {
      toggleModal.toggleButton(1)
    }
  }

  const onOrdersHandler = () => {
    if (userLogin.email) {
      navigate('/orders')
    } else {
      toggleModal.toggleButton(1)
    }
  }

  return (
    <div className="flex gap-5 items-center">
      <Link
        className="flex flex-col items-center mr-3 cursor-pointer text-[13px]"
        to="/cart"
      >
        <BsCart size={27} />
        <p>Cart</p>
      </Link>

      <div
        className="flex flex-col items-center mr-3 cursor-pointer text-[13px]"
        onClick={onSellHandler}
      >
        <MdOutlineSell cursor="pointer" size={27} />
        <p>Sell</p>
      </div>

      <div
        className="flex flex-col items-center mr-3 cursor-pointer text-[13px]"
        onClick={onOrdersHandler}
      >
        <BiShoppingBag cursor="pointer" size={27} />
        <p>Orders</p>
      </div>

      {userLogin.email ? (
        <div className="">
          <div
            onClick={() => setToggleProfile(!toggleProfile)}
            className="flex flex-col items-center mr-3 cursor-pointer text-[13px]"
          >
            <AiOutlineUser size={27} />
            profile
          </div>
          <ul
            className={`${
              toggleProfile ? 'hidden' : 'block'
            } rounded-md border-[1px] border-slate-300 border-solid flex flex-col items-center absolute mt-1 right-4`}
          >
            <li>
              <Link
                to="/account"
                onClick={() => setToggleProfile(true)}
                className="flex items-center py-2 px-3 hover:bg-neutral-100 text-[15px] "
              >
                Profile
              </Link>
            </li>
            <li
              className=" hover:bg-neutral-100 p-2 cursor-pointer text-[15px] text-red-600"
              onClick={logOut}
            >
              Log out
            </li>
          </ul>
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

      {userLogin.email && <div></div>}
    </div>
  )
})

export default Menu
