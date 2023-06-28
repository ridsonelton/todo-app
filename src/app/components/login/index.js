'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret, faHippo } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from 'react'
import { AuthContext, useAuth } from '@/app/context/authContext'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLogginIn, setIsLogginIn] = useState(true)

  const { login, signup, currentUser } = useAuth()

  async function submitHandler() {
    if (!email || !password) {
      setError('Please enter Email and password')
      return
    }
    if (isLogginIn) {
      try {
        await login(email, password)
      } catch (err) {
        setError('Incorrect email or password')
      }
      return
    }
    await signup(email, password)
  }

  return (
    <div className="flex flex-col flex-1 min-h-[80vh] justify-center items-center gap-4 sm:gap-2">
      <h1 className="text-3xl font-extrabold sm:text-4xl select-none uppercase">{isLogginIn ? 'login' : 'register'}</h1>
      {error && <div className="w-full max-w-[40ch] font-semibold text-rose-500 border border-rose-400 border-solid p-2 text-center">{error}</div>}
      <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email Adress"
        className="outline-none p-2 w-full max-w-[40ch] duration-500 border-b-2 border-solid border-white focus:border-ternary"
      />
      <input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="outline-none p-2 w-full max-w-[40ch] duration-500 border-b-2 border-solid border-white focus:border-ternary"
      />
      <button
        onClick={submitHandler}
        className="w-full max-w-[40ch] border border-solid border-ternary py-1 relative after:absolute after:top-0 after:right-full after:bg-ternary after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-white"
      >
        <h2 className="relative z-20">SUBMIT</h2>
      </button>
      <h2 onClick={() => setIsLogginIn(!isLogginIn)} className="cursor-pointer font-semibold duration-300 hover:scale-110">
        {isLogginIn ? 'Register' : 'Login'}
      </h2>
    </div>
  )
}
