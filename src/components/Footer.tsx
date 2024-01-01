import React from 'react'

import { Link } from 'react-router-dom'
import { RxCardStack } from 'react-icons/rx'
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from 'react-icons/fa'

const social = [
  {
    name: 'Instagram',
    href: '#',
    icon: FaInstagram,
  },
  {
    name: 'Facebook',
    href: '#',
    icon: FaFacebook,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: FaTwitter,
  },
  {
    name: 'Google',
    href: '#',
    icon: FaGoogle,
  },
]

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row">
        <div className="flex items-center mr-auto">
          <Link
            to="/"
            className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 text-primary"
          >
            <RxCardStack size="24" />
          </Link>
          <p className="text-sm text-primary">© 2023 Quizz - AspireCoders.</p>
        </div>
        <div className="flex flex-col justify-center pt-6 lg:pt-0">
          <div className="flex justify-center space-x-4">
            {social.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10  text-primary"
              >
                <item.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
