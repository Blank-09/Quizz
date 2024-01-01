import React from 'react'

import { Link } from 'react-router-dom'
import { RxCardStack } from 'react-icons/rx'
import { NAV_LINKS } from '@/constants/navbar'

const Navbar: React.FC = () => {
  return (
    <nav className="p-4">
      <div className="container flex justify-between h-16 mx-auto">
        <Link
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <RxCardStack size="32" />{' '}
          <span className="ml-2 font-semibold text-xl">Quizz</span>
        </Link>
        <ul className="items-stretch hidden space-x-3 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="flex">
              <Link
                rel="noopener noreferrer"
                to={link.href}
                className="flex items-center px-4 -mb-1"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
