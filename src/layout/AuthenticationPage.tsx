import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Link, Outlet } from 'react-router-dom'

import { RxCardStack } from 'react-icons/rx'

const AuthenticationPage = () => {
  return (
    <>
      <div className="container relative min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          to="/auth/register"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )}
        >
          Register
        </Link>
        <div className="relative h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <RxCardStack className="w-8 h-8 mr-2" />
            Quizz
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AuthenticationPage
