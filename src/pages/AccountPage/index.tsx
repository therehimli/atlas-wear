import { Link, Navigate, useParams } from 'react-router-dom'
import { AiOutlineProfile } from 'react-icons/ai'
import { MdOutlineSell, MdFavoriteBorder } from 'react-icons/md'

import useUserLogin from '@/store/useUserLogin'
import * as api from '@/api/user'
import Accommodations from './Accommodations'
import ProfileSettings from './ProfileSettings'

const AccountPage = () => {
  const { userLogin, setUserLogin, ready } = useUserLogin()
  let { subpage } = useParams()

  if (!userLogin.email && ready) {
    return <Navigate to="/" />
  }

  const linkClasses = (type: string = 'profile') => {
    let classes = ' py-2 px-6 flex items-center gap-1 rounded-full'

    if (subpage === undefined) {
      subpage = 'profile'
    }

    if (type === subpage) {
      classes += ' text-white bg-[#FF395C]'
    } else {
      classes += ' bg-neutral-100'
    }

    return classes
  }

  const logOut = async () => {
    await api.userLogOut()
    setUserLogin({ email: '', password: '', name: '' })
  }

  return (
    <div className="flex flex-col items-center">
      <nav className="w-full flex items-center justify-center mt-8 gap-10 mb-8">
        <Link to="/account" className={linkClasses('profile')}>
          <AiOutlineProfile size={20} />
          <div>Profile settings</div>
        </Link>
        <Link className={linkClasses('favorites')} to="/account/favorites">
          <MdFavoriteBorder size={20} />
          <div>My favorites</div>
        </Link>
        <Link
          className={linkClasses('accommodations')}
          to="/account/accommodations"
        >
          <MdOutlineSell size={20} />
          <div>My accommodations</div>
        </Link>
      </nav>
      {subpage === 'profile' && <ProfileSettings logOut={logOut} />}
      {subpage === 'accommodations' && <Accommodations />}
    </div>
  )
}

export default AccountPage
