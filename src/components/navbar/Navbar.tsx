import { RxHamburgerMenu } from 'react-icons/rx'

import Logo from './Logo/Logo'
import Language from './Language/Language'
import Search from './Search/Search'
import Menu from './Menu/Menu'

const Navbar = () => {
  return (
    <header className="flex items-center bg-white p-2">
      <nav className="w-full relative">
        <div className="hidden sm:flex justify-between items-center">
          <div className="flex items-center gap-5">
            <Logo />
            <Language />
            <Search />
          </div>
          <div className="ml-2">
            <Menu />
          </div>
        </div>
        <RxHamburgerMenu size={30} className="sm:hidden cursor-pointer" />
        <div className="hidden"></div>
      </nav>
    </header>
  )
}

export default Navbar
