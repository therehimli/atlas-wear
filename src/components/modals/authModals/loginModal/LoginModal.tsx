import { FC } from 'react'
import Modal from '../Modal'
import LoginBody from './LoginBody'

interface loginModalProps {
  loginHandler: () => void
  email: string
  password: string
  setEmail: (email: string) => void
  setPassword: (password: string) => void
}

const LoginModal: FC<loginModalProps> = ({
  loginHandler,
  email,
  password,
  setEmail,
  setPassword,
}) => {
  const bodyContent = (
    <LoginBody
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      loginHandler={loginHandler}
    />
  )
  const heading = 'Sign in'

  return <Modal heading={heading} body={bodyContent} />
}

export default LoginModal
