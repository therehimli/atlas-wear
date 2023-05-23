import { FC, useState } from 'react'
import Modal from '../Modal'
import LoginBody from './LoginBody'

const LoginModal: FC = () => {
  const [error, setError] = useState('')

  const bodyContent = <LoginBody setError={setError} />

  const heading = (
    <>
      <div className="text-[32px] font-bold ">Sign up</div>
      <p className="text-red-600 text-[14px] ml-2 mt-3 w-[258px]">{error}</p>
    </>
  )

  return <Modal heading={heading} body={bodyContent} />
}

export default LoginModal
