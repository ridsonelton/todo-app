import Footer from './components/footer'
import Header from './components/header'
import { AuthProvider } from './context/authContext'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="min-h-screen relative  bg-quinary text-quaternary">
            <Header />
            <main className="flex-1 flex flex-col p-4">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
