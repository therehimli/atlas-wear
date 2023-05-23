import { FC, useEffect } from 'react'

import RegisterModal from '@/components/modals/authModals/registerModal/RegisterModal'
import LoginModal from '@/components/modals/authModals/loginModal/LoginModal'
import LanguageModal from '@/components/modals/languageModal/LanguageModal'
import Layout from '@/layout/Layout'
import MainRoutes from '@/routes/Routes'
import useToggleModalStore from './store/useModalToggle'
import useUserLogin from './store/useUserLogin'
import * as api from '@/api/user'
import './App.css'

enum modalToggle {
  off = 0,
  login = 1,
  register = 2,
  language = 3,
}

const App: FC = () => {
  const toggleModal = useToggleModalStore()
  const { userLogin, setUserLogin, ready, setReady } = useUserLogin()

  useEffect(() => {
    const profileHandler = async () => {
      try {
        if (!userLogin.email) {
          const { data } = await api.userProfile()

          setUserLogin(data)
          setReady(true)
        }
      } catch (error) {}
    }
    profileHandler()
  }, [])

  return (
    <div className="App mb-5 relative">
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
