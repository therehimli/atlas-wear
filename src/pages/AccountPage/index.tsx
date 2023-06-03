import { Link, Navigate, useParams } from 'react-router-dom'
import { AiOutlineProfile } from 'react-icons/ai'
import { MdOutlineSell, MdFavoriteBorder } from 'react-icons/md'

import Accommodations from './components/Accommodations'
import ProfileSettings from './components/ProfileSettings'
import Favorites from './components/Favorites'

const AccountPage = () => {
  let { subpage } = useParams()

  const linkClasses = (type: string = 'profile') => {
    let classes = 'py-2 px-6 flex items-center rounded-full '

    if (subpage === undefined) {
      subpage = 'profile'
    }

    if (type === subpage) {
      classes += ' text-white bg-[#FF395C]'
    } else {
      classes += ' border-neutral-300 border-[1px] border-solid'
    }

    return classes
  }

  if (!localStorage.getItem('token')) return <Navigate to="/" />

  return (
    <div className="flex flex-col items-center">
      <nav className="w-full flex items-center justify-center mt-8 gap-10 mb-8">
        <Link to="/account" className={linkClasses('profile')}>
          <AiOutlineProfile size={20} />
          <div className="ml-2">Профиль</div>
        </Link>
        <Link className={linkClasses('favorites')} to="/account/favorites">
          <MdFavoriteBorder size={20} />
          <div className="ml-2">Мои избранные</div>
        </Link>
        <Link
          className={linkClasses('accommodations')}
          to="/account/accommodations"
        >
          <MdOutlineSell size={20} />
          <div className="ml-2">Мои объявления</div>
        </Link>
      </nav>
      {subpage === 'profile' && <ProfileSettings />}
      {subpage === 'accommodations' && <Accommodations />}
      {subpage === 'favorites' && <Favorites />}
    </div>
  )
}

export default AccountPage
