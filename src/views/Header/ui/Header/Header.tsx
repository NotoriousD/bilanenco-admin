import { Logo } from 'components/Icons/Logo'
import { Button } from 'components/ui'
import { CircleUser } from 'lucide-react'
import React, { PropsWithChildren, useContext } from 'react'
import { CognitoAuthContext } from 'services/auth'

export const Header: React.FC<PropsWithChildren> = ({ children }) => {
  const authContext = useContext(CognitoAuthContext)
  return (
    <header className="relative bg-background flex items-center justify-between w-full px-4 py-2 z-10 shadow-md">
      <div className="">
        <Logo />
      </div>
      {authContext && (
        <div className="flex justify-end items-center text-primary">
          <CircleUser className="mr-2" />
          <Button
            variant={'link'}
            onClick={authContext.signOut}
            className="p-0"
          >
            Sign Out
          </Button>
        </div>
      )}
    </header>
  )
}
