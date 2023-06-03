import { FC, memo, useState } from 'react'
import { FiUser } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineSell } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

import useToggleModalStore from '@/store/useModalToggle'
import useUserLogin from '@/store/useUserLogin'
import { userLogOutHandler } from '@/api/users'
import './menu.css'

const Menu: FC = memo(() => {
  const [toggleProfile, setToggleProfile] = useState(true)
  const { toggleButton } = useToggleModalStore()
  const { userLogin, setUserLogin } = useUserLogin()
  const navigate = useNavigate()

  const logOut = async () => {
    await userLogOutHandler()
    setUserLogin({ email: '', password: '', name: '', avatar: '', _id: '' })
    localStorage.removeItem('token')
  }

  const onSellHandler = () => {
    if (userLogin.email) {
      navigate('/sell')
    } else {
      toggleButton(1)
    }
  }

  return (
    <div className="flex gap-5 items-center">
      <div
        className="flex gap-1 items-center mr-3 cursor-pointer text-[15px] hover-underline-animation"
        onClick={onSellHandler}
      >
        <MdOutlineSell cursor="pointer" size={20} />
        Sell
      </div>

      {userLogin.email ? (
        <div>
          <div
            onClick={() => setToggleProfile(!toggleProfile)}
            className="flex gap-2 items-center mr-3 cursor-pointer text-[15px] hover-underline-animation"
          >
            {userLogin.email ? (
              <div className="w-[30px] h-[30px]">
                <img
                  src={`http://localhost:4000/uploads/images/${userLogin.avatar}`}
                  alt="avatar"
                  className="rounded-full w-full h-full"
                />
              </div>
            ) : (
              <AiOutlineUser size={20} />
            )}
            Profile
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
          onClick={() => toggleButton(1)}
          className="flex gap-1 items-center mr-3 cursor-pointer hover-underline-animation"
        >
          <FiUser size={20} />
          <div className="text-[15px]">Sign in</div>
        </div>
      )}

      {userLogin.email && <div></div>}
    </div>
  )
})

export default Menu
