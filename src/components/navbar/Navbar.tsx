import { RxHamburgerMenu } from 'react-icons/rx'

import Logo from './Logo/Logo'
import Language from './Language/Language'
import Search from './Search/Search'
import Menu from './Menu/Menu'
import useSearchModalToggle from '@/store/useSearchModalToggle'
import SearchModal from '../modals/searchModal/SearchModal'

const Navbar = () => {
  const useSearchModal = useSearchModalToggle()

  return (
    <nav className="flex items-center bg-white mb-10">
      <div className="w-full relative">
        <div className="hidden sm:flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Logo />
            <Language />
            <Search />
          </div>
          <div className="ml-2">
            <Menu />
          </div>
        </div>
        <RxHamburgerMenu size={30} className="sm:hidden cursor-pointer" />
        <div className="hidden">
          {useSearchModal.toggle ? <SearchModal /> : null}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
