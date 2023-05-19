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
  const userLogin = useUserLogin()

  useEffect(() => {
    const profileHandler = async () => {
      if (!userLogin.userLogin.email) {
        const { data } = await api.userProfile()
        console.log(data)
        userLogin.setUserLogin(data)
      }
    }
    profileHandler()
  }, [])

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
