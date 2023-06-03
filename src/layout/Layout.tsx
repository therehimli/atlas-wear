import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-full relative">
      <header className="sticky top-0 z-50 w-full">
        <Navbar />
      </header>
      <main className="flex-1 main px-20">{children}</main>
      <footer className="mt-10">
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
