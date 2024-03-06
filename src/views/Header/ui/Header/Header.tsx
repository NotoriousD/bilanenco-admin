import { Authenticator } from '@aws-amplify/ui-react'
import { Logo } from 'components/Icons/Logo'
import { Button } from 'components/ui'
import { CircleUser } from 'lucide-react'
import React, { PropsWithChildren } from 'react'

export const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="relative bg-background flex items-center justify-between w-full px-4 py-2 z-10 shadow-md">
      <div className="">
        <Logo />
      </div>{' '}
      <Authenticator>
        {({ signOut, user }) => (
          <>
            <div className="flex justify-end items-center">
              <CircleUser className="text-primary mr-2" />
              <Button variant={'link'} onClick={signOut} className="p-0">
                Sign Out
              </Button>
            </div>
          </>
        )}
      </Authenticator>
    </header>
  )
}
