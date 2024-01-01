import Contacts from '@/components/Contacts'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TypingEffect from '@/components/TypingEffect'

import { FaChevronDown } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="space-y-12">
      <Navbar />

      <section>
        <div className="container flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-32 xl:max-w-5xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl">
            Welcome to Quizz!
            <br />
            <TypingEffect
              className="text-lime-500"
              strings={[
                'Explore Diverse Topics',
                'Challenge Yourself',
                'Learn Something New',
              ]}
            />
            .
          </h1>
          <p className="px-8 mt-8 mb-12 text-lg">
            Test your knowledge and have a blast with our interactive quizzes.
            Are you ready to embark on a journey of fun and discovery? Let the
            quiz excitement begin! 🚀
          </p>
          <div className="flex flex-wrap justify-center">
            <Link
              to="/auth/register"
              className="px-8 py-3 m-2 text-lg font-semibold rounded dark:text-gray-900 dark:bg-lime-400 bg-lime-400"
            >
              Get started
            </Link>

            <a
              href="#down"
              className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700 border-gray-700"
            >
              Learn more
            </a>
          </div>

          <div className="pt-24">
            <a href={'#down'}>
              <FaChevronDown />
            </a>
          </div>
        </div>
      </section>

      <section id="down" className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid justify-center grid-cols-2 mx-auto text-center lg:grid-cols-3">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">50+</p>
            <p className="text-sm sm:text-base">Clients</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">89K</p>
            <p className="text-sm sm:text-base">Followers on social media</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">3</p>
            <p className="text-sm sm:text-base">Published books</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">8</p>
            <p className="text-sm sm:text-base">TED talks</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">22</p>
            <p className="text-sm sm:text-base">Years of experience</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leadi lg:text-6xl">10+</p>
            <p className="text-sm sm:text-base">Workshops</p>
          </div>
        </div>
      </section>

      <Features />
      <Contacts />
      <Footer />
    </div>
  )
}
