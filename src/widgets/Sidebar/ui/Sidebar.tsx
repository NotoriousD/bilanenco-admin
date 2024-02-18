import React from 'react'
import { Navigation } from 'features/Navigation'
import Logo from 'shared/assets/logo.svg'

export const Sidebar: React.FC = () => {
  return (
    <aside className="bg-primary w-1/5 min-h-screen  border-r-black">
      <div className="p-8 pt-6 pb-6 border-b-[1px]">
        <img src={Logo} alt="" />
      </div>
      <Navigation />
    </aside>
  )
}
