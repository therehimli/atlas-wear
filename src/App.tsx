import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { AxiosError } from 'axios'

import RegisterModal from '@/components/modals/authModals/registerModal/RegisterModal'
import LoginModal from '@/components/modals/authModals/loginModal/LoginModal'
import LanguageModal from '@/components/modals/languageModal/LanguageModal'
import Layout from '@/layout/Layout'
import MainRoutes from '@/routes/Routes'
import useToggleModalStore from '@/store/useModalToggle'
import useUserInfo from '@/store/useUserInfo'
import useLocalStorage from '@/hooks/useLocalStorage'
import * as api from '@/api/user'
import './App.css'

enum modalToggle {
  off = 0,
  login = 1,
  register = 2,
  language = 3,
}

function App() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [storedAuth, setStoredAuth] = useLocalStorage('auth', '')

  const toggleModal = useToggleModalStore()
  const userInfo = useUserInfo()

  const loginHandler = async () => {
    try {
      const { data } = await api.userLogin(email, password)
      setStoredAuth(data)

      setEmail('')
      setPassword('')
      toggleModal.toggleButton(0)
      toast.success('Log in successfully')
    } catch (error) {
      if (error instanceof AxiosError) toast.error(error?.response?.data)
    }
  }

  useEffect(() => {
    userInfo.setUserInfo(storedAuth)
  }, [storedAuth])

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
