import { FC, ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ProviderProps {
  children: ReactNode
}

const Providers: FC<ProviderProps> = ({ children }) => {
  return (
    <>
      <BrowserRouter>{children}</BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default Providers
