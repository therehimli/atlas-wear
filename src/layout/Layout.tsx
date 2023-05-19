import Navbar from '@/components/navbar/Navbar'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-full relative px-32">
      <header>
        <Navbar />
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}

export default Layout
