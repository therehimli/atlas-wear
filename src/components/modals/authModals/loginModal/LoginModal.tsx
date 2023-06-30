import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Modal from '../Modal'
import LoginBody from './LoginBody'

const LoginModal: FC = () => {
  const [error, setError] = useState('')
  const { t } = useTranslation()

  const bodyContent = <LoginBody setError={setError} />

  const heading = (
    <>
      <div className="text-[26px] font-bold ">{t('login-signup')}</div>
      <p className="text-red-600 text-[14px] ml-2 mt-3 w-[258px]">{error}</p>
    </>
  )

  return <Modal heading={heading} body={bodyContent} />
}

export default LoginModal
