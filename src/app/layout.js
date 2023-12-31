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
    <html lang="en" >
      <body suppressHydrationWarning={true} className='bg-quinary'>
        <AuthProvider>
          <Header/>
          <div>

        {children}
          </div>
        <Footer/>
        </AuthProvider>
        </body>
    </html>
  )
}
