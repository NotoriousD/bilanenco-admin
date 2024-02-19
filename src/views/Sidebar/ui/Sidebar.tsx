import React from 'react'
import { Navigation } from 'views/Navigation'
import Logo from 'shared/assets/logo.svg'

export const Sidebar: React.FC = () => {
  return (
    <aside className="bg-primary w-1/6 min-h-screen  border-r-black sticky top-0">
      <div className="p-8 pt-6 pb-6">
        <img src={Logo} alt="" />
      </div>
      <Navigation />
    </aside>
  )
}
