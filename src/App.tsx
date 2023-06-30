import { FC, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import RegisterModal from '@/components/modals/authModals/registerModal/RegisterModal'
import LoginModal from '@/components/modals/authModals/loginModal/LoginModal'
import LanguageModal from '@/components/modals/languageModal/LanguageModal'
import Layout from '@/layout/Layout'
import MainRoutes from '@/routes/Routes'
import useToggleModalStore from './store/useModalToggle'
import useUserLogin from './store/useUserLogin'
import { userProfileHandler } from '@/api/users'
import './App.css'

enum modalToggle {
  off = 0,
  login = 1,
  register = 2,
  language = 3,
}

const App: FC = () => {
  const toggleModal = useToggleModalStore()
  const { setUserLogin } = useUserLogin()

  const { data: user, isLoading } = useQuery(
    ['users', 'products'],
    userProfileHandler
  )

  useEffect(() => {
    if (isLoading) return

    setUserLogin(user)
  }, [user])

  return (
    <div className="App relative">
      <Layout>
        {toggleModal.toggle === modalToggle.login ? (
          <LoginModal />
        ) : toggleModal.toggle === modalToggle.register ? (
          <RegisterModal />
        ) : toggleModal.toggle === modalToggle.language ? (
          <LanguageModal />
        ) : null}
        <MainRoutes />
      </Layout>
    </div>
  )
}

export default App
