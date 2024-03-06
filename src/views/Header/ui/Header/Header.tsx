import { Logo } from 'components/Icons/Logo'
import React, { PropsWithChildren } from 'react'

export const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="relative bg-background flex items-center justify-between w-full p-4 pt-6 pb-6 z-10 shadow-md">
      <div className="">
        <Logo />
      </div>
    </header>
  )
}
