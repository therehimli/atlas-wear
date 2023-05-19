import { FC, ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'

interface ProvidersProps {
  children: ReactNode
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <BrowserRouter>{children}</BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default Providers
