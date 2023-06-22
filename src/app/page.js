'use client'

import Login from './components/login'
import UserDashboard from './components/userDashboard'
import { useAuth } from './context/authContext'

export default function Home() {
  const { currentUser } = useAuth()
  return (
    <main className="container mx-auto">
      {!currentUser && <Login />}
      {currentUser && <UserDashboard />}
    </main>
  )
}
