import { FC } from 'react'
import Modal from '../Modal'
import LoginBody from './LoginBody'

const LoginModal: FC = () => {
  const bodyContent = <LoginBody />
  const heading = 'Sign in'

  return <Modal heading={heading} body={bodyContent} />
}

export default LoginModal
