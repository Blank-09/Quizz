import React from 'react'

import { ImSpinner8 } from 'react-icons/im'
import { FaGithub } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import supabase from '@/lib/supabase'

const Register: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    const form = new FormData(event.currentTarget! as HTMLFormElement)
    const formData = Object.fromEntries(form.entries())

    console.log(formData)

    setIsLoading(true)

    const { data, error } = await supabase.auth.signUp({
      email: formData.email.toString(),
      password: formData.password.toString(),
      options: {
        data: {
          firstname: formData.firstname.toString(),
          lastname: formData.lastname.toString(),
        },
      },
    })

    if (error) console.log(error)

    console.log(data)

    setIsLoading(false)
  }

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your details below to create your account
        </p>
      </div>
      <div className="grid gap-6">
        <form onSubmit={onSubmit}>
          <div className="grid gap-2 grid-cols-6">
            <div className="grid gap-2 col-span-3">
              <Label className="sr-only" htmlFor="firstname">
                Firstname
              </Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="First name"
                type="text"
                autoCapitalize="none"
                autoComplete="firstname"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2 col-span-3">
              <Label className="sr-only" htmlFor="lastname">
                Lastname
              </Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="Last name"
                type="text"
                autoCapitalize="none"
                autoComplete="lastname"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2 col-span-6">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2 col-span-6">
              <Label className="sr-only" htmlFor="password">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                placeholder="password"
                type="password"
                autoCapitalize="none"
                autoComplete="password"
                autoCorrect="off"
                disabled={isLoading}
              />
            </div>
            <Button className="col-span-6" disabled={isLoading}>
              {isLoading && (
                <ImSpinner8 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In with Email
            </Button>
          </div>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button variant="outline" type="button" disabled={isLoading}>
          {isLoading ? (
            <ImSpinner8 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <FaGithub className="mr-2 h-4 w-4" />
          )}{' '}
          Github
        </Button>
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our{' '}
        <Link
          to="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link
          to="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  )
}

export default Register
