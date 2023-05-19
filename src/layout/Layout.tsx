import { useEffect } from 'react'
import Navbar from '@/components/navbar/Navbar'

import useUserInfo from '@/store/useUserInfo'
import useLocalStorage from '@/hooks/useLocalStorage'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const [storedAuth, setStoredAuth] = useLocalStorage('auth', '')
  const userInfoState = useUserInfo()

  return (
    <div className="flex flex-col h-full relative px-32">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default Layout
