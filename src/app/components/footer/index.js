import { faInstagram, faLifeRing } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Facebook, Github, Instagram, Linkedin } from 'react-bootstrap-icons'
import { FaGithubAlt, FaInstagram, FaPiggyBank } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="absolute bottom-0 inset-x-0 bg-primary text-white flex justify-center gap-4 p-2">
      <Instagram className="hover:opacity-50 duration-300 cursor-pointer" size={20} />
      <Linkedin className="hover:opacity-50 duration-300 cursor-pointer" size={20} />
      <FaGithubAlt className="hover:opacity-50 duration-300 cursor-pointer" size={20} />
    </div>
  )
}
