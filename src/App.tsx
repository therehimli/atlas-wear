import RegisterModal from '@/components/modals/authModals/registerModal/RegisterModal'
import LoginModal from '@/components/modals/authModals/loginModal/LoginModal'
import LanguageModal from '@/components/modals/languageModal/LanguageModal'
import Layout from '@/layout/Layout'
import MainRoutes from '@/routes/Routes'

import './App.css'
import useToggleModalStore from './store/useModalToggle'
import { FC } from 'react'

enum modalToggle {
  off = 0,
  login = 1,
  register = 2,
  language = 3,
}

interface AppProps {
  loginHandler: () => void
  email: string
  password: string
  setEmail: (email: string) => void
  setPassword: (password: string) => void
}

const App: FC<AppProps> = ({
  loginHandler,
  email,
  password,
  setEmail,
  setPassword,
}) => {
  const toggleModal = useToggleModalStore()

  return (
    <div className="App relative">
      <Layout>
        {toggleModal.toggle === modalToggle.login ? (
          <LoginModal
            setPassword={setPassword}
            password={password}
            setEmail={setEmail}
            email={email}
            loginHandler={loginHandler}
          />
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
