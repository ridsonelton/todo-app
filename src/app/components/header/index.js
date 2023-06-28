'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret, faHippo } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Modal from '../modal'

export default function Header() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className="sticky bg-secondary text-quaternary top-0 inset-x-0 border-solid border-quaternary border-b-4">
        <div className="p-2 mx-3 flex justify-between md:container md:mx-auto">
          <div className="flex gap-2">
            <FontAwesomeIcon className="h-6 sm:h-8  my-auto text-red-900" icon={faHippo} />
            <h1 className="text-3xl sm:text-5xl font-semibold select-none">TODO LIST APP</h1>
          </div>
          <FontAwesomeIcon onClick={() => setOpenModal(true)} className="h-6 sm:h-8 my-auto duration-300 hover:opacity-70 cursor-pointer" icon={faUserSecret} />
        </div>
      </div>
    </>
  )
}
