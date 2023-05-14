import React from 'react'

import Modal from '../Modal'
import LoginBody from './LoginBody'

const LoginModal = () => {
  const bodyContent = <LoginBody />
  const heading = 'Sign in'

  return <Modal heading={heading} body={bodyContent} />
}

export default LoginModal
