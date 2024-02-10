import React, { PropsWithChildren } from 'react'
import Logo from 'shared/assets/logo.svg'

export const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="flex items-center justify-between w-full p-4 pt-6 pb-6 bg-primary">
      <div>
        <img src={Logo} alt="" />
      </div>
    </header>
  )
}
