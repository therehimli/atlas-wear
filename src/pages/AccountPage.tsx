import { Link, useNavigate } from 'react-router-dom'

import useUserLogin from '@/store/useUserLogin'

const AccountPage = () => {
  const { userLogin } = useUserLogin()
  const navigate = useNavigate()

  if (!userLogin.email) {
    navigate('/')
  }

  return (
    <div className="flex justify-center items-center gap-32">
      <Link
        to="/account"
        className="p-3 bg-[#FF395C] font-semibold text-[15px] text-white rounded-full"
      >
        Profile settings
      </Link>
      <Link
        to="/account/favorites"
        className="p-3 font-semibold text-[15px]  rounded-full"
      >
        My favorites
      </Link>
      <Link
        to="/account/accommodations"
        className="p-3 font-semibold text-[15px]  rounded-full"
      >
        my accommodations
      </Link>
    </div>
  )
}

export default AccountPage
