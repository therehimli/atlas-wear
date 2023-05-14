import RegisterModal from './components/modals/authModals/registerModal/RegisterModal'
import Layout from './layout/Layout'
import MainRoutes from './routes/Routes'
import LoginModal from './components/modals/authModals/loginModal/LoginModal'
import LanguageModal from './components/modals/languageModal/LanguageModal'
import useToggleModalStore from '@/store/useModalToggle'
import './App.css'

enum modalToggle {
  off = 0,
  login = 1,
  register = 2,
  language = 3,
}
function App() {
  const toggleModal = useToggleModalStore()

  return (
    <div className="App relative">
      <Layout>
        {toggleModal.toggle === modalToggle.login ? (
          <LoginModal />
        ) : toggleModal.toggle === modalToggle.register ? (
          <RegisterModal />
        ) : toggleModal.toggle === modalToggle.language ? (
          <LanguageModal />
        ) : null}
        <MainRoutes />
      </Layout>
    </div>
  )
}

export default App
