import { GrClose } from 'react-icons/gr'
import React, { useEffect, useState } from 'react'
import { createPortal, render,ReactDom } from 'react-dom'
import { useAuth } from '@/app/context/authContext'

export default function Modal(props) {
  const { setOpenModal } = props
  const [_document, set_document] = useState(null)
  const {logout} = useAuth()
  useEffect(() => {
    set_document(document)
  }, [])

  if (!_document) {
    return null
  }

  return (
    <>
    { createPortal(   
    <div className="fixed inset-0 bg-white flex flex-col text-lg sm:text-xl">
      <div className="flex items-center justify-between border-b border-solid border-primary p-4">
        <h1 className='font-extrabold text-2xl sm:text-5xl'>Menu</h1>
        <GrClose className='cursor-pointer duration-300 hover:rotate-90 text-xl sm:text-3xl' onClick={() => setOpenModal(false)} />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <h2 onClick={()=>{
          logout()
          setOpenModal(false)
        }} className='select-none hover:pl-2 duration-300'>Logout</h2>
      </div>
    </div>
  ,_document.body)}
  </>
  )
}

// export const ModalNotification = () => {
//   const [_document, set_document] = useState(null)

//   useEffect(() => {
//     set_document(document)
//   }, [])

//   if (!_document) {
//     return null
//   }
//   const container = _document.getElementById('portal')
//   return render(<Modal />, container)
// }
