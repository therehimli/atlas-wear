import React from 'react'

import Modal from '../Modal'
import RegisterBody from './RegisterBody'

const RegisterModal = () => {
  const bodyContent = <RegisterBody />
  const heading = 'Create account'

  return <Modal heading={heading} body={bodyContent} />
}

export default RegisterModal
