import { useState } from 'react'

import Modal from '../Modal'
import RegisterBody from './RegisterBody'
import { useTranslation } from 'react-i18next'

const RegisterModal = () => {
  const [error, setError] = useState('')
  const { t } = useTranslation()

  const bodyContent = <RegisterBody setError={setError} />

  const heading = (
    <>
      <div className="text-[26px] font-bold">{t('create-account')}</div>
      <p className="text-red-600 text-[14px] ml-2 mt-3 w-[140px]">{error}</p>
    </>
  )

  return <Modal heading={heading} body={bodyContent} />
}

export default RegisterModal
