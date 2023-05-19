import { FC, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { AxiosError } from 'axios'
import 'react-toastify/dist/ReactToastify.css'

import App from '@/App'
import useLocalStorage from '@/hooks/useLocalStorage'
import useToggleModalStore from '@/store/useModalToggle'
import useUserLogin from '@/store/useUserInfo'
import * as api from '@/api/user'

const Providers: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [storedLogin, setStoredLogin] = useLocalStorage('auth', '')

  const toggleModal = useToggleModalStore()
  const userLogin = useUserLogin()

  const loginHandler = async () => {
    try {
      const { data } = await api.userLogin(email, password)
      setStoredLogin(data)

      setEmail('')
      setPassword('')
      toggleModal.toggleButton(0)
      toast.success('Log in successfully')
    } catch (error) {
      if (error instanceof AxiosError) toast.error(error?.response?.data)
    }
  }

  useEffect(() => {
    userLogin.setUserLogin(storedLogin)
  }, [storedLogin])

  return (
    <>
      <BrowserRouter>
        <App
          setPassword={setPassword}
          password={password}
          setEmail={setEmail}
          email={email}
          loginHandler={loginHandler}
        />
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default Providers
